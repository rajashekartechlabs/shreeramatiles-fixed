import { NextResponse } from 'next/server'
import { google } from 'googleapis'
import { FALLBACK_PRODUCTS, Product } from '@/lib/products-data'

// Cache revalidation interval: 300 seconds (5 minutes)
export const revalidate = 300

interface GoogleSheetsRow {
  name?: string
  price?: string
  description?: string
  image?: string
  category?: string
}

export async function GET() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const rawPrivateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY
  const sheetId = process.env.GOOGLE_SHEET_ID
  const sheetRange = process.env.GOOGLE_SHEET_RANGE || 'Products!A2:E'

  // If credentials are not configured or are placeholders, return fallback products gracefully
  const isCredentialMissing =
    !clientEmail ||
    !rawPrivateKey ||
    !sheetId ||
    clientEmail.includes('PLACEHOLDER') ||
    sheetId.includes('PLACEHOLDER')

  if (isCredentialMissing) {
    return NextResponse.json(
      {
        source: 'fallback',
        message:
          'Google Sheets credentials not configured. Returning static fallback product catalog.',
        count: FALLBACK_PRODUCTS.length,
        products: FALLBACK_PRODUCTS,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    )
  }

  try {
    // Handle escaped newline characters often present in Vercel env private keys
    const privateKey = rawPrivateKey.replace(/\\n/g, '\n')

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: sheetRange,
    })

    const rows = response.data.values

    if (!rows || rows.length === 0) {
      return NextResponse.json(
        {
          source: 'fallback',
          message: 'No rows found in sheet. Returning fallback catalog.',
          count: FALLBACK_PRODUCTS.length,
          products: FALLBACK_PRODUCTS,
        },
        { status: 200 }
      )
    }

    // Expected column order: Name | Price | Description | Image URL | Category
    const products: Product[] = rows
      .filter((row) => row && row[0]) // Require at least product Name
      .map((row, index) => {
        const name = String(row[0] || '').trim()
        const price = String(row[1] || '').trim()
        const description = String(row[2] || '').trim()
        const image = String(row[3] || '').trim() || '/images/hero-desktop.webp'
        const category = String(row[4] || 'General').trim()

        return {
          id: `sheet-${index + 1}`,
          name,
          price,
          description,
          image,
          category,
        }
      })

    return NextResponse.json(
      {
        source: 'google-sheets',
        count: products.length,
        products,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    )
  } catch (error: any) {
    console.error('Error fetching products from Google Sheets:', error?.message || error)

    // Fallback gracefully so the website never goes down if Sheets API fails or sheet is unreachable
    return NextResponse.json(
      {
        source: 'fallback',
        error: error?.message || 'Failed to fetch from Google Sheets',
        count: FALLBACK_PRODUCTS.length,
        products: FALLBACK_PRODUCTS,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      }
    )
  }
}

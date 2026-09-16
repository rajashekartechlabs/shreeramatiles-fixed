# Shree Rama Tiles & Pavers Manufacturers

Factory-direct manufacturer of concrete pavers, precast drainage slabs, parking tiles, compound walls, grass pavers, and architectural concrete products located in Bengaluru.

Website: [https://shreeramatiles-fixed.vercel.app](https://shreeramatiles-fixed.vercel.app)

---

## 📊 Google Sheets Product Catalog Integration

The website supports dynamic catalog updates powered by a Google Sheet via a server-side Next.js API route (`/api/products`).

### 1. Google Sheet Setup & Column Structure

Create a Google Sheet with a tab named **`Products`** (or specify custom name in `GOOGLE_SHEET_RANGE`).

The API expects row 1 as the header and rows 2 onward as data:

| Column | Header | Description | Example Value |
|---|---|---|---|
| **A** | `Name` *(Required)* | Full product title | `Drainage Slab` |
| **B** | `Price` | Display price string | `₹80 / Sq.ft` |
| **C** | `Description` | Product specifications/details | `Heavy-duty drainage slabs for residential systems.` |
| **D** | `Image URL` | Direct image URL (external or `/images/...`) | `https://images.unsplash.com/...` or `/images/drainage-slabs.webp` |
| **E** | `Category` | Category tag displayed on card | `Drainage`, `Pavers`, `Tiles`, `Precast Walls` |

> **Note:**
> - The sheet must be shared with the Google Cloud Service Account email as **Viewer**.
> - If any credential is missing or the sheet is unreachable, the system automatically falls back to the built-in high quality catalog (`lib/products-data.ts`) with zero downtime.

---

### 2. Environment Variables for Vercel

When ready to connect the live Google Sheet, add these environment variables in your **Vercel Project Settings → Environment Variables**:

| Variable Name | Description | Example / Note |
|---|---|---|
| `GOOGLE_SHEETS_CLIENT_EMAIL` | Service Account email address | `shree-rama-sheets@<project-id>.iam.gserviceaccount.com` |
| `GOOGLE_SHEETS_PRIVATE_KEY` | Service Account private key | `-----BEGIN PRIVATE KEY-----\nMIIEvgIB...` (newlines supported) |
| `GOOGLE_SHEET_ID` | Spreadsheet ID from the URL | `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms` |
| `GOOGLE_SHEET_RANGE` | *(Optional, defaults to `Products!A2:E`)* | Sheet name and column range |

---

## 🛠️ Local Development

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Test the products API locally:
- [http://localhost:3000/api/products](http://localhost:3000/api/products)
- [http://localhost:3000/sitemap.xml](http://localhost:3000/sitemap.xml)
- [http://localhost:3000/robots.txt](http://localhost:3000/robots.txt)

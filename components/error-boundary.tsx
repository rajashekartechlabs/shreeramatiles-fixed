'use client'

import React from 'react'

interface Props {
  children: React.ReactNode
  name?: string
}

interface State {
  hasError: boolean
  error: Error | null
}

export class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`[ErrorBoundary] Error in section "${this.props.name || 'Unknown'}":`, error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto my-8 max-w-4xl rounded-xl border border-red-300 bg-red-50 p-6 text-red-900 shadow-sm">
          <h3 className="font-heading text-lg font-bold">
            ⚠️ Rendering Error in Section: {this.props.name || 'Content Section'}
          </h3>
          <p className="mt-2 text-sm font-mono text-red-700 break-words">
            {this.state.error?.message || 'Unknown error during rendering or hydration'}
          </p>
          {this.state.error?.stack && (
            <pre className="mt-3 max-h-40 overflow-auto rounded bg-red-100 p-3 text-xs text-red-800">
              {this.state.error.stack}
            </pre>
          )}
        </div>
      )
    }

    return this.props.children
  }
}

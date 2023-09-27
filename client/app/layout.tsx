import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kas Capital',
  description: 'Trading and investing in the stock market',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

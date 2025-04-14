import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayur Asodara',
  description: 'Created by Mayur Asodara',
  icons: {
    icon: '/PFP.jpg', // Can also use multiple sizes or types
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

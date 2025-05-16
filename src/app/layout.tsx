import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevOpsMario',
  description: 'DevOps consulting for businesses ready to level up',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="relative min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 
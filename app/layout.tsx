import type { Metadata } from 'next'
import { Syne, Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KRANTI 2K26 | Interstellar Voyage | Meenakshi Sundararajan Engineering College',
  description: 'Interstellar themed symposium by MSEC Department of CSE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased font-body bg-black text-white selection:bg-cyan-500 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}

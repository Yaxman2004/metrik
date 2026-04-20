import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Metrik — Analytics for Modern Teams',
  description: 'Real-time analytics, beautiful dashboards, and AI-powered insights. Know exactly what\'s happening in your product at all times.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-inter bg-[#0A0A0F] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}

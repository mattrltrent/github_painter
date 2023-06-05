import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GitHub Painter',
  description: 'Embrace your inner Picasso.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}

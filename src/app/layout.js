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
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-2826294656662096"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2826294656662096"
          crossorigin="anonymous"
        ></script>
      </head>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}

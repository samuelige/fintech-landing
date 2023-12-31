import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import MuiTheme from '@/_lib/MuiTheme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: ' Neutron',
  description: 'Welcome to Neutron',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiTheme>{children}</MuiTheme>
      </body>
    </html>
  )
}

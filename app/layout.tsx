// ./app/layout.tsx

import { draftMode } from 'next/headers'
import './globals.css'
import VisualEditing from '@/components/VisualEditing'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { CssBaseline, CssVarsProvider, Container } from '@mui/joy'
import Header from '@/components/Header/Header'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <CssVarsProvider>
        <CssBaseline />
        <body className="bg-white">
          <Header />
          <Container fixed>{children}</Container>
          {draftMode().isEnabled && <VisualEditing />}
        </body>
      </CssVarsProvider>
    </html>
  )
}

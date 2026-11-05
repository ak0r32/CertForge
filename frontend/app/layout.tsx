import './globals.css'
import type { Metadata } from 'next'
import { AppShell } from '../components/app-shell'

export const metadata: Metadata = {
  title: 'CyberPrep AI',
  description: 'Cybersecurity certification preparation platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}

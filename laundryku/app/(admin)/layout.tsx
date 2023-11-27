import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import "../globals.css"
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Admin",
  icons: {
    icon: "/logo.svg"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="flex min-w-screen min-h-screen bg-[#F5F7FF] text-black">
            <Sidebar />
            <div>
              <Header />
              {children}
            </div>
          </main>
        </body>
      </html>
    </SessionProvider>
  )
}

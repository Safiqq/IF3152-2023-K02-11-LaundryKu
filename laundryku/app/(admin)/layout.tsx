import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/navbar'
import Sidebar from '@/components/sidebar'
// import Searchbar from '@/components/searchbar'
import "../globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Admin",
  icons:  {
    icon: "/logo.svg"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // if (children) {
  // if ((children as React.ReactElement).props.childProp.segment === "pesanan") {
  return (
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
  );
  // }
  // }
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

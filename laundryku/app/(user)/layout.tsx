import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "../globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    icons: {
        icon: "logo.svg"
    }
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex flex-col min-w-screen min-h-screen bg-white  text-blac">
                    {children}
                </main>
            </body>
        </html>
    );
}

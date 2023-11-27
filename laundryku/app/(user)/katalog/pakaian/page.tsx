import { Metadata } from 'next'
import Pakaian from "./pakaian"

export const metadata: Metadata = {
  title: 'Katalog - Pakaian',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Pakaian />)
}
import { Metadata } from 'next'
import Keranjang from "./keranjang"

export const metadata: Metadata = {
  title: 'Keranjang',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Keranjang />)
}
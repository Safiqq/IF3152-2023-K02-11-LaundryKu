import { Metadata } from 'next'
import Transaksi from "./transaksi"

export const metadata: Metadata = {
  title: 'Transaksi',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Transaksi />)
}
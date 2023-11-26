import { Metadata } from 'next'
import Transaksi from "./transaksi"

export const metadata: Metadata = {
  title: 'Transaksi',
}

export default function Page() {
  return (<Transaksi />)
}
import { Metadata } from 'next'
import Keranjang from "./keranjang"

export const metadata: Metadata = {
  title: 'Keranjang',
}

export default function Page() {
  return (<Keranjang />)
}
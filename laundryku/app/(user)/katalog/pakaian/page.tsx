import { Metadata } from 'next'
import Pakaian from "./pakaian"

export const metadata: Metadata = {
  title: 'Katalog - Pakaian',
}

export default function Page() {
  return (<Pakaian />)
}
import { Metadata } from 'next'
import Sepatu from "./sepatu"

export const metadata: Metadata = {
  title: 'Katalog - Sepatu',
}

export default function Page() {
  return (<Sepatu />)
}
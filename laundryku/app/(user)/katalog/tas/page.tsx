import { Metadata } from 'next'
import Tas from "./tas"

export const metadata: Metadata = {
  title: 'Katalog - Tas',
}

export default function Page() {
  return (<Tas />)
}
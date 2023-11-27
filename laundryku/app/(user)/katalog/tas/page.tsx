import { Metadata } from 'next'
import Tas from "./tas"

export const metadata: Metadata = {
  title: 'Katalog - Tas',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Tas />)
}
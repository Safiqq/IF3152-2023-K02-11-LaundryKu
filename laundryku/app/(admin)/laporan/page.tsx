import { Metadata } from 'next'
import Laporan from "./laporan"

export const metadata: Metadata = {
  title: 'Sign Up',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Laporan />)
}
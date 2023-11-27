import { Metadata } from 'next'
import Pesanan from "./pesanan"

export const metadata: Metadata = {
  title: 'Sign Up',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Pesanan />)
}
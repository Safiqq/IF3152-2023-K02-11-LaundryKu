import { Metadata } from 'next'
import Laundry from "./laundry"

export const metadata: Metadata = {
  title: 'Sign Up',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<Laundry />)
}

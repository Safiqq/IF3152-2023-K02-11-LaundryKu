import { Metadata } from 'next'
import SignUp from "./signup"

export const metadata: Metadata = {
  title: 'Sign Up',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  return (<SignUp />)
}
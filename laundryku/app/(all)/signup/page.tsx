import { Metadata } from 'next'
import SignUp from "./signup"

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return (<SignUp />)
}
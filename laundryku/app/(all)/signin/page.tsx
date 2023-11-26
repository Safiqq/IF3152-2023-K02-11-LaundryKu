import { Metadata } from 'next'
import SignIn from "./signin"

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Page() {
  return (<SignIn />)
}
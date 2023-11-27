import { Metadata } from 'next'
import SignIn from "./signin"

export const metadata: Metadata = {
  title: 'Sign In',
  icons: {
    icon: "/logo.svg"
  }
}
export default async function Page() {
  return (<SignIn />)
}
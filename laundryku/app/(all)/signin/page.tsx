import { Metadata } from 'next'
import SignIn from "./signin"
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Sign In',
  icons: {
    icon: "/logo.svg"
  }
}
export default async function Page() {
  const cookieStore = cookies()
  console.log(cookieStore)
  return (<SignIn />)
}
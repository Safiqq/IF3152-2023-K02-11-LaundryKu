import { Metadata } from 'next'
import Pakaian from "./pakaian"

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return (<Pakaian />)
}
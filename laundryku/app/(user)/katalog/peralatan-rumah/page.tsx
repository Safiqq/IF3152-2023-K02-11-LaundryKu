import { Metadata } from 'next'
import PeralatanRumah from "./peralatan-rumah"

export const metadata: Metadata = {
  title: 'Sign Up',
}

export default function Page() {
  return (<PeralatanRumah />)
}
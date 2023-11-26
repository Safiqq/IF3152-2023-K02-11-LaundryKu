import { Metadata } from 'next'
import PeralatanRumah from "./peralatan-rumah"

export const metadata: Metadata = {
  title: 'Katalog - Peralatan Rumah',
}

export default function Page() {
  return (<PeralatanRumah />)
}
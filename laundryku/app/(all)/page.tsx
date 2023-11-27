import { Metadata } from 'next'
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'LaundryKu',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Home() {
  return redirect('/signin')
}

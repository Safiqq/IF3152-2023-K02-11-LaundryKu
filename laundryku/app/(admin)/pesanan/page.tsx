import { Metadata } from 'next'
import Pesanan from "./pesanan"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign Up',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies()
  if (cookieStore.get("next-auth.session-token")) {
    return (<Pesanan />)
  } else {
    return redirect('/signin')
  }
}
import { Metadata } from 'next'
import Laundry from "./laundry"
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
    return (<Laundry />)
  } else {
    return redirect('/signin')
  }
}

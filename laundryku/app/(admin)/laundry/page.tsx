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
  const cookieStore = cookies();
  if (cookieStore.has('next-auth.session-token')) {
    return <Laundry />;
  } else if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pegawai") {
      return <Laundry />;
    }
  }
  return redirect("/signin");
}

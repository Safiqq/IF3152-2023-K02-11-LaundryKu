import { Metadata } from 'next'
import Pesanan from "./pesanan"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Pesanan',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies();
  if (cookieStore.has('next-auth.session-token')) {
    return <Pesanan />;
  } else if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pegawai") {
      return <Pesanan />;
    }
  }
  return redirect("/signin");
}
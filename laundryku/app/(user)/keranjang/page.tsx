import { Metadata } from 'next'
import Keranjang from "./keranjang"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Keranjang',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies();
  if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pelanggan") {
      return <Keranjang />;
    }
  }
  return redirect("/signin");
}
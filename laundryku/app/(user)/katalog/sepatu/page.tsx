import { Metadata } from 'next'
import Sepatu from "./sepatu"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Katalog - Sepatu',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies();
  if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pelanggan") {
      return <Sepatu />;
    }
  }
  return redirect("/signin");
}
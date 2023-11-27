import { Metadata } from 'next'
import PeralatanRumah from "./peralatan-rumah"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Katalog - Peralatan Rumah',
  icons:  {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies();
  if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pelanggan") {
      return <PeralatanRumah id={parsedSessionToken.id}/>;
    }
  }
  return redirect("/signin");
}
import { Metadata } from 'next'
import Laporan from "./laporan"
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Laporan',
  icons: {
    icon: "/logo.svg"
  }
}

export default function Page() {
  const cookieStore = cookies();
  if (cookieStore.has('next-auth.session-token')) {
    return <Laporan />;
  } else if (cookieStore.has('session-token')) {
    const parsedSessionToken = JSON.parse(cookieStore.get('session-token')?.value ?? '');
    if (parsedSessionToken.tipe === "Pegawai") {
      return <Laporan />;
    }
  }
  return redirect("/signin");
}
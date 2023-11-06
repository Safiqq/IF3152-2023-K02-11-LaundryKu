"use client"

import Image from 'next/image'
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <div className='absolute h-screen bg-white w-1/5 rounded-r-3xl'>
      <Image
        className="mx-auto p-12 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.svg"
        alt="LaundryKu Logo"
        width={180}
        height={37}
        priority
      />
      <div className='flex flex-col gap-12 mx-16'>
      <div className={`flex gap-4 px-4 ${pathname == "/laundry" && "bg-[#7689E7] py-3 rounded-full"}`}>
          {pathname == "/laundry" ?
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-white/data.svg"
              alt="Data"
              width={24}
              height={24}
              priority
            /> :
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-gray/data.svg"
              alt="Data"
              width={24}
              height={24}
              priority
            />}
          <h2 className={`${pathname == "/laundry" && "text-white"}`}>Data Laundry</h2>
        </div>
        <div className={`flex gap-4 px-4 ${pathname == "/pesanan" && "bg-[#7689E7] py-3 rounded-full"}`}>
          {pathname == "/pesanan" ?
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-white/pesanan.svg"
              alt="Pesanan"
              width={24}
              height={24}
              priority
            /> :
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-gray/pesanan.svg"
              alt="Pesanan"
              width={24}
              height={24}
              priority
            />}
          <h2 className={`${pathname == "/pesanan" && "text-white"}`}>Pesanan</h2>
        </div>
        <div className={`flex gap-4 ${pathname == "/laporan" && "bg-[#7689E7] px-4 py-3 rounded-full"}`}>
          {pathname == "/laporan" ?
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-white/laporan.svg"
              alt="Laporan"
              width={24}
              height={24}
              priority
            /> :
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-gray/laporan.svg"
              alt="Laporan"
              width={24}
              height={24}
              priority
            />}
          <h2 className={`${pathname == "/laporan" && "text-white"}`}>Laporan</h2>
        </div>
      </div>
    </div>
  );
};
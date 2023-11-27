"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isMinimize, setIsMinimize] = useState(true);
  const isWideScreen = true;

  return (
    <div className={`${isWideScreen ? "w-1/5 bg-white rounded-r-3xl" : (!isMinimize ? "z-10 w-screen bg-white" : "w-24 h-12 top-8 bg-[#7689E7] rounded-r-3xl")}`}>
      {!isWideScreen && isMinimize &&
        <div className='flex justify-end mx-4 items-center h-full cursor-pointer' onClick={() => setIsMinimize(!isMinimize)}>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/logo-white/hamburger-menu.svg"
            alt="Menu"
            width={28}
            height={28}
            priority
          />
        </div>
      }
      {!isWideScreen && !isMinimize &&
        <>
          <div className='flex justify-end m-16' onClick={() => setIsMinimize(!isMinimize)}>
            <Image
              className="cursor-pointer p-4 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/logo-black/close.svg"
              alt="Close"
              width={52}
              height={52}
              priority
            />
          </div>
          <Image
            className="mx-auto p-12"
            src="/logo.svg"
            alt="LaundryKu Logo"
            width={180}
            height={180}
            priority
          />
          <div className='flex flex-col gap-4 mx-16'>
            <Link href="/laundry">
              <div className={`flex gap-4 px-4 py-3 ${pathname == "/laundry" && "bg-[#7689E7] rounded-full"}`}>
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
            </Link>
            <Link href="/pesanan">
              <div className={`flex gap-4 px-4 py-3 ${pathname == "/pesanan" && "bg-[#7689E7] rounded-full"}`}>
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
            </Link>
            <Link href="/laporan">
              <div className={`flex gap-4 px-4 py-3 ${pathname == "/laporan" && "bg-[#7689E7] rounded-full"}`}>
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
            </Link>
          </div>
        </>
      }
      {isWideScreen &&
        <>
          <Image
            className="mx-auto p-12 relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
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
            <div className={`flex gap-4 px-4 ${pathname == "/laporan" && "bg-[#7689E7] py-3 rounded-full"}`}>
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
        </>
      }
    </div>
  );
};
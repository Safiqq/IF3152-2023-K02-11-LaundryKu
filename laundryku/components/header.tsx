"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const pathname = usePathname();
  return (
    <div className="bg-[#7689E7] fixed top-0 z-50 w-full  h-[20vh] flex justify-center shadow-xl">
      <div className="flex justify-center items-center pl-28 pr-6">
        <Image
          src="/logo.svg"
          alt="LaundryKu Logo"
          width={140}
          height={140}
          priority
        />
      </div>
      <div
        className="flex flex-col justify-center w-full items-center gap-7 ml-2"
        id="test"
      >
        <div
          className="text-gray-500 border-gray-500 bg-white border flex gap-6 mx-10 px-6 py-3 rounded-full w-[60vw]"
          onClick={() => console.log("Search bar clicked!")}
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/search.svg"
            alt="LaundryKu Logo"
            width={16}
            height={16}
            priority
          />
          <input
            type="text"
            id="fname"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Masukkan nama item"
            className="ml-2 outline-none border-none bg-transparent w-full text-lg"
          />
        </div>
        <div className="flex flex-row gap-44">
          <Link href="/katalog/pakaian">
            <div
              className={`text-2xl font-semibold position-relative cursor-pointer px-4 pb-2 ${
                pathname == "/katalog/pakaian"
                  ? "fix-underline"
                  : "link-underline"
              }`}
            >
              Pakaian
            </div>
          </Link>
          <Link href="/katalog/sepatu">
            <div
              className={`text-2xl font-semibold position-relative cursor-pointer px-4 pb-2 ${
                pathname == "/katalog/sepatu"
                  ? "fix-underline"
                  : "link-underline"
              }`}
            >
              Sepatu
            </div>
          </Link>
          <Link href="/katalog/tas">
            <div
              className={`text-2xl font-semibold position-relative cursor-pointer px-4 pb-2 ${
                pathname == "/katalog/tas" ? "fix-underline" : "link-underline"
              }`}
            >
              Tas
            </div>
          </Link>

          <Link href="/katalog/peralatan-rumah">
            <div
              className={`text-2xl font-semibold position-relative cursor-pointer px-4 pb-2 ${
                pathname == "/katalog/peralatan-rumah"
                  ? "fix-underline"
                  : "link-underline"
              }`}
            >
              Peralatan Rumah
            </div>
          </Link>
        </div>
      </div>
      <div className={`flex justify-center items-center pr-8 pl-4`}>
        <Link href="/keranjang">
          <div
            className={`p-4 hover:rounded-full hover:border-4 w-[80px] ${
              pathname == "/keranjang" && " border-4 rounded-full"
            }`}
          >
            <Image
              src="/keranjang.svg"
              alt="Keranjang Icon"
              width={70}
              height={70}
              priority
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center pr-20 pl-4">
        <Link href="/transaksi">
          <div
            className={`p-4 hover:rounded-full hover:border-4 w-[80px] ${
              pathname == "/transaksi" && " border-4 rounded-full"
            }`}
          >
            <Image
              src="/transaksi.svg"
              alt="Transaksi Icon"
              width={70}
              height={70}
              priority
            />
          </div>
        </Link>
      </div>
      <style jsx>
        {`
          .link-underline,
          .fix-underline {
            border-bottom-width: 0;
            background-image: linear-gradient(transparent, transparent),
              linear-gradient(#fff, #fff);
            background-size: 0 5px;
            background-position: 0 100%;
            background-repeat: no-repeat;
            transition: background-size 0.3s ease-in-out;
          }

          .link-underline:hover {
            background-size: 100% 5px;
            background-position: 0 100%;
          }

          .fix-underline {
            background-size: 100% 5px;
            background-position: 0 100%;
          }
        `}
      </style>
    </div>
  );
}

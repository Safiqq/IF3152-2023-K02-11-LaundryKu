"use client"

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import Table from "@/components/table";

interface Item {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

const data: Item[] = [
  {
    id: 1,
    gambar: "/logo.svg",
    nama: "Kaos",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 2,
    gambar: "/logo.svg",
    nama: "Celana Panjang",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 3,
    gambar: "/logo.svg",
    nama: "Kemeja",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 4,
    gambar: "/logo.svg",
    nama: "Sprei",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 5,
    gambar: "/logo.svg",
    nama: "Selimut",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 6,
    gambar: "/logo.svg",
    nama: "Handuk",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 7,
    gambar: "/logo.svg",
    nama: "Matras",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 8,
    gambar: "/logo.svg",
    nama: "Sarung Bantal",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 9,
    gambar: "/logo.svg",
    nama: "Sepatu Tinggi",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 10,
    gambar: "/logo.svg",
    nama: "Tas Besar",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
];

export default function Laundry(props:{isWideScreen: boolean}) {
  const {isWideScreen} = props;
  const [isAddItem, setIsAddItem] = useState(false);

  return (
    // <main className="flex min-w-screen min-h-screen bg-[#F5F7FF]">
    //   <Sidebar />
    //   {isWideScreen && <div className="basis-1/5" />}
    //   <div className="flex flex-col basis-4/5">
    //     <div className="items-center">
    //       <Searchbar isShow={false}></Searchbar>
    //     </div>
        <div className="px-12">
          <div className="flex justify-between">
            <h1>Data Laundry</h1>
            <div
              className="flex items-center justify-center rounded-full px-6 py-2 gap-2 bg-[#7689E7] cursor-pointer"
              // onClick={() => ModalAddItem(onClose={() => console.log(1)})}
              onClick={() => setIsAddItem(!isAddItem)}
            >
              <Image src="/logo-white/add-ring.svg" width={32} height={32} alt="Add Item"></Image>
              <p className="text-white font-bold">ADD NEW</p>
            </div>
          </div>
          <Table
            data={data}
          />
        </div>
    //   </div>
    // </main>
  );
}

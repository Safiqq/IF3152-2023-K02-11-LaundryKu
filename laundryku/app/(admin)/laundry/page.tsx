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
    gambar: "/product/image1.png",
    nama: "Kaos",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 2,
    gambar: "/product/celana-panjang.png",
    nama: "Celana Panjang",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 3,
    gambar: "/product/kemeja.png",
    nama: "Kemeja",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 4,
    gambar: "/product/sprei.png",
    nama: "Sprei",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 5,
    gambar: "/product/selimut.png",
    nama: "Selimut",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 6,
    gambar: "/product/handuk.png",
    nama: "Handuk",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 7,
    gambar:"/product/matras.png",
    nama: "Matras",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 8,
    gambar: "/product/sarung-bantal.png",
    nama: "Sarung Bantal",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 9,
    gambar: "/product/sepatu-tinggi.png",
    nama: "Sepatu Tinggi",
    harga: 10000,
    kategori: "Pakaian",
    status: "Aktif"
  },
  {
    id: 10,
    gambar: "/product/tas-besar.png",
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
              className="flex items-center justify-center rounded-full px-6 py-1 gap-2 bg-[#7689E7] cursor-pointer"
              // onClick={() => ModalAddItem(onClose={() => console.log(1)})}
              onClick={() => setIsAddItem(!isAddItem)}
            >
              <Image src="/logo-white/add-ring.svg" width={32} height={32} alt="Add Item"></Image>
              <p className="text-white font-bold">ADD NEW</p>
            </div>
          </div>
          <Table
            id="table"
            data={data}
            allowUpdate={true}
            allowDelete={true}
          />
        </div>
    //   </div>
    // </main>
  );
}

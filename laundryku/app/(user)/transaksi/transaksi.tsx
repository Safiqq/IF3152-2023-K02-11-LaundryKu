import React from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import TableUser from "@/components/table-user";


const data = [
    {
      image: "/product/image1.png",
      product: "Pakaian - Kaos",
      quantity: 1,
      total_price: 5000,
    },
    {
      image: "/product/image1.png",
      product: "Pakaian - Celana Panjang",
      quantity: 2,
      total_price: 6000,
    },
    {
      image: "/product/image1.png",
      product: "Pakaian - Sepatu Tinggi",
      quantity: 1,
      total_price: 5000,
    },
    {
      image: "/product/image1.png",
      product: "Pakaian - Sepatu Tinggi",
      quantity: 1,
      total_price: 30000,
    },
    {
      image: "/product/image1.png",
      product: "Pakaian - Sepatu Tinggi",
      quantity: 1,
      total_price: 30000,
    },
    {
      image: "/product/image1.png", 
      product: "Pakaian - Sepatu Tinggi",
      quantity: 1,
      total_price: 30000,
    },
  ];

export default function Transaksi() {
    return (
        <main className="flex flex-col min-w-screen min-h-screen bg-white">
          <Header />
          <div className="h-[20vh]"></div>
          <div className="grid grid-cols-2  min-h-[80vh]">
            <div className="col-span-7 text-black flex flex-col items-center text-2xl m-16">
              <div className=" w-full">
                <p className="font-bold text-[36px] mb-8">Transaction History</p>
                <TableUser data={data} allowDelete={true} />
              </div>
            </div>
          </div>
        </main>
      );
}

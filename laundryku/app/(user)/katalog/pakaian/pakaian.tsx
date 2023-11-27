"use client"

import React, { useState, useEffect } from "react";
import { CardProduct } from "@/components/card-product";
import { Header } from "@/components/header";
import { usePathname } from "next/navigation";

// const dataProduk = [
//   {
//     img: "/product/image1.png",
//     nama: "Kaos",
//     harga: 5000,
//   },
//   {
//     img: "/product/kemeja.png",
//     nama: "Kemeja",
//     harga: 5000,
//   },
//   {
//     img: "/product/celana-pendek.png",
//     nama: "Celana Pendek",
//     harga: 5000,
//   },
//   {
//     img: "/product/celana-panjang.png",
//     nama: "Celana Panjang",
//     harga: 5000,
//   },
//   {
//     img: "/product/rok.png",
//     nama: "Rok",
//     harga: 5000,
//   },
//   {
//     img: "/product/jas.png",
//     nama: "Jas",
//     harga: 5000,
//   },
//   {
//     img: "/product/jaket.png",
//     nama: "Jaket",
//     harga: 5000,
//   },
//   {
//     img: "/product/hoodie.png",
//     nama: "Hoodie",
//     harga: 5000,
//   },
//   {
//     img: "/product/gaun.png",
//     nama: "Gaun",
//     harga: 5000,
//   },
//   {
//     img: "/product/topi.png",
//     nama: "Topi",
//     harga: 5000,
//   },
// ];
export default function Pakaian() {
  const [dataProduk, setDataProduk] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/items/pakaian');
        if (response.ok) {
          const data = (await response.json()).data;
          setDataProduk(data);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 
  
  return (
    <>
      <Header />
      <div className="h-[20vh]"></div>
      <h1 className="text-black grid grid-cols-5 gap-20 m-16">
        {dataProduk.length > 0 && dataProduk.map((dataItem, index) => (
          <CardProduct key={index} data={[dataItem]} crud={["a"]} />
        ))}
      </h1>
    </>
  );
}

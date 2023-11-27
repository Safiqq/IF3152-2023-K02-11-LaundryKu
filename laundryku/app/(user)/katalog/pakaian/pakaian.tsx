import React from "react";
import { CardProduct } from "@/components/card-product";
import { Header } from "@/components/header";

const dataProduk = [
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/kemeja.png",
    nama: "Kemeja",
    harga: 5000,
  },
  {
    img: "/product/celana-pendek.png",
    nama: "Celana Pendek",
    harga: 5000,
  },
  {
    img: "/product/celana-panjang.png",
    nama: "Celana Panjang",
    harga: 5000,
  },
  {
    img: "/product/rok.png",
    nama: "Rok",
    harga: 5000,
  },
  {
    img: "/product/jas.png",
    nama: "Jas",
    harga: 5000,
  },
  {
    img: "/product/jaket.png",
    nama: "Jaket",
    harga: 5000,
  },
  {
    img: "/product/hoodie.png",
    nama: "Hoodie",
    harga: 5000,
  },
  {
    img: "/product/gaun.png",
    nama: "Gaun",
    harga: 5000,
  },
  {
    img: "/product/topi.png",
    nama: "Topi",
    harga: 5000,
  },
];
export default function Pakaian() {
  return (
    <>
      <Header />
      <div className="h-[20vh]"></div>
      <h1 className="text-black grid grid-cols-5 gap-20 m-16">
        {dataProduk.map((dataItem, index) => (
          <CardProduct key={index} data={[dataItem]} crud={["a"]} />
        ))}
      </h1>
    </>
  );
}

import React from "react";
import { CardProduct } from "@/components/card-product";
import Header from "@/components/navbar";

const dataProduk = [
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
    harga: 5000,
  },
  {
    img: "/product/image1.png",
    nama: "Kaos",
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

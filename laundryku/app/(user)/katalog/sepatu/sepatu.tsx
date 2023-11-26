import React from "react";
import { Header } from "@/components/header";
import { CardProduct } from "@/components/card-product";

const dataProduk = [
    {
        img: "/product/image1.png",
        nama: "Kaos",
        harga: 5000,
    },
    {
        img: "/product/image2.png",
        nama: "Kemeja",
        harga: 5000,
    },
    {
        img: "/product/image2.png",
        nama: "Kemeja",
        harga: 5000,
    },
];
export default function Sepatu() {
    const cardContainerClass = dataProduk.length <= 4 ? 'flex justify-center' : ' grid grid-cols-5';

    return (
        <>
            <Header />
            <div className="h-[20vh]"></div>
            <h1 className={`text-black gap-20 m-16 ${cardContainerClass}`}>
                {dataProduk.map((dataItem, index) => (
                    <CardProduct key={index} data={[dataItem]} crud={["a"]} />
                ))}
            </h1>
        </>
    );
}

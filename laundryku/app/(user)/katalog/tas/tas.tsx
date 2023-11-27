import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { CardProduct } from "@/components/card-product";

// const dataProduk = [
//     {
//         img: "/product/tas-kecil.png",
//         nama: "Tas Kecil",
//         harga: 5000,
//     },
//     {
//         img: "/product/tas-besar.png",
//         nama: "Tas Besar",
//         harga: 5000,
//     },
//     {
//         img: "/product/tas-kulit.png",
//         nama: "Tas Kulit",
//         harga: 5000,
//     },
// ];
export default function Tas() {
    const [dataProduk, setDataProduk] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/items/sepatu');
                if (response.ok) {
                    const data = await response.json();
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
    const cardContainerClass = dataProduk.length <= 4 ? 'flex justify-center' : ' grid grid-cols-5';

    return (
        <>
            <Header />
            <div className="h-[20vh]"></div>
            <h1 className={`text-black gap-20 m-16 ${cardContainerClass}`}>
                {dataProduk.length > 0 && dataProduk.map((dataItem, index) => (
                    <CardProduct key={index} data={[dataItem]} crud={["a"]} />
                ))}
            </h1>
        </>
    );
}

"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { CardProduct } from "@/components/card-product";
import Image from "next/image";

export default function Sepatu(id : any) {
    const [dataProduk, setDataProduk] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/items/sepatu");
                if (response.ok) {
                    const data = (await response.json()).data;
                    setDataProduk(data);
                } else {
                    window.alert("Failed to fetch data");
                }
            } catch (error) {
                window.alert("Error fetching data:"+  error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const cardContainerClass =
        dataProduk.length <= 4 ? "flex justify-center" : " grid grid-cols-5";

    return (
        <>
            <Header />
            <div className="h-[20vh]"></div>
            <h1 className={`text-black gap-20 m-16 ${cardContainerClass}`}>
                {dataProduk.length > 0 && dataProduk.map((dataItem, index) => (
                    <CardProduct key={index} item={dataItem} allowCreate={true} />
                ))}
            </h1>
            {loading && (
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
                    <Image
                        src="/spinner-fixgol.gif"
                        alt="spinner"
                        width={480}
                        height={480}
                    />
                </div>
            )}
        </>
    );
}

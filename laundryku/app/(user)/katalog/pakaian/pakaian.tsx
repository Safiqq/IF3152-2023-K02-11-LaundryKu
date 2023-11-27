"use client";

import React, { useState, useEffect } from "react";
import { CardProduct } from "@/components/card-product";
import { Header } from "@/components/header";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Pakaian() {
  const [dataProduk, setDataProduk] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/items/pakaian");
        if (response.ok) {
          const data = (await response.json()).data;
          setDataProduk(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false)
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
      <h1 className="text-black grid grid-cols-5 gap-20 m-16">
        {dataProduk.length > 0 && dataProduk.map((dataItem, index) => (
          <CardProduct key={index} data={[dataItem]} allowCreate={true} />
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

"use client";

import React, { useState, useEffect } from "react";
import { CardProduct } from "@/components/card-product";
import { Header } from "@/components/header";
import Image from "next/image";

export default function Pakaian(props: { id: number }) {
  const { id } = props;
  console.log("iduserdikatalog", id)
  const [dataProduk, setDataProduk] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/items/Pakaian");
        if (response.ok) {
          const data = (await response.json()).data;
          setDataProduk(data);
        } else {
          window.alert("Failed to fetch data");
        }
      } catch (error) {
        window.alert("Error fetching data:" + error);
      } finally {
        setLoading(false)
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
          <CardProduct key={index} item={dataItem} allowCreate={true} idUser={id} />
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

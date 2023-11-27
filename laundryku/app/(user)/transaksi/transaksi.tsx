"use client"

import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import TableTransactions from "@/components/table-transaction";

const data = [
  {
    transaction_ID: 6,
    items: "2x Kemeja, 1x Ransel",
    total_nominal: 10000,
    waktu_pemesanan: "2023-10-26 23:26:00",
    status_pembayaran: "berhasil",
    status_pesanan: "diambil"
  },
];

export default function Transaksi(props: { id: number }) {
  const { id } = props;
  const [loading, setLoading] = useState(false);
  const [dataPesanan, setDataPesanan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/pesanans');
        if (response.ok) {
          const data = (await response.json()).data
          setDataPesanan(data);
          setLoading(false)
        } else {
          window.alert("Failed to fetch data");
        }
      } catch (error) {
        window.alert("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col min-w-screen min-h-screen bg-white">
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <Image
            src="/spinner-fixgol.gif"
            alt="spinner"
            width={700}
            height={700}
          />
        </div>
      )}
      <Header />
      <div className="h-[20vh]"></div>
      <div className="grid grid-cols-2  min-h-[80vh]">
        <div className="col-span-7 text-black flex flex-col items-center text-2xl m-16">
          <div className=" w-full">
            <p className="font-bold text-[36px] mb-8">Transaction History</p>
            {/* {dataPesanan && <TableTransactions data={dataPesanan} />} */}
            <TableTransactions data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}

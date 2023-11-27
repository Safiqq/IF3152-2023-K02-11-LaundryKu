import React from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import TableTransactions from "@/components/table-transaction";

const data = [
    {
      transaction_id: 1,
      items: "2x Kemeja, 1x Ransel",
      total_nominal: 10000,
      waktu_pemesanan: "2023-10-26 23:26:00",
      status_pembayaran: "berhasil",
      status_pesanan: "diproses"
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
                <TableTransactions data={data} allowDelete={true} />
              </div>
            </div>
          </div>
        </main>
      );
}

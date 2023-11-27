"use client"

import Table from "@/components/table";
import Image from "next/image";
import { useEffect, useState } from "react";

interface DataPesanan {
  id: number;
  id_user: number;
  waktu_pemesanan: Date;
  status_pesanan: string;
  bukti_pembayaran: string;
  status_pembayaran: string;
  items: number[] | string;
}

interface DataProduk {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

export default function Pesanan() {
  const [dataPesanan, setDataPesanan] = useState<DataPesanan[]>([]);
  const [dataProduk, setDataProduk] = useState<DataProduk[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resProduk = await fetch("/api/items");
        const resPesanan = await fetch("/api/pesanans");
        if (resProduk.ok && resPesanan.ok) {
          const _dataProduk = (await resProduk.json()).data;
          const _dataPesanan = (await resPesanan.json()).data;
          _dataPesanan.forEach((pesanan: DataPesanan) => {
            pesanan.items = mapToString(pesanan.items, _dataProduk);
          })
          console.log("_dataProduk", _dataProduk);
          console.log("_dataPesanan", _dataPesanan)
          setDataProduk(_dataProduk)
          setDataPesanan(_dataPesanan);
        } else {
          window.alert("Failed to fetch data");
        }
        setLoading(false);
      } catch (error) {
        window.alert("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  const mapToString = (items: {}, _dataProduk: DataProduk[]) => {
    let itemsStr = "";
    const keys = Object.keys(items);
    const values = Object.values(items);
    keys.forEach((produkId, idx) => {
      const produkNama =_dataProduk.find(produk => produk.id === parseInt(produkId))?.nama;
      itemsStr += `${values[idx]} x ${produkNama}`;
      if (idx !== keys.length - 1) {
        itemsStr += ", ";
      }
    })
    return itemsStr;
  }

  return (
    <div className="px-12">
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
      <h1>Manajemen Pesanan</h1>
      <Table data={dataPesanan} allowUpdatePesanan={true} />
    </div>
  );
}

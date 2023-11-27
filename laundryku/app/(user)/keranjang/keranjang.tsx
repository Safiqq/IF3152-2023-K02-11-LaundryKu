"use client"

import React, { useEffect, useState } from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import TableUser from "@/components/table-user";

interface DataProduk {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

export default function Keranjang(props: { id: number }) {
  const { id } = props;
  const [dataKeranjang, setDataKeranjang] = useState([]);
  const [loading, setLoading] = useState(false);
  const [payload, setPayload] = useState({
    id_user: id,
    total_nominal: 0,
    status_pesanan: "DalamProses",
    bukti_pembayaran: "",
    status_pembayaran: "BelumDibayar",
    items: {},
  });
  const [fileName, setFileName] = useState("");

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = e.target?.result;
      setPayload({ ...payload, bukti_pembayaran: imageData as string });
    };
    reader.readAsDataURL(file);
    setFileName(file.name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resKeranjang = await fetch(`/api/keranjangs/${id}`);
        const resProduk = await fetch("/api/items");

        if (resKeranjang.ok && resProduk.ok) {
          let _dataKeranjang = (await resKeranjang.json()).data;
          const _dataProduk: DataProduk[] = (await resProduk.json()).data;
          const items = _dataKeranjang.items;
          const keys = Object.keys(items);
          const values: number[] = Object.values(items);
          _dataKeranjang = [];
          let total_harga = 0;
          keys.forEach((produkId, idx) => {
            const produk = _dataProduk.find(produk => produk.id === parseInt(produkId));
            _dataKeranjang.push({
              image: produk?.gambar,
              product: `${produk?.kategori} - ${produk?.nama}`,
              quantity: values[idx],
              total_price: produk?.harga ? produk?.harga * values[idx] : 0,
            });
            total_harga += produk?.harga ? produk?.harga * values[idx] : 0;
          })
          setDataKeranjang(_dataKeranjang);
          setPayload({...payload, items, total_nominal: total_harga})
        } else {
          window.alert("Failed to fetch data");
        }
        setLoading(false)
      } catch (error) {
        window.alert("Keranjang pengguna masih kosong");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSave = () => {
    if (payload.bukti_pembayaran === "") {
      window.alert("Form tidak boleh kosong");
      return;
    }

    fetch("/api/pesanans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          window.alert("Berhasil checkout");
          window.location.reload();
        } else {
          console.log(res)
          window.alert(JSON.stringify(res.error));
        }
      });
  };

  return (
    <main className="flex flex-col min-w-screen min-h-screen bg-white">
      <Header />
      <div className="h-[20vh]"></div>
      <div className="grid grid-cols-12  min-h-[80vh]">
        <div className="col-span-7 text-black flex flex-col items-center text-2xl m-16">
          <div className=" w-full">
            <p className="font-bold text-[36px] mb-8">Shopping Cart</p>
            {dataKeranjang && <TableUser data={dataKeranjang} allowDelete={true} />}
          </div>
        </div>
        <div className="col-span-5 flex flex-col items-center m-16">
          <div className="flex flex-col w-11/12 bg-[#F5F7FF] rounded-2xl drop-shadow-xl sticky top-52">
            <div className="flex flex-col items-center w-full my-12">
              <p className=" text-black text-[32px] font-bold">
                Payment Detail
              </p>
              <p className="mb-4 text-[#8B8686] text-xl font-semibold">
                Upload proof of your payment
              </p>
              <div className="bg-[#6C6C6C] w-10/12 h-1"></div>
              <label className="mt-6 border-dashed border-2 border-[#6C6C6C] rounded-3xl w-10/12 h-[400px] text-[#6C6C6C] flex flex-col justify-center items-center cursor-pointer" htmlFor="fileInput">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                <Image
                  src="/logo-gray/upload.svg"
                  width={100}
                  height={100}
                  alt="Upload"
                />
                <p className="font-semibold text-base mt-2">.PDF .JPG .PNG .DOC</p>
                <p className="font-semibold text-base">Drag and Drop your files here</p>
              </label>
              {fileName !== "" &&
                <div className="flex gap-3">
                  <Image
                    src="/logo-black/file.svg"
                    width={16}
                    height={16}
                    alt="Image"
                  />
                  <p>{fileName}</p>
                </div>
              }
              <div className="flex flex-row justify-between w-10/12 mt-6">
                <div className="text-[#706464] py-2 px-16 text-lg font-bold border-2 border-[#706464] rounded-full cursor-pointer hover:bg-[#dedcdc]">
                  Cancel
                </div>
                <div
                  className="text-white py-2 px-16 bg-[#7689E7] hover:bg-[#5365c1] text-lg font-bold rounded-full cursor-pointer"
                  onClick={handleSave}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    </main>
  );
}

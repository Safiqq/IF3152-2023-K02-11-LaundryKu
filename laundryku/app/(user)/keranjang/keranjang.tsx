"use client"

import React from "react";
import { Header } from "@/components/header";
import Image from "next/image";
import TableUser from "@/components/table-user";

const data = [
  {
    image: "/product/image1.png",
    product: "Pakaian - Kaos",
    quantity: 1,
    total_price: 5000,
  },
  {
    image: "/product/image1.png",
    product: "Pakaian - Celana Panjang",
    quantity: 2,
    total_price: 6000,
  },
  {
    image: "/product/image1.png",
    product: "Pakaian - Sepatu Tinggi",
    quantity: 1,
    total_price: 5000,
  },
  {
    image: "/product/image1.png",
    product: "Pakaian - Sepatu Tinggi",
    quantity: 1,
    total_price: 30000,
  },
  {
    image: "/product/image1.png",
    product: "Pakaian - Sepatu Tinggi",
    quantity: 1,
    total_price: 30000,
  },
  {
    image: "/product/image1.png",
    product: "Pakaian - Sepatu Tinggi",
    quantity: 1,
    total_price: 30000,
  },
];

export default function Keranjang() {
  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      // The result property contains the data as a data URL
      const imageData = e.target?.result;
      console.log('Image Data:', imageData);

      // You can use the imageData in your application, for example, display it in an <img> tag.
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
  };

  return (
    <main className="flex flex-col min-w-screen min-h-screen bg-white">
      <Header />
      <div className="h-[20vh]"></div>
      <div className="grid grid-cols-12  min-h-[80vh]">
        <div className="col-span-7 text-black flex flex-col items-center text-2xl m-16">
          <div className=" w-full">
            <p className="font-bold text-[36px] mb-8">Shopping Cart</p>
            <TableUser data={data} allowDelete={true} />
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
                  src="/upload.svg"
                  width={100}
                  height={100}
                  alt="Upload"
                />
                <p className="font-semibold text-base mt-2">.PDF .JPG .PNG .DOC</p>
                <p className="font-semibold text-base">Drag and Drop your files here</p>
              </label>
              <div className="flex flex-row justify-between w-10/12 mt-6">
                <div className="text-[#706464] py-2 px-16 text-lg font-bold border-2 border-[#706464] rounded-full cursor-pointer hover:bg-[#dedcdc]">
                  Cancel
                </div>
                <div className="text-white py-2 px-16 bg-[#7689E7] hover:bg-[#5365c1] text-lg font-bold rounded-full cursor-pointer">
                  Submit
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

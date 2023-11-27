"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Table from "@/components/table";
import ModalAddItem from "@/components/modal/add-item"

interface Item {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

export default function Laundry() {
  const [dataProduk, setDataProduk] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Function to open the modal
  const openAddItemModal = () => {
    setIsAddModalOpen(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/items/pakaian");
        if (response.ok) {
          const data = (await response.json()).data;
          setDataProduk(data);
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
        <div className="px-12">
          <div className="flex justify-between">
            <h1>Data Laundry</h1>
            <div
              className="flex items-center justify-center rounded-full px-6 py-1 gap-2 bg-[#7689E7] cursor-pointer"
              // onClick={() => ModalAddItem(onClose={() => console.log(1)})}
              onClick={openAddItemModal}
            >
              <Image src="/logo-white/add-ring.svg" width={32} height={32} alt="Add Item"></Image>
              <p className="text-white font-bold">ADD NEW</p>
            </div>
          </div>
          <Table data={dataProduk} allowUpdateLaundry={true} allowDelete={true} />
      {/* Pass setIsAddModalOpen to ModalAddItem component */}
      <ModalAddItem isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
        </div>
  );
}

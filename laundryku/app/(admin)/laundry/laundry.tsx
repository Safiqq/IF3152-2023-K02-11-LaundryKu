"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Table from "@/components/table";
import ModalAddItem from "@/components/modal/add-item"

export default function Laundry() {
  const [dataProduk, setDataProduk] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Function to open the modal
  const openAddItemModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsAddModalOpen(false);
    window.location.reload();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/items");
        if (response.ok) {
          const data = (await response.json()).data;
          console.log(data)
          setDataProduk(data);
        } else {
          window.alert("Failed to fetch data");
        }
        setLoading(false)
      } catch (error) {
        window.alert("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-12">
      <ModalAddItem isOpen={isAddModalOpen} onClose={handleCloseModals} />
      {isAddModalOpen && <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50"> </div>}
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
      <div className="flex justify-between">
        <h1>Data Laundry</h1>
        <div
          className="flex items-center justify-center rounded-full px-6 py-1 gap-2 bg-[#7689E7] cursor-pointer"
          onClick={openAddItemModal}
        >
          <Image src="/logo-white/add-ring.svg" width={32} height={32} alt="Add Item"></Image>
          <p className="text-white font-bold">ADD NEW</p>
        </div>
      </div>
      <Table data={dataProduk} allowUpdateLaundry={true} allowDelete={true} />
    </div>
  );
}

import React, { useState } from "react";
import { Dropdown } from "../dropdown";
import Image from "next/image"; // Import Image component

interface ModalAddItemProps {
  isOpen: boolean;
  onClose: () => void;
}

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

const ModalAddItem = (props: ModalAddItemProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  const [kategoriProduk, setKategoriProduk] = useState("Pakaian");
  const [statusProduk, setStatusProduk] = useState("Aktif");
  const [payload, setPayload] = useState({
    nama: "",
    harga: 0,
    kategori: "",
    status: "",
    gambar: ""
  });

  const kategoriProduks = [
    {
      text: "Pakaian",
      onClick: () => setKategoriProduk("pakaian"),
    },
    {
      text: "Sepatu",
      onClick: () => setKategoriProduk("sepatu"),
    },
    {
      text: "Tas",
      onClick: () => setKategoriProduk("tas"),
    },
    {
      text: "Peralatan Rumah",
      onClick: () => setKategoriProduk("peralatan rumah"),
    },
  ];

  const statusProduks = [
    {
      text: "Aktif",
      onClick: () => setStatusProduk("aktif"),
    },
    {
      text: "Tidak Aktif",
      onClick: () => setStatusProduk("tidak aktif"),
    },
  ];

  const cssForm = "flex flex-col gap-2";

  const handleSave = () => {
    console.log("Form Data:", payload);
  };

  return (
    
    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto">
      
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl">
        
        <div className="flex flex-col mb-4">
          <p className="text-2xl font-bold text-black flex justify-center mb-10" id="modal-title">
            Tambah Data Laundry
          </p>
          <div className="mt-4 flex flex-col gap-5">
            <div className={cssForm}>
              <label htmlFor="id_user" className="text-xl font-bold text-black">
                Nama Produk
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                className="text-md mb-5 py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder="Nama Produk"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPayload({ ...payload, nama: e.target.value });
                }}
              />
            </div>
            <div className={cssForm}>
              <label htmlFor="items" className="text-xl font-bold text-black">
                Harga Produk
              </label>
              <input
                type="text"
                name="items"
                id="items"
                className="text-md mb-5 py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder="Harga Produk"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPayload({ ...payload, harga: parseFloat(e.target.value) });
                }}
              />
            </div>
            <div className="flex items-start">
              <div className="w-full mr-2" style={{ width: "300px" }}> {/* Set the width of the dropdown here */}
                <label
                  htmlFor="items"
                  className="text-xl font-bold text-black"
                >
                  Kategori Produk
                </label>
                <Dropdown  elements={kategoriProduks} type={2} />
              </div>
              <div className="w-full" style={{ width: "50%" }}> {/* Set the width of the dropdown here */}
                <label
                  htmlFor="items"
                  className="text-xl font-bold text-black"
                >
                  Status Produk
                </label>
                <Dropdown elements={statusProduks} type={2} />
              </div>
            </div>
          </div>
        </div>
        {/* Additional file upload section */}
        <div className="flex flex-col items-center mt-10">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={(e) => handleFileUpload(e.target.files)}
          />
          <label
            htmlFor="fileInput"
            className="border-dashed border-2 border-[#6C6C6C] rounded-3xl w-10/12 h-32 text-[#6C6C6C] flex flex-col justify-center items-center cursor-pointer"
          >
            <Image src="/upload.svg" width={50} height={50} alt="Upload" />
            <p className="font-semibold text-base mt-2">.PDF .JPG .PNG .DOC</p>
            <p className="font-semibold text-base">Drag and Drop your files here</p>
          </label>
        </div>
        <div className="flex justify-between mt-10">
          <button
            className="justify-center rounded-full border-[#B4ACAC] bg-white px-14 py-2 text-base font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-[#dedcdc] sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="justify-center rounded-full bg-[#7689E7] px-14 py-2 text-base font-semibold text-white hover:bg-[#5365c1] sm:w-auto"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalAddItem;

"use client";

import React, { useState } from "react";
import { Dropdown } from "../dropdown";
import Image from "next/image";

interface ModalEditItemProps {
  isOpen: boolean;
  item: any;
  onClose: () => void;
}

const ModalEditItem = ({ isOpen, item, onClose }: ModalEditItemProps) => {
  const [fileName, setFileName] = useState("");
  const [payload, setPayload] = useState({
    id: item.id,
    nama: item.nama,
    harga: item.harga,
    gambar: item.gambar,
    kategori: item.kategori,
    status: item.status,
  });

  if (!isOpen || !item) {
    return null;
  }

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const imageData = e.target?.result;
      setPayload({ ...payload, gambar: imageData as string });
    };
    reader.readAsDataURL(file);
    setFileName(file.name);
  };


  const kategoriProduks = [
    {
      text: "Pakaian",
      onClick: () => setPayload({ ...payload, kategori: "Pakaian" }),
    },
    {
      text: "Sepatu",
      onClick: () => setPayload({ ...payload, kategori: "Sepatu" }),
    },
    {
      text: "Tas",
      onClick: () => setPayload({ ...payload, kategori: "Tas" }),
    },
    {
      text: "PeralatanRumah",
      onClick: () => setPayload({ ...payload, kategori: "PeralatanRumah" }),
    },
  ];

  const statusProduks = [
    {
      text: "Aktif",
      onClick: () => setPayload({ ...payload, status: "Aktif" }),
    },
    {
      text: "Tidak Aktif",
      onClick: () => setPayload({ ...payload, status: "TidakAktif" }),
    },
  ];

  const cssForm = "flex flex-col gap-2";

  const handleSave = () => {
    if (payload.nama === "" || payload.harga === 0 || payload.gambar === "") {
      window.alert("Form tidak boleh kosong");
      return;
    }

    fetch(`/api/items/${payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          console.log(res)
          window.alert(JSON.stringify(res.error));
        } else {
          window.alert("Berhasil mengubah item");
          onClose();
        }
      });
  };

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto">
      <div className="bg-white w-1/3 p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col">
          <p className="text-2xl font-bold text-black flex justify-center mb-8" id="modal-title">
            Edit Data Laundry
          </p>
          <div className="flex flex-col gap-2">
            <div className={cssForm}>
              <label htmlFor="id_user" className="text-xl font-bold text-black">
                ID Produk
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                className="text-md text-gray-600 bg-gray-300 mb-5 py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                value={payload.id}
                disabled
              />
            </div>
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
                value={payload.nama}
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
                value={payload.harga}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (Number.isNaN(parseInt(e.target.value))) {
                    setPayload({ ...payload, harga: 0 });
                  } else {
                    setPayload({ ...payload, harga: parseInt(e.target.value) });
                  }
                }}
              />
            </div>
            <div className="grid grid-cols-2 mb-2">
              <div>
                <label
                  htmlFor="items"
                  className="text-xl mb-2 font-bold text-black block"
                >
                  Kategori Produk
                </label>
                <Dropdown elements={kategoriProduks} type={2} index={kategoriProduks.findIndex((element) => element.text === payload.kategori)} />
              </div>
              <div>
                <label
                  htmlFor="items"
                  className="text-xl mb-2 font-bold text-black block"
                >
                  Status Produk
                </label>
                <Dropdown elements={statusProduks} type={2} />
              </div>
            </div>
            {/* Additional file upload section */}
            <label className="mt-4 mx-4 border-dashed border-2 border-[#6C6C6C] rounded-3xl h-[240px] text-[#6C6C6C] flex flex-col justify-center items-center cursor-pointer" htmlFor="fileInput">
              <input
                type="file"
                accept="image/*"
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
          </div>
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

export default ModalEditItem;

import React, { useState } from "react";
import { Dropdown } from "../dropdown";

interface ModalAddItemProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddItem = (props: ModalAddItemProps) => {
  const { isOpen, onClose } = props;

  if (!isOpen) {
    return null;
  }

  const [kategoriProduk, setKategoriProduk] = useState("Pakaian");
  const [statusProduk, setStatusProduk] = useState("Aktif");
  const [payload, setPayload] = useState(
    {
      nama: "",
      harga: 0,
      kategori: "",
      status: "",
      gambar: ""
    }
  );

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

  const cssForm = "flex flex-col gap-2"

  const handleSave = () => {
    console.log("Form Data:", payload);
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center overflow-y-auto"
    >
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col mb-4">
          <h1
            className="text-2xl font-bold text-black flex justify-center"
            id="modal-title"
          >
            Tambah Data Laundry
          </h1>
          <div className="mt-4 flex flex-col gap-5">
            <div className={cssForm}>
              <label
                htmlFor="id_user"
                className="text-xl font-medium text-black"
              >
                Nama Produk
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder="Nama Produk"
                onChange={(e: React.ChangeEvent<HTMLElement>) => {
                  setPayload({ ...payload, nama: e.target.textContent as string })
                }}
              />
            </div>
            <div className={cssForm}>
              <label
                htmlFor="items"
                className=" text-xl font-medium text-black"
              >
                Harga Produk
              </label>
              <input type="text" name="items" id="items" className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400" placeholder="Harga Produk"></input>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <div className={cssForm}>
                  <label
                    htmlFor="items"
                    className=" text-xl font-medium text-black"
                  >
                    Kategori Produk
                  </label>
                </div>
                <div className={cssForm}>
                  <label
                    htmlFor="items"
                    className=" text-xl font-medium text-black"
                  >
                    Status Produk
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <Dropdown elements={kategoriProduks} type={2}></Dropdown>
                <Dropdown elements={statusProduks} type={2}></Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            className=" justify-center rounded-full border-[#B4ACAC] bg-white px-14 py-2 text-base font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-[#dedcdc] sm:w-auto"
          onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="justify-center rounded-full bg-[#7689E7] px-14 py-2 text-base font-semibold text-white hover:bg-[#5365c1] sm:w-auto "
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

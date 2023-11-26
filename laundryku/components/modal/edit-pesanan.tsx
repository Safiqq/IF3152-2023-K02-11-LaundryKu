import React, { useState } from "react";

interface ModalEditPesananProps {
  isOpen: boolean;
  item: any;
  onClose: () => void;
}

const ModalEditPesananProps = ({ isOpen, item, onClose }: ModalEditPesananProps) => {
  if (!isOpen) {
    return null;
  }

  const cssForm = "flex flex-col gap-2";
  const [payload, setPayload] = useState({
    id_user: item.id_user,
    items: item.items,
    waktu_pemesanan: item.waktu_pemesanan,
    nominal_pesanan: item.nominal_pesanan,
    status_pesanan: item.status_pesanan,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedValue = name === "id_user" ? parseInt(value, 10) : value;
    setPayload((prevData) => ({ ...prevData, [name]: updatedValue }));
  };

  const handleSave = () => {
    console.log("Payload:", payload);
  };

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center overflow-y-auto ${isOpen ? "bg-black bg-opacity-60" : ""
        }`}
    >
      <div className="bg-white w-full max-w-xl p-8 rounded-3xl shadow-xl">
        <div className="flex flex-col mb-4">
          <h1
            className="text-2xl font-bold text-black flex justify-center"
            id="modal-title"
          >
            Edit Data Pesanan ({item.id})
          </h1>
          <div className="mt-4 flex flex-col gap-5">
            <div className={cssForm}>
              <label
                htmlFor="id_user"
                className="text-xl font-medium text-black"
              >
                ID User
              </label>
              <input
                type="text"
                name="id_user"
                id="id_user"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder={item.id}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={cssForm}>
              <label
                htmlFor="items"
                className=" text-xl font-medium text-black"
              >
                Items
              </label>
              <input
                type="text"
                name="items"
                id="items"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder={item.items}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={cssForm}>
              <label
                htmlFor="waktu_pemesanan"
                className=" text-xl font-medium text-black"
              >
                Waktu Pemesanan
              </label>
              <input
                type="text"
                name="waktu_pemesanan"
                id="waktu_pemesanan"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder={item.waktu_pemesanan}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={cssForm}>
              <label
                htmlFor="nominal_pesanan"
                className=" text-xl font-medium leading-6 text-black"
              >
                Nominal Pesanan
              </label>
              <input
                type="text"
                name="nominal_pesanan"
                id="nominal_pesanan"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder={item.nominal_pesanan}
                onChange={handleInputChange}
              ></input>
            </div>
            <div className={cssForm}>
              <label
                htmlFor="status_pemesanan"
                className=" text-xl font-medium leading-6 text-black"
              >
                Status Pemesanan
              </label>
              <input
                type="text"
                name="waktu_pemesanan"
                id="waktu_pemesanan"
                className="text-md py-3 px-5 border rounded-2xl border-black placeholder:text-gray-400"
                placeholder={item.status_pesanan}
                onChange={handleInputChange}
              ></input>
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

export default ModalEditPesananProps;

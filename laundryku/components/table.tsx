"use client"

import { SetStateAction, useEffect, useState } from "react";
import { getIndexes, toCurrency } from "@/lib/utils";
import Image from 'next/image'
import ModalEditPesanan from "./modal/edit-pesanan";
import Link from 'next/link'
import ModalDeleteItem from "./modal/delete-item";
import ModalEditLaundry from "./modal/edit-item";

interface TableProps {
  data: any[];
  allowUpdatePesanan?: boolean;
  allowUpdateLaundry?: boolean;
  allowDelete?: boolean;
  footer?: string[];
  isPagination?: boolean;
}

export default function Table({ data, allowUpdatePesanan, allowUpdateLaundry, allowDelete, footer, isPagination }: TableProps) {
  const [isEditPesananModalOpen, setIsEditPesananModalOpen] = useState(false);
  const [isEditLaundryModalOpen, setIsEditLaundryModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openEditPesananModal = (item: SetStateAction<null>) => {
    setSelectedItem(item);
    setIsEditPesananModalOpen(true);
  };
  const openEditLaundryModal = (item: SetStateAction<null>) => {
    setSelectedItem(item);
    setIsEditLaundryModalOpen(true);
  };
  const openDeleteModal = (item: SetStateAction<null>) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModals = () => {
    setSelectedItem(null);
    setIsEditPesananModalOpen(false);
    setIsEditLaundryModalOpen(false);
    setIsDeleteModalOpen(false);
    window.location.reload();
  };

  let titles: string[] = [], totalData: number = 0, endIndex: number = 0;
  if (data && data.length > 0) {
    titles = Object.keys(data[0]);
  }
  const indexes = {
    currency: getIndexes(["harga", "nominal"], titles),
    gambar: getIndexes(["gambar", "bukti"], titles),
    status: getIndexes("status", titles),
    bukti: getIndexes("bukti", titles),
  };
  const textPadding = (text: any) => {
    const green = "bg-[#227B3D] text-white";
    const gray = "bg-[#BCBBB1]";
    const red = "bg-[#B94545] text-white";
    const bg = (text.includes("Sudah") || text === "Aktif")
      ? green
      : ((text.includes("Tidak") || text.includes("Belum")
        ? red
        : gray));
    return <p className={`p-2 rounded-full ${bg}`}>{text}</p>;
  }
  const padding = "px-4 py-4";

  // Pagination
  if (data && data.length > 0) {
    totalData = data.length;
  }
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  if (data && data.length > 0) {
    endIndex = Math.min(startIndex + itemsPerPage, totalData);
  }

  if (isPagination) {
    data = data.slice(startIndex, endIndex);
  }
  const maxPageData = Math.ceil(totalData / itemsPerPage);


  const allowUD = allowUpdatePesanan || allowUpdateLaundry || allowDelete;

  return (
    <div>
      {selectedItem && <ModalEditPesanan isOpen={isEditPesananModalOpen} item={selectedItem} onClose={handleCloseModals} />}
      {selectedItem && <ModalEditLaundry isOpen={isEditLaundryModalOpen} item={selectedItem} onClose={handleCloseModals} />}
      {selectedItem && <ModalDeleteItem isOpen={isDeleteModalOpen} item={selectedItem} onClose={handleCloseModals} />}
      {(isEditPesananModalOpen || isEditLaundryModalOpen || isDeleteModalOpen) && <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50"> </div>}
      <table className="w-full text-center my-4 bg-white border-collapse">
        <thead className="text-lg uppercase bg-[#7689E7]">
          <tr>
            {titles.map((item, idx) => (
              <th key={idx} className={padding}>
                {item.replaceAll("_", " ")}
              </th>
            ))}
            {allowUD && <th className={padding}></th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="bg-white">
              {Object.values(item).map((val: any, idx) => (
                <td key={idx} className={padding}>
                  {indexes.currency.includes(idx)
                    ? toCurrency(val as number)
                    : (indexes.gambar.includes(idx)
                      ? <Image src={val} className="mx-auto" width={48} height={48} alt="Icon" />
                      : (indexes.status.includes(idx)
                        ? (textPadding(val))
                        : (indexes.bukti.includes(idx)
                          ? <Link href={`./bukti-pembayaran/${item.id}`} className="underline decoration-solid">{item.bukti_pembayaran}</Link>
                          : (val as string))
                      ))}
                </td>
              ))}
              {allowUD && (
                <td className={`flex gap-2 justify-center ${padding}`}>
                  {allowUpdatePesanan && (
                    <Image
                      className="cursor-pointer"
                      src="logo-black/pencil.svg"
                      width={20}
                      height={20}
                      alt="Update"
                      onClick={() => openEditPesananModal(item)}
                    />
                  )}
                  {allowUpdateLaundry && (
                    <Image
                      className="cursor-pointer"
                      src="logo-black/pencil.svg"
                      width={20}
                      height={20}
                      alt="Update"
                      onClick={() => openEditLaundryModal(item)}
                    />
                  )}
                  {allowDelete && (
                    <Image
                      className="cursor-pointer"
                      src="logo-black/trash.svg"
                      width={16}
                      height={16}
                      alt="Update"
                      onClick={() => openDeleteModal(item)}
                    />
                  )}
                </td>
              )}
            </tr>
          ))}
          {footer &&
            <tr>
              <td colSpan={titles.length + (allowUD ? 1 : 0)}>
                <div className="h-1.5 bg-[#7689E7] ml-8 mr-8"></div>
              </td>
            </tr>
          }
        </tbody>
        <tfoot>
          <tr>
            {footer &&
              Array.from({ length: titles.length - footer.length + (allowUD ? 1 : 0) }, (_, idx) => (
                <td key={idx} className={padding}></td>
              ))}
            {footer &&
              footer.map((val, idx) => (
                <td key={idx} className={`${padding} uppercase font-semibold`}>
                  {val}
                </td>
              ))}
          </tr>
        </tfoot>
      </table>
      {isPagination && <div className="flex justify-center gap-4 items-center bg-white py-4">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? "text-[#9b9b9b]" : "text-black"
              } bg-[#D9D9D9] px-6 py-2 rounded-l-full`}
          >
            {"<<"}
          </button>
          <button className="bg-[#BBB7B7] px-6 py-2">{currentPage}</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === maxPageData}
            className={`${currentPage === maxPageData ? "text-[#9b9b9b]" : "text-black"
              } bg-[#D9D9D9] px-6 py-2 rounded-r-full`}
          >
            {">>"}
          </button>
        </div>
        <h3>
          Showing {currentPage} to {maxPageData} of {totalData} entries
        </h3>
      </div>}
    </div>
  );
}

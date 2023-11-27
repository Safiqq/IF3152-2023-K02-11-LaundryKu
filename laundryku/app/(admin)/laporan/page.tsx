"use client"

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';  // Import dynamic from 'next/dynamic'
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import { Dropdown, DropdownElement } from "@/components/dropdown";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import Table from "@/components/table";
import { toCurrency } from "@/lib/utils";

interface LaporanTransaksi {
  id: number;
  nama_barang: string;
  harga: number;
  jumlah: number;
  harga_total?: number;
}

const data: LaporanTransaksi[] = [
  {
    id: 1,
    nama_barang: "Kaos",
    harga: 10000,
    jumlah: 1,

  },
  {
    id: 2,
    nama_barang: "Celana Panjang",
    harga: 10000,
    jumlah: 2,
  },
  {
    id: 3,
    nama_barang: "Kemeja",
    harga: 10000,
    jumlah: 1,
  },
  {
    id: 4,
    nama_barang: "Sprei",
    harga: 10000,
    jumlah: 3,
  },
  {
    id: 5,
    nama_barang: "Selimut",
    harga: 10000,
    jumlah: 2,
  },
  {
    id: 6,
    nama_barang: "Handuk",
    harga: 10000,
    jumlah: 1,
  },
  {
    id: 7,
    nama_barang: "Matras",
    harga: 10000,
    jumlah: 1,
  },
  {
    id: 8,
    nama_barang: "Sarung Bantal",
    harga: 10000,
    jumlah: 1,
  },
  {
    id: 9,
    nama_barang: "Sepatu Tinggi",
    harga: 10000,
    jumlah: 3,
  },
  {
    id: 10,
    nama_barang: "Tas Besar",
    harga: 10000,
    jumlah: 1,
  },
];

for (let i = 0; i < data.length; i++) {
  data[i]["harga_total"] = data[i].harga * data[i].jumlah;
}

export default function Laporan() {
  const html2pdf = dynamic(() => import('html2pdf.js'), { ssr: false });

  const exportToPDF = () => {
    const element = document.getElementById('laporan-table');
    if (element) {
      html2pdf(element);
    }
  };

  const [jenisLaporan, setJenisLaporan] = useState("harian");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [singleDatepicker, setSingleDatepicker] = useState(true);

  const handleChangeDatepicker = (newValue: DateValueType) => {
    if (newValue?.startDate) {
      const endDate = new Date(newValue.startDate);
      setValue({
        startDate: new Date(newValue.startDate),
        endDate: new Date(
          endDate.setDate(
            endDate.getDate() +
            (jenisLaporan === "harian"
              ? 1
              : jenisLaporan === "mingguan"
                ? 7
                : 30) -
            1,
          ),
        ),
      });
    }
  };

  useEffect(() => {
    setSingleDatepicker(jenisLaporan === "harian");
    handleChangeDatepicker(value);
  }, [jenisLaporan]);

  useEffect(() => {
    handleChangeDatepicker(value);
  }, []);

  const handleClickDatepicker = (e: React.MouseEvent<HTMLElement>) => {
    const classNames = Array.from((e.target as HTMLElement).classList)
    const classNamesTarget = ["flex", "items-center", "justify-center", "w-12", "h-12", "lg:w-10", "lg:h-10"];
    if (classNames.length === classNamesTarget.length &&
      classNames.every((element, index) => element === classNamesTarget[index])) {
        setSingleDatepicker(jenisLaporan === "harian");
      }
      if ((e.target as HTMLElement).tagName === "INPUT") {
      setSingleDatepicker(true);
    }
  };

  const handleBlurDatepicker = (e: React.FocusEvent) => {
    if (e.relatedTarget === null) {
      setSingleDatepicker(jenisLaporan === "harian")
      }
  };

  const dropdownElements: DropdownElement[] = [
    {
      text: "Harian",
      onClick: () => setJenisLaporan("harian"),
    },
    {
      text: "Mingguan",
      onClick: () => setJenisLaporan("mingguan"),
    },
    {
      text: "Bulanan",
      onClick: () => setJenisLaporan("bulanan"),
    },
  ];
  return (
    <div className="px-12">
      <h1>Laporan Transaksi</h1>
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <Dropdown elements={dropdownElements} type={1}></Dropdown>
          <div
            onClick={handleClickDatepicker}
            onBlur={handleBlurDatepicker}
          >
            <Datepicker
              asSingle={singleDatepicker}
              useRange={true}
              separator="-"
              readOnly={true}
              inputClassName="w-56 rounded-full text-center bg-[#7689E7] text-white focus:outline-none h-11 font-semibold"
              containerClassName="relative"
              toggleClassName="hidden"
              displayFormat="DD MMM YYYY"
              value={value}
              onChange={handleChangeDatepicker}
            />
          </div>
        </div>
        <div className="justify-end items-end">
          <button
            className="justify-end items-end bg-[#7689E7] hover:bg-[#6879CB] text-white font-bold py-3 px-5 rounded-full"
            onClick={exportToPDF}
          >
            Cetak Laporan
          </button>
        </div>
      </div>
    
      <Table
        id="laporan-table"
        data={data}
        footer={[
          "Total Pemasukan",
          toCurrency(
            data.reduce((acc, item) => acc + (item.harga_total || 0), 0),
          ),
        ]}
      />
    </div>
  );
}

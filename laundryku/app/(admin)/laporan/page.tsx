"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import { Dropdown, DropdownElement } from "@/components/dropdown";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import Table from "@/components/table";

interface LaporanTransaksi {
  no: number;
  nama_barang: string;
  harga: number;
  jumlah: number;
  harga_total?: number;
}

const data: LaporanTransaksi[] = [
  {
    no: 1,
    nama_barang: "Kaos",
    harga: 10000,
    jumlah: 1,
  },
  {
    no: 2,
    nama_barang: "Celana Panjang",
    harga: 10000,
    jumlah: 2,
  },
  {
    no: 3,
    nama_barang: "Kemeja",
    harga: 10000,
    jumlah: 1,
  },
  {
    no: 4,
    nama_barang: "Sprei",
    harga: 10000,
    jumlah: 3,
  },
  {
    no: 5,
    nama_barang: "Selimut",
    harga: 10000,
    jumlah: 2,
  },
  {
    no: 6,
    nama_barang: "Handuk",
    harga: 10000,
    jumlah: 1,
  },
  {
    no: 7,
    nama_barang: "Matras",
    harga: 10000,
    jumlah: 1,
  },
  {
    no: 8,
    nama_barang: "Sarung Bantal",
    harga: 10000,
    jumlah: 1,
  },
  {
    no: 9,
    nama_barang: "Sepatu Tinggi",
    harga: 10000,
    jumlah: 3,
  },
  {
    no: 10,
    nama_barang: "Tas Besar",
    harga: 10000,
    jumlah: 1,
  },
];

const toCurrency = (num: number) => "Rp" + num.toLocaleString("id-ID");

for (let i = 0; i < data.length; i++) {
  data[i]["harga_total"] = data[i].harga * data[i].jumlah;
}

export default function Laporan() {
  const [jenisLaporan, setJenisLaporan] = useState("harian");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [singleDatepicker, setSingleDatepicker] = useState(true);

  const handleChangeDatepicker = (newValue: DateValueType) => {
    console.log(1)
    if (newValue?.startDate) {
      console.log(2)
      const endDate = new Date(newValue.startDate);
      console.log(3)
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
      console.log("CLICKCLICKCLICKCLICKCLICK")
      setSingleDatepicker(true);
    }
  };

  const handleBlurDatepicker = (e: React.FocusEvent) => {
    if (e.relatedTarget === null) {
    setSingleDatepicker(jenisLaporan === "harian")
    }
  }

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
    <main className="flex min-w-screen min-h-screen bg-[#F5F7FF]">
      <Sidebar></Sidebar>
      <div className="basis-1/5"></div>
      <div className="flex flex-col basis-4/5">
        <div className="items-center">
          <Searchbar isShow={false}></Searchbar>
        </div>
        <div className="px-12">
          <h1>Laporan Transaksi</h1>
          <div className="flex items-center">
            <Dropdown elements={dropdownElements}></Dropdown>
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
          <Table
            data={data}
            rud={[]}
            footer={[
              "Total Pemasukan",
              toCurrency(
                data.reduce((acc, item) => acc + (item.harga_total || 0), 0),
              ),
            ]}
          />
        </div>
      </div>
    </main>
  );
}

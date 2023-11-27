"use client";

import React, { useEffect, useState } from "react";
import { Dropdown, DropdownElement } from "@/components/dropdown";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import Table from "@/components/table";
import { toCurrency } from "@/lib/utils";
import { CSVLink } from "react-csv";
import { format } from 'date-fns';
import Image from "next/image"

interface DataPesanan {
  id: number;
  id_user: number;
  waktu_pemesanan: Date;
  status_pesanan: string;
  bukti_pembayaran: string;
  status_pembayaran: string;
  items: {} | string;
}

interface DataLaporan {
  id: number;
  nama_barang: string;
  harga: number;
  jumlah: number;
  harga_total: number;
}

interface DataProduk {
  id: number;
  nama: string;
  harga: number;
  gambar: string;
  kategori: string;
  status: string;
}

interface DataPesananItem {
  [key: string]: number;
}

export default function Laporan() {
  const [dataLaporan, setDataLaporan] = useState<DataLaporan[]>([]);
  const [dataShown, setDataShown] = useState<DataLaporan[]>([]);
  const [loading, setLoading] = useState(false);

  function transformData(data: DataPesanan[], dataProduk: DataProduk[]): DataLaporan[] {
    return data.map((pesanan) => {
      const items: DataPesananItem = pesanan.items || {};
      const laporanItems: DataLaporan[] = Object.keys(items).map((itemId) => {
        const produk = dataProduk.find((p) => p.id === parseInt(itemId, 10));
        if (produk) {
          return {
            id: produk.id,
            nama_barang: produk.nama,
            harga: produk.harga,
            jumlah: items[itemId],
            harga_total: produk.harga * items[itemId],
          };
        }
        return null; // Handle case where product is not found
      });
  
      return laporanItems.filter((item) => item !== null) as DataLaporan[];
    }).flat();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resPesanan = await fetch("/api/pesanans");
        const resProduk = await fetch("/api/items");

        if (resPesanan.ok && resProduk.ok) {
          const _dataPesanan = (await resPesanan.json()).data;
          const _dataProduk = (await resProduk.json()).data;
          setDataLaporan(transformData(_dataPesanan, _dataProduk));
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

  const [jenisLaporan, setJenisLaporan] = useState("harian");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [singleDatepicker, setSingleDatepicker] = useState(true);

  const generateCSVData = () => {
    return [
      ["ID", "Nama Barang", "Harga", "Jumlah", "Harga Total"],
      ...dataLaporan.map((item) => [
        item.id.toString(),
        item.nama_barang,
        item.harga.toString(),
        item.jumlah.toString(),
        (item.harga_total || 0).toString(),
      ]),
    ];
  };

  const generateFilename = () => {
    if (jenisLaporan === 'harian') {
      return `laporan-${format(value.startDate, 'dd-MM-yyyy')}.csv`;
    } else {
      return 'laporan.csv';
    }
  };

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
            1
          )
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
    const classNames = Array.from((e.target as HTMLElement).classList);
    const classNamesTarget = [
      "flex",
      "items-center",
      "justify-center",
      "w-12",
      "h-12",
      "lg:w-10",
      "lg:h-10",
    ];
    if (
      classNames.length === classNamesTarget.length &&
      classNames.every((element, index) => element === classNamesTarget[index])
    ) {
      setSingleDatepicker(jenisLaporan === "harian");
    }
    if ((e.target as HTMLElement).tagName === "INPUT") {
      setSingleDatepicker(true);
    }
  };

  const handleBlurDatepicker = (e: React.FocusEvent) => {
    if (e.relatedTarget === null) {
      setSingleDatepicker(jenisLaporan === "harian");
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
          <div onClick={handleClickDatepicker} onBlur={handleBlurDatepicker}>
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
          <CSVLink data={generateCSVData()} filename={generateFilename()}>
            <button
              className="justify-end items-end bg-[#7689E7] hover:bg-[#6879CB] text-white font-bold py-3 px-5 rounded-full"
            // onClick={exportToPDF}
            >
              Cetak Laporan
            </button>
          </CSVLink>
        </div>
      </div>

      <Table
        data={dataLaporan}
        footer={[
          "Total Pemasukan",
          toCurrency(
            dataLaporan.reduce((acc, item) => acc + (item.harga_total || 0), 0)
          ),
        ]}
      />
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
    </div>
  );
}

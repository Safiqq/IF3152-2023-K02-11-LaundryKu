"use client";

import Button from "@/components/button";
import { useEffect, useState } from "react";
import { X } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";

export default function TableUser(props: {
  data: any[];
  rud?: string[];
  footer?: string[];
}) {
  const { data: InitialData, rud, footer } = props;
  const titles = Object.keys(InitialData[0]);
  const currencyIndexes = titles
    .map((title, index) => (title.includes("total") ? index : undefined))
    .filter((index) => index !== undefined);

  const dataAwal = InitialData;
  const padding = "px-2 py-4";
  const totalData = InitialData.length;
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const toCurrency = (num: number) => "Rp" + num.toLocaleString("id-ID");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalData);
  const currentPageData = InitialData.slice(startIndex, endIndex);
  const maxPageData = Math.ceil(totalData / itemsPerPage);

  const [data, setData] = useState<any[]>();
  const [originalPrices, setOriginalPrices] = useState<number[]>();

  useEffect(() => {
    const prices = InitialData.map((item) => item.total_price / item.quantity);
    setOriginalPrices(prices);
  }, [InitialData]);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    if (!originalPrices) return;

    const originalPrice = originalPrices[index];
    const newData = [...InitialData];
    newData[index].quantity = newQuantity;
    newData[index].total_price = newQuantity * originalPrice;

    console.log("originalPrice", originalPrice);

    setData(newData);
  };

  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (!originalPrices) return;
    const newTotalPrice = InitialData.reduce(
      (accumulator, currentItem) => accumulator + currentItem.total_price,
      0
    );

    setTotalPrice(newTotalPrice);
  }, [data, originalPrices]);

  return (
    <div>
      <table className="min-w-full text-center mt-4 bg-white text-black ">
        <thead className="text-xl capitalize bg-white border-b-2 border-[#6C6C6C]">
          <tr>
            {titles.map((item, idx) => (
              <th
                key={idx}
                className={`px-4 py-2 text-[#8C8F96] font-semibold ${
                  idx === 0 ? "text-left " : item === "product" ? "invisible" : ""
                }`}
              >
                {idx === 0 ? "product" : item.replaceAll("_", " ")}
              </th>
            ))}
            {rud && <th className={padding}></th>}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item, index) => (
            <tr
              key={index + (currentPage - 1) * 5}
              className="bg-white border-b-2 border-[#6C6C6C] text-xl"
            >
              {Object.values(item).map((val, idx) => (
                <td
                  key={idx}
                  className={`${padding} ${idx === 1 ? "text-left" : ""}`}
                >
                  {idx === 2 ? (
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            index + (currentPage - 1) * 5,
                            (val as number) - 1
                          )
                        }
                        className="px-2 text-2xl"
                      >
                        -
                      </button>
                      <span
                        className="mx-2 rounded-xl bg-[#7689E7] px-4 text-white"
                        onClick={() =>
                          console.log(index + (currentPage - 1) * 5)
                        }
                      >
                        {val as number}
                      </span>
                      <button
                        onClick={() =>
                          handleQuantityChange(
                            index + (currentPage - 1) * 5,
                            (val as number) + 1
                          )
                        }
                        className="px-2 text-2xl"
                      >
                        +
                      </button>
                    </div>
                  ) : currencyIndexes.includes(idx) ? (
                    toCurrency(val as number)
                  ) : idx === 0 ? (
                    <div className="flex flex-col items-start">
                      <Image
                        src={`${val as string}`}
                        alt="LaundryKu Logo"
                        width={125}
                        height={125}
                        
                        className="rounded-xl"
                      />
                    </div>
                  ) : (
                    <p className="font-semibold">
                        {val as string}
                    </p>
                    
                  )}
                </td>
              ))}
              {rud && (
                <td className={``}>
                  {rud[0] === "d" ? (
                    <div className="flex flex-col justify-center items-center">
                      <X
                        className="cursor-pointer "
                        onClick={() =>
                          console.log(index + (currentPage - 1) * 5)
                        }
                      />
                    </div>
                  ) : (
                    rud.toString()
                  )}
                </td>
              )}
            </tr>
          ))}
          {footer && (
            <tr>
              {titles.map((_, idx) => (
                <td key={idx}>
                  <div
                    className={`h-1.5 bg-[#7689E7] ${idx === 0 && "ml-8"} ${
                      idx == titles.length - 1 && !rud && "mr-8"
                    }`}
                  ></div>
                </td>
              ))}
              {rud && (
                <td>
                  <div className="h-1.5 bg-[#7689E7] mr-8"></div>
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-center gap-4 items-center bg-white py-4">
        <div className="flex justify-center">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "text-[#9b9b9b]" : "text-black"
            } bg-[#D9D9D9] px-4 py-1 rounded-l-full`}
          >
            {"<<"}
          </button>
          <button className="bg-[#BBB7B7] px-4 py-1">{currentPage}</button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === maxPageData}
            className={`${
              currentPage === maxPageData ? "text-[#9b9b9b]" : "text-black"
            } bg-[#D9D9D9] px-4 py-1 rounded-r-full`}
          >
            {">>"}
          </button>
        </div>
        <p className="text-xl">
          Showing {currentPage} to {maxPageData} of {totalData} entries
        </p>
      </div>
      <div className="flex flex-col justify-end items-end text-xl text-[#6C6C6C] font-semibold">
        <div className="w-1/4">
          <div className="flex flex-row gap-3 mb-2">
            <p>Subtotal:</p>
            <p className="text-black">{toCurrency(totalPrice)}</p>
          </div>
          <div className="flex flex-row gap-2 mb-2">
            <p>Shipping:</p>
            <p className="text-black">Free</p>
          </div>
          <div className="bg-[#6C6C6C] w-full h-1"></div>
          <div className="flex flex-row gap-3 my-2 justify-center">
            <p className="text-black">Total:</p>
            <p className="text-black">{toCurrency(totalPrice)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

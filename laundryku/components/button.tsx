import React from "react";

interface ButtonProps {
  label?: string;
  status?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function Button({
  label,
  status,
  backgroundColor,
  textColor = 'text-black',
}: ButtonProps) {

  if (status) {
    switch (status) {
      case "Sudah Dibayar":
        backgroundColor = "bg-[#227B3D]";
        textColor = "text-white"
        break;
      case "Belum Dibayar":
        backgroundColor = "bg-[#B94545]";
        textColor = "text-white"
        break;
      case "Dalam Proses":
        backgroundColor = "bg-[#BFBEB5]";
        break;
      case "Sudah Selesai":
        backgroundColor = "bg-[#227B3D]";
        textColor = "text-white"
        break;
      default:
        backgroundColor = "bg-[#000000]";
        textColor = "text-black"
    }
  }

  const buttonStyle = `${backgroundColor} px-4 py-2 rounded-full ${textColor}`;

  return <button className={buttonStyle}>{label}</button>;
}

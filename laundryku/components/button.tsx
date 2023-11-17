import React from "react";

export default function button(label: String, backgroundColor: String, textColor: String) {
  const buttonStyle = `bg-[${backgroundColor}] px-4 py-2 rounded-full text-${textColor}`;

  return <button className={buttonStyle}>{label}</button>;
}

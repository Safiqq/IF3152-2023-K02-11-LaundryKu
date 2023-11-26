import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useWindowSize } from "@/lib/window"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const toCurrency = (num: number) => "Rp" + num.toLocaleString("id-ID");

export const getIndexes = (withText: string | string[], srcArray: string[]) => {
  if (typeof withText === 'string') {
    return srcArray
      .map((text, index) => (text.includes(withText) ? index : undefined))
      .filter((index) => index !== undefined);
  } else if (Array.isArray(withText)) {
    return withText
      .map((text) =>
        srcArray
          .map((srcText, index) => (srcText.includes(text) ? index : undefined))
          .filter((index) => index !== undefined)
      )
      .flat();
  } else {
    return [];
  }
};
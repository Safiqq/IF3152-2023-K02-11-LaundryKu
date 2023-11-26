import { toCurrency } from "@/lib/utils";
import Image from "next/image";

export function CardProduct(props: { data: any[]; crud: string[] }) {
  const { data, crud } = props;

  return (
    <div className="text-xl border drop-shadow-xl bg-[#F8F3F3] rounded-xl">
      {data.map((item, key) => (
        <div key={key} className="flex flex-col items-center ">
          <div className="bg-[#E5E5E5] w-full flex justify-center rounded-t-xl">
            <div className="my-6 h-[200px] w-[240px] mx-6 relative">
              <Image src={item.img} alt={item.nama} layout="fill" />
            </div>
          </div>

          <div className="font-normal text-large w-full flex justify-center mt-4">{item.nama}</div>
          <div className="mb-4 font-extrabold w-full flex justify-center mt-2">{toCurrency(item.harga)}</div>
          {crud[0] === 'a' && (
            <div className="bg-[#B8B8B8] w-full text-white font-bold px-4 py-2 flex justify-center cursor-pointer rounded-b-xl">
              Add to Cart
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

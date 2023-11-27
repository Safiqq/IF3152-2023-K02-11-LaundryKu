import { toCurrency } from "@/lib/utils";
import Image from "next/image";

export function CardProduct(props: { item: any; allowCreate?: boolean, user_id?: number }) {
  const { item, allowCreate } = props;

  const handleAddToCart = () => {
    console.log('data', item)
    fetch("/api/keranjangs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") {
          setLoading(true);
          router.push("/katalog/pakaian");
        } else {
          window.alert(res.error);
          setLoading(false);
        }
      });
  }

  return (
    <div className="text-xl border drop-shadow-xl bg-[#F8F3F3] rounded-xl">
      <div className="flex flex-col items-center ">
        <div className="bg-[#E5E5E5] w-full flex justify-center rounded-t-xl">
          <div className="my-6 h-[200px] w-[240px] mx-6 relative">
            <Image src={item.gambar} alt={item.nama} layout="fill" />
          </div>
        </div>

        <div className="font-normal text-large w-full flex justify-center mt-4">{item.nama}</div>
        <div className="mb-4 font-extrabold w-full flex justify-center mt-2">{toCurrency(item.harga)}</div>
        {allowCreate && (
          <div
            className="bg-[#B8B8B8] w-full text-white font-bold px-4 py-2 flex justify-center cursor-pointer rounded-b-xl"
            onClick={handleAddToCart}>
            Add to Cart
          </div>
        )}
      </div>
    </div>
  );
}

import { toCurrency } from "@/lib/utils";
import Image from "next/image";

export function CardProduct(props: { item: any; allowCreate?: boolean, idUser?: any }) {
  const { item, allowCreate, idUser } = props;
  
  const handleAddToCart = async () => {
    // Cek apakah sdh ada keranjang
    fetch(`/api/keranjangs/${idUser.id}`)
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        if (res.error) {
          // If there is no shopping cart, create a new one
          fetch("/api/keranjangs/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              idUser: idUser.id,
              totalNominal: item.harga,
              items: [item.id]
            }),
          })
            .then(res => res.json())
            .then(res => console.log('new cart', res));
        } else {
          console.log('existing cart', res.data);

          // If there is an existing shopping cart, update it
          fetch(`/api/keranjangs/${idUser.id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [...res.data.items, item.id],
            }),
          })
            .then(res => res.json())
            .then(res => console.log('updated cart', res));
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

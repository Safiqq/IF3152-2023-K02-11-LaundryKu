import { toCurrency } from "@/lib/utils";
import Image from "next/image";

export function CardProduct(props: { item: any; allowCreate?: boolean, idUser?: any }) {
  const { item, allowCreate, idUser } = props;
  
  const handleAddToCart = async () => {
    // Cek apakah sdh ada keranjang
    console.log("idUserdicard", idUser)
    const response = await fetch(`/api/keranjangs/${idUser}`);
    const data = (await response.json()).data
    if (data) {
      console.log("datadicard", data)
      console.log(JSON.stringify({
        id_user: data.id_user,
        items: {...data.items, [item.id]: (data.items[item.id] ? (data.items[item.id] + 1) : 1 )},
        total_nominal: data.total_nominal + item.harga,
      }))
      const a = await fetch(`/api/keranjangs/${idUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_user: data.id_user,
          items: {...data.items, [item.id]: (data.items[item.id] ? (data.items[item.id] + 1) : 1 )},
          total_nominal: data.total_nominal + item.harga,
        }),
      });
      console.log("a", await a.json())
    } else {
      await fetch("/api/keranjangs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_user: idUser,
          total_nominal: item.harga,
          items: {[item.id]: 1}
        }),
      })
      console.log("heree post")
    }
    window.alert("Berhasil menambahkan ke keranjang");
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

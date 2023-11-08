import Sidebar from "@/components/sidebar";
import Searchbar from "@/components/searchbar";
import TablePesanan from "@/components/table-pesanan";

export default function Pesanan() {
  return (
    <main className="flex min-w-screen min-h-screen bg-[#F5F7FF]">
      <Sidebar />
      <div className="basis-1/5"></div>
      <div className="flex flex-col basis-4/5">
        <div className="items-center">
          <Searchbar isShow={true}></Searchbar>
        </div>
        <div className="px-12 text-black">
          <h1>Manajemen Pesanan</h1>
          <TablePesanan/>
        </div>
      </div>
    </main>
  );
}

import Sidebar from "@/components/sidebar";
// import Searchbar from "@/components/searchbar";
import Header from "@/components/navbar";
import Table from "@/components/table";

const data = [
  {
    "id": 1,
    "id_user": 1,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
  {
    "id": 2,
    "id_user": 2,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
  {
    "id": 3,
    "id_user": 3,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
  {
    "id": 4,
    "id_user": 4,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
  {
    "id": 5,
    "id_user": 5,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
  {
    "id": 6,
    "id_user": 6,
    "items": '2 x Kemeja, 1 x Ransel',
    "waktu_pemesanan": '2023-10-26 23:26:00',
    "nominal_pesanan": 'Rp10.000',
    "status_pesanan": 'Dalam Proses',
    "status_pembayaran": 'Sudah Dibayar',
    "bukti_pembayaran": 'Lihat',
  },
]

export default function Pesanan(props: {isWideScreen:boolean}) {
  const {isWideScreen} = props;
  return (
    // <main className="flex min-w-screen min-h-screen bg-[#F5F7FF]">
    //   <Sidebar isWideScreen />
    //   {isWideScreen && <div className="basis-1/5" />}
    //   <div className={`flex flex-col ${isWideScreen && "basis-4/5"} ${!isWideScreen && "w-full"}`}>
    //     <div className="items-center">
    //       <Header></Header>
    //       {/* <Searchbar isShow={true}></Searchbar> */}
    //     </div>
        <div className="px-12">
          <h1>Manajemen Pesanan</h1>
          <Table id="manajemen-pesanan" data={data} rud={["u"]} />
        </div>
    //   </div>
    // </main>
  );
}

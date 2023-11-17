import button from "./button"

export default function TablePesanan() {
  const btnStatPemesanan = () => {
    return (
      button('Dalam Pesanan', '#BCBBB1', 'black')
    )
  }

  const btnStatPembayaran = () => {
    return (
      button('Sudah Dibayar', '#227B3D', 'white')
    )
  }

  const data = [
    {
      "ID": 1,
      "ID USER": 1,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
    {
      "ID": 2,
      "ID USER": 2,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
    {
      "ID": 3,
      "ID USER": 3,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
    {
      "ID": 4,
      "ID USER": 4,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
    {
      "ID": 5,
      "ID USER": 5,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
    {
      "ID": 6,
      "ID USER": 6,
      "ITEMS": '2 x Kemeja, 1 x Ransel',
      "WAKTU PEMESANAN": '2023-10-26 23:26:00',
      "NOMINAL PESANAN": 'Rp10.000',
      "STATUS PESANAN": btnStatPemesanan(),
      "STATUS PEMBAYARAN": btnStatPembayaran(),
      "BUKTI PEMBAYARAN": 'Lihat',
      "": 'Edit'
    },
  ]

  const titles = Object.keys(data[0])

  return (
    <div className="relative overflow-x-auto mt-8">
      <table className="w-full text-center">
        <thead className="text-lg uppercase bg-[#7689E7]">
          <tr>
            {titles.map((item) => (
              <th scope="col" className="px-6 py-3 font-medium">{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item['ID']} className="bg-white">
              <td className="px-3 py-4">{item["ID"]}</td>
              <td className="px-3 py-4">{item["ID USER"]}</td>
              <td className="px-3 py-4">{item["ITEMS"]}</td>
              <td className="px-3 py-4">{item["WAKTU PEMESANAN"]}</td>
              <td className="px-3 py-4">{item["NOMINAL PESANAN"]}</td>
              <td className="px-3 py-4">{item["STATUS PESANAN"]}</td>
              <td className="px-3 py-4">{item["STATUS PEMBAYARAN"]}</td>
              <td className="px-3 py-4">{item["BUKTI PEMBAYARAN"]}</td>
              <td className="px-3 py-4">{item[""]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

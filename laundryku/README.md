This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
### Penjelasan singkat mengenai aplikasi
Sistem LaundryKu memudahkan manajemen dan operasional usaha laundry. Pegawai laundry dapat mengelola pesanan dan transaksi, serta melihat laporan transaksi. Konsumen dapat memilih pakaian, memesan, dan memantau status pesanan.

LaundryKu dapat diakses oleh konsumen dan pegawai laundry menggunakan email dan password yang telah didaftarkan. Konsumen dapat menambah pakaian ke keranjang pesanan, memasukkan alamat, dan membayar jasa layanan. Pegawai laundry dapat mengambil pakaian dari konsumen dan mengantarkan pakaian yang telah selesai dicuci.

### Cara menjalankan aplikasi
1. Npm i
2. Npx prisma generate
3. Npm run dev

Daftar use case yang diimplementasi dilengkapi dengan nama use case, NIM dan nama penanggung jawab, dan capture screen tampilan layar (jika ada) permodul 

18221046	/Vincent Winarta : melihat pakaian dan harga laundry-nya dan melihat status dan riwayat pesanan
18221048	/Syafiq Ziyadul Arifin : melihat laporan transaksi, manajemen jenis dan harga pakaian, serta mengunggah bukti pembayaran
18221062	/Muhammad Dastin Fauzi : manajemen pesanan, manajemen item dalam keranjang
18221120	/Carissa Tabina Rianda : sign up dan login

Daftar tabel basis data yang diimplementasi dilengkapi dengan nama tabel dan atributnya
Nama tabel : Item
Atribut : 
id : Int
nama : String
harga : Int
gambar : String
kategori : String
keranjangs : Keranjang []
pesanans : Pesanan []

Nama tabel : Authentication
Atribut : 
id : Int
token : String
createdAt : DateTime
updatedAt : DateTime
deletedAt : DateTime

Nama tabel : Keranjang
Atribut : 
id : Int
totalNominal : Int
items : Item []

Nama tabel : Pesanan
Atribut : 
id : Int
idUser : Int
waktuPemesanan: DateTime
nominalPesanan: Int
statusPesanan : String
buktiPembayaran : String
statusPembayaran : String
items : Item[]

Nama tabel : User
Atribut : 
id : Int
nama : String
email : String
password : String
tipe : UserType

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&)

[bit.ly/DeployLaundryKuRPLK02G11](bit.ly/DeployLaundryKuRPLK02G11)

utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

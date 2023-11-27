### Penjelasan singkat mengenai aplikasi
Sistem LaundryKu memudahkan manajemen dan operasional usaha laundry. Pegawai laundry dapat mengelola pesanan dan transaksi, serta melihat laporan transaksi. Konsumen dapat memilih pakaian, memesan, dan memantau status pesanan.

LaundryKu dapat diakses oleh konsumen dan pegawai laundry menggunakan email dan password yang telah didaftarkan. Konsumen dapat menambah pakaian ke keranjang pesanan, memasukkan alamat, dan membayar jasa layanan. Pegawai laundry dapat mengambil pakaian dari konsumen dan mengantarkan pakaian yang telah selesai dicuci.

### Cara menjalankan aplikasi
1. npm i
2. npx prisma generate
3. npm run dev

Daftar use case yang diimplementasi dilengkapi dengan nama use case, NIM dan nama penanggung jawab, dan capture screen tampilan layar (jika ada) permodul 

1. 18221046	/Vincent Winarta : melihat pakaian dan harga laundry-nya dan melihat status dan riwayat pesanan
2. 18221048	/Syafiq Ziyadul Arifin : melihat laporan transaksi, manajemen jenis dan harga pakaian, serta mengunggah bukti pembayaran
3. 18221062	/Muhammad Dastin Fauzi : manajemen pesanan, manajemen item dalam keranjang
4. 18221120	/Carissa Tabina Rianda : sign up dan login

Daftar tabel basis data yang diimplementasi dilengkapi dengan nama tabel dan atributnya
1. Nama tabel : Item

    Atribut : 
    * id : Int
    * nama : String
    * harga : Int
    * gambar : String
    * kategori : String
    * keranjangs : Keranjang []
    * pesanans : Pesanan []
2. Nama tabel : Keranjang

    Atribut : 
    * id : Int
    * totalNominal : Int
    * items : Item []
3. Nama tabel : Pesanan
    
    Atribut : 
    * id : Int
    * id_user : Int
    * waktu_pemesanan: DateTime
    * nominal_pesanan: Int
    * status_pesanan : String
    * bukti_pembayaran : String
    * status_pembayaran : String
    * items : {}
4. Nama tabel : User

    Atribut : 
    * id : Int
    * nama : String
    * email : String
    * password : String
    * tipe : Pegawai/Pelanggan

## Link Deployment
[bit.ly/DeployLaundryKuRPLK02G11](bit.ly/DeployLaundryKuRPLK02G11)
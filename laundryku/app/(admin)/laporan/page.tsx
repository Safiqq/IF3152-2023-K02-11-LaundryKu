import Sidebar from '@/components/sidebar';
import Searchbar from '@/components/searchbar';

export default function Laporan() {
  return (
    <main className="flex min-w-screen min-h-screen bg-[#F5F7FF]">
      <Sidebar></Sidebar>
      <div className='basis-1/5'></div>
      <div className="flex flex-col basis-4/5">
        <div className='items-center'>
          <Searchbar isShow={false}></Searchbar>
        </div>
        <div className='px-12'>
          <h1>Laporan Transaksi</h1>
          
        </div>
      </div>
    </main>
  )
}

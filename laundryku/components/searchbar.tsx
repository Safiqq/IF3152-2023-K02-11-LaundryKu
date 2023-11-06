import Image from 'next/image'

export default function Searchbar({ isShow }: { isShow: boolean }) {
    return (
        <div className={`text-gray-500 border-gray-500 border flex mx-24 my-16 gap-6 px-6 py-2 rounded-full w-[60vw] ${!isShow && "invisible"}`}>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/search.svg"
                alt="LaundryKu Logo"
                width={16}
                height={16}
                priority
            />
            <p>Masukkan nama item</p>
        </div>
    );
};
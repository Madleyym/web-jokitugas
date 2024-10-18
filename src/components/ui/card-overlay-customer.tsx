import Image from "next/image";

export default function CardOverlayCustomer({ alias, name, city }: { alias: string, name: string, city: string }) {
    return (
        // fake order just to make the card overlay
        <div
            className="animate-fadeRight flex gap-2 fixed z-50 bg-bg dark:bg-black bottom-4 md:left-4 rounded-full py-2 px-4 shadow-lg dark:shadow-gray-300/5 ring-2 ring-gray-900/5 dark:ring-gray-200/5"
        >
            <Image src={`https://api.dicebear.com/9.x/initials/svg?seed=${alias}`} alt="Order" width={50} height={50} className="rounded-full" loading={"lazy"} />
            <div>
                <p className="font-bold">
                    {name}
                    <span className="font-normal"> dari </span>
                    {city}
                </p>
                <p className="text-[10px] md:text-sm text-neutral-600 dark:text-neutral-400">Baru saja memesan jasa joki tugas di joki-tugasku</p>
            </div>
        </div>
    )
}
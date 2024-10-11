import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function BestDeal() {
    return (
        <div className="flex flex-col md:flex-row px-12 items-center gap-8">
            <Image src="/webinar-amico.svg" alt="Best Choice" width={500} height={500} />
            <div className="flex flex-col gap-4">
                <h1 className="text-6xl font-bold">Harga Mulai <span className="text-fg">50 ribuan!</span></h1>
                <p>
                    <span className="text-fg font-semibold">Joki Tugas</span> menyediakan layanan jasa joki pengerjaan tugas dengan biaya yang murah dan terjangkau di kantong pelajar dan mahasiswa. Biaya pengerjaan tugas dimulai dengan harga 50 ribu saja.
                </p>
                <hr/>
                <p>
                    Masa ngajak keluar doi setiap malam minggu dan bayarin semua kebutuhannya bisa, tapi bayar untuk kebutuhan diri sendiri supaya dapet nilai bagus nggak bisa? Yuk cek harga tugasmu sekarang!
                </p>
                <Link href="/src/components/cardTugas" className="w-max bg-fg py-2 px-4 rounded-full flex items-center gap-2 text-white hover:bg-transparent border border-transparent hover:border-fg hover:text-fg">
                    Cek Harga Tugasmu
                    <Icon icon="mingcute:right-line" />
                </Link>
            </div>
        </div>
    )
}
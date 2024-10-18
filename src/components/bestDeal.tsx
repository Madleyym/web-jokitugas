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
                    <span className="text-fg font-semibold">
                        joki-tugasku.com{" "}
                    </span>
                    menyediakan jasa pengerjaan tugas dengan harga yang ramah di kantong pelajar dan mahasiswa. Mulai dari 50 ribu saja, tugas-tugasmu akan selesai tanpa ribet.
                </p>
                <hr/>
                <p>
                    Masa nongkrong bareng teman dan traktir doi tiap akhir pekan bisa, tapi investasi buat nilai bagus masih mikir-mikir? Yuk, cek harga jasa kami dan biarkan kami bantu menyelesaikan tugasmu sekarang!
                </p>
                <Link href="/src/components/cardTugas" className="w-max bg-fg py-2 px-4 rounded-full flex items-center gap-2 text-white hover:bg-transparent border border-transparent hover:border-fg hover:text-fg">
                    Cek Harga Tugasmu
                    <Icon icon="mingcute:right-line" />
                </Link>
            </div>
        </div>
    )
}
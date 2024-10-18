import Image from "next/image";
import BtnPrimary from "@/components/btnPrimary";

export default function Hero() {
    return(
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-12 items-center">
            <div className="flex flex-col gap-4 px-4 lg:px-0 lg:w-2/3">
                <p className="text-fg">#solusitugas</p>
                <h1 className="text-3xl lg:text-6xl font-bold">Joki <span className="text-fg">Tugasku</span>,</h1>
                <h1 className="text-3xl lg:text-6xl font-bold">Selesai Tanpa Ribet</h1>
                <div>
                    <p><b className="font-bold">Jasa Pengerjaan Tugas</b> terpercaya di Indonesia.</p>
                    <p>Membantu mengerjakan tugas-tugas kuliah, sekolah, dan pekerjaan.</p>
                </div>
                <BtnPrimary href="https://whatsapp" txt="Konsultasikan Sekarang" classname="w-max" />
            </div>

            <div>
                <Image src="/work.png" alt="banner-home" width={1000} height={1000}/>
            </div>
        </div>
    )
}
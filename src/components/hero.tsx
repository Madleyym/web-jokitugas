import Image from "next/image";
import BtnPrimary from "@/components/btnPrimary";

export default function Hero() {
    return(
        <div className="flex flex-col-reverse lg:flex-row px-4 lg:px-12 items-center">
            <div className="flex flex-col gap-4 px-4 lg:px-0 lg:w-2/3">
                <p className="text-fg">#jasajokitugas</p>
                <h1 className="text-3xl lg:text-6xl font-bold">Joki <span className="text-fg">Tugas</span></h1>
                <h1 className="text-3xl lg:text-6xl font-bold">Murah & Cepat</h1>
                <div>
                    <p><b className="font-bold">Jasa Pengerjaan Tugas</b> paling murah dan cepat di Indonesia.</p>
                    <p>Melayani <b className="font-bold">pembuatan tugas</b> mulai dari sekolah s/d kuliah.
                    </p>
                </div>
                <BtnPrimary href="https://whatsapp" txt="Konsultasikan Sekarang" classname="w-max" />
            </div>

            <div>
                <Image src="/work.png" alt="banner-home" width={1000} height={1000}/>
            </div>
        </div>
    )
}
import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex px-12 items-center">
            <div className="flex flex-col gap-4 w-1/2">
                <p className="text-red-700">#jasajokitugas</p>
                <h1 className="text-6xl font-bold">Joki Tugas</h1>
                <h1 className="text-6xl font-bold">Murah & Cepat</h1>
                <div>
                    <p><b className="font-bold">Jasa Pengerjaan Tugas</b> paling murah dan cepat di Indonesia.</p>
                    <p>Melayani <b className="font-bold">pembuatan tugas</b> mulai dari sekolah s/d kuliah.
                    </p>
                </div>
            </div>

            <Image src="/hero-banner.png" alt="banner-home" width={1000} height={1000}/>
        </div>
    )
}
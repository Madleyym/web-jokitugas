import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";

export default function Testimonial() {
    return (
        <div
            className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />
        </div>
    )
}

const testimonials = [
    {
        quote: "Recommended banget deh pokoknya, bwt kalian yang mau joki tugas disini aja, udah pasti hasilnya memuaskan deh percaya sama aku. Aku uda cobain di beberapa tempat lain hasilnya gada yang se-memuaskan disini, percaya deh sama aku.",
        name: "Mahasiswa semester 5",
        title: "Universitas M****"
    },
    {
        quote: "Hasil tugasnya cepat dan tepat waktu. Nggak nyesel deh pilih layanan ini, benar-benar membantu banget!",
        name: "Pelajar kelas 12",
        title: "SMA N****"
    },
    {
        quote: "Kualitas tugasnya sesuai ekspektasi. Nggak cuma asal selesai, tapi juga benar-benar dipahami. Keren banget!",
        name: "Mahasiswa semester 3",
        title: "Politeknik S****"
    },
    {
        quote: "Mereka profesional dan komunikatif, selalu memberi update terkait progres tugas. Mantap banget!",
        name: "Pelajar kelas 9",
        title: "SMP N****"
    },
    {
        quote: "Joki yang paling bisa diandalkan, gak ribet dan cepat tanggap!",
        name: "Mahasiswa semester 7",
        title: "Institut T****"
    },
    {
        quote: "Bener-bener solusi terbaik buat kalian yang kesulitan ngerjain tugas. Harga terjangkau dan kualitas terjaga.",
        name: "Pelajar kelas 11",
        title: "SMA K****"
    }
];

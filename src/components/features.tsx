import {HoverEffect} from "@/components/ui/card-hover-effect";

export default function Features() {
    return (
        <div className="px-4 lg:px-12">
            <HoverEffect items={features} />
        </div>
    )
}

const features = [
    {
        title: "Profesional & Berpengalaman",
        icon: "carbon:tool-kit",
        description: "Layanan kami didukung oleh tim profesional yang berpengalaman yang dapat memberikan hasil yang terbaik dan tepat waktu, sehingga Anda bisa merasa aman mempercayakan tugas-tugas penting Anda kepada kami.",
    },
    {
        title: "Fleksibel & Terjangkau",
        icon: "gala:secure",
        description: "Kami menawarkan berbagai paket layanan yang dapat disesuaikan dengan kebutuhan Anda, baik untuk tugas-tugas harian, tugas akhir, maupun proyek lainnya. Kami juga menyediakan konsultasi untuk memastikan tugas yang dikerjakan sesuai dengan keinginan Anda.",
    },
    {
        title: "Cepat & Tepat waktu",
        icon: "mdi:clock-fast",
        description: "Kami memahami betapa berharganya waktu Anda, terutama saat menghadapi tenggat waktu yang ketat. Dengan menggunakan layanan joki-tugasku.com, Anda tidak perlu khawatir tentang keterlambatan.",
    },
]
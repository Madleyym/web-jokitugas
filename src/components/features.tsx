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
        title: "Tugas Apapun Bisa",
        icon: "carbon:tool-kit",
        description: "Buatin Tugasku telah mengerjakan hampir 90% dari berbagai jenis tugas yang pernah ditanyakan ke tim kami dengan hasil yang sangat baik dan memuaskan.",
    },
    {
        title: "Privasi Terjaga 100%",
        icon: "gala:secure",
        description: "Buatin Tugasku telah berkomitmen untuk selalu menjaga dan meningkatkan keamanan serta privasi pelanggan dalam hal apapun secara jelas dan tegas.",
    },
    {
        title: "Layanan Cepat 24 Jam",
        icon: "mdi:clock-fast",
        description: "Buatin Tugasku akan membantu mengatasi permasalahan tugasmu serta memberikan konsultasi secara cepat dan tepat selama 24 jam melalui WhatsApp dan LINE",
    },
]
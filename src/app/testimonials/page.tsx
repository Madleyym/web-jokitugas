import Hero2 from "@/components/hero2";
import Testimonial from "@/components/testimonial";
import ShortText from "@/components/shortText";

export default function Page() {
    return (
        <div>
            <Hero2 title="Testimonals" txt="Pendapat Pelanggan" />

            <ShortText
                title="Pendapat Pelanggan Kami"
                desc="Kamu masih ragu untuk pakai jasa Buatin Tugasku? Nih ada beberapa pesan dari pelanggan setia kami setelah menggunakan jasa kami. Ditunggu yaa chat kamu di whatsapp kami."
            />

            <Testimonial />
        </div>
    )
}
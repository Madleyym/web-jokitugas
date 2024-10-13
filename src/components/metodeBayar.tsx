import ShortText from "@/components/shortText";
import Banks from "@/components/banks";

export default function MetodeBayar() {
    return (
        <div>
            <ShortText
                classname="bg-white dark:bg-black"
                title="Metode Pembayaran"
                desc="Kamu masih bingung metode pembayaran apa saja yang dapat digunakan saat order joki tugas di Buatin Tugasku? Jangan khawatir, ada banyak metode pembayaran kok! Pembayaran dapat dilakukan melalui Transfer Bank (BCA dan BRI) dan E-Wallet (Dana, Gopay, Ovo, Shopeepay, dan Linkaja)"
            />

            <Banks />
        </div>
    )
}
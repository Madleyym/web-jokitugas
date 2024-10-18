export function FaqItem({question, answer}: { question: string, answer: string }) {
    return (
        <div className="py-5">
            <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>{question}</span>
                    <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                     stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                     stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-neutral-400">{answer}</p>
            </details>
        </div>
    )
}

export default function Faq() {
    return (
        <div
            className="relative mb-20 w-full px-6 pt-6 pb-8 shadow-xl dark:shadow-gray-300/5 ring-1 ring-gray-900/5 dark:ring-gray-300/5 sm:mx-auto max-w-2xl md:max-w-4xl sm:rounded-lg sm:px-10"
        >
            <FaqItem
                question="Apa itu Joki Tugasku?"
                answer="Joki Tugasku adalah layanan jasa pembuatan tugas yang membantu mahasiswa dan pelajar dalam mengerjakan tugas-tugas yang diberikan oleh dosen atau guru."
            />
            <FaqItem
                question="Bagaimana cara memesan jasa Joki Tugasku?"
                answer="Untuk memes an jasa JoKi Tugas, Anda dapat mengunjungi halaman Cara Order dan mengikuti langkah-langkah yang ada."
            />
            <FaqItem
                question="Apakah tugas yang dikerjakan oleh Joki Tugasku aman?"
                answer="Tentu saja! Joki Tugasku menjamin kerahasiaan data dan tugas yang dikerjakan oleh tim profesional kami."
            />
            <FaqItem
                question="Berapa lama waktu pengerjaan tugas?"
                answer="Waktu pengerjaan tugas tergantung pada jenis tugas dan tingkat kesulitan. Namun, kami akan memberikan estimasi waktu pengerjaan ketika memesan jasa kami."
            />
            <FaqItem
                question="Bagaimana cara membayar jasa Joki Tugasku?"
                answer="Anda dapat membayar jasa JoKi Tugas melalui transfer bank atau pembayaran online melalui aplikasi dompet digital."
            />
            <FaqItem
                question="Apakah ada garansi jika tugas tidak sesuai?"
                answer="Kami memberikan garansi revisi gratis jika tugas yang dikerjakan tidak sesuai dengan permintaan Anda."
            />
            <FaqItem
                question="Bagaimana cara menghubungi Buatin Tugasku jika ingin order jasanya?"
                answer="Kamu bisa menghubungi dan tanya-tanya langsung ke kami melalui Instagram @joki_tugasku, WhatsApp 0851 7171 1681, dan Telegram @joki_tugasku (pakai @). Hubungi kami sekarang!"
            />
        </div>
    )
}
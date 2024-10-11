import Link from "next/link";
import {Icon} from "@iconify/react";

function Anchor({ href, icon, text }: { href: string, icon: string, text: string }) {
    return (
        <Link href={href} className="flex gap-2 items-center hover:text-fg my-2 w-max">
            <Icon icon={icon} />
            <p>{text}</p>
        </Link>
    )
}

function Container({ text, children }: { text: string, children: React.ReactNode }) {
    return (
        <div className="lg:w-1/4">
            <h1 className="text-xl font-bold">{text}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between lg:flex-row gap-10 md:gap-0 px-12 bg-white dark:bg-neutral-950 py-20">
            <div className="lg:w-2/4">
                <h1 className="text-2xl font-bold mb-4">Joki <span className="text-fg">Tugas</span></h1>
                <p
                    className=""
                >
                    Buatin Tugaskuadalah penyedia layanan jasa joki tugas    terbaik no 1 di Indonesia dan telah berhasil mengerjakan banyak tugas mulai dari tugas sekolah sampai kuliah.
                </p>
            </div>

            <Container text="Menu">
                <Anchor href="/daftar-tugas" icon="mdi:clipboard-list" text="Daftar Tugas"/>
                <Anchor href="/cara-order" icon="mdi:cart" text="Cara Order"/>
                <Anchor href="/testimonials" icon="mdi:star" text="Testimonial"/>
                <Anchor href="/blog" icon="mdi:book" text="Blog"/>
                <Anchor href="/#faq" icon="mdi:comment-question" text="FAQ"/>
                <Anchor href="/join" icon="mdi:account-group" text="Join Team"/>
            </Container>

            <Container text="Hubungi Kami">
                <Anchor
                    href="https://instagram.com/joki_tugasku"
                    icon="mdi:instagram"
                    text="Instagram"
                />
                <Anchor
                    href="https://wa.me/6281234567890"
                    icon="mdi:whatsapp"
                    text="Whatsapp"
                />
                <Anchor
                    href="https://t.me/jokitugasku"
                    icon="mdi:telegram"
                    text="Telegram"
                />
                <Anchor
                    href="https://tiktok.com/@jokitugasku"
                    icon="ic:baseline-tiktok"
                    text="Tiktok"
                />
                <Anchor
                    href="https://x.com/jokitugasku"
                    icon="simple-icons:x"
                    text="twitter / x"
                />
            </Container>
        </footer>
    )
}
import Link from "next/link";
import ButtonMode from "@/components/btnMode";
import {Icon} from "@iconify/react";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full px-12 py-4 sticky top-0 backdrop-blur-lg z-50">
            <Link href="/" className="text-2xl font-bold">
                Joki <span className="text-fg">Tugas</span>
            </Link>

            <div className="flex gap-6 items-center">
                <Link href="/" className="text-lg">
                    Home
                </Link>
                <Link href="/cara-order" className="text-lg">
                    Cara Order
                </Link>
                <Link href="/testimonials" className="text-lg">
                    Testimonial
                </Link>
                <Link href="/blog" className="text-lg">
                    Blog
                </Link>
                <Link href="/daftar-tugas" className="bg-fg py-2 px-4 rounded-full flex items-center gap-2 text-white hover:bg-transparent border border-transparent hover:border-fg hover:text-fg">
                    Daftar Tugas
                    <Icon icon="mingcute:right-line" />
                </Link>
            </div>

            <div>
                <ButtonMode />
            </div>
        </nav>
    )
}
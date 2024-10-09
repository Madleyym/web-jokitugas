import Link from "next/link";
import ButtonMode from "@/components/btnMode";

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full px-12 py-4 sticky top-0 backdrop-blur-lg    ">
            <Link href="/" className="text-2xl font-bold">
                Joki <span className="text-fg">Tugas</span>
            </Link>

            <div className="flex gap-4">
                <Link href="/" className="text-lg">
                    Home
                </Link>
                <Link href="/about" className="text-lg">
                    Cara Order
                </Link>
                <Link href="/contact" className="text-lg">
                    Testimonial
                </Link>
                <Link href="/blog" className="text-lg">
                    Blog
                </Link>
            </div>

            <ButtonMode />
        </nav>
    )
}
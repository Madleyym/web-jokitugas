"use client";

import Link from "next/link";
import ButtonMode from "@/components/btnMode";
import { Icon } from "@iconify/react";
import { useCallback, useEffect, useState } from "react";
import BtnPrimary from "@/components/btnPrimary";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const controlNavbar = useCallback(() => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [controlNavbar]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`flex justify-between items-center w-full px-6 py-4 sticky top-0 backdrop-blur-lg z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <Link href="/" className="text-2xl font-bold">
                Joki <span className="text-fg">Tugas</span>
            </Link>

            {/* Menu for large screens */}
            <div className="hidden md:flex gap-6 items-center">
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
                <BtnPrimary txt="Daftar Tugas" href="/daftar-tugas" />
            </div>

            {/* Menu button for mobile */}
            <div className="md:hidden flex items-center gap-4">
                <ButtonMode />
                <button onClick={toggleMenu} className="text-2xl">
                    <Icon icon={isMenuOpen ? "mingcute:close-line" : "mingcute:menu-line"} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={`absolute top-16 left-0 w-full shadow-lg p-4 md:hidden ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
                    <Link href="/" className="block py-2 px-4 text-lg bg-bg dark:bg-black rounded-full text-center mb-2" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/cara-order" className="block py-2 px-4 text-lg bg-bg dark:bg-black rounded-full text-center mb-2" onClick={() => setIsMenuOpen(false)}>
                        Cara Order
                    </Link>
                    <Link href="/testimonials" className="block py-2 px-4 text-lg bg-bg dark:bg-black rounded-full text-center mb-2" onClick={() => setIsMenuOpen(false)}>
                        Testimonial
                    </Link>
                    <Link href="/blog" className="block py-2 px-4 text-lg bg-bg dark:bg-black rounded-full text-center mb-2" onClick={() => setIsMenuOpen(false)}>
                        Blog
                    </Link>
                    <BtnPrimary txt="Daftar Tugas" href="/daftar-tugas" classname="justify-center" />
                </div>
            )}

            <div className="hidden md:flex">
                <ButtonMode />
            </div>
        </nav>
    );
}
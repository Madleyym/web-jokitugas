import Link from "next/link";
import {Icon} from "@iconify/react";

export default function FloatingChatButton() {
    return (
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
            <Link href="https://wa.me/6281215148886" target="_blank" rel="noreferrer">
                <button
                    className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-lg text-white">
                    <Icon className="text-xl" icon="logos:whatsapp-icon"/>
                </button>
            </Link>
        </div>
    )
}
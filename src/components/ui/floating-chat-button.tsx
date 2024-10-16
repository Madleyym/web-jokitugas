import Link from "next/link";
import {Icon} from "@iconify/react";

export default function FloatingChatButton() {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Link href="https://wa.me/6281215148886" target="_blank" rel="noreferrer">
                <button className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-lg text-white">
                    {/*<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                    {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />*/}
                    {/*</svg>*/}
                    <Icon className="text-xl" icon="logos:whatsapp-icon" />
                </button>
        </Link>
        </div>
    )
}
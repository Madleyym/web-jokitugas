import {Icon} from "@iconify/react";
import Link from "next/link";

export default function BtnPrimary ({txt, classname} : {txt: string, classname?: string}) {
    return (
        <Link href="/daftar-tugas" className={`${classname} bg-fg py-2 px-4 rounded-full flex items-center gap-2 text-white hover:bg-transparent border border-transparent hover:border-fg hover:text-fg`}>
            {txt}
            <Icon icon="mingcute:right-line" />
        </Link>
    )
}
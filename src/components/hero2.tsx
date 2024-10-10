import {Boxes} from "@/components/ui/background-boxes";
import {cn} from "@/lib/utils";
import React from "react";

export default function Hero2({title, txt}: { title: string, txt: string }) {
    return (
        <div
            className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div
                className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>

            <Boxes/>
            <p className="text-center text-sm my-2 italic text-fg relative z-20">
                {txt}
            </p>
            <h1 className={cn("md:text-5xl text-xl text-white relative z-20")}>
                {title}
            </h1>
        </div>
    )
}
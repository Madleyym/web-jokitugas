"use client";

import React from "react";
import {Boxes} from "@/components/ui/background-boxes";
import {cn} from "@/lib/utils";

export default function page() {
    return (
        <div>
            <div
                className="h-80 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
                <div
                    className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>

                <Boxes/>
                <h1 className={cn("md:text-6xl text-xl text-white relative z-20")}>
                    Daftar Tugas
                </h1>
                <p className="text-center mt-2 text-neutral-300 relative z-20">
                    Tugas Apapun Serba Bisa
                </p>
            </div>

            <div className="max-w-5xl text-center mx-auto mt-12">
                <h2 className="text-4xl font-bold text-fg">Daftar Tugas Unggulan Kami</h2>
                <p className="mt-2">
                    Berikut ini adalah tugas unggulan dan paling diminati oleh pelanggan Kami selama beberapa bulan terakhir.
                </p>
            </div>
        </div>
    );
}
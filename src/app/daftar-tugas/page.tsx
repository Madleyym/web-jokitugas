"use client";

import React from "react";
import {CardTugas} from "@/components/cardTugas";
import Hero2 from "@/components/hero2";

export default function page() {
    return (
        <div>
            <Hero2 title="Daftar Tugas" txt="Tugas Apapun Serba bisa" />

            <div className="max-w-5xl text-center mx-auto mt-12">
                <h2 className="text-4xl font-bold text-fg">Daftar Tugas Unggulan Kami</h2>
                <p className="mt-2">
                    Berikut ini adalah tugas unggulan dan paling diminati oleh pelanggan Kami selama beberapa bulan terakhir.
                </p>
            </div>

            <div className="flex gap-8 justify-center">
                <CardTugas
                    title="Tugas Makalah"
                    description="Makalah adalah karya tulis pelajar atau mahasiswa sebagai laporan hasil pelaksanaan tugas sekolah atau perguruan tinggi."
                    image="/homework.png"
                />
                <CardTugas
                    title="Tugas Esai"
                    description="Esai adalah karangan prosa yang membahas suatu masalah secara sepintas lalu dari sudut pandang penulis."
                    image="/webinar-amico.svg"
                />
                <CardTugas
                    title="Tugas Presentasi"
                    description="Presentasi adalah kegiatan menyampaikan informasi, gagasan, atau laporan kepada orang lain."
                    image="/analytics.svg"
                />
            </div>
        </div>
    );
}
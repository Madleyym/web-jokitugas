import Hero from "@/components/hero";
import Features from "@/components/features";
import Card from "@/components/card";
import BestDeal from "@/components/bestDeal";
import Analytics from "@/components/analytics";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
        <Hero />
        <Features />
        <div className="flex justify-between w-full px-12">
            <Card
                image="/at_work.svg"
                title="Joki Tugas Individu"
                description="Meringankan beban dan pikiran diri sendiri ketika ada tugas mingguan."
            />
            <Card
                image="/work_together.svg"
                title="Joki Tugas Kelompok"
                description="Menghemat waktu untuk berdiskusi dan mengatur jadwal kelompok."
            />
            <Card
                image="/env_study.svg"
                title="Joki Tugas Akhir"
                description="Membantu mendapat nilai yang baik di sisa kesempatan terakhir."
            />
            <Card
                image="/questions.svg"
                title="Joki Tugas Online"
                description="Mengerjakan tugas online seperti quiz, ujian, dan lainnya."

            />
        </div>

        <BestDeal />

        <Analytics />
    </main>
  );
}
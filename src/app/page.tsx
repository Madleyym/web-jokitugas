import Hero from "@/components/hero";
import Features from "@/components/features";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
        <Hero />
        <Features />
    </main>
  );
}
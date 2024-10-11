import Image from "next/image";

export default function Card({ image, title, description }: { image: string, title: string, description: string }) {
    return (
        <div
            className="mb-4 flex flex-col justify-between mx-auto gap-2 max-w-64 p-4 border border-fg rounded-xl transform scale-100 hover:scale-105 transition-transform duration-300">
            <div className="flex items-end h-full">
                <Image src={image} alt="at_work" width={200} height={200} className="mx-auto"/>
            </div>
            <div>
                <h1 className="font-bold text-fg">{title}</h1>
                <p className="text-zinc-950 dark:text-zinc-400 tracking-wide leading-relaxed text-sm text-justify">{description}</p>
            </div>
        </div>
    )
}
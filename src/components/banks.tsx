import {InfiniteMovingCards2} from "@/components/ui/infinite-moving-card2";

export default function Banks() {
    return (
     <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
         <InfiniteMovingCards2 items={banks} direction="right" speed="fast"/>
     </div>
    )
}

const banks = [
    {
        title: "Bank BCA",
        image: "/bank_bca.png",
    },
    {
        title: "Bank BCA",
        image: "/bank_bca.png",
    },
]
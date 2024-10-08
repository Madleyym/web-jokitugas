import {HoverEffect} from "@/components/ui/card-hover-effect";

export default function Features() {
    return (
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={features} />
        </div>
    )
}

const features = [
    {
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, tincidunt eu libero non, luctus pretium mi. Donec nec erat ut purus lacinia tristique.",
        "link": "#"
    },
    {
        title: "Feature 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, tincidunt eu libero non, luctus pretium mi. Donec nec erat ut purus l",
        "link": "#"
    },
    {
        title: "Feature 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo, tincidunt eu libero non, luctus pretium mi. Donec nec erat ut purus lacinia tristique.",
        "link": "#"
    },
]
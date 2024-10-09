"use client";

import {cn} from "@/lib/utils";
import {AnimatePresence, motion} from "framer-motion";
// import Link from "next/link";
import {useState} from "react";
import {Icon} from "@iconify/react";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        icon: string;
        description: string;
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-fg dark:bg-slate-800/[0.8] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: 1,
                                    transition: {duration: 0.15},
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.15, delay: 0.2},
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle title={item.title} icon={item.icon} />
                        <CardDescription>{item.description}</CardDescription>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 bg-bg dark:bg-black overflow-hidden border border-fg group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
                              className,
                              title,
                              icon,
                          }: {
    className?: string;
    title: string;
    icon: string;
}) => {
    return (
        <div className="flex items-center gap-4 text-lg font-bold">
            <Icon icon={icon} className="text-2xl text-fg" />
            <h4 className={cn("text-fg", className)}>
                {title}
            </h4>
        </div>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-950 dark:text-zinc-400 tracking-wide leading-relaxed text-sm text-justify",
                className
            )}
        >
            {children}
        </p>
    );
};

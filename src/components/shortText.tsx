import React from "react";

export default function ShortText ({title, desc, classname} : {title: string, desc: string, classname?: string}) {
    return (
        <div className={`${classname} mx-auto py-20 px-4 md:px-8 lg:px-10`}>
            <span className="h-[4px] w-10 block bg-fg mb-4 rounded"></span>
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                {title}
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                {desc}
            </p>
        </div>
    )
}
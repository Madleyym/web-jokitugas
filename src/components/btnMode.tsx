"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ButtonMode() {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme) {
            setDarkTheme(localTheme === "dark");
        }
    }, []);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkTheme]);

    return (
        <button
            onClick={() => setDarkTheme(!darkTheme)}
            className="rounded-full text-2xl text-yellow-500 dark:text-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900 p-2 transition-colors duration-300 ease-in-out"
        >
            {darkTheme ? (
                <Icon icon="tdesign:sunny" />
            ) : (
                <Icon icon="tdesign:mode-dark" />
            )}
        </button>
    );
}
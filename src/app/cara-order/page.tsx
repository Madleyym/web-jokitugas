import React from "react";
import {CaraOrder} from "@/components/caraOrder";
import MetodeBayar from "@/components/metodeBayar";
import Hero2 from "@/components/hero2";

export default function Page () {
    return (
        <div>
            <Hero2 title="Pemesanan" txt="Cara Order" />

            <CaraOrder />

            <MetodeBayar />
        </div>
    )
}
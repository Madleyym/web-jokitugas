"use client";

import CardOverlayCustomer from "@/components/ui/card-overlay-customer";
import {useEffect, useState} from "react"

export default function OverlayCustomers() {
    const [customer, setCustomer] = useState({ name: "", city: "", initial: "" });
    const [loading, setLoading] = useState(true);

    const getRandomCustomer = () => {
        const randomIndex = Math.floor(Math.random() * customers.length);
        return customers[randomIndex];
    };

    useEffect(() => {
        // Fungsi untuk memperbarui data customer dengan delay
        const updateCustomerWithDelay = () => {
            setLoading(true);

            // Delay selama 10 detik (10000 ms) sebelum memperbarui customer
            setTimeout(() => {
                setCustomer(getRandomCustomer());
                setLoading(false);
            }, 10000);
        };

        // Set data customer pertama kali saat komponen dimuat
        updateCustomerWithDelay();

        // Interval untuk mengganti data customer setiap 20000 detik
        const intervalId = setInterval(() => {
            updateCustomerWithDelay();
        }, 20000);

        // Bersihkan interval saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <div></div>;

    return (
        <CardOverlayCustomer alias={customer.initial} name={customer.name} city={customer.city}/>
    )
}

const customers = [
    { name: "Ahmad", city: "Jakarta", initial: "AH" },
    { name: "Budi", city: "Bandung", initial: "BU" },
    { name: "Citra", city: "Surabaya", initial: "CI" },
    { name: "Dewi", city: "Yogyakarta", initial: "DE" },
    { name: "Eka", city: "Medan", initial: "EK" },
    { name: "Fajar", city: "Bekasi", initial: "FA" },
    { name: "Gina", city: "Tangerang", initial: "GI" },
    { name: "Hadi", city: "Semarang", initial: "HA" },
    { name: "Indah", city: "Malang", initial: "IN" },
    { name: "Joko", city: "Depok", initial: "JO" },
    { name: "Kartika", city: "Makassar", initial: "KA" },
    { name: "Lia", city: "Batam", initial: "LI" },
    { name: "Mira", city: "Palembang", initial: "MI" },
    { name: "Nanda", city: "Padang", initial: "NA" },
    { name: "Oka", city: "Pontianak", initial: "OK" },
    { name: "Putu", city: "Denpasar", initial: "PU" },
    { name: "Rani", city: "Banjarmasin", initial: "RA" },
    { name: "Sari", city: "Samarinda", initial: "SA" },
    { name: "Tono", city: "Mataram", initial: "TO" },
    { name: "Umi", city: "Manado", initial: "UM" },
    { name: "Vina", city: "Balikpapan", initial: "VI" },
    { name: "Wawan", city: "Pekanbaru", initial: "WA" },
    { name: "Yulia", city: "Banda Aceh", initial: "YU" },
    { name: "Zainal", city: "Jayapura", initial: "ZA" },
    { name: "Ayu", city: "Palangkaraya", initial: "AY" },
    { name: "Bayu", city: "Tanjung Pinang", initial: "BA" },
    { name: "Cici", city: "Ambon", initial: "CI" },
    { name: "Dian", city: "Kupang", initial: "DI" },
    { name: "Erwin", city: "Bandar Lampung", initial: "ER" },
    { name: "Farah", city: "Serang", initial: "FA" },
    { name: "Gilang", city: "Cirebon", initial: "GI" },
    { name: "Hanif", city: "Cilegon", initial: "HA" },
    { name: "Ira", city: "Jambi", initial: "IR" },
    { name: "Jefri", city: "Tasikmalaya", initial: "JE" },
    { name: "Kiki", city: "Kediri", initial: "KI" },
    { name: "Lisa", city: "Purwokerto", initial: "LI" },
    { name: "Miko", city: "Magelang", initial: "MI" },
    { name: "Nadia", city: "Probolinggo", initial: "NA" },
    { name: "Omar", city: "Blitar", initial: "OM" },
    { name: "Putri", city: "Madiun", initial: "PU" },
    { name: "Rama", city: "Salatiga", initial: "RA" },
    { name: "Santi", city: "Sukabumi", initial: "SA" },
    { name: "Tari", city: "Gorontalo", initial: "TA" },
    { name: "Ujang", city: "Palopo", initial: "UJ" },
    { name: "Vito", city: "Lubuklinggau", initial: "VI" },
    { name: "Wati", city: "Bengkulu", initial: "WA" },
    { name: "Yudi", city: "Ternate", initial: "YU" },
    { name: "Zahra", city: "Singaraja", initial: "ZA" },
    { name: "Agus", city: "Parepare", initial: "AG" },
    { name: "Bambang", city: "Palu", initial: "BA" },
    { name: "Cahyo", city: "Kendari", initial: "CA" },
    { name: "Dinda", city: "Sorong", initial: "DI" },
    { name: "Elis", city: "Bau-bau", initial: "EL" },
    { name: "Fauzan", city: "Langsa", initial: "FA" },
    { name: "Guntur", city: "Sabang", initial: "GU" },
    { name: "Hana", city: "Binjai", initial: "HA" },
    { name: "Irfan", city: "Pematangsiantar", initial: "IR" },
    { name: "Juni", city: "Tebing Tinggi", initial: "JU" },
    { name: "Kirana", city: "Cilacap", initial: "KI" },
    { name: "Lukman", city: "Batu", initial: "LU" },
    { name: "Maya", city: "Pasuruan", initial: "MA" },
    { name: "Nia", city: "Mojokerto", initial: "NI" },
    { name: "Oni", city: "Subang", initial: "ON" },
    { name: "Prima", city: "Tuban", initial: "PR" },
    { name: "Rina", city: "Sidoarjo", initial: "RI" },
    { name: "Surya", city: "Gresik", initial: "SU" },
    { name: "Tini", city: "Kudus", initial: "TI" },
    { name: "Usman", city: "Jepara", initial: "US" },
    { name: "Vera", city: "Klaten", initial: "VE" },
    { name: "Wira", city: "Karawang", initial: "WI" },
    { name: "Yosi", city: "Majalengka", initial: "YO" },
    { name: "Zaenal", city: "Kuningan", initial: "ZA" },
    { name: "Anita", city: "Purwakarta", initial: "AN" },
    { name: "Bobby", city: "Banjar", initial: "BO" },
    { name: "Celine", city: "Lhokseumawe", initial: "CE" },
    { name: "Dodo", city: "Tegal", initial: "DO" },
    { name: "Eli", city: "Jember", initial: "EL" },
    { name: "Feri", city: "Banyuwangi", initial: "FE" },
    { name: "Gisel", city: "Maluku Tengah", initial: "GI" },
    { name: "Hari", city: "Wonosobo", initial: "HA" },
    { name: "Intan", city: "Sleman", initial: "IN" },
    { name: "Jati", city: "Pacitan", initial: "JA" },
    { name: "Kinan", city: "Gunungkidul", initial: "KI" },
    { name: "Lilis", city: "Boyolali", initial: "LI" },
    { name: "Mawan", city: "Bengkalis", initial: "MA" },
    { name: "Nova", city: "Samosir", initial: "NO" },
    { name: "Olin", city: "Pangkal Pinang", initial: "OL" },
    { name: "Pipit", city: "Serdang Bedagai", initial: "PI" },
    { name: "Riko", city: "Luwuk", initial: "RI" },
    { name: "Sasa", city: "Mamuju", initial: "SA" },
    { name: "Tomi", city: "Manokwari", initial: "TO" },
    { name: "Ulfa", city: "Waingapu", initial: "UL" },
    { name: "Via", city: "Atambua", initial: "VI" },
    { name: "Wulan", city: "Kefamenanu", initial: "WU" },
    { name: "Yogi", city: "Ende", initial: "YO" },
    { name: "Zikri", city: "Ruteng", initial: "ZI" },
    { name: "Aldo", city: "Sumbawa", initial: "AL" },
    { name: "Bella", city: "Bima", initial: "BE" },
    { name: "Cipta", city: "Dompu", initial: "CI" },
    { name: "Desi", city: "Rote Ndao", initial: "DE" },
    { name: "Elang", city: "Ngada", initial: "EL" }
];


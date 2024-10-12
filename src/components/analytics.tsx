import {Icon} from "@iconify/react";

export const Card = ({icon, title, detail}: { icon: string, title: string, detail: string }) => {
    return (
        <div className="text-center flex flex-col text-white">
            <div className="text-2xl lg:text-6xl font-bold w-full text-center">
                <Icon icon={icon} className="mx-auto -mb-8 text-zinc-100/45"/>
                <h4>{title}</h4>
            </div>
            <p className="text-sm">{detail}</p>
        </div>
    )
}

export default function Analytics() {
    return (
        <div className="bg-fg flex gap-4 p-4 mx-4 rounded-2xl my-20">
            <Card icon="mdi:account-student" title="500" detail="Total Pelanggan"/>
            <Card icon="basil:book-open-solid" title="1200" detail="Tugas Diselesaikan"/>
            <Card icon="fa-solid:university" title="50" detail="Universitas Berbeda"/>
            <Card icon="el:group" title="100" detail="Tim Profesional"/>
        </div>
    )
}
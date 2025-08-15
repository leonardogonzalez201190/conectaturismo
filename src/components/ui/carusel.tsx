"use client"

import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import "@/app/pagination-frames.css"

function Pagination({ index, onSelect }: { index: number, onSelect: (index: number) => void }) {
    return <div className="absolute px-5 lg:px-20 flex items-center justify-between gap-5 bottom-8 text-white w-full z-20">
        <div className="flex items-center gap-4">
            {[0, 1, 2].map((i) => (
                <button
                    key={i}
                    className={cn(
                        "w-6 h-6 flex items-center justify-center bg-blue-50/5 cursor-pointer rounded-full",
                        "after:content-[''] after:absolute after:w-1 after:h-1 after:bg-white after:rounded-full",
                        i === index && "bg-white after:bg-cnt-overlay after:w-2.5 after:h-2.5 after:transition-all duration-1000 after:scale-110"
                    )}
                    onClick={() => onSelect(i)} />
            ))}
        </div>
        <div className="flex items-center gap-5">
            <button className="paginationLeft flex items-center justify-center" onClick={() => onSelect((index > 0 ? index - 1 : 2) % 3)}>
                <ChevronLeftIcon className="size-6" />
            </button>
            <button className="paginationRight flex items-center justify-center" onClick={() => onSelect((index + 1) % 3)}>
                <ChevronRightIcon className="size-6" />
            </button>
        </div>
    </div>
}

function MoreButton({ link }: { link: string }) {
    return (
        <Link href={link} className="font-normal text-sm flex items-center justify-center gap-6 max-w-min border-2 border-cnt-link rounded-[28px] p-2 group hover:cursor-pointer hover:border-cnt-link-hover">
            <span className="whitespace-nowrap pl-6 group-hover:text-cnt-link-hover">Descubre más</span>
            <div className="rounded-full bg-cnt-link group-hover:bg-white h-9 w-9 flex items-center justify-center">
                <ArrowRightIcon className="size-4 group-hover:text-cnt-link-hover" />
            </div>
        </Link>
    );
}

export function CarouselDemo() {

    const images = [
        {
            title: "Diseño de páginas webs para agencia de viajes online",
            description: "Diseño web y motores de reserva con integraciones XML/API en vuelos, hoteles, actividades, vuelo + hotel, ferries, circuitos...",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/consultoria-y-asesoria-para-agencias-de-viajes-online.jpg",
            link: "https://www.conectaturismo.com/diseno-web-para-agencias-de-viajes-online/"
        },
        {
            title: "Motores de reserva para agencias de viajes",
            description: "Gestiona y vende productos turísticos en línea",
            img: "https://www.conectaturismo.com/wp-content/uploads/2025/05/Diseno-sin-titulo-5.png",
            link: "https://www.conectaturismo.com/motores-de-reserva-para-agencias-de-viajes/"
        },
        {
            title: "Páginas web para agencias de viajes online",
            description: "Desarrollamos páginas web 100 % modulares y personalizadas",
            img: "https://www.conectaturismo.com/wp-content/uploads/2025/05/Diseno-sin-titulo-4.png",
            link: "https://www.conectaturismo.com/paginas-web-para-agencias-de-viajes-online/"
        }
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [index, images.length]);

    const handleSelect = (index: number) => {
        setIndex(index);
    }

    return (
        <div className="relative w-full mx-auto overflow-hidden aspect-video" style={{ height: "60vh", width: "100%" }}>
            <div className="absolute top-0 left-0 w-full h-full bg-cnt-overlay z-10" style={{ mixBlendMode: "hard-light" }} />
            {images.map((image, i) => (
                <div key={i}>
                    <div
                        className={cn(
                            "flex flex-col gap-2 text-white absolute top-[8%] py-6 lg:top-[25%] px-5 lg:px-20 w-full text-center",
                            i === index && "fade-in-right z-20", i !== index && "fade-out"
                        )}>
                        <Link className="hover:text-cnt-link-hover text-[45px] leading-[1.2] font-semibold" href={image.link}>
                            {image.title}
                        </Link>
                        <p className="font-normal text-cnt-text-primary text-[22px] leading-[1.2]">{image.description}</p>
                        <div className="mt-3 flex items-center justify-center">
                            <MoreButton link={image.link} />
                        </div>
                    </div>
                    <div
                        id="carusel-img"
                        style={{ backgroundImage: `url(${image.img})` }}
                        className={cn("w-full h-full absolute", i === index && "fade-in", i !== index && "fade-out")} />
                </div>
            ))}
            <Pagination index={index} onSelect={handleSelect} />
        </div>
    );
}

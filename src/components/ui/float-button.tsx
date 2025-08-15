"use client"

import { Calendar, X } from "lucide-react";
import { useEffect, useState } from "react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function FloatButton() {

    const [flag, setFlag] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const alturaTotal = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const alturaVentana = window.innerHeight;

            const puntoActivacion = alturaTotal * 0.6;

            if (scrollTop + alturaVentana >= puntoActivacion && !flag) {
                setOpen(true);
                setFlag(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [flag]);

    const onOpenChange = (open: boolean) => {
        setOpen(open);
        setFlag(true);
    };

    return (
        <Popover open={open} onOpenChange={onOpenChange}>
            <PopoverTrigger asChild>
                <button className="fixed bottom-5 right-5 z-50" onClick={() => onOpenChange(!open)}>
                    <div className="cursor-pointer w-12 h-12 bg-cnt-link-hover text-white flex items-center justify-center rounded-full shadow-lg hover:bg-cnt-secondary transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        {open ? <X className="size-5" /> : <Calendar className="size-5" />}
                    </div>
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 fade-in-right relative p-5" sideOffset={20} align="end">
                <X className="size-5 absolute top-5 right-5 cursor-pointer" onClick={() => setOpen(false)} />
                <div className="flex flex-col gap-4">
                    <div className="font-tilium text-xl">Te asesoramos</div>
                    <img width={128} height={132} src="https://www.conectaturismo.com/wp-content/uploads/2022/02/flores-292x300.png" alt="" />
                    <small>José Antonio Flores</small>
                    <div>
                        Agenda una reunión con uno de nuestros asesores y <span className="font-medium">re·evoluciona</span> tu proyecto. <a href="#" className="text-cnt-link hover:underline">Elige cuándo.</a>
                    </div>
                    <button className="cursor-pointer w-full bg-cnt-link text-white py-2 rounded hover:bg-cnt-link-hover transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        Agendar reunión
                    </button>
                </div>
            </PopoverContent>
        </Popover>);
}   
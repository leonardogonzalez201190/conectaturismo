"use client";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SectionClients() {
    const [active, setActive] = useState(0);
    const items = [
        {
            title: "Giratur",
            subtitle: "Agencia de viajes Mayorista",
            description: [
                { title: "Necesidades", description: "Canal de venta online que le permita vender producto entre sus agencias colaboradoras y además disponer del mismo vía conexión XML para distribución a terceros; todo ello en varias divisas según mercado." },
                { title: "Solución", description: "Integración de nuestra herramienta de carga de tours, con sistema multidivisa. Además cuenta con el sistema especial B2B, lo que le permite un control total de las reservas y comisiones de sus asociados." }
            ],
            img: "https://www.conectaturismo.com/wp-content/uploads/2025/05/Diseno-sin-titulo-6.png"
        },
        {
            title: "Servivuelo",
            subtitle: "Consolidador aéreo líder en España",
            description: [
                { title: "Necesidades", description: "Actualizar la imagen corporativa sin perder la esencia." },
                { title: "Solución", description: "Renovación integral de la marca, comenzando por el imagotipo hasta elementos físicos / papelería." }
            ],
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/11/servivuelo-nueva-web.jpg"
        },
        {
            title: "Travelwings",
            subtitle: "Agencia de viajes minorista de referencia en Portugal",
            description: [
                { title: "Necesidades", description: "Actualizar imagen y ampliar funcionalidades de venta online." },
                { title: "Solución", description: "Rediseño completo del portal e integración de nuestros motores de reserva de Tours, Vuelos, Hotel y Vuelo más hotel" }
            ],
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/travelwings-homect.jpg"
        },
        {
            title: "Todoferry",
            subtitle: "Web con integración de sistema de venta de billetes de ferry",
            description: [
                { title: "Necesidades", description: "Desarrollo de un canal de venta online para cliente final y agentes/agencias de viajes" },
                { title: "Solución", description: "Integración de nuestro sistema de billetes de ferry con conexión a las principales navieras del mercado nacional." }
            ],
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/orevia-front.jpg"
        }
    ]

    return (
        <section className="max-w-[85rem] mx-auto flex flex-col-reverse lg:flex-col px-2 lg:px-0 gap-4">
            <div className="relative min-h-[40rem] lg:min-h-[30rem]">
                {items.map((item, index) => (
                    <div key={index}
                        className={cn("absolute top-0 flex flex-col lg:grid lg:grid-cols-[60%_35%] lg:gap-16", index === active && "z-20", index !== active && "")}>
                        <div className={cn("h-full w-full p-10", index === active && "imagen-expandible z-20", index !== active && "fade-out")}>
                            <img src={item.img} alt={item.title} className="rounded-xl w-full h-full object-cover" />
                        </div>
                        <div className={cn("flex flex-col px-3 lg:px-0", index === active && "fade-in-up z-20", index !== active && "fade-out")}>
                                <h1 className="group/title cursor-pointer font-bold text-[40px] relative max-w-min pr-5">
                                    <span className="absolute bottom-3 right-0 h-3 w-3 rounded-full bg-cnt-link group-hover/title:bg-cnt-link-hover"></span>
                                    <span className="absolute h-1 w-full bottom-1 left-0 bg-cnt-primary"></span>
                                    {item.title}
                                </h1>
                                <div className="flex flex-col gap-3 pt-3">
                                    <h2 className="leading-[1.2] font-semibold text-[22px] text-cnt-text-primary">{item.subtitle}</h2>
                                    {item.description.map((item, index) => (
                                        <div key={index} className="pt-2">
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                                <button className="uppercase [&:hover_svg]:translate-x-2 cursor-pointer mt-12 bg-cnt-primary hover:bg-transparent! hover:text-cnt-link-hover hover:border-cnt-link-hover font-semibold text-[15px] flex items-center gap-2 border rounded-3xl px-6 py-3 max-w-min whitespace-nowrap text-white">
                                    Ver caso de estudio
                                    <ArrowRightIcon className="size-4 transition-all duration-300" />
                                </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="relative p-4 flex items-center gap-2 justify-center">
                <button
                    className="[&:hover_svg]:scale-150 cursor-pointer p-2 px-4 border rounded-2xl flex items-center gap-2 hover:bg-cnt-link-hover text-white bg-cnt-link"
                    onClick={() => setActive((active === 0) ? items.length - 1 : active - 1)}>
                    <ChevronLeftIcon className="transition-all duration-300"/>
                    Prev
                </button>
                <button
                    className="[&:hover_svg]:scale-150 cursor-pointer p-2 px-4 border rounded-2xl flex items-center gap-2 hover:bg-cnt-link-hover text-white bg-cnt-link"
                    onClick={() => setActive((active === items.length - 1) ? 0 : active + 1)}>
                    Next
                    <ChevronRightIcon className="transition-all duration-300"/>
                </button>
                <div className="absolute right-2">
                    <span className="text-4xl underline">0{active + 1}</span> 
                    <span className="px-1.5">/</span>
                    <span className="text-muted-foreground">0{items.length}</span></div>
            </div>
        </section>
    );
}
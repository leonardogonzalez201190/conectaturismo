import Image from "next/image";
import { DropdownMenuDemo } from "../ui/nav-menu";
import { Button } from "../ui/button";

import MenuMobile from "../ui/menu-mobile";


export default function SectionHeader() {

    const soyItems = [
        { label: "Agencia de viajes" },
        { label: "Mayorista de viajes" },
        { label: "OTA ( agencia de viajes online )" },
        { label: "Touroperator" }
    ]

    const productItems = [
        { label: "Diseño web para agencias de viajes online" },
        { label: "Gestor de producto propio" },
        {
            label: "Motores de reserva",
            submenu: [
                { label: "Actividades" },
                { label: "Circuitos" },
                { label: "Hoteles" },
                { label: "Seguros" },
                { label: "Vuelos" },
                { label: "Vuelo más circuito" },
                { label: "Vuelo más hotel" },
                { label: "Paquetes vacacionales" },
            ]
        },
        { label: "Integraciones XML de para agencias de viajes online" },
        { label: "Sistema de gestión para grupos" },
    ]

    return <header className="px-1.5 pr-2 sticky z-50 top-0 left-0 right-0 bg-cnt-primary h-[71px] text-primary-foreground w-full flex items-center justify-between shadow-cnt-header">
        <a href="https://www.conectaturismo.com/">
            <Image src="/logo.svg" alt="Logo" width={200} height={80} />
        </a>
        <div className="items-center gap-7 px-3 h-full hidden lg:flex">
            <DropdownMenuDemo
                title="Soy"
                items={soyItems}
            />
            <DropdownMenuDemo
                title="Productos"
                items={productItems}
            />
            <a href="https://www.conectaturismo.com/" className="hover:text-cnt-link font-light text-[15px]">Clientes</a>
            <a href="https://www.conectaturismo.com/" className="hover:text-cnt-link font-light text-[15px]">Noticias</a>
            <a href="https://www.conectaturismo.com/" className="hover:text-cnt-link font-light text-[15px]">KIT DIGITAL</a>
            <Button size="lg" className="rounded-3xl hover:text-cnt-link font-light text-[15px]">Contacto</Button>
        </div>
        <MenuMobile soyItems={soyItems} productItems={productItems} />
    </header>
}
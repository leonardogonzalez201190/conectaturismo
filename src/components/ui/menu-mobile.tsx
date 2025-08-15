"use client"
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDownIcon, ChevronRight } from "lucide-react";
import { useState } from "react";

function MenuItem({ label, items, sub }: { label: string, items?: { label: string }[], sub?: boolean }) {
    const [open, setOpen] = useState(false);
    const Tag = items ? "div" : "a";
    return <div className={cn(
        "group flex items-center flex-col w-full cursor-pointer py-1",
        sub ? "bg-white" : ""
    )}>
        <Tag href="https://www.conectaturismo.com/" className="px-5 flex items-center justify-between w-full" onClick={() => setOpen(!open)}>
            <span className={cn("flex items-center gap-1 group-hover:text-cnt-link", sub ? "text-[12px] text-cnt-link hover:text-cnt-link-hover px-5" : "")}>
                {sub && <ChevronRight className="size-5" />}
                {label}
            </span>
            {items && <ChevronDownIcon className="size-5 group-hover:text-cnt-link" />}
        </Tag>
        {items && open && <div className="w-full flex flex-col items-center">
            {items.map((item, index) => (
                <MenuItem sub={true} key={index} label={item.label} />
            ))}
        </div>}
    </div>
}


export default function MenuMobile({ soyItems, productItems }: { soyItems: { label: string }[], productItems: { label: string }[] }) {
    const [open, setOpen] = useState(false);

    return <div className="lg:hidden">
        <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer border border-primary h-10 w-10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground">
            {open ? <X className="size-6 text-cnt-link-hover" /> : <Menu className="size-6 text-cnt-link-hover" />}
        </button>
        {open && <div>
            <div className="*:border-b *:border-gray-700 *:last:border-b-0 flex flex-col items-center justify-center fixed top-[72px] left-0 right-0 z-50 bg-gray-900 h-auto">
                <MenuItem label="Soy" items={soyItems} />
                <MenuItem label="Productos" items={productItems} />
                <MenuItem label="Clientes" />
                <MenuItem label="Noticias" />
                <MenuItem label="KIT DIGITAL" />
                <MenuItem label="Contacto" />
            </div>
        </div>}
    </div>
}
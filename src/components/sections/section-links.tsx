import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";


export default function SectionLinks() {
    const links = [
        {
            title: "Agencia de viajes",
            link: "https://www.conectaturismo.com/"
        },
        {
            title: "Mayorista de viajes",
            link: "https://www.conectaturismo.com/"
        },
        {
            title: "OTA ( agencia de viajes online )",
            link: "https://www.conectaturismo.com/"
        },
        {
            title: "Touroperator",
            link: "https://www.conectaturismo.com/"
        }
    ]

    return (
        <div className="px-2 lg:px-0 grid grid-cols-2 lg:flex items-center justify-center gap-4 mt-10">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.link}
                    className="bg-cnt-link/5 font-semibold text-cnt-link border rounded px-2 py-1 hover:text-cnt-link-hover! text-[15px] flex items-center gap-2 [&:hover>svg]:translate-x-2">
                    {link.title}
                    <ArrowRightIcon className="size-5 font-bold" />
                </Link>
            ))}
        </div>
    );      
}

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import DivFadeUp from "./div-fade-up";

export default function ProductCard({
    title,
    description,
    img,
    link,
    index,
    noLink
}:
    {
        title: string,
        description: string,
        img: string,
        link: string,
        index: number,
        noLink?: boolean
    }) {

    return (
        <DivFadeUp index={index} className="p-1 flex flex-col gap-4 invisible justify-between">
            <div className="h-28 cursor-pointer [&:hover~div_h1]:text-cnt-link">
                <img data-img src={img} className="size-28 hover:scale-90 transition-all duration-300" alt="" />
            </div>
            <div className="flex flex-col flex-1 gap-1 hover:text-cnt-link-hover cursor-pointer">
                <h1 className="font-bold md:text-xl whitespace-nowrap">{title}</h1>
                <p className="text-[17px] font-light leading-[1.2] whitespace-break-spaces font-tilium">{description}</p>
                {!noLink && <Link href={link} className="text-cnt-link font-semibold text-[15px] flex items-center gap-2 [&:hover>svg]:translate-x-2">
                    <span className="font-normal">Descubre <strong className="font-semibold">más</strong></span>
                    <ArrowRightIcon className="size-5 font-bold" />
                </Link>}
            </div>
            {index === 1 && <DivFadeUp toDown index={index + 1} className="h-12 border-t flex items-center justify-between border-dashed text-sm">
                <div>Elige <span className="font-semibold px-0.5">según producto:</span></div>
                <ArrowRightIcon className="size-5 font-bold rotate-90" />
            </DivFadeUp>}
        </DivFadeUp>
    );
}
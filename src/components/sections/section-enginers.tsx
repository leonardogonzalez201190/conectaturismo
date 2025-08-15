import DivFadeUp from "../ui/div-fade-up";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
    
export default function SectionEnginers() {
    const products = [
        {
            title: "Motor de reserva de",
            description: "actividades",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-actividades.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "circuitos",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-circuitos.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "ferries",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-ferries.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "hoteles",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-hoteles.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "seguros",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-seguros.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "vuelos",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-vuelos.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "vuelos + circuitos",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-vuelo-circuito.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "vuelos + hotel",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine-vuelo-hotel.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Motor de reserva de",
            description: "Paquetes vacacionales",
            img: "https://www.conectaturismo.com/wp-content/uploads/2025/05/booking-engine-costas.png",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        }
    ]
    return (
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-4 justify-center max-sm:px-4">
            {products.map((product, index) => (
                <DivFadeUp key={index} index={index} className="p-1 flex flex-col invisible justify-between *:cursor-pointer">
                    <div className="h-20 cursor-pointer [&:hover~div_h1]:text-cnt-link">
                        <img data-img src={product.img} className="w-12 h-12 hover:scale-90 transition-all duration-300" alt="" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1 hover:text-cnt-link-hover cursor-pointer">
                        <h1 className="font-bold text-xl leading-[1.2]">{product.title}</h1>
                        <p className="font-light text-[19px] first-letter:uppercase leading-[1.2] font-tilium">{product.description}</p>
                        <Link href={product.link} className="text-cnt-link font-semibold text-[15px] flex items-center gap-2 [&:hover>svg]:translate-x-2">
                            <span className="font-normal">Ver <strong className="font-semibold">más</strong></span>
                            <ArrowRightIcon className="size-5 font-bold" />
                        </Link>
                    </div>
                </DivFadeUp>
            ))}
        </div>
    );
}
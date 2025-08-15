import { MessageSquareIcon } from "lucide-react";


function Count() {
    return (
        <span className="absolute top-0 z-10 left-0 d-flex align-items-center mr-2">
            <div className="flex items-center gap-1 bg-gray-700 p-1.5 py-0.5">
                <MessageSquareIcon className="size-3 text-white!" />
                <span className="text-xs text-white!">0</span>
            </div>
        </span>
    );
}

export default function SectionInformation() {
    return (
        <section className="pt-40 max-w-[85rem] mx-auto flex flex-col gap-14">
            <div className="flex flex-col text-end">
                <span className="font-semibold font-tilium text-[22px]">Te damos la mejor info para <span className="font-semibold bg-cnt-primary text-white px-2 mx-1 whitespace-nowrap">potenciar al máximo</span> tu negocio online</span>
                <span className="text-muted-foreground font-montserrat">Páginas web para agencias de viajes online</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-0 gap-2">
                <div className="relative group">
                    <img
                        className="h-96 object-cover"
                        src="https://www.conectaturismo.com/wp-content/uploads/2025/08/20250813_1329_Microconversiones-en-Agencias-de-Viajes_simple_compose_01k2hjyrmre4zv0z5na4tjhtt2-1024x683.png"
                        alt="" />
                    <Count />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/90 transition-all duration-1000 group-hover:from-black/25 group-hover:to-black/95"></div>
                    <div className="absolute bottom-1 leading-[1.2] left-2 text-white px-1 font-tilium text-xl">
                        Microconversiones: cómo medir lo que importa en tu agencia de viajes
                    </div>
                </div>
                <div className="relative group">
                    <img
                        className="h-96 object-cover"
                        src="https://www.conectaturismo.com/wp-content/uploads/2025/08/20250807_1048_Analisis-Sentimental-IA_simple_compose_01k21vcqa8er6tj879tqa78cxz-1024x683.png"
                        alt="" />
                    <Count />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/90 transition-all duration-1000 group-hover:from-black/25 group-hover:to-black/95"></div>
                    <div className="absolute bottom-1 leading-[1.2] left-2 text-white px-1 font-tilium text-xl">
                        IA para análisis de sentimientos en tu agencia de viajes
                    </div>
                </div>
                <div className="relative group">
                    <img
                        className="h-96 object-cover"
                        src="https://www.conectaturismo.com/wp-content/uploads/2025/07/20250707_0950_Search-Console-en-Agencia_simple_compose_01jzhxr5pmfrja18q2h40pdb7f-1024x683.png"
                        alt="" />
                    <Count />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/90 transition-all duration-1000 group-hover:from-black/25 group-hover:to-black/95"></div>
                    <div className="absolute bottom-1 leading-[1.2] left-2 text-white px-1 font-tilium text-xl">
                        Search Console: la herramienta clave para mejorar la visibilidad online de las agencias de viajes
                    </div>
                </div>
            </div>
        </section>
    );
}
import DivFadeUp from "../ui/div-fade-up";

export default function SectionAdvantages() {
    const products = [
        {
            title: "Multidivisa, Multi-idioma",
            description: "escalable",
            footer: "Añada idiomas y monedas como desee. Amplíe productos según necesidades.",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/icn-escalable.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Gestiónelo todo desde",
            description: "cualquier lugar",
            footer: "Solo necesitas una conexión a internet para trabajar.",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/icn-sistemas-cloud.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Con sus propias claves",
            description: "de proveedores XML",
            footer: "Trabaje según sus propias negociaciones con los distintos proveedores.",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/icn-claves-xml.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        },
        {
            title: "Diseño de sitio web",
            description: "personalizado",
            footer: "Refleje la identidad de su empresa con los diseños a medida.",
            img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/diseno-web-a-medida.svg",
            link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
        }
    ]
    return (
        <div className="max-w-[85rem] mx-auto pt-6 grid grid-cols-4 max-md:grid-cols-2 max-sm:flex max-sm:flex-wrap gap-4 justify-center max-sm:px-4">
            {products.map((product, index) => (
                <DivFadeUp key={index} index={index} className="p-1 flex flex-col items-center md:items-start invisible justify-between *:cursor-pointer">
                    <div className="h-32 cursor-pointer [&:hover~div_h1]:text-cnt-link">
                        <img data-img src={product.img} className="w-20 h-20 hover:scale-90 transition-all duration-300" alt="" />
                    </div>
                    <div className="flex flex-col items-center md:items-start flex-1 gap-1 hover:text-cnt-link-hover cursor-pointer">
                        <h1 className="font-bold text-xl leading-[1.2]">{product.title}</h1>
                        <p className="font-light text-[19px] first-letter:uppercase leading-[1.2] font-tilium">{product.description}</p>
                        <div className="text-muted-foreground leading-[20px] text-[15px] text-center md:text-start">{product.footer}</div>
                    </div>
                </DivFadeUp>
            ))}
        </div>
    );
}
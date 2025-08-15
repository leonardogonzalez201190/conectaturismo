import DivFadeUp from "../ui/div-fade-up";

export default function SectionSomos() {

    const items = [
        {
            title: "Empresa",
            subtitle: "internacional",
            description: "Presencia en más de 10 países de Europa y América"
        },
        {
            title: "Equipo Multi",
            subtitle: "disciplinar",
            description: "Diferentes mentes en busca de un objetivo común. Diseñadores, programadores, mercadólogos..."
        },
        {
            title: "Cuestión de",
            subtitle: "calidad",
            description: "Innovación constante y atención directa"
        },
        {
            title: "Altamente",
            subtitle: "especializados",
            description: "Proyectos modulares para intermediarios del turismo"
        }
    ]


    return (
        <section className="pt-40 max-w-[85rem] mx-auto flex flex-col lg:grid lg:grid-cols-[30%_70%] lg:gap-14 gap-7">
            <div className="flex items-center justify-center lg:justify-end">
                <div className="fade-in-right font-montserrat font-bold flex lg:flex-col items-start lg:leading-[100px] text-[4rem] lg:text-[11rem] text-cnt-link">
                    <span className="relative">so<span className="hidden lg:block after:absolute after:h-3 after:w-14 after:bg-cnt-link after:top-[55%] after:-right-16" /></span>
                    <span>mos</span>
                </div>
            </div>
            <div className="flex flex-col gap-16">
                <DivFadeUp index={0} className="font-tilium text-[18px] lg:text-[22px] px-2 text-cnt-primary font-semibold">
                    Expertos en <span className="font-semibold bg-cnt-primary text-white px-2 lg:mx-1 whitespace-nowrap">soluciones tecnológicas para agencias de viajes online</span> Diseñamos nuestros proyectos de forma personalizada y totalmente a medida
                </DivFadeUp>
                <div className="grid grid-cols-4 gap-2 px-2 lg:px-0">
                        {items.map((item, index) => (
                            <DivFadeUp index={index + 2} key={index} className="flex flex-col">
                                <h2 className="font-semibold lg:text-xl leading-[1.2]">{item.title}</h2>
                                <h3 className="font-tilium text-[18px]">{item.subtitle}</h3>
                                <p className="font-montserrat text-muted-foreground mt-5 xs:text-sm">{item.description}</p>
                            </DivFadeUp>
                        ))}
                </div>
                <div className="w-full h-5 divider-pattern"/>
            </div>
        </section>
    );
}
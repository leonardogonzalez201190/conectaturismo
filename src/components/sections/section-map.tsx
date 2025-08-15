import DivFadeUp from "../ui/div-fade-up";

export default function SectionMap() {
    return (
        <section className="mt-10 relative max-w-[1400px] mx-auto grid lg:grid-cols-[33%_1fr]">
            <DivFadeUp index={0} className="flex flex-col gap-5 items-center lg:items-start justify-center">
                <img src="https://www.conectaturismo.com/wp-content/uploads/2021/09/mas10.jpg" alt="" />
                <div className="text-cnt-link font-montserrat text-[40px] lg:text-[80px] font-bold leading-[60px]">años de <span className="font-tilium">experiencia</span></div>
                <div className="text-muted-foreground text-center lg:text-left">
                    Desarrollando soluciones tecnológicas para el sector turístico, páginas web para agencias de viajes online y motores de reserva con <b>clientes en más de 15 países</b> de Europa, África, América y Asia.
                </div>
            </DivFadeUp>
            <div className="w-full h-full">
                <div className="responsive-area client-map h-full w-full fade-in">
                    <div className="pin ar w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Argentina"></div>
                    <div className="pin ch w-tooltip" data-toggle="tooltip" data-placement="bottom" title="China"></div>
                    <div className="pin cl w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Chile"></div>
                    <div className="pin cr w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Costa Rica"></div>
                    <div className="pin de w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Alemania"></div>
                    <div className="pin ec w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Ecuador"></div>
                    <div className="pin eg w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Egipto"></div>
                    <div className="pin es w-tooltip" data-toggle="tooltip" data-placement="bottom" title="España"></div>
                    <div className="pin eu w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Estados Unidos"></div>
                    <div className="pin ho w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Honduras"></div>
                    <div className="pin ma w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Marruecos"></div>
                    <div className="pin mx w-tooltip" data-toggle="tooltip" data-placement="bottom" title="México"></div>
                    <div className="pin pe w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Perú"></div>
                    <div className="pin pt w-tooltip" data-toggle="tooltip" data-placement="bottom" title="Portugal"></div>
                    <div className="pin rd w-tooltip" data-toggle="tooltip" data-placement="bottom" title="República Dominicana"></div>
                </div>
            </div>
        </section>
    );
}
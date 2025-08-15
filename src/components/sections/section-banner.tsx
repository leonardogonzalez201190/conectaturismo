import DivFadeUp from "../ui/div-fade-up";


export default function SectionBanner() {
    return (
        <DivFadeUp index={0} className="px-2 lg:px-0 flex lg:items-start items-center justify-center gap-4">
            <img className="absolute lg:relative top-0 left-0 opacity-30 lg:opacity-100 z-[-1]" src="https://www.conectaturismo.com/cdn/images/esfera.jpg" alt="" />
            <div>
                <h1 className="text-[40px]! tracking-tight text-cnt-text-secondary leading-[1.2] font-light elementor-heading-title">
                    <span>Expertos en páginas</span>
                    <strong className="font-semibold"> web para agencias de viajes</strong>
                    <span>, mayoristas, touroperadores y DMC</span>
                </h1>
                <div className="pt-1">
                    <h2 className="text-[22px] flex lg:flex-row flex-col items-center">
                        <span className="whitespace-nowrap">Software de reservas para</span>
                        <b className="bg-cnt-primary text-white! px-2 mx-1 whitespace-nowrap"> agencias de viajes </b>
                        <span className="whitespace-nowrap">página web y motores de reserva.</span>
                    </h2>
                </div>
            </div>
        </DivFadeUp>
    );
}

import { Button } from "@/components/ui/button";
import DivFadeUp from "../ui/div-fade-up";
import { ArrowRightIcon } from "lucide-react";

export default function SectionMiddle() {
    return (
        <section className="h-[43rem] relative">
            <div className="absolute top-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="px-2 lg:px-0 section-md-background h-full flex items-center justify-center gap-11">
                <div className="flex flex-col gap-5 max-w-[44rem] text-white text-[24px] lg:text-[44px] lg:leading-12">
                    <DivFadeUp index={0} className="font-semibold">
                        ¿Tienes una <span className="font-light">agencia de viajes</span> y necesitas <span className="font-light">sistemas de reservas</span> para tu página web?
                    </DivFadeUp>
                    <div className="text-[19px] font-light text-white">¿Quieres destacar entre otras páginas web para agencias de viajes online?</div>
                    <DivFadeUp index={1} toDown className="w-full flex justify-end">
                        <Button size="lg" className="elementor-animation-wobble-vertical font-semibold! cursor-pointer lg:text-xl! hover:bg-cnt-link-hover bg-cnt-link rounded p-7 px-8! shadow-2xl text-white! text-[15px] tracking-tight">
                            Solicitar tu demo ahora
                            <ArrowRightIcon className="ml-2 size-5" />
                        </Button>
                    </DivFadeUp>
                </div>
                <div className="rounded-full overflow-hidden hidden lg:block">
                    <img
                        loading="lazy"
                        decoding="async"
                        className="founded-full"
                        src="https://www.conectaturismo.com/wp-content/uploads/2021/09/img-hand-phone.jpg"
                        alt="Teléfono web agencia viaje"
                        srcSet="https://www.conectaturismo.com/wp-content/uploads/2021/09/img-hand-phone.jpg 458w, https://www.conectaturismo.com/wp-content/uploads/2021/09/img-hand-phone-300x300.jpg 300w, https://www.conectaturismo.com/wp-content/uploads/2021/09/img-hand-phone-150x150.jpg 150w" 
                        sizes="(max-width: 400px) 100vw, 350px" />
                </div>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0 rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
        </section>
    );
}
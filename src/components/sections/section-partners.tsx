
import DivFadeUp from "../ui/div-fade-up";
import { CarouselSize } from "../ui/carousel-arrow";

export default function SectionPartners() {
    return (
        <section className="h-[43rem] relative">
            <div className="absolute top-0 left-0 right-0">
                <svg className="rotate-y-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="section-md-background h-full w-full flex items-center justify-center px-2 lg:px-0">
                <DivFadeUp toDown index={0} className="font-tilium font-semibold">
                    <div className="max-w-[85rem] mx-auto px-2 lg:px-0 flex flex-col lg:leading-12 text-white text-[24px] lg:text-[44px]">
                        <b className="uppercase font-light text-[large]">trabajamos con</b>
                        <div className="">
                            <div className="flex items-center">
                                <span className="font-[800] font-montserrat">Los mejores </span>
                                <span className="font-light! px-2">partners y métodos </span>
                            </div>
                            <span className="font-light">de pago <span className="font-[800] font-montserrat">del mercado</span></span>
                        </div>
                    </div>
                </DivFadeUp>
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0">
                <svg className="rotate-x-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="absolute bottom-[-120] left-0 right-0 z-10 px-20">
                <CarouselSize />
            </div>
        </section>
    );
}
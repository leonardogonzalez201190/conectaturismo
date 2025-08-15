
import SectionLinks from "@/components/sections/section-links";
import { Bookmark } from "lucide-react";
import SectionHeader from "@/components/sections/section-header";
import { CarouselDemo } from "@/components/ui/carusel";
import SectionBanner from "@/components/sections/section-banner";
import SectionProducts from "@/components/sections/section-products";
import SectionEnginers from "@/components/sections/section-enginers";
import SectionMiddle from "@/components/sections/section-middle";
import SectionAdvantages from "@/components/sections/section-advantages";
import SectionMap from "@/components/sections/section-map";
import SectionPartners from "@/components/sections/section-partners";
import DivFadeUp from "@/components/ui/div-fade-up";
import SectionClients from "@/components/sections/section-clients";
import SectionSomos from "@/components/sections/section-somos";
import SectionInformation from "@/components/sections/section-information";
import SectionContacts from "@/components/sections/section-contacts";
import FloatButton from "@/components/ui/float-button";

export default function Home() {

  return (
    <div className="min-h-screen flex-1">
      <SectionHeader />
      <CarouselDemo />
      <main>
        <FloatButton />
        <div className="max-w-[85rem] mx-auto">
          <div className="flex flex-col items-center justify-center pt-[5rem] gap-[5rem]">
            <SectionBanner />
            <SectionProducts />
          </div>
          <div className="flex flex-col items-start justify-center pt-6 gap-3">
            <div className="flex items-center gap-2 bg-cnt-primary text-white px-2 p-1 rounded-xl text-sm">
              <Bookmark className="size-5" />
              Motores de reserva para agencias de viajes
            </div>
            <SectionEnginers />
          </div>
          <div className="flex items-center justify-center mt-10 text-xs lg:text-base">
            O conozca <strong className="px-1">las mejores soluciones</strong> de páginas web según su perfil:
          </div>
          <SectionLinks />
          <div className="px-2 lg:px-0 mt-10 border-t border-dashed py-12 flex flex-col items-end">
            <div className="text-[18px] font-semibold">Tecnología web para OTAS, Mayoristas, Turoperadores y receptivos DMC</div>
            <div className="text-[16px] font-light text-muted-foreground">Diseño de páginas web para agencias de viajes online con motores de reserva, integraciones XML, producto propio.</div>
          </div>
        </div>
        <SectionMiddle />
        <SectionMap />
        <DivFadeUp index={0} toDown className="py-14 text-[18px] lg:text-2xl font-normal text-center">
          Las ventajas de nuestros sistemas hablan por si solas:
        </DivFadeUp>
        <SectionAdvantages />
        <SectionPartners />
        <DivFadeUp index={0} toDown className="text-primary py-16 lg:py-28 text-[18px] lg:text-3xl font-[500] text-center font-tilium">
          Conoce alguno de nuestros trabajos:
        </DivFadeUp>
        <SectionClients />
        <SectionSomos />
        <SectionInformation />
      </main>
      <SectionContacts />
    </div>
  );
}

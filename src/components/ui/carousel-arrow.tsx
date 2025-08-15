import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
    const items = [
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_amadeus.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_travelport.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_servivuelo.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_hotelbeds.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/Diseno-sin-titulo-3.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_w2m.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_restel.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_tour10.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_armas.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_gnv.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_balearia.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_trasmediterranea.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_redsys.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_inespay.png",
        "https://www.conectaturismo.com/wp-content/uploads/2022/01/conecta_turismo_giav.png",
        "https://www.conectaturismo.com/wp-content/uploads/2023/06/logo-veturis-web.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/Diseno-sin-titulo-9.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi-2.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi-3.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi-4.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi-6-1.png",
        "https://www.conectaturismo.com/wp-content/uploads/2025/05/cmi-7.png"
    ]
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <div className="p-1">
              <Card className="border-none! shadow-none! rounded-none!">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={item} alt="" width={100} height={100} className="w-full h-full object-contain" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

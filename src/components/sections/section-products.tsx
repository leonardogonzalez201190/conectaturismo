import ProductCard from "../ui/product-card";


export default function SectionProducts() {
   const products = [
           {
               title: "Páginas web ",
               description: "para agencias de viajes y touroperadores",
               img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/pagina-web-agencia-viajes.svg",
               link: "https://www.conectaturismo.com/desarrollo-pagina-web-agencias-viajes-online/"
           },
           {
               title: "Motores de reserva",
               description: "para todo tipo de servicios turísticos",
               img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/booking-engine.svg",
               link: "https://www.conectaturismo.com/motores-de-reserva-para-agencias-de-viajes/"
           },
           {
               title: "Integración",
               description: "con los principales proveedores",
               img: "https://www.conectaturismo.com/wp-content/uploads/2021/11/integraciones-xml-agencias-viajes.svg",
               link: "https://www.conectaturismo.com/paginas-web-para-agencias-de-viajes-online/"
           },
           {
               title: "Gestor de producto propio",
               description: "para cargar, vender y distribuir producto propio",
               img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/product-manager.svg",
               link: "https://www.conectaturismo.com/paginas-web-para-agencias-de-viajes-online/"
           },
           {
               title: "APIs",
               noLink: true,
               description: "flexibilidad y potencia para distribuir a tu medida",
               img: "https://www.conectaturismo.com/wp-content/uploads/2021/09/api.svg",
               link: "https://www.conectaturismo.com/paginas-web-para-agencias-de-viajes-online/"
           },
       ]
       return (
           <div className="px-2 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center border-b border-dashed">
               {products.map((product, index) => (
                   <ProductCard key={index} {...product} index={index} />
               ))}
           </div>
       );
}
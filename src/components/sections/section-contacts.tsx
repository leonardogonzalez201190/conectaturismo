import { ClockIcon, MailIcon, SmartphoneIcon } from "lucide-react";

export default function SectionContacts() {
    return (
        <footer className="mt-20">
            <div className="footer-gradient">
                <div className="footer-a">
                    <div className="footer-gradient p-3 text-center text-3xl flex flex-col md:flex-row items-center justify-center">
                        <span className="font-montserrat font-[700]">Hablemos </span>
                        <span className="hidden lg:flex w-0.5 h-6 mx-2 bg-white items-center" />
                        <span className="text-white">
                            <span className="font-montserrat font-[700]">Te ayudamos a </span>
                            <span className="font-tilium">re-evolucionar</span>
                            <span className="font-montserrat font-[700]"> tu proyecto</span>
                            <button className="button-contact mx-2 cursor-pointer underline">
                                Contacta
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-primary site-footer px-2 lg:px-0">
                <div className="max-w-[85rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white gap-3 pt-12">
                    <div className="">
                        <h1 className="font-tilium text-xl text-cnt-link pb-4">Contacto</h1>
                        <div className="flex flex-col gap-2 leading-3">
                            <div>Ivan Pavlov nº 2, Planta 3, Oficina 20.</div>
                            <div>Parque Tecnológico de Málaga</div>
                            <div>CP: 29590 Málaga (España)</div>
                            <a href="tel:+34957537389" className="flex items-center gap-2 pt-10" title="Conecta Turismo: +34 957 53 73 89">
                                <SmartphoneIcon className="size-3" />
                                +34 957 53 73 89
                            </a>
                            <a title="info@conectaturismo.com" href="mailto:info@conectaturismo.com" className="flex items-center gap-2">
                                <MailIcon className="size-3" />
                                info@conectaturismo.com
                            </a>
                            <div className="flex items-center gap-2">
                                <ClockIcon className="size-3" />
                                De Lunes a Viernes
                            </div>
                            <div>09:00h - 14:30h / 15:30h - 18:00h</div>
                        </div>
                    </div>
                    <div className="site-footer-primary-section-2" />
                    <div className="flex flex-col">
                        <h1 className="font-tilium text-xl text-cnt-link pb-4">Corporativo y Legal</h1>
                        <a className="underline" href="https://www.conectaturismo.com/aviso-legal" target="_blank" rel="noopener noreferrer">Somos</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Suscríbete</a>
                        <a className="underline" href="https://www.conectaturismo.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Noticias</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Empleo</a>
                        <div className="h-[1px] w-10 bg-white my-4" />
                        <a className="underline" href="https://www.conectaturismo.com/aviso-legal" target="_blank" rel="noopener noreferrer">Aviso legal</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Protección de datos</a>
                        <a className="underline" href="https://www.conectaturismo.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Cookies</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Contacto</a>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-tilium text-xl text-cnt-link pb-4">Servicios</h1>
                        <a className="underline" href="https://www.conectaturismo.com/aviso-legal" target="_blank" rel="noopener noreferrer">Gestor de productos</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Motores de reserva</a>
                        <div className="h-[1px] w-10 bg-white my-4" />
                        <a className="underline" href="https://www.conectaturismo.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">
                            Página web para agencia de viajes  y touroperadores
                        </a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">
                            Licencia para agencia de viajes online
                        </a>
                        <a className="underline" href="https://www.conectaturismo.com/aviso-legal" target="_blank" rel="noopener noreferrer">
                            Consultoría y asesoría tecnológica
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-tilium text-xl text-cnt-link pb-4">Te interesa</h1>
                        <a className="underline" href="https://www.conectaturismo.com/aviso-legal" target="_blank" rel="noopener noreferrer">¿Qué es una integración XML?</a>
                        <a className="underline" href="https://www.conectaturismo.com/cookies" target="_blank" rel="noopener noreferrer">Reseller / Colaboración Comercial</a>
                        <a className="underline" href="https://www.conectaturismo.com/politica-de-privacidad" target="_blank" rel="noopener noreferrer">Montar una agencia de viajes online desde cero</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
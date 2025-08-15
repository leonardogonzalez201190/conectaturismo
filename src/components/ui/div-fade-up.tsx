"use client"

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export default function DivFadeUp({
    index, children, className, toDown
}: { index: number, children: React.ReactNode, className?: string, toDown?: boolean }) {

    const element = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.remove('invisible');
                        (entry.target as HTMLDivElement).style.animation = `${toDown ? 'fadeInDown' : 'fadeInUp'} 0.8s ease-in forwards`;
                    }, index * 300); // delay secuencial
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(element.current as HTMLDivElement);
    }, [index, toDown]);

    return (
        <div ref={element} className={cn("invisible", className)}>
            {children}
        </div>
    );
}
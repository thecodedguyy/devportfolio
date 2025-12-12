"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1765127586047-f158d5bd6a33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const imgs = gsap.utils.toArray<HTMLElement>(".hero-img");

            // Initial scatter state
            imgs.forEach((img, i) => {
                gsap.set(img, {
                    x: (Math.random() - 0.5) * 800, // Random X scatter
                    y: (Math.random() - 0.5) * 400, // Random Y scatter
                    rotation: (Math.random() - 0.5) * 30, // Random rotation
                    scale: 0.8 + Math.random() * 0.4, // Random size
                });
            });

            // Timeline: Scatter -> Organize
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000", // Scroll distance
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                }
            });

            // Animate images to a grid/line
            // Here we organize them into a centered horizontal spread
            imgs.forEach((img, i) => {
                // Determine target position
                // Let's make a nice overlapping horizontal row for "single" feel
                const xOffset = (i - 2) * 220; // -440, -220, 0, 220, 440

                tl.to(img, {
                    x: xOffset,
                    y: 0,
                    rotation: 0, // Straighten up
                    scale: 1, // Normalized size
                    borderRadius: "8px",
                    duration: 1,
                    ease: "power2.inOut"
                }, 0); // All happen at same time absolute time 0
            });

            // Text comes FORWARD (scale up) and fades out
            tl.to(".hero-name", {
                scale: 1.5,
                opacity: 0,
                ease: "power1.inOut"
            }, 0);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="hero-container h-[100vh]">
            {/* Note: standard height, ScrollTrigger pin will handle the 'sticky' feel effectively if configured or we can make the parent standard and pin inner. 
               However, user wants "sticky" feel with scroll. 
               Let's usually make the container taller (spacer) OR let ScrollTrigger pin it. 
               GSAP 'pin: true' fixes the element during the scroll.
            */}

            <div ref={wrapperRef} className="hero-sticky bg-black text-white relative flex flex-col items-center justify-center h-full w-full overflow-hidden">
                {/* Background Name - Now in FRONT with blend mode */}
                <h1 className="hero-name absolute text-[15vw] font-bold leading-[0.9] tracking-tighter uppercase text-white z-40 text-center mix-blend-difference pointer-events-none">
                    PRATIK<br />PRAJAPATI
                </h1>

                {/* Scattered Images */}
                <div className="collage-wrapper relative w-full h-full flex items-center justify-center z-10">
                    {images.map((src, i) => (
                        <div key={i} className="hero-img w-[300px] h-[400px] bg-neutral-800 overflow-hidden relative border-4 border-white/5 rounded-sm shadow-2xl">
                            <Image
                                src={src}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

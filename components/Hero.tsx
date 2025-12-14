"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import { MoveRight, FileText, User } from "lucide-react";

export default function Hero() {
    const containerRef = useRef(null);
    const [greeting, setGreeting] = useState("Good evening");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting("Good morning");
        else if (hour < 18) setGreeting("Good afternoon");
        else setGreeting("Good evening");
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-content > *", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.5
            });

            // Subtle rotation for planet
            gsap.to(".planet-bg", {
                rotation: 360,
                duration: 200,
                repeat: -1,
                ease: "linear"
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden bg-[#030014] text-white pt-32 md:pt-48 pb-10">

            {/* Background Assets */}
            <div className="absolute inset-0 z-0">
                {/* Stars/Space BG */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506318137071-a8bcbf6755dd?q=80&w=2940&auto=format&fit=crop')] bg-cover opacity-40"></div>

                {/* Planet Top Right */}
                <div className="absolute -top-[30%] -right-[10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] opacity-90 planet-bg">
                    <Image
                        src="https://images.unsplash.com/photo-1614730341194-75c6074065db?q=80&w=1948&auto=format&fit=crop"
                        alt="Planet"
                        fill
                        className="object-cover rounded-full mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>

                {/* Satellite/Station Element */}
                <div className="absolute top-[20%] right-[5%] w-[500px] h-[300px] hidden md:block animate-float-slow opacity-80">
                    <Image
                        src="/space-station.webp"
                        alt="Station"
                        fill
                        className="object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                    />
                </div>
            </div>

            {/* Content Container with Left Margin for Sidebar */}
            <div className="relative z-10 w-full pl-24 md:pl-32 pr-8 max-w-5xl">

                {/* Resume Pill & Connector Line */}
                <div className="relative mb-8 pl-8 hero-content">
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-4 h-[150%] w-[1px] bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                    {/* Curved Connector */}
                    <div className="absolute left-0 top-1/2 w-8 h-[1px] bg-blue-500/50"></div>

                    <a href="#resume" className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-950/30 border border-blue-500/30 backdrop-blur-md hover:bg-blue-900/40 transition-colors group">
                        <div className="p-1.5 rounded-full bg-blue-500/20 text-blue-400">
                            <FileText size={14} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-white tracking-wide">Access online resume</span>
                            <span className="text-xs text-gray-400 group-hover:text-blue-300 transition-colors">Dynamic, interactive, and up-to-date</span>
                        </div>
                        <MoveRight size={14} className="text-blue-500 ml-2" />
                    </a>
                </div>

                {/* Main Heading */}
                <h1 className="hero-content text-5xl md:text-7xl font-mono font-bold mb-8 tracking-tight pl-8">
                    {greeting}, <br className="md:hidden" />
                    <span className="typing-cursor">human</span>
                </h1>

                {/* Introduction Text */}
                <div className="hero-content max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed font-light pl-8 ml-[1px]">
                    <p className="mb-6 pl-8 border-l border-white/10">
                        My name&apos;s <span className="text-white font-semibold underline decoration-blue-500 underline-offset-4 decoration-2">Pratik Prajapati</span>,
                        but you can call me <span className="text-blue-400">Pratik</span>.
                        I&apos;m a <span className="font-bold text-white">Full Stack Engineer</span> and an <span className="font-bold text-white">Open-source</span> enthusiast.
                    </p>
                </div>

            </div>

            {/* Soft Gradient Overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none"></div>
        </section>
    );
}

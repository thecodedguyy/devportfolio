"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SKILLS = [
    {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
        name: "MS SQL Server",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg",
    },
    {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
        name: "C#",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
        name: "Sitecore",
        logo: "https://img.icons8.com/?size=100&id=63257&format=png&color=000000",
    },
    {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
        name: "Express",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    },
    {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
    },
    {
        name: "Solidity",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg",
    },
    {
        name: "AI",
        logo: "https://img.icons8.com/?size=100&id=ka3InxFU3QZa&format=png&color=000000",
    }
];

export default function SkillsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.from(headerRef.current, {
                opacity: 0,
                x: -50,
                duration: 1,
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                }
            });



        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full py-20 bg-[#030014] text-white overflow-hidden">

            {/* Vertical Guide Line to maintain continuity */}
            <div className="absolute left-[3rem] md:left-[9rem] top-0 bottom-0 w-[1px] bg-yellow-500/50 hidden md:block"></div>

            <div ref={containerRef} className="relative z-10 w-full pl-8 md:pl-44 pr-8 max-w-7xl">

                {/* Header */}
                <div ref={headerRef} className="flex items-center gap-6 mb-12 relative">
                    <div className="absolute left-[-32px] top-1/2 w-8 h-[1px] bg-yellow-500/50 hidden md:block"></div>
                    <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#030014] border border-yellow-500/50 rounded-full flex items-center justify-center text-yellow-500 hidden md:flex">
                        <Cpu size={18} />
                    </div>
                    <h2 className="text-4xl font-bold">
                        Skills & <span className="text-yellow-500">Technologies.</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card flex items-center gap-4 p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm hover:border-yellow-500/50 hover:bg-white/15 transition-all duration-300 group"
                        >
                            <div className="relative w-10 h-10 flex-shrink-0">
                                <Image
                                    src={skill.logo}
                                    alt={skill.name}
                                    fill
                                    className="object-contain filter brightness-0 invert opacity-80 group-hover:filter-none group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>
                            <span className="text-sm font-medium text-white group-hover:text-yellow-500 transition-colors">{skill.name}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
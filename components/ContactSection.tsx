"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { Github, Gitlab, Mail, Phone, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
    { name: "GitHub", icon: Github, href: "github.com/ppratik07" },
    { name: "GitLab", icon: Gitlab, href: "https://gitlab.com/ppratikcodes" },
    { name: "Email", icon: Mail, href: "mailto:ppratikcodes@gmail.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/pratik-prajapati79/" },
];

export default function ContactSection() {
    const ref = useGsapFadeIn();

    return (
        <section id="contact" className="relative w-full pt-10 bg-[#030014] text-white overflow-hidden">

            {/* Guide Line (Vertical only, stops before curve) */}
            <div className="absolute left-[3rem] md:left-[9rem] top-0 bottom-[50px] w-[1px] bg-gradient-to-b from-purple-500/30 to-yellow-500/50 hidden md:block"></div>

            <div ref={ref} className="relative z-10 w-full pl-8 md:pl-44 pr-8 max-w-7xl">

                {/* Header with Connector */}
                <div className="flex items-center gap-6 mb-10 relative">
                    {/* Connector */}
                    <div className="absolute left-[-32px] top-1/2 w-8 h-[1px] bg-yellow-500/50 hidden md:block"></div>
                    {/* Icon on line */}
                    <div className="absolute left-[-48px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#030014] border border-yellow-500/50 rounded-full flex items-center justify-center text-yellow-500 hidden md:flex">
                        <Mail size={16} />
                    </div>

                    <h2 className="text-4xl font-bold">
                        Get <span className="text-yellow-500">in touch</span>
                    </h2>
                </div>

                <div className="max-w-2xl">
                    <p className="text-gray-400 text-lg leading-relaxed mb-4">
                        Feel free to <span className="text-white font-semibold">contact me</span> if you have any questions or suggestions.
                        I am always open to new <span className="text-white font-semibold">ideas and opportunities</span>.
                    </p>

                    {/* Social Grid */}
                    <div className="flex flex-wrap gap-4">
                        {SOCIALS.map((s) => (
                            <Link
                                key={s.name}
                                href={s.href}
                                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/50 hover:bg-white/10 transition-all group"
                            >
                                <s.icon size={20} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                                <span className="font-medium text-gray-300 group-hover:text-white">{s.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>


        </section>
    );
}

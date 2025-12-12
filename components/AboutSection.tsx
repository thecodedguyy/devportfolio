"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

export default function AboutSection() {
    const ref = useGsapFadeIn();

    return (
        <section id="about" className="flex items-center bg-slate-950">
            <div
                ref={ref}
                className="max-w-4xl mx-auto px-4 py-24 md:py-32 space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    About <span className="text-sky-400">Me</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    I build interactive web apps using Next.js, React, GSAP, Three.js,
                    and Node. I love turning complex ideas into smooth, animated
                    interfaces that feel alive while staying fast and accessible.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                    <div className="border border-white/10 rounded-2xl p-4">
                        <p className="text-xs text-gray-400 mb-2">Frontend</p>
                        <p>React, Next.js, GSAP, Three.js, Tailwind</p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-4">
                        <p className="text-xs text-gray-400 mb-2">Backend</p>
                        <p>Node, Express, Prisma, PostgreSQL</p>
                    </div>
                    <div className="border border-white/10 rounded-2xl p-4">
                        <p className="text-xs text-gray-400 mb-2">Tools</p>
                        <p>Git, Docker, AWS, Vercel, Figma</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

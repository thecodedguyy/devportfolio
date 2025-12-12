"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

const PROJECTS = [
    {
        title: "3D Product Showcase",
        stack: ["Next.js", "Three.js", "GSAP"],
        desc: "Interactive 3D landing page for a hardware brand.",
    },
    {
        title: "AI Translation Platform",
        stack: ["Node", "PostgreSQL", "Redis", "React"],
        desc: "Real-time translation SaaS for content teams.",
    },
    {
        title: "Memory Book Builder",
        stack: ["Next.js", "Uppy", "Cloudflare R2"],
        desc: "Collaborative photo book creator with custom layouts.",
    },
];

export default function ProjectsSection() {
    const ref = useGsapFadeIn();

    return (
        <section id="projects" className="flex items-center">
            <div
                ref={ref}
                className="max-w-6xl mx-auto px-4 py-24 md:py-32"
            >
                <h2 className="text-3xl md:text-4xl font-semibold mb-8">
                    Selected <span className="text-sky-400">Projects</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {PROJECTS.map((p) => (
                        <article
                            key={p.title}
                            className="group border border-white/10 rounded-3xl p-5 bg-white/5 bg-gradient-to-b from-slate-900/60 to-slate-950/80 hover:border-sky-500/60 transition-transform hover:-translate-y-1"
                        >
                            <h3 className="font-semibold mb-2 text-lg">
                                {p.title}
                            </h3>
                            <p className="text-xs text-gray-400 mb-3">
                                {p.stack.join(" · ")}
                            </p>
                            <p className="text-sm text-gray-300">{p.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

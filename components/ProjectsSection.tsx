"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { Folder, Star, GitFork, Code, ExternalLink, MoveRight, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "Prosp.ai",
        stack: "TypeScript, Next, Supabase, OpenAI, Stripe",
        desc: "Connect unlimited accounts and leverage AI to get 10x more replies to your LinkedIn messages and e-mails with multi-channel sequences",
        stars: 473,
        forks: 137,
        highlight: false,
    },
    {
        title: "Csgo Trade",
        stack: "TypeScript, Vue, Nest",
        desc: "Trade CSGO Skins, Rust Skins, and TF2 Skins. Bonuses on CSGO trade + TF2 trade and other items. Buy, Sell & trade skins securely and instantly. Try now.",
        stars: 327,
        forks: 254,
        highlight: false,
    },
    {
        title: "Fastfin",
        stack: "TypeScript, Next, Supabase, FFmpeg, OpenAI, Stripe",
        desc: "FastFin combines AI-driven translation with quality metrics and human-level review for better, faster, and more accurate translations.",
        stars: 355,
        forks: 107,
        highlight: false,
    },
    {
        title: "Incode Agency",
        stack: "TypeScript, Next, Framer Motion",
        desc: "Next-gen digital product development agency",
        stars: 273,
        forks: 37,
        highlight: false,
    },
    {
        title: "Micro1",
        stack: "JavaScript, Nuxt, Express",
        desc: "AI recruitment engine to hire deeply vetted engineers fast",
        stars: 127,
        forks: 54,
        highlight: true, // This one is purple
    },
    {
        title: "Shoe Surgeon Sneaker Collab & Studio",
        stack: "JavaScript, Three.js",
        desc: "Explore Jack Daniel Shoe Surgeon Sneaker Collab & Studio",
        stars: 105,
        forks: 48,
        highlight: false,
    },
];

export default function ProjectsSection() {
    const ref = useGsapFadeIn();

    return (
        <section id="projects" className="relative w-full py-20 bg-[#030014] text-white">

            {/* Gradient Line - Matching previous sections */}
            <div className="absolute left-[3rem] md:left-[9rem] top-0 bottom-0 w-[1px] bg-gradient-to-b from-blue-500/30 to-purple-500/30 hidden md:block"></div>

            <div ref={ref} className="relative z-10 w-full pl-8 md:pl-44 pr-8 max-w-7xl">

                {/* Header */}
                <div className="flex items-center gap-6 mb-12 relative">
                    {/* Connector */}
                    <div className="absolute left-[-32px] top-1/2 w-8 h-[1px] bg-purple-500/30 hidden md:block"></div>
                    <div className="absolute left-[-36px] top-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] hidden md:block"></div>

                    <div className="w-12 h-12 rounded-full bg-purple-900/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                        <FolderGit2 size={24} />
                    </div>
                    <div className="flex items-center gap-4">
                        <h2 className="text-4xl font-bold">
                            Featured <span className="text-purple-400">Projects</span>
                        </h2>
                        <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300">
                            <Github size={14} />
                            7 repositories
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-xl border p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${p.highlight
                                    ? "bg-[#1a103c] border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
                                    : "bg-[#0f111a] border-white/10 hover:border-purple-500/30 hover:shadow-xl"
                                }`}
                        >
                            {/* Icon Code */}
                            <div className="mb-6 flex items-start justify-between">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${p.highlight ? "bg-purple-500 text-white" : "bg-white/5 text-gray-400"}`}>
                                    <Code size={20} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                            <div className="text-xs text-gray-500 font-mono mb-4 flex items-center gap-2">
                                <span className="text-purple-400">{">"}</span>
                                {p.stack}
                            </div>

                            <p className={`text-sm mb-8 flex-1 leading-relaxed ${p.highlight ? "text-gray-300" : "text-gray-400"}`}>
                                {p.desc}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                                    <div className="flex items-center gap-1 group-hover:text-yellow-500 transition-colors">
                                        <Star size={14} />
                                        {p.stars}
                                    </div>
                                    <div className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                                        <GitFork size={14} />
                                        {p.forks}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                                        <Code size={14} />
                                        Code
                                    </button>
                                    <Link
                                        href="#"
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${p.highlight
                                                ? "bg-purple-600 text-white hover:bg-purple-500"
                                                : "bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
                                            }`}
                                    >
                                        <ExternalLink size={14} />
                                        Website
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer / More Projects */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-white/10 pt-10">
                    <div>
                        <h3 className="text-3xl font-bold mb-2">Projects & <span className="text-gray-500">Experiments</span></h3>
                        <p className="text-gray-400 text-sm max-w-md">Browse more projects in the dedicated explorer, a centralised hub for all my work and experiments.</p>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors self-start md:self-auto">
                        Explore more projects
                        <MoveRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
}

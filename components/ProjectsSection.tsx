"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { Folder, Star, GitFork, Code, ExternalLink, MoveRight, Github, FolderGit2 } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "MemoryLane",
        stack: "TypeScript, Next.js, Prisma, Postgres, NodeJs, Express, Razorpay",
        desc: "Collect memories, photos, and messages from friends and family to create a meaningful keepsake for life's special moments.",
        highlight: false,
        link: "https://memorylane.appx.live",
        github: "https://github.com/ppratik07/moments",
    },
    {
        title: "NexusAI",
        stack: "TypeScript, Next.js, Gemini API, OpenAI API, Tailwind,AWS Lambda",
        desc: "Experience the future of AI interaction. Seamlessly chat with Gemini (free) or unlock OpenAI with login. Create, innovate, and explore with cutting-edge AI.",
        highlight: true,
        link: "https://nexusai.appx.live",
    },
    {
        title: "Highway Bites",
        stack: "TypeScript, Next.js,Node.js, Google MAPS API, AWS Lambda",
        desc: "Find the Best Dhabas & Food Stops on Your Road Trips. Discover top-rated eateries along highways with user reviews, menus, and directions for a delicious journey.",
        highlight: true,
        link: "https://highwaybites.vercel.app/",
    },
    {
        title: "ColorValidator",
        stack: "TypeScript, React, Node.js, Express, Prisma, PostgreSQL",
        desc: "Create and manage brand color profiles, define tolerance levels, and validate colors against predefined profiles for design consistency.",
        highlight: false,
        link: "https://color-validator.vercel.app",
        github: "https://github.com/ppratik07/color-validator",
    },
    {
        title: "Shutter Clicks",
        stack: "Next.js, React, Tailwind, Framer Motion",
        desc: "A professional photography portfolio and booking platform featuring gallery showcases, session management, and seamless booking integration.",
        highlight: false,
        link: "https://shutter-click-xi.vercel.app",
        github: "https://github.com/ppratik07/shutter-click",
    },
    {
        title: "Crypblock",
        stack: "React, Vite, Solidity, Ethers.js, Tailwind",
        desc: "A comprehensive crypto wallet application for storing and managing blockchain assets with secure transaction capabilities.",
        highlight: false,
        link: "https://crypblock.vercel.app",
        github: "https://github.com/ppratik07/crypblock",
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
                            6 repositories
                        </span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {PROJECTS.map((p, i) => (
                        <div
                            key={i}
                            className="group relative rounded-xl border p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 bg-[#0f111a] border-white/10 hover:border-purple-500/30 hover:shadow-xl"
                        >
                            {/* Icon Code */}
                            <div className="mb-6 flex items-start justify-between">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 text-gray-400">
                                    <Code size={20} />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                            <div className="text-xs text-gray-500 font-mono mb-4 flex items-center gap-2">
                                <span className="text-purple-400">{">"}</span>
                                {p.stack}
                            </div>

                            <p className="text-sm mb-8 flex-1 leading-relaxed text-gray-400">
                                {p.desc}
                            </p>

                            <div className="flex items-center justify-end pt-4 border-t border-white/5 gap-2">
                                <Link
                                    href={p.github || "#"}
                                    target="_blank"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                    <Code size={14} />
                                    Code
                                </Link>
                                <Link
                                    href={p.link}
                                    target="_blank"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors bg-[#7c3aed] text-white hover:bg-[#6d28d9]"
                                >
                                    <ExternalLink size={14} />
                                    Website
                                </Link>
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
                    <Link href="/projects">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-colors self-start md:self-auto">
                            Explore more projects
                            <MoveRight size={18} />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}

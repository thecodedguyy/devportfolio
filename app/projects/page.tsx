"use client";

import { Home, FolderGit2, FileText, Search, SlidersHorizontal, Shuffle, Play, Code, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const ALL_PROJECTS = [
    {
        title: "MemoryLane",
        stack: "TypeScript, Next.js, Prisma, Postgres, NodeJs, Express, Razorpay",
        desc: "Collect memories, photos, and messages from friends and family to create a meaningful keepsake for life's special moments.",
        link: "https://memorylane.appx.live",
        github: "https://github.com/ppratik07/moments",
    },
    {
        title: "NexusAI",
        stack: "TypeScript, Next.js, Gemini API, OpenAI API, Tailwind, AWS Lambda",
        desc: "Experience the future of AI interaction. Seamlessly chat with Gemini (free) or unlock OpenAI with login. Create, innovate, and explore with cutting-edge AI.",
        link: "https://nexusai.appx.live",
    },
    {
        title: "ColorValidator",
        stack: "TypeScript, React, Node.js, Express, Prisma, PostgreSQL",
        desc: "Create and manage brand color profiles, define tolerance levels, and validate colors against predefined profiles for design consistency.",
        link: "#",
        github: "https://github.com/ppratik07/color-validator",
    },
    {
        title: "Shutter Clicks",
        stack: "Next.js, React, Tailwind, Framer Motion",
        desc: "A professional photography portfolio and booking platform featuring gallery showcases, session management, and seamless booking integration.",
        link: "https://shutter-click-xi.vercel.app",
        github: "https://github.com/ppratik07/shutter-click",
    },
    {
        title: "Crypblock",
        stack: "React, Vite, Solidity, Ethers.js, Tailwind",
        desc: "A comprehensive crypto wallet application for storing and managing blockchain assets with secure transaction capabilities.",
        link: "https://crypblock.vercel.app",
        github: "https://github.com/ppratik07/crypblock",
    },
];

export default function ProjectsPage() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = ALL_PROJECTS.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20">

            {/* Sidebar Navigation */}
            <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-24 border-r border-white/5 bg-[#080808] flex flex-col items-center py-8 z-50">
                <nav className="flex flex-col gap-8">
                    <Link href="/" className="flex flex-col items-center gap-1 group">
                        <div className="p-3 rounded-xl bg-transparent group-hover:bg-white/5 transition-all text-gray-400 group-hover:text-white">
                            <Home size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] uppercase tracking-wide text-gray-500 group-hover:text-white font-medium">Home</span>
                    </Link>

                    <div className="flex flex-col items-center gap-1 group">
                        <div className="p-3 rounded-xl bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                            <FolderGit2 size={24} strokeWidth={2} />
                        </div>
                        <span className="text-[10px] uppercase tracking-wide text-white font-medium">Projects</span>
                    </div>

                    <Link href="#" className="flex flex-col items-center gap-1 group">
                        <div className="p-3 rounded-xl bg-transparent group-hover:bg-white/5 transition-all text-gray-400 group-hover:text-white">
                            <FileText size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] uppercase tracking-wide text-gray-500 group-hover:text-white font-medium">Resume</span>
                    </Link>
                </nav>

                <div className="mt-auto pb-4">
                    {/* Settings or other bottom icons could go here */}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-20 md:ml-24 relative">

                {/* Hero / Header Section */}
                <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-end pb-12 px-8 md:px-16 border-b border-white/5 bg-[#080808]">

                    {/* Background Texture/Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900 via-purple-900 to-transparent"></div>

                    <div className="relative z-20 w-full max-w-6xl">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-white/5">
                            <ArrowLeft size={16} />
                            Back to homepage
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
                                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-gray-400 mb-2 tracking-normal">Featured</span>
                                Projects <span className="font-light text-gray-500">&</span><br />
                                Experiments
                            </h1>
                        </motion.div>
                    </div>
                </div>

                {/* Filters & Search - Glassmorphism Sticky Header */}
                <div className="sticky top-0 z-40 w-full bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 px-8 md:px-16 py-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 justify-between">

                        <div className="flex-1 flex gap-2">
                            <div className="relative flex-1 max-w-md group">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#0f111a] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all"
                                />
                            </div>

                            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f111a] border border-white/10 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                <SlidersHorizontal size={16} />
                                <span className="hidden sm:inline">Filter</span>
                            </button>
                        </div>

                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Shuffle size={16} />
                            <span>Randomize</span>
                        </button>

                    </div>
                </div>

                {/* Projects List */}
                <div className="px-8 md:px-16 py-12 max-w-6xl mx-auto space-y-4">

                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-all hover:bg-[#0f111a]"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">

                                <div className="flex gap-4">
                                    <div className="mt-1 p-2 rounded-lg bg-white/5 text-gray-400 shrink-0 h-fit">
                                        <Github size={20} />
                                    </div>

                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white flex items-baseline gap-3">
                                                {project.title}
                                                <span className="text-base font-normal text-gray-600 hidden sm:inline">code repository</span>
                                            </h3>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed max-w-2xl">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.stack.split(',').map((tech, i) => (
                                                <span key={i} className="px-2 py-1 rounded-md bg-white/5 text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                                                    {tech.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row md:flex-col gap-3 shrink-0 pt-4 md:pt-0 pl-14 md:pl-0">
                                    <Link
                                        href={project.github || "#"}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-xs font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all w-full md:w-auto"
                                    >
                                        <Code size={14} />
                                        Explore source
                                    </Link>
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black text-black text-xs font-bold hover:bg-gray-200 transition-all w-full md:w-auto shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                                    >
                                        <Play size={14} fill="currentColor" />
                                        Run demo
                                    </Link>
                                </div>

                            </div>
                        </motion.div>
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="py-20 text-center text-gray-500">
                            No projects found matching "{searchQuery}"
                        </div>
                    )}

                </div>

            </main>
        </div>
    );
}

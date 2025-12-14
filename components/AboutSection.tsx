"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { Terminal, Cpu, Globe, Layout, Server, Database, Code2 } from "lucide-react";
import { useState } from "react";

const EXPERIENCES = [
    {
        company: "Accenture",
        date: "Feb 2024 - Present",
        duration: "1 year 11 months",
        role: "Lead Full Stack Engineer",
        location: "Victoria, Australia",
        type: "Full-time",
        tags: ["Next", "React", "REST", "FastAPI", "AWS", "Docker", "Redux", "i18n", "Tailwind"],
        bullets: [
            "Develop various kinds of dashboard including CRM, Influencer Marketplace, Ad Campaign, AI Tools and Kanban using Next.js, MUI.",
            "Develop backend engines using FastAPI."
        ],
        icon: Layout,
        color: "bg-orange-500"
    },
    {
        company: "Esko",
        date: "Nov 2021 - Dec 2023",
        duration: "2 years 1 month",
        role: "Lead Full Stack engineer",
        location: "Paris, France",
        type: "Full-time",
        tags: ["React", "Next", "NodeJS", "Nest", "Supabase", "UI/UX", "Figma"],
        bullets: [
            "Planned, implemented, and maintained high-quality software using Javascript, Typescript, React, Next, Express, and Supabase.",
            "Tracked and fixed bugs using Jira as a reporting tool.",
            "Contributed to the integration with different APIs using REST and GraphQL."
        ],
        icon: Globe,
        color: "bg-blue-500"
    },
    {
        company: "X-Rite",
        date: "Jun 2019 - Sep 2021",
        duration: "2 years 4 months",
        role: "Full Stack Developer",
        location: "Vancouver, Canada",
        type: "Full-time",
        tags: ["Vue", "Firebase", "Google Maps API", "SASS"],
        bullets: [
            "Built and optimized demand-responsive transport solutions.",
            "Collaborated on shared mobility platforms for corporate and community transport."
        ],
        icon: Code2,
        color: "bg-emerald-500"
    }
];

export default function AboutSection() {
    const ref = useGsapFadeIn();
    const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

    return (
        <section id="about" className="relative min-h-screen bg-[#030014] text-white pt-0 pb-20">
            <div className="absolute left-[3rem] md:left-[9rem] top-0 bottom-0 w-[1px] bg-blue-500/30 hidden md:block"></div>

            <div ref={ref} className="relative z-10 w-full pl-24 md:pl-44 pr-8 max-w-7xl">

                {/* Header with Connector */}
                <div className="flex items-center gap-6 mb-10 relative">
                    {/* Horizontal connector line */}
                    <div className="absolute left-[-32px] top-1/2 w-8 h-[1px] bg-blue-500/30 hidden md:block"></div>
                    {/* Dot on the vertical line */}
                    <div className="absolute left-[-36px] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] hidden md:block"></div>

                    <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        <Terminal size={24} />
                    </div>
                    <h2 className="text-4xl font-bold">
                        Profile <span className="text-blue-500">Overview</span>
                    </h2>
                </div>

                {/* Terminal Window */}
                <div className="w-full bg-[#0f111a] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm relative">

                    {/* Terminal Header */}
                    <div className="bg-[#1a1d2d] px-4 py-3 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Terminal size={14} />
                            <span>pwsh in pratik</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 hover:bg-red-500 border border-transparent hover:border-red-400 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500 border border-transparent hover:border-yellow-400 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 hover:bg-green-500 border border-transparent hover:border-green-400 transition-colors"></div>
                        </div>
                    </div>

                    {/* Terminal Tabs Bar (Custom Design) */}
                    <div className="flex items-center gap-1 bg-[#0f111a] px-2 pt-2 border-b border-white/5">
                        <span className="px-3 py-1 text-gray-500 text-xs">Powershell 7.3.4</span>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 md:p-8 space-y-8">

                        {/* Command Line Simulation */}
                        <div className="space-y-2 mb-8">
                            <div className="text-gray-500 text-xs">Loading personal and system profiles took 296ms.</div>
                            <div className="flex items-center gap-2 text-base md:text-lg">
                                <span className="text-blue-400">root@pratik:~$</span>
                                <span className="text-white">pratik.exe --experience</span>
                                <span className="w-2.5 h-5 bg-white animate-blink ml-1"></span>
                            </div>
                        </div>

                        {/* Interactive Tabs */}
                        <div className="flex gap-4 mb-8">
                            <button
                                onClick={() => setActiveTab("experience")}
                                className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === "experience" ? "bg-white text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                            >
                                experience
                            </button>
                            <button
                                onClick={() => setActiveTab("education")}
                                className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all ${activeTab === "education" ? "bg-white text-black" : "bg-white/5 text-gray-400 hover:bg-white/10"}`}
                            >
                                education
                            </button>
                        </div>

                        {/* Experience List */}
                        {activeTab === "experience" && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 h-[500px] overflow-y-auto pr-4">
                                {EXPERIENCES.map((exp, i) => (
                                    <div key={i} className="relative pl-4 group">
                                        {/* Left Border Accent */}
                                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-blue-500/50 transition-colors"></div>

                                        <div className="flex items-start gap-4">
                                            {/* Icon Box */}
                                            <div className={`w-12 h-12 rounded-lg ${exp.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                                                <exp.icon className="text-white w-6 h-6" />
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                                                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                                    <span className="text-gray-400 text-sm">{exp.date}</span>
                                                    <span className="text-gray-600 text-xs">({exp.duration})</span>
                                                </div>

                                                <div className="text-white font-medium mb-3">
                                                    {exp.role} <span className="text-gray-500 font-normal">· {exp.type} · {exp.location}</span>
                                                </div>

                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {exp.tags.map(tag => (
                                                        <span key={tag} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-blue-200">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <ul className="space-y-1 text-gray-400 list-disc list-inside marker:text-blue-500">
                                                    {exp.bullets.map((bullet, k) => (
                                                        <li key={k}>{bullet}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === "education" && (
                            <div className="min-h-[300px] flex items-center justify-center text-gray-500 italic">
                                Scanning for academic records... [No data loaded yet]
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}

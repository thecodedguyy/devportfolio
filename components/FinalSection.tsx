"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";
import { Send, Terminal, Cpu, Shield, Globe } from "lucide-react";
import Image from "next/image";

export default function FinalSection() {
    const ref = useGsapFadeIn();

    return (
        <section className="relative w-full bg-[#030014] text-white overflow-hidden pb-0">

            {/* --- LINE CONNECTORS --- */}
            {/* 1. Receive line from ContactSection (Yellow horizontal -> Green vertical) */}
            {/* Contact ended with a line going Right. We need to catch it and bring it Down on the Right side. */}
            <div className="absolute top-0 right-[3rem] md:right-[9rem] w-[1px] h-[500px] bg-gradient-to-b from-green-500/50 to-green-500/30 hidden md:block"></div>

            {/* Connection curve top-right */}
            {/* This connects the horizontal line from Contact (which ended in middle) to the right vertical line */}
            <div className="absolute top-[-1px] left-[3rem] md:left-[9rem] right-[3rem] md:right-[9rem] h-[100px] border-t border-r border-green-500/50 rounded-tr-[50px] hidden md:block"></div>


            {/* 2. Vertical Line for Open Source Section (Green) */}
            <div className="absolute top-[100px] right-[3rem] md:right-[9rem] bottom-[50%] w-[1px] bg-green-500/30 hidden md:block"></div>

            <div ref={ref} className="relative z-10 w-full px-4 md:px-0 max-w-7xl mx-auto pt-0">

                {/* === OPEN SOURCE SECTION === */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20 relative">

                    {/* Header (Right aligned relative to content) */}
                    <div className="md:absolute md:right-[9rem] md:top-0 md:text-right pr-8 md:pr-12">
                        <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)] hidden md:block"></div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-green-500">Open-source.</span> Join the dark side of the force.
                        </h2>
                        <p className="text-gray-400 mt-2 text-sm max-w-md ml-auto">
                            Collaboration is the key to improvement. By sharing our work,
                            we learn from each other and build better software.
                        </p>
                    </div>

                    {/* Image (Left) */}
                    <div className="relative w-full md:w-1/2 mt-32 md:mt-0 md:pl-20">
                        <div className="relative w-full aspect-square md:w-[400px] md:h-[400px]">
                            <Image
                                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
                                alt="Coding"
                                fill
                                className="object-cover rounded-2xl opacity-80 mix-blend-screen shadow-[0_0_50px_rgba(220,38,38,0.3)]"
                            />
                            {/* Red Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent rounded-2xl"></div>
                        </div>
                    </div>
                </div>


                {/* === SOFTWARE SECTION === */}
                <div className="relative mb-40">
                    {/* Line transition Green -> Red */}
                    <div className="absolute top-[-100px] right-[3rem] md:right-[9rem] h-[100px] w-[1px] bg-gradient-to-b from-green-500/30 to-red-500/30 hidden md:block"></div>
                    <div className="absolute top-0 right-[3rem] md:right-[9rem] bottom-0 w-[1px] bg-red-500/30 hidden md:block"></div>

                    {/* Header */}
                    <div className="flex items-center justify-end gap-6 mb-12 relative pr-8 md:pr-[calc(9rem+2rem)] text-right">
                        <div className="absolute right-[9rem] top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)] hidden md:block"></div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            <span className="text-red-500">Software.</span> The way we see it.
                        </h2>
                    </div>

                    {/* BENTO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 md:px-20 max-w-6xl mx-auto">
                        {/* Box 1 */}
                        <div className="md:col-span-1 bg-[#0f111a] border border-white/10 rounded-xl p-6 flex flex-col justify-center items-center text-center hover:border-red-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-gray-200">Design.</h3>
                            <h3 className="text-2xl font-bold text-gray-400">Develop.</h3>
                            <h3 className="text-2xl font-bold text-gray-600">Deploy.</h3>
                        </div>

                        {/* Box 2 */}
                        <div className="md:col-span-2 bg-[#0f111a] border border-white/10 rounded-xl p-6 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex items-center gap-2 text-red-400 mb-2">
                                <Terminal size={20} />
                                <span className="font-mono text-xs">system_check.sh</span>
                            </div>
                            <p className="font-mono text-xs text-gray-400">
                                $ Scalability check...<br />
                                $ Security protocols... <span className="text-green-400">PASSED</span><br />
                                $ Performance optim... <span className="text-green-400">100%</span>
                            </p>
                        </div>

                        {/* Box 3 */}
                        <div className="md:col-span-1 bg-[#0f111a] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-2">
                            <Shield className="text-red-500 mb-2" size={32} />
                            <span className="text-xs font-bold text-center">Enterprise Grade Security</span>
                        </div>

                        {/* Box 4 */}
                        <div className="md:col-span-2 bg-[#0f111a] border border-white/10 rounded-xl p-6 min-h-[150px] flex items-end">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 rounded bg-white/5 text-xs text-gray-400 border border-white/10">React</span>
                                <span className="px-3 py-1 rounded bg-white/5 text-xs text-gray-400 border border-white/10">Node</span>
                                <span className="px-3 py-1 rounded bg-blue-500/20 text-xs text-blue-400 border border-blue-500/30">TypeScript</span>
                            </div>
                        </div>

                        {/* Box 5 */}
                        <div className="md:col-span-2 bg-[#0f111a] border border-white/10 rounded-xl p-6 flex items-center justify-between group">
                            <div>
                                <h4 className="font-bold text-lg">Global Scale</h4>
                                <p className="text-xs text-gray-500">Deployed across 12 regions</p>
                            </div>
                            <Globe className="text-gray-600 group-hover:text-white transition-colors" size={40} />
                        </div>
                    </div>
                </div>


                {/* === CONTACT FORM SECTION === */}
                <div className="relative pb-40">
                    <div className="flex flex-col md:flex-row gap-12 px-4 md:px-20 max-w-6xl mx-auto items-center">

                        {/* Form */}
                        <div className="w-full md:w-1/2 z-10">
                            <h2 className="text-4xl font-bold mb-8">
                                Let&apos;s <span className="text-red-500">connect.</span>
                            </h2>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-red-500/50 focus:outline-none transition-colors" />
                                    <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-red-500/50 focus:outline-none transition-colors" />
                                </div>
                                <textarea placeholder="Message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-red-500/50 focus:outline-none transition-colors"></textarea>
                                <button className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-lg font-bold transition-colors">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        </div>

                        {/* Satellite Image */}
                        <div className="w-full md:w-1/2 relative h-[300px]">
                            <Image
                                src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?q=80&w=2574&auto=format&fit=crop"
                                alt="Satellite"
                                fill
                                className="object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                            />
                        </div>

                    </div>
                </div>

            </div>

            {/* === FOOTER LANDSCAPE === */}
            <div className="relative w-full h-[300px] mt-[-100px] z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent z-10"></div>
                <Image
                    src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2674&auto=format&fit=crop"
                    alt="Landscape"
                    fill
                    className="object-cover opacity-50 overflow-visible"
                />
                <div className="absolute bottom-4 w-full text-center z-20 text-xs text-gray-600">
                    © 2024 Pratik Prajapati. All rights reserved.
                </div>
            </div>

        </section>
    );
}

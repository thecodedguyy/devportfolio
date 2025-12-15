"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
    Sparkles,
    Rocket,
    MousePointer2,
    Send,
    AtSign,
    User,
    Flame
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalSection() {
    const pinRef = useRef<HTMLDivElement>(null);
    const productivityRef = useRef<HTMLDivElement>(null);
    const pixelRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    /* ================= PINNED VIDEO SECTION ================= */
    useEffect(() => {
        if (!pinRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: pinRef.current,
                    start: "top top",
                    end: "+=2600",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });

            tl.from(".design-box", {
                opacity: 0,
                y: 80,
                duration: 1.2
            });

            tl.from(".innovate-card", {
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 1
            }, "-=0.6");

            tl.to(productivityRef.current, {
                x: -140,
                y: 30,
                duration: 2
            });

            tl.to(pixelRef.current, {
                innerText: 35,
                duration: 2,
                snap: { innerText: 0.01 },
                ease: "none",
                onUpdate: function () {
                    pixelRef.current!.innerText =
                        parseFloat(this.targets()[0].innerText).toFixed(2);
                }
            }, "<");

            tl.fromTo(
                cursorRef.current,
                { opacity: 0, x: 0, y: 0 },
                { opacity: 1, x: 120, y: -60, duration: 1.5 }
            );

            tl.from(".comment-bubble", {
                opacity: 0,
                scale: 0.9,
                y: 20,
                duration: 0.6,
                ease: "back.out(1.7)"
            }, "-=0.6");
        }, pinRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* ================= FIGMA / SOFTWARE SECTION ================= */}
            <section className="relative bg-[#030014] text-white overflow-hidden">
                <div ref={pinRef} className="relative h-screen max-w-7xl mx-auto">

                    {/* GRID */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

                    {/* DESIGN BOX */}
                    <div className="design-box absolute left-[5%] top-[18%] p-6 bg-[#0f111a]/90 border border-white/10 rounded-2xl backdrop-blur-md">
                        <h3 className="text-3xl font-semibold text-gray-500">Design.</h3>
                        <h3 className="text-3xl font-semibold text-gray-400">Develop.</h3>
                        <h3 className="text-3xl font-semibold text-gray-200">Deploy.</h3>
                    </div>

                    {/* INNOVATE */}
                    <div className="innovate-card absolute left-[52%] top-[18%]">
                        <div className="flex gap-3 p-4 bg-[#0f111a]/90 border border-white/10 rounded-xl backdrop-blur-md">
                            <Sparkles size={18} />
                            <div>
                                <h4 className="text-sm font-semibold">Innovate.</h4>
                                <p className="text-xs text-gray-400">
                                    Shape tomorrow&apos;s guidelines.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* PRODUCTIVITY */}
                    <div ref={productivityRef} className="absolute left-[30%] top-[40%]">
                        <div className="relative w-[380px] p-6 bg-[#0f111a]/90 border border-white/10 rounded-2xl backdrop-blur-md">
                            <h4 className="text-lg font-semibold">
                                Productivity at its finest.
                            </h4>
                            <p className="text-sm text-gray-400 mt-1">
                                With <span className="text-white">quality</span> and{" "}
                                <span className="text-white">sustainability</span> at heart.
                            </p>

                            <div className="absolute top-1/2 left-full ml-4">
                                <div className="px-3 py-1 border border-dashed border-green-500/60 rounded-md bg-[#0b1f14] min-w-[100px] text-center">
                                    <span className="text-green-400 text-xs font-mono whitespace-nowrap">
                                        + <span ref={pixelRef}>19.00</span> px
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="absolute left-[30%] top-[58%]">
                        <div className="flex gap-2 bg-[#0f111a]/90 border border-white/10 rounded-xl p-2 backdrop-blur-md">
                            <button className="px-4 py-2 text-xs text-gray-400">Discover</button>
                            <button className="px-4 py-2 text-xs bg-white/5 rounded-lg">
                                Get Started
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-xs font-semibold">
                                <Rocket size={12} /> Ship it
                            </button>
                        </div>
                    </div>

                    {/* COMMENT + CURSOR */}
                    <div
                        ref={cursorRef}
                        className="absolute left-[36%] top-[80%] z-50 pointer-events-none"
                    >
                        <div className="comment-bubble bg-[#0b1220] border border-blue-500/40 rounded-xl rounded-bl-none px-4 py-3 w-[320px] shadow-xl">
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold">
                                    M
                                </div>
                                <span className="text-[11px] text-gray-400">
                                    Michael • 5 minutes ago
                                </span>
                            </div>
                            <p className="text-sm">
                                Let&apos;s add a text input under these!
                            </p>
                        </div>

                        <div className="absolute -right-10 -bottom-8">
                            <MousePointer2
                                size={36}
                                className="text-red-500 fill-red-500 rotate-[-12deg]"
                            />
                            <div className="absolute top-6 left-5 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">
                                Pratik
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= LET’S CONNECT / SPACE SECTION ================= */}
            <section className="relative bg-[#030014] text-white overflow-hidden">
                {/* STARS */}
                <Image
                    src="https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Stars"
                    fill
                    className="object-cover opacity-80"
                />

                {/* Gradient blend to merge with top section */}
                <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#030014] via-[#030014]/50 to-transparent z-0"></div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 py-40 grid md:grid-cols-2 gap-20">
                    {/* FORM */}
                    <div>
                        <h2 className="text-5xl font-bold mb-10">
                            Let&apos;s <span className="text-red-500">connect.</span>
                        </h2>

                        <form className="space-y-6">
                            <div className="relative">
                                <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    placeholder="Your email"
                                    className="w-full pl-12 p-4 bg-black/60 border border-white/10 rounded-xl"
                                />
                            </div>

                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <input
                                    placeholder="Your name"
                                    className="w-full pl-12 p-4 bg-black/60 border border-white/10 rounded-xl"
                                />
                            </div>

                            <textarea
                                rows={5}
                                placeholder="What's on your mind?"
                                className="w-full p-4 bg-black/60 border border-white/10 rounded-xl"
                            />

                            <div className="flex justify-end gap-4">
                                <button className="flex items-center gap-2 px-6 py-2 bg-red-900/30 text-red-400 rounded-lg">
                                    <Flame size={14} /> Call me
                                </button>
                                <button className="flex items-center gap-2 px-6 py-2 bg-blue-900/30 text-blue-400 rounded-lg">
                                    <Send size={14} /> Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* SPACE IMAGE */}
                    <div className="relative h-[400px]">
                        <Image
                            src="/satellite.webp"
                            alt="Space station"
                            fill
                            className="object-contain -rotate-12"
                        />
                    </div>
                </div>

                <div className="relative z-20 text-center text-xs text-gray-400 pb-10">
                    © 2025 Pratik Prajapati. All rights reserved.
                </div>
            </section>
        </>
    );
}

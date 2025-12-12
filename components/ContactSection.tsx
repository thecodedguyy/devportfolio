"use client";

import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

export default function ContactSection() {
    const ref = useGsapFadeIn();

    return (
        <section id="contact" className="flex items-center bg-slate-950">
            <div
                ref={ref}
                className="max-w-3xl mx-auto px-4 py-24 md:py-32 text-center space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Let&apos;s build something <span className="text-sky-400">cool</span>.
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Need a high-end, animated front-end or a complete SaaS from
                    idea to production? I&apos;m available for freelance and
                    collaborations.
                </p>
                <a
                    href="mailto:youremail@domain.com"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium"
                >
                    Say hello
                </a>
            </div>
        </section>
    );
}

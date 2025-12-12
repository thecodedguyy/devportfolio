"use client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/5">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <span className="font-semibold tracking-tight">
                    Pratik<span className="text-sky-400">.dev</span>
                </span>
                <div className="flex gap-6 text-sm text-gray-300">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

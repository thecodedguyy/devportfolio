"use client";

import { Home, FolderGit2, FileText, User, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center py-8 z-50 border-r border-white/10 bg-black/50 backdrop-blur-md">
            {/* Logo / Home Icon */}
            <div className="mb-12">
                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl">
                    P
                </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-10 flex-1 w-full px-4">
                <div className="flex flex-col items-center gap-8">
                    <Link href="#home" className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-xl bg-white/5 text-white group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all">
                            <Home size={20} />
                        </div>
                        <span className="text-[10px] uppercase font-medium text-gray-400 group-hover:text-white">Home</span>
                    </Link>

                    <Link href="#projects" className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-xl hover:bg-white/5 text-gray-400 group-hover:text-blue-400 transition-all">
                            <FolderGit2 size={20} />
                        </div>
                        <span className="text-[10px] uppercase font-medium text-gray-400 group-hover:text-white">Projects</span>
                    </Link>

                    <Link href="#resume" className="flex flex-col items-center gap-2 group">
                        <div className="p-3 rounded-xl hover:bg-white/5 text-gray-400 group-hover:text-blue-400 transition-all">
                            <FileText size={20} />
                        </div>
                        <span className="text-[10px] uppercase font-medium text-gray-400 group-hover:text-white">Resume</span>
                    </Link>
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto">
                <button className="p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                    <Moon size={20} />
                </button>
            </div>
        </nav>
    );
}

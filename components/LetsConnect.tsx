import Image from "next/image";
import { AtSign, Flame, Send, User } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser'
import { EmailJSResponseStatus } from '@emailjs/browser';
import { toast } from "sonner";

export default function LetsConnect() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

        ).then(() => {
            toast.success("Message sent, Thank you for contacting me. I'll get back to you soon!");
            alert("Message sent, Thank you for contacting me. I'll get back to you soon!");
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }).catch((error: EmailJSResponseStatus) => {
            toast.error("Oops! Something went wrong. Try again later.");
            alert("Oops! Something went wrong. Try again later.");
            console.error(error);
            setIsSubmitting(false);
        });
    };
    return (
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

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="w-full pl-12 p-4 bg-black/60 border border-white/10 rounded-xl"
                            />
                        </div>

                        <div className="relative">
                            <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Your email"
                                className="w-full pl-12 p-4 bg-black/60 border border-white/10 rounded-xl"
                            />
                        </div>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            required
                            placeholder="What's on your mind?"
                            className="w-full p-4 bg-black/60 border border-white/10 rounded-xl"
                        />

                        <div className="flex justify-end gap-4">
                            <button className="flex items-center gap-2 px-6 py-2 bg-red-900/30 text-red-400 rounded-lg">
                                <Flame size={14} /> Call me
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-blue-900/30 text-blue-400 rounded-lg cursor-pointer">
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
    )
}
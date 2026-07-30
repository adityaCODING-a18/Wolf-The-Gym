"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#services" },
    { name: "Gallery", href: "#gym-interior" },
    { name: "Trainers", href: "/trainers" },
    { name: "Contact", href: "#find-us" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full px-3 sm:px-5 pt-3 sm:pt-5">
            <nav className="mx-auto max-w-7xl p-3 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-xl">
                {/* Top Bar */}
                <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 min-w-0"
                    >
                        <div className="mx-auto max-w-7xl p-1 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-xl">
                            <Image
                                src="/icon.jpg"
                                alt="Logo"
                                width={50}
                                height={50}
                                priority
                                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover flex-shrink-0"
                            />
                        </div>

                        <span className="truncate text-lg sm:text-xl lg:text-2xl font-bold text-white transition-all duration-300 hover:[text-shadow:0_0_8px_#ef4444,0_0_16px_#ef4444,0_0_30px_#dc2626] [text-shadow:0_0_5px_rgba(255,255,255,0.5)]">
                            Wolf the Gym
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-7">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative text-white/80 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Button */}
                    <button
                        className="
                            hidden lg:block
                            relative
                            overflow-hidden
                            rounded-full
                            border border-white/20
                            bg-gradient-to-r from-black via-neutral-900 to-zinc-800
                            px-7 py-3
                            font-semibold
                            tracking-wide
                            text-white
                            shadow-[0_0_15px_rgba(255,255,255,0.18)]
                            transition-all
                            duration-500
                            hover:scale-105
                            hover:border-white/60
                            hover:shadow-[0_0_15px_rgba(255,255,255,0.45),0_0_40px_rgba(255,255,255,0.25)]
                            hover:-translate-y-0.5
                            active:scale-95
                            before:absolute
                            before:inset-0
                            before:-translate-x-full
                            before:bg-gradient-to-r
                            before:from-transparent
                            before:via-white/25
                            before:to-transparent
                            before:transition-transform
                            before:duration-700
                            hover:before:translate-x-full
                    "
                    >
                        <span className="relative z-10">Join Now</span>
                    </button>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                        className="
                            menu_button
                            lg:hidden
                            text-white
                    "
                    >
                        <span
                            className={`transition-all duration-300 ${open ? "rotate-180 scale-110" : "rotate-0 scale-100"
                                }`}
                        >
                            {open ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-screen border-t border-white/20" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col bg-black/40 backdrop-blur-xl">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="px-5 py-4 text-white/80 hover:bg-white/10 hover:text-white transition"
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="p-5">
                            <button className="w-full rounded-full bg-white py-3 font-semibold text-black transition hover:bg-gray-200">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
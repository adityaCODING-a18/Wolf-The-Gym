"use client";

import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function FounderCTA() {
    return (
        <section className="px-6 py-20 bg-black">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black shadow-[0_30px_80px_rgba(0,0,0,.45)]">

                    {/* Background Glow */}
                    <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/5 blur-[140px]" />

                    <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/[0.03] to-transparent" />

                    {/* Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:70px_70px]" />

                    <div className="relative grid items-center gap-10 px-8 py-12 md:px-14 lg:grid-cols-[1.8fr_0.9fr]">

                        {/* Left */}

                        <div>

                            <p className="mb-5 text-xs uppercase tracking-[0.45em] text-zinc-500">
                                Train With The Vision
                            </p>

                            <h2 className="text-4xl font-black uppercase leading-tight text-white md:text-5xl">
                                Meet The Founder
                            </h2>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                                Discover the philosophy behind <span className="font-semibold text-white">Wolf The Gym</span>.
                                Learn more about Satyendra Kumar, his journey, his vision,
                                and the community built through discipline and consistency.
                            </p>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col gap-5">

                            <a
                                href="/founder"
                                className="group flex items-center justify-center rounded-2xl bg-white px-8 py-5 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
                            >
                                View Founder Story

                                <ArrowUpRight
                                    className="ml-3 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                                    size={18}
                                />
                            </a>

                            <a
                                href="https://www.instagram.com/_wolf_2.o?igsh=MXAzdGg4b280bXNpYQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-2xl border border-white/15 bg-white/[0.03] px-8 py-5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/10"
                            >
                                <FaInstagram className="mr-3 text-xl" />

                                Open Instagram

                                <ArrowUpRight
                                    className="ml-3 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                                    size={18}
                                />
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
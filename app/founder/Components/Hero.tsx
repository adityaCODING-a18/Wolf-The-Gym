"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-black text-white">
            {/* Background */}
            <div className="absolute inset-0">
                {/* Soft Glow */}
                <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-white/[0.05] blur-[220px]" />

                <div className="absolute right-[-200px] bottom-[-150px] h-[500px] w-[500px] rounded-full bg-zinc-500/10 blur-[220px]" />

                {/* Grid Texture */}
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:80px_80px]" />

                {/* Radial Light */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
            </div>

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">

                <div className="relative w-full overflow-hidden rounded-[42px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

                    {/* Glass Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] via-transparent to-transparent pointer-events-none" />

                    <div className="grid items-center gap-20 p-8 md:p-14 lg:grid-cols-2 lg:p-20">

                        {/* Left Image */}
                        <div className="flex justify-center lg:justify-start">

                            <div className="group relative">

                                {/* Frame */}
                                <div className="rounded-[36px] border border-white/10 bg-white/[0.02] p-4">

                                    <div className="overflow-hidden rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,.55)]">

                                        <Image
                                            src="/founder.webp"
                                            alt="Founder"
                                            width={420}
                                            height={560}
                                            className="h-[560px] w-[400px] object-cover transition duration-700 group-hover:scale-105"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                        {/* Right Content */}
                        <div>

                            {/* Small Heading */}
                            <div className="flex items-center gap-4">

                                <div className="h-px w-12 bg-white/40" />

                                <p className="text-xs tracking-[0.45em] uppercase text-zinc-500">
                                    Founder & Head Coach
                                </p>

                            </div>

                            {/* Name */}
                            <h1 className="mt-8 text-5xl font-black leading-none md:text-6xl xl:text-7xl">
                                SATYENDRA
                                <br />

                                <span className="text-zinc-500">
                                    KUMAR
                                </span>

                            </h1>

                            {/* Instagram Card */}
                            <a
                                href="https://www.instagram.com/satyendra_fit_coach_?igsh=MWZnZjU4ZXQ2eXkzaA==&igsi=MWZnZjU4ZXQ2eXkzaA=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-10 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:bg-white/[0.08]"
                            >

                                <div className="flex items-center gap-4">

                                    <Image
                                        src="https://ik.imagekit.io/hvsvyculi/WhatsApp%20Image%202026-08-11%20at%2006.28.24.jpeg"
                                        alt="Founder"
                                        width={60}
                                        height={60}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />

                                    <div>

                                        <p className="font-semibold">
                                            @satyendra_fit_coach
                                        </p>

                                        <p className="text-sm text-zinc-500">
                                            Satyendra | Ftiness Coach | Weight Loss | Trainer
                                        </p>

                                    </div>

                                </div>

                                <ArrowUpRight
                                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                                />

                            </a>

                            {/* Divider */}
                            <div className="my-10 h-px bg-gradient-to-r from-white/40 to-transparent" />

                            {/* About */}
                            <p className="max-w-lg text-lg leading-9 text-zinc-300">

                                Meet{" "}
                                <span className="font-semibold text-white">
                                    Satyendra Kumar
                                </span>
                                , the visionary behind Wolf The Gym. His journey
                                is driven by discipline, relentless dedication,
                                and an unwavering commitment to helping people
                                unlock their strongest selves through fitness,
                                mindset, and consistency.

                            </p>

                            <p className="mt-8 max-w-lg leading-8 text-zinc-500">

                                More than building a gym, he has built a
                                community where transformation is a lifestyle.
                                Every workout, every challenge, and every
                                achievement reflects his philosophy that true
                                strength begins with discipline.

                            </p>

                            {/* Quote */}
                            <div className="mt-12 border-l border-white/20 pl-6">

                                <p className="text-2xl italic text-zinc-300">

                                    “Discipline is temporary.
                                    <br />
                                    Legacy is forever.”

                                </p>

                                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-zinc-600">

                                    SATYENDRA KUMAR

                                </p>

                            </div>

                            {/* CTA */}
                            <div className="mt-12">

                                <a
                                    href="https://www.instagram.com/_wolf_2.o?igsh=MXAzdGg4b280bXNpYQ%3D%3D&utm_source=qr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-4 rounded-full border border-white px-8 py-4 font-medium transition-all duration-300 hover:bg-white hover:text-black"
                                >

                                    <FaInstagram className="text-xl" />

                                    Follow the Journey

                                    <ArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
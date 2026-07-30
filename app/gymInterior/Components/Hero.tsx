"use client"
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Building } from "lucide-react";

const words = [
    {
        mainLine1: "STEP INSIDE",
        mainLine2: "WOLF THE GYM",
        subLine: "Jehanabad's biggest and most premium fitness destination — built to inspire every rep"
    },
    {
        mainLine1: "STEP INSIDE",
        mainLine2: "WOLF THE GYM",
        subLine: "Elite equipment, expert coaching, and a community built for those who refuse to settle for average. Your transformation starts today."
    },
]
const selectedWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

export default function Hero() {

    const [index, setIndex] = useState({
        mainLine1: "STEP INSIDE",
        mainLine2: "WOLF THE GYM",
        subLine: "Elite equipment, expert coaching, and a community built for those who refuse to settle for average. Your transformation starts today."
    });

    useEffect(() => {
        setIndex(selectedWord());
    }, []);

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <Image
                src="/gym_view/virtual tour.webp"
                alt="Virtual Tour"
                fill
                // width={1000}
                // height={1000}
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/35" />

            {/* Hero Content */}
            <div
                className="
                    relative z-10
                    flex min-h-screen flex-col
                    items-center justify-center
                    px-6 pt-24 pb-16
                    text-center

                    sm:px-8
                    md:px-12
                    lg:px-20
                "
            >
                <div className="flex w-full max-w-6xl flex-col items-start justify-center gap-6 md:gap-8">
                    <p className="uppercase tracking-[0.35em] text-white">
                        <Building className="inline-block mr-5 text-white" />
                        VIRTUAL TOUR
                    </p>
                    {/* Title */}
                    <div className="flex flex-col justify-self-start items-start gap-2">
                        <h1 className="text-4xl lg:text-6xl font-black uppercase leading-[0.9] tracking-tight text-white drop-shadow-2xl">
                            {index.mainLine1}
                        </h1>
                        <h1
                            className="
                                text-4xl
                                lg:text-6xl
                                font-black
                                uppercase
                                leading-[0.9]
                                text-[#8e6e3e]
                            "
                        >
                            {index.mainLine2}
                        </h1>
                    </div>

                    {/* Description */}
                    <p
                        className="
                            max-w-xs
                            text-sm
                            leading-7
                            text-zinc-300

                            sm:max-w-lg
                            sm:text-base

                            md:max-w-2xl
                            md:text-lg
                            md:leading-8

                            lg:max-w-3xl
                        "
                    >
                        {index.subLine}
                    </p>

                    {/* CTA */}
                    <button
                        className="
                            group
                            relative
                            mt-3
                            inline-flex
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full

                            border
                            border-white/20

                            bg-black/40
                            backdrop-blur-md

                            px-7
                            py-3.5

                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-white

                            shadow-xl

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-white/60
                            hover:bg-white
                            hover:text-black
                            hover:shadow-[0_15px_45px_rgba(255,255,255,0.25)]

                            active:scale-95

                            sm:px-8
                            sm:py-4
                            sm:text-base

                            before:absolute
                            before:inset-0
                            before:-translate-x-full
                            before:bg-gradient-to-r
                            before:from-transparent
                            before:via-white/20
                            before:to-transparent
                            before:transition-transform
                            before:duration-700

                            hover:before:translate-x-full
                        "
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            EXPLORE THE GYM
                            <ArrowDown
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-y-1"
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
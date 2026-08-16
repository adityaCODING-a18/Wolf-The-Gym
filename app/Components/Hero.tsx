"use client"
import { useEffect, useState } from "react";

const words = [
    {
        mainLine: "Forge the Strongest Version of Yourself",
        subLine: "Elite equipment, expert coaching, and a community built for those who refuse to settle for average. Your transformation starts today."
    },
    {
        mainLine: "Strength Isn't Given. It's Earned.",
        subLine: "Every workout is an investment in your future. Build strength, confidence, and discipline in a gym designed for serious results."
    },
    {
        mainLine: "The Person You Want to Become Is Waiting.",
        subLine: "Stop wishing for change. Start creating it with world-class training, professional guidance, and an environment that pushes you forward."
    },
    {
        mainLine: "Average Ends Here.",
        subLine: "Train harder. Move smarter. Become stronger. Every session brings you closer to the version of yourself you've always imagined."
    },
    {
        mainLine: "Lead the Pack. Dominate Your Limits.",
        subLine: "More than a gym—this is where discipline is built, strength is earned, and champions are created one workout at a time."
    },
    {
        mainLine: "Built for Those Who Refuse to Quit.",
        subLine: "Premium equipment. Expert trainers. A results-driven environment. Everything you need to become stronger than yesterday."
    }
]
const selectedWord = () => {
    return words[Math.floor(Math.random() * words.length)];
}

export default function Hero() {

    const [index, setIndex] = useState({
        mainLine: "Forge the Strongest Version of Yourself",
        subLine: "Elite equipment, expert coaching, and a community built for those who refuse to settle for average. Your transformation starts today."
    });

    useEffect(() => {
        setIndex(selectedWord());
    }, []);

     const handleJoin = () => {
        const phone = "919386868111";
        const message = "Hi, I want to join! WOLF THE GYM";

        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="https://ik.imagekit.io/hvsvyculi/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black/85" />

            {/* Hero Content */}
            <div
                className="
            relative
            z-10
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            gap-6
            px-5
            pt-24
            pb-12
            text-center

            sm:px-8
            md:px-12
            lg:px-20
        "
            >
                {/* Title */}
                <h1
                    className="
                max-w-5xl
                text-4xl
                font-black
                uppercase
                tracking-wide
                text-white

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                xl:text-8xl


            "
                >
                    WOLF THE GYM
                </h1>

                {/* Main Line */}
                <h2
                    className="
                max-w-4xl
                text-xl
                font-bold
                leading-tight
                text-white/30

                sm:text-2xl
                md:text-3xl
                lg:text-4xl
            "
                >
                    THE BIGGEST GYM IN JEHANABAD
                </h2>
                <h2
                    className="
                max-w-4xl
                text-xl
                font-bold
                leading-tight
                text-white

                sm:text-2xl
                md:text-3xl
                lg:text-4xl
            "
                >
                    {index.mainLine}
                </h2>

                {/* Description */}
                <p
                    className="
                max-w-xs
                text-sm
                leading-7
                text-gray-300

                sm:max-w-lg
                sm:text-base

                md:max-w-2xl
                md:text-lg

                lg:max-w-3xl
            "
                >
                    {index.subLine}
                </p>

                {/* CTA */}
                <button
                    onClick={handleJoin}
                    className="
                relative
                mt-4
                inline-flex
                items-center
                justify-center
                overflow-hidden
                rounded-full

                border
                border-white/20

                bg-gradient-to-r
                from-black
                via-neutral-900
                to-zinc-800

                px-6
                py-3

                text-base
                font-semibold
                tracking-wide
                text-white

                shadow-[0_0_15px_rgba(255,255,255,0.18)]

                transition-all
                duration-500

                hover:-translate-y-1
                hover:scale-105
                hover:border-white/60
                hover:shadow-[0_0_15px_rgba(255,255,255,0.45),0_0_40px_rgba(255,255,255,0.25)]

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

                sm:px-8
                sm:py-4
                sm:text-lg
            "
                >
                    <span className="relative z-10">
                        Get Started
                    </span>
                </button>
            </div>
        </section>
    );
}
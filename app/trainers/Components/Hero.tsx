"use client"
import { useEffect, useState } from "react";

const words = [
    {
        mainLine: "MEET THE CORE TEAM",
        subLine: "Management, prep, personal training, strength support, and member-facing leadership from the people building WOLF THE GYM every day."
    },
    {
        mainLine: "BUILD LASTING STRENGTH",
        subLine: "Discover expert coaching, structured training, and a performance-driven environment designed to help every member grow stronger with confidence."
    },
    {
        mainLine: "START YOUR TRANSFORMATION",
        subLine: "From your first workout to your biggest milestone, experience professional guidance and the motivation to become your best self."
    },
    {
        mainLine: "TRAIN WITH PURPOSE",
        subLine: "Every session is built around discipline, consistency, and measurable progress, helping you move closer to your fitness goals."
    },
    {
        mainLine: "JOIN THE WOLF COMMUNITY",
        subLine: "Become part of a supportive fitness community where members inspire one another, celebrate victories, and grow stronger together."
    },
    {
        mainLine: "EXPERIENCE PREMIUM FITNESS",
        subLine: "Modern facilities, advanced equipment, and dedicated trainers come together to create an exceptional training experience every day."
    }
];

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
                <h2
                    className="
                max-w-5xl
                text-2xl
                font-black
                uppercase
                tracking-wide
                text-white

                sm:text-3xl
                md:text-4xl
                lg:text-5xl
                xl:text-6xl


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

            </div>
        </section>
    );
}
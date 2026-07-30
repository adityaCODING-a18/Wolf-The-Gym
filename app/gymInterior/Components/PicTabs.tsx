"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
    { src: "/gym_view/2.jpeg", title: "Luxury Interior", caption: "The caption defines something about the pic." },
    { src: "/gym_view/1.jpeg", title: "Premium Equipment", caption: "The caption defines something about the pic." },
    { src: "/gym_view/3.jpeg", title: "Strength Zone", caption: "The caption defines something about the pic." },
    { src: "/gym_view/4.jpeg", title: "Reception", caption: "The caption defines something about the pic." },
    { src: "/gym_view/5.jpeg", title: "Cardio Floor", caption: "The caption defines something about the pic." },
    { src: "/gym_view/6.jpeg", title: "Functional Area", caption: "The caption defines something about the pic." },
    { src: "/gym_view/4.jpeg", title: "Recovery Zone", caption: "The caption defines something about the pic." },
    { src: "/gym_view/1.jpeg", title: "Elite Machines", caption: "The caption defines something about the pic." },
];

export default function GymInterior() {
    const [selected, setSelected] = useState<string | null>(null);

    useEffect(() => {
        if (!selected) return;

        const close = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };

        window.addEventListener("keydown", close);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", close);
            document.body.style.overflow = "";
        };
    }, [selected]);

    return (
        <>
            <section id="gym-interior" className="bg-black px-5 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">

                    {/* Heading */}

                    <div className="mb-20 text-center">

                        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
                            Premium Experience
                        </p>

                        <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
                            TRAIN IN A WORLD CLASS SPACE
                        </h2>

                        <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

                        <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                            Every corner has been designed to inspire performance,
                            comfort and luxury.
                        </p>

                    </div>

                    {/* ROW 1 */}

                    <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
                        <GalleryCard
                            image={images[0]}
                            height="h-[340px] sm:h-[480px] lg:h-[650px]"
                            onClick={setSelected}
                        />

                        <GalleryCard
                            image={images[1]}
                            featured
                            height="h-[340px] sm:h-[480px] lg:h-[650px]"
                            onClick={setSelected}
                        />

                        <GalleryCard
                            image={images[2]}
                            height="h-[260px] sm:h-[340px] lg:h-[650px]"
                            onClick={setSelected}
                        />
                    </div>

                    {/* ROW 2 */}

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <GalleryCard
                            image={images[3]}
                            height="h-[300px] sm:h-[420px] lg:h-[520px]"
                            onClick={setSelected}
                        />

                        <GalleryCard
                            image={images[4]}
                            height="h-[300px] sm:h-[420px] lg:h-[520px]"
                            onClick={setSelected}
                        />
                    </div>

                    {/* ROW 3 */}

                    <div className="mt-5 grid gap-5 lg:grid-cols-[2fr_1fr]">
                        <GalleryCard
                            image={images[5]}
                            height="h-[340px] sm:h-[480px] lg:h-[650px]"
                            onClick={setSelected}
                        />

                        <GalleryCard
                            image={images[6]}
                            featured
                            height="h-[340px] sm:h-[480px] lg:h-[650px]"
                            onClick={setSelected}
                        />

                        <GalleryCard
                            image={images[7]}
                            height="h-[260px] sm:h-[340px] lg:h-[650px]"
                            onClick={setSelected}
                        />
                    </div>

                </div>
            </section>

            {/* LIGHTBOX */}

            <AnimatePresence>

                {selected && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >

                        <motion.div
                            initial={{ scale: .8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: .85, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120 }}
                            className="relative h-[80vh] w-full max-w-6xl overflow-hidden rounded-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <Image
                                src={selected}
                                alt=""
                                fill
                                className="object-contain"
                            />

                            <button
                                onClick={() => setSelected(null)}
                                className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white backdrop-blur-xl transition hover:bg-white/20"
                            >
                                <X size={22} />
                            </button>

                        </motion.div>

                    </motion.div>
                )}

            </AnimatePresence>
            <div className="flex justify-center">
                <button
                    className="
                            relative
                            inline-flex
                            items-center
                            justify-center
                            overflow-hidden
                            rounded-full

                            border border-white/20

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
                    ">
                    <span className="relative z-10">
                        EXPLORE WOLF GYM INTERIOR
                    </span>
                </button>
            </div>
        </>
    );
}

function GalleryCard({
    image,
    height,
    featured,
    onClick,
}: {
    image: { src: string; title: string, caption: string };
    height: string;
    featured?: boolean;
    onClick: (src: string) => void;
}) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: .35 }}
            className={`group relative overflow-hidden rounded-[30px] border border-white/10 ${height}`}
        >
            <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* shine */}

            <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/20 blur-2xl transition-all duration-700 group-hover:left-[150%]" />

            </div>

            {/* zoom button */}

            <button
                onClick={() => onClick(image.src)}
                className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white opacity-0 backdrop-blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 active:scale-95"
            >
                <ZoomIn size={28} />
            </button>

            {/* title */}

            <div className="absolute bottom-6 left-6">

                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white backdrop-blur-xl">
                    {image.title}
                </span>

                <h3
                    className={`mt-4 font-thin text-white/70 ${featured ? "text-sm lg:text-sm" : "text-sm"
                        }`}
                >
                    {image.caption}
                </h3>

            </div>

        </motion.div>
    );
}
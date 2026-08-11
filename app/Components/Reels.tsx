"use client";

import ReelCard from "./ReelCard";


const videoUrls = [
    "https://ik.imagekit.io/hvsvyculi/Video-85948.mp4",
    "https://ik.imagekit.io/hvsvyculi/Video-50267.mp4",
    "https://ik.imagekit.io/hvsvyculi/Video-65197.mp4",
];

export default function Reels() {
    return (
        <section
            id="reels"
            className="bg-black py-20 px-5 sm:px-8 lg:px-12"
        >
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                    Gym Reels
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
                    Watch the intensity, feel the energy, and become part of the Wolf community.
                </p>

                <div
                    className="
                        mt-14
                        flex
                        gap-6
                        overflow-x-auto
                        scroll-smooth
                        px-2
                        pb-4

                        snap-x
                        snap-mandatory

                        [&::-webkit-scrollbar]:hidden
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]
                    "
                >
                    {videoUrls.map((url, index) => (
                        <div
                            key={index}
                            className="shrink-0 snap-center"
                        >
                            <ReelCard url={url} />
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={()=>{ window.open("/trainers", "_self")} }
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
                            EXPLORE WOLF TRAINERS COMMUNITY
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
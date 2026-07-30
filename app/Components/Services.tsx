"use client";
import { CheckCircle2 } from "lucide-react";

const facilities = [
    "Strength Training Machines",
    "Free Weights",
    "Cardio Zone",
    "Functional Training",
    "Personal Locker",
    "Changing Rooms",
    "Full AC Zone",
    "Clean & Seperate Washroom for Men & Women",
    "Canteen",
    "Parking Area"
]

export default function Services() {
    return (
        <section id="services" className="bg-black px-5 py-20 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                        Discover Wolf The Gym
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
                        Everything you need to transform your fitness journey—from premium
                        facilities to professionally designed training programs.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-1">

                    {/* Facilities */}
                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl

                            border border-white/10
                            bg-white/[0.04]
                            backdrop-blur-xl

                            p-8

                            transition-all
                            duration-500

                            hover:-translate-y-2
                            hover:border-white/30
                            hover:bg-white/[0.06]
                            hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]

                            active:scale-[0.98]
                    ">
                        {/* Glow */}
                        <div
                            className="
                                absolute
                                -top-20
                                -right-20
                                h-40
                                w-40
                                rounded-full
                                bg-white/10
                                blur-3xl
                                transition-all
                                duration-500
                                group-hover:bg-white/20
                        "/>

                        <div className="relative z-10">
                            <div
                                className="
                                    mb-6
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl

                                    bg-gradient-to-br
                                    from-white/20
                                    to-white/5

                                    text-3xl
                            ">
                                🏋️
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                Our Facilities
                            </h3>

                            <p className="mt-4 text-gray-400 leading-7">
                                Experience a fitness environment where world-class facilities meet exceptional performance.
                            </p>

                            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {facilities.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="text-green-400 shrink-0"
                                        />

                                        <span className="text-sm font-medium text-gray-200 sm:text-base">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                    {/* Programs */}
                    {/* <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl

                            border border-white/10
                            bg-white/[0.04]
                            backdrop-blur-xl

                            p-8

                            transition-all
                            duration-500

                            hover:-translate-y-2
                            hover:border-white/30
                            hover:bg-white/[0.06]
                            hover:shadow-[0_0_35px_rgba(255,255,255,0.12)]

                            active:scale-[0.98]
                    ">

                        <div
                            className="
                            absolute
                            -bottom-20
                            -left-20
                            h-40
                            w-40
                            rounded-full
                            bg-white/10
                            blur-3xl
                            transition-all
                            duration-500
                            group-hover:bg-white/20
                    "/>

                        <div className="relative z-10">
                            <div
                                className="
                                    mb-6
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl

                                    bg-gradient-to-br
                                    from-white/20
                                    to-white/5

                                    text-3xl
                                ">
                                💪
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                Our Programs
                            </h3>

                            <p className="mt-4 text-gray-400 leading-7">
                                Discover strength training, fat loss, muscle building, functional
                                fitness, personal training, cardio sessions, and customised workout
                                plans designed for every fitness level.
                            </p>


                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    )
}
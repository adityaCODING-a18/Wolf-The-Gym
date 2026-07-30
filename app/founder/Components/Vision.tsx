"use client"
import {
    Rocket,
    HandFist,
    Users,
} from "lucide-react";

const features = [
    {
        title: "Founder's Vision",
        subtitle: "WOLF THE GYM was built with a simple belief: fitness has the power to transform lives beyond physical appearance. Our vision is to create an environment where every individual, regardless of experience, feels motivated to grow stronger, healthier, and more confident. Every decision we make is centred on helping our members achieve lasting results through discipline, consistency, and expert guidance.",
        icon: Rocket,
    },
    {
        title: "Strength-First Identity",
        subtitle: "Strength is more than lifting heavier weights—it's about developing resilience, confidence, and the determination to overcome challenges. At WOLF THE GYM, we foster a culture where progress is measured by commitment and personal growth. We encourage every member to challenge their limits, celebrate every milestone, and become a stronger version of themselves both inside and outside the gym.",
        icon: HandFist,
    },
    {
        title: "A Community That Grows Together",
        subtitle: "A great gym is defined by the people within it. WOLF THE GYM is more than a place to work out; it's a community where members motivate one another, trainers provide genuine support, and every achievement is celebrated together. From your very first session to your biggest personal milestone, you'll always find encouragement, respect, and a team committed to your success.",
        icon: Users,
    },
];


export default function Vision() {
    return (
        <section id="vision" className="relative overflow-hidden bg-black text-white py-14 sm:py-20 lg:py-28 mx-5 sm:mx-10 lg:mx-15 xl:mx-20 w-[90vw]">
            {/* Background */}
            <div className="mb-20 text-center">
                <p className="mt-3 text-xs uppercase tracking-[0.45em] text-white/35">

                    DISCIPLINE • STRENGTH • LEGACY

                </p>

                <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
                    The Vision Behind
                    <span className="block text-white/70">
                        WOLF THE GYM
                    </span>
                </h2>

                <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

                <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                    A founder-led gym culture built on discipline, strength, and visible effort.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 w-full">
                {features.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={index}
                            className="
                    group
                    w-full
                    rounded-3xl
                    border
                    border-white/10
                    bg-gradient-to-br
                    from-[#111111]
                    via-[#080808]
                    to-black
                    p-6
                    sm:p-7
                    lg:p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#8e6e3e]/60
                    hover:shadow-[0_25px_60px_rgba(0,0,0,.5)]
                "
                        >
                            <div className="flex h-full flex-col items-start text-left">
                                {/* Icon */}
                                <div
                                    className="
                            mb-5
                            flex
                            h-14
                            w-14
                            sm:h-16
                            sm:w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-xl
                            transition-all
                            duration-500
                            group-hover:-translate-y-1
                            group-hover:rotate-6
                            group-hover:scale-110
                            group-hover:border-[#8e6e3e]/70
                        "
                                >
                                    <Icon
                                        className="
                                h-7
                                w-7
                                sm:h-8
                                sm:w-8
                                text-[#8e6e3e]
                                transition-all
                                duration-500
                                group-hover:drop-shadow-[0_0_20px_rgba(142,110,62,.9)]
                            "
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-bold text-white">
                                    {item.title}
                                </h3>

                                {/* Divider */}
                                <div className="mt-3 mb-5 h-[2px] w-12 bg-[#8e6e3e] transition-all duration-500 group-hover:w-20" />

                                {/* Paragraph */}
                                <p className="flex-1 text-sm sm:text-base leading-6 sm:leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>

    )
}
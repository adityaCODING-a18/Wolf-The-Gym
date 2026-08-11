"use client";

import {
    CoffeeIcon,
    Dumbbell,
    Flame,
    HeartPulse,
    Lock,
    Music,
    ParkingCircle,
    Snowflake,
    Toilet,
} from "lucide-react";
import { LiaBoneSolid, LiaShowerSolid } from "react-icons/lia";

const features = [
    {
        title: "COMPLETE FREE WEIGHTS",
        subtitle: "Full dumbbell rack from 2.5 kg to 50 kg, Olympic barbells, EZ bars, and specialty bars for every compound and isolation movement.",
        icon: Dumbbell,
    },
    {
        title: "CARDIO FLEET",
        subtitle: "Treadmills, ellipticals, stationary bikes, and spin bikes — enough cardio stations to never wait for your turn, even during peak hours.",
        icon: HeartPulse,
    },
    {
        title: "BIOMECHANICAS DESIGN",
        subtitle: "Every machine follows anatomical movement paths for joint-safe training. Train heavier and longer with reduced wear on your body.",
        icon: LiaBoneSolid,
    },
    {
        title: "CROSSFIT STATION",
        subtitle: "Dedicated CrossFit floor with pull-up rigs, battle ropes, plyo boxes, kettlebells, and all the functional training tools you need.",
        icon: Flame,
    },
];

const buttons = [
    { title: "FullyAC", icon: Snowflake },
    { title: "Hot & Cold Showers", icon: LiaShowerSolid },
    { title: "Secure Lockers", icon: Lock },
    { title: "Free Parking", icon: ParkingCircle },
    { title: "Cafeteria", icon: CoffeeIcon },
    { title: "Seperated Washroom", icon: Toilet },
    { title: "Premium Sound", icon: Music },
];

export default function AdvancedCards() {
    return (
        <section id="features-cards" className="bg-black py-14 sm:py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-14 text-center">

                    <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
                        FEATURES
                    </p>

                    <h2 className="text-3xl font-black text-white md:text-5xl">
                        BUILT WITH THE BEST
                    </h2>

                    <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

                    <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                        Every machine, every rack, every plate — handpicked for performance.
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

                {/* Buttons Section */}
                <div className="mt-20 flex flex-wrap justify-center gap-5">
                    {buttons.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <button
                                key={index}
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/10
                                    bg-[#111111]
                                    px-6
                                    py-4
                                    text-white
                                    transition-all
                                    duration-300
                                    hover:border-[#8e6e3e]
                                    hover:bg-[#1a1a1a]
                                    hover:-translate-y-1
                                    "
                            >
                                <Icon className="h-5 w-5 text-[#8e6e3e]" />
                                <span className="font-medium">{item.title}</span>
                            </button>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
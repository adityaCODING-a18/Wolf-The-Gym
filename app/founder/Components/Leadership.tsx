"use client"
import {
    Users,
    Dumbbell,
    Trophy,
    TrendingUp,
} from "lucide-react";

const features = [
  {
    title: "Bodybuilding Discipline",
    subtitle:
      "Build unwavering discipline through consistent training, proper nutrition, and a commitment to becoming stronger every single day.",
    icon: Dumbbell,
  },
  {
    title: "Powerlifting Mindset",
    subtitle:
      "Develop mental resilience and physical power by embracing challenges, pushing limits, and celebrating every personal best.",
    icon: Trophy,
  },
  {
    title: "Community Leadership",
    subtitle:
      "Train alongside a supportive community that motivates, inspires, and helps every member achieve lasting fitness success together.",
    icon: Users,
  },
  {
    title: "Result-Driven Energy",
    subtitle:
      "Every workout is designed to deliver measurable progress, helping you stay focused, motivated, and committed to your goals.",
    icon: TrendingUp,
  },
];


export default function Leadership() {
    return (
        <section id="leadership" className="relative overflow-hidden bg-black text-white py-14 sm:py-20 lg:py-28 mx-5 sm:mx-10 lg:mx-15 xl:mx-20 w-[90vw]">
            {/* Background */}
            <div className="mb-20 text-start">
                <p className="mt-3 text-xs uppercase tracking-[0.45em] text-white/35">

                    EAT • SLEEP • CONQUER • REPEAT

                </p>

                <h2 className="text-4xl font-black text-white md:text-2xl lg:text-3xl">
                    LEADERSHIP MINDSET
                </h2>


                <p className="mt-2 max-w-2xl text-neutral-400">
                    The way his presence feels.
                </p>
                <div className="mt-6 h-[3px] w-24 rounded-full bg-white/30" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 lg:gap-8 w-full">
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
"use client"
import {
  Users,
  Dumbbell,
  Target,
  HeartHandshake,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const buttons = [
  { title: "Personal Training", icon: Dumbbell },
  { title: "Strength Programming", icon: Target },
  { title: "Nutrition Guidance", icon: ClipboardCheck },

  // Additional three
  { title: "Community Support", icon: Users },
  { title: "Transformation Coaching", icon: TrendingUp },
  { title: "1-on-1 Mentorship", icon: HeartHandshake },
];

export default function Stickers() {
    return (
        <section className="bg-black py-14 sm:py-20 lg:py-28 w-[80vw]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"></div>
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
        </section>
    )
}
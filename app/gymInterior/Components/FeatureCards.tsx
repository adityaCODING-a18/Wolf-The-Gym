"use client";

import {
  Dumbbell,
  LayoutGrid,
  Snowflake,
  Flame,
} from "lucide-react";

const features = [
  {
    title: "BIG AREA",
    subtitle: "Training Floor",
    icon: Dumbbell,
  },
  {
    title: "MULTIPLE",
    subtitle: "Training Zones",
    icon: LayoutGrid,
  },
  {
    title: "FULLY AC",
    subtitle: "Climate Controlled",
    icon: Snowflake,
  },
  {
    title: "DEDICATED",
    subtitle: "CrossFit Floor",
    icon: Flame,
  },
];

export default function FeatureCards() {
  return (
    <section id="icon-cards" className="bg-black py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-16">
          <p className="mb-3 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#8e6e3e]">
            OUR FACILITY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
            Designed For Serious Training
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-7">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  aspect-square
                  rounded-2xl
                  sm:rounded-3xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-[#111111]
                  via-[#080808]
                  to-black
                  p-4
                  sm:p-6
                  lg:p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#8e6e3e]/60
                  hover:shadow-[0_25px_60px_rgba(0,0,0,.5)]
                "
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  {/* Icon */}
                  <div
                    className="
                      mb-4
                      flex
                      h-14
                      w-14
                      sm:h-16
                      sm:w-16
                      lg:h-20
                      lg:w-20
                      items-center
                      justify-center
                      rounded-2xl
                      sm:rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
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
                        lg:h-10
                        lg:w-10
                        text-[#8e6e3e]
                        transition-all
                        duration-500
                        group-hover:drop-shadow-[0_0_20px_rgba(142,110,62,.9)]
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-lg lg:text-2xl font-black uppercase tracking-wide text-white">
                    {item.title}
                  </h3>

                  {/* Divider */}
                  <div className="my-3 h-[2px] w-10 bg-[#8e6e3e] transition-all duration-500 group-hover:w-20" />

                  {/* Subtitle */}
                  <p className="text-xs sm:text-sm lg:text-base text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Nikhil Raj",
    image: "https://ik.imagekit.io/hvsvyculi/1.png",
    review:
      `I’ve been working out at Wolf Gym for a while now, and honestly, it’s been a really good experience. The trainers are friendly and actually pay attention, which makes a big difference. They guide you properly instead of just leaving you on your own.
The equipment is in good condition and you don’t have to wait much, even during busy hours. The overall vibe is also nice—people here are focused but not intimidating, so it feels comfortable even if you’re just starting out.
One thing I appreciate is the cleanliness. It’s well-maintained compared to many other gyms I’ve seen.
Overall, I’d say Wolf Gym is easily one of the best gyms in the city. If you’re serious about fitness or just want a good place to start, this is a solid choice.`,
    rating: 5,
  },
  {
    name: "Utkarsh Kumar",
    image: "https://ik.imagekit.io/hvsvyculi/2.png",
    review: `I’ve been training at wolf the gym for about 1 year and it’s easily one of the best fitness centers in the area. The facility is always clean, and they have a great range of equipment—from heavy lifting racks to plenty of cardio machines, so I never have to wait long.
​What really sets them apart is the staff. The trainers are knowledgeable and actually take the time to correct your form. The atmosphere is super motivating and inclusive. Highly recommend if you’re serious about your goals!"`,
    rating: 5,
  },
  {
    name: "Anirudh Saha",
    image: "https://ik.imagekit.io/hvsvyculi/3.png",
    review: `I’ve been training here for some time and it’s a really good gym. The equipment is well maintained and the place is always clean. One thing I really appreciate is the owner’s nature Mr.Sanju yadav — he’s very friendly, helpful, and makes everyone feel comfortable. It creates a positive and motivating environment to work out.”
Best gym in jehanabad`,
    rating: 5,
  }
];

export default function Feedback() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () =>
    setCurrent((prev) => (prev + 1) % reviews.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(next, 6000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section id="feedback" className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">

      {/* background glow */}

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            FEEDBACKS
          </p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            REAL MEMBERS. REAL RESULTS.
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Hear directly from the people who train with us every day.
          </p>

        </div>

        {/* Slider */}

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          {/* Left */}

          <button
            onClick={prev}
            className="
            absolute
            left-0
            top-1/2
            z-30
            -translate-x-1/2
            -translate-y-1/2
            hidden
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition
            hover:bg-white/10
            lg:flex
            "
          >
            <ChevronLeft className="text-white" />
          </button>

          {/* Right */}

          <button
            onClick={next}
            className="
            absolute
            right-0
            top-1/2
            z-30
            translate-x-1/2
            -translate-y-1/2
            hidden
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition
            hover:bg-white/10
            lg:flex
            "
          >
            <ChevronRight className="text-white" />
          </button>

          {/* Card */}

          <div className="overflow-hidden rounded-[34px]">

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{ x: 120, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -120, opacity: 0 }}
                transition={{
                  duration: .45,
                  ease: "easeInOut",
                }}
                className="
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.08]
                to-white/[0.03]
                p-7
                md:p-10
                backdrop-blur-xl
                "
              >

                {/* shine */}

                <div className="absolute inset-0 overflow-hidden">

                  <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/10 blur-3xl transition-all duration-1000 hover:left-[180%]" />

                </div>

                <Quote
                  size={90}
                  className="absolute right-8 top-8 text-white/5"
                />

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div className="flex">

                    {Array.from({ length: reviews[current].rating }).map(
                      (_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      )
                    )}

                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

                    <BadgeCheck
                      size={18}
                      className="text-green-400"
                    />

                    <span className="text-sm text-green-400">
                      Verified Member
                    </span>

                  </div>

                </div>

                <p className="mt-8 text-lg leading-9 text-neutral-200 md:text-2xl">
                  "{reviews[current].review}"
                </p>

                <div className="mt-10 flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <Image
                      src={reviews[current].image}
                      alt={reviews[current].name}
                      width={70}
                      height={70}
                      className="rounded-full border border-white/20 object-cover"
                    />

                    <div>

                      <h3 className="text-xl font-bold text-white">
                        {reviews[current].name}
                      </h3>

                    </div>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

          {/* Mobile Arrows */}

          <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">

            <button
              onClick={prev}
              className="rounded-full border border-white/10 bg-white/5 p-3"
            >
              <ChevronLeft className="text-white" />
            </button>

            <button
              onClick={next}
              className="rounded-full border border-white/10 bg-white/5 p-3"
            >
              <ChevronRight className="text-white" />
            </button>

          </div>

          {/* Dots */}

          <div className="mt-8 flex justify-center gap-3">

            {reviews.map((_, i) => (

              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-10 bg-white"
                    : "w-2 bg-white/25"
                }`}
              />

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
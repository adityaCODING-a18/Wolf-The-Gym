"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Aditya Kumar",
    duration: "8 Months Member",
    image: "/reviews/1.jpg",
    review:
      "Joining WOLF THE GYM completely transformed my lifestyle. The trainers genuinely care, the equipment is world-class and the atmosphere keeps me motivated every single day.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    duration: "1 Year Member",
    image: "/reviews/2.jpg",
    review:
      "I've trained in many gyms but nothing compares to WOLF. Everything feels premium, from the machines to the cleanliness and community.",
    rating: 5,
  },
  {
    name: "Ayush Raj",
    duration: "10 Months Member",
    image: "/reviews/3.jpg",
    review:
      "The trainers push you without making you feel overwhelmed. Every workout feels productive and enjoyable.",
    rating: 5,
  },
  {
    name: "Priyanshu",
    duration: "6 Months Member",
    image: "/reviews/4.jpg",
    review:
      "A luxury gym with an amazing vibe. You actually look forward to working out every day.",
    rating: 5,
  },
  {
    name: "Siddharth",
    duration: "1 Year Member",
    image: "/reviews/5.jpg",
    review:
      "I've trained in many gyms but nothing compares to WOLF. Everything feels premium, from the machines to the cleanliness and community.",
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

                      <p className="text-neutral-400">
                        {reviews[current].duration}
                      </p>

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
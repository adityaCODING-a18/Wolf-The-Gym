"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="order-2 lg:order-1"
        >

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/40">
            THE FOUNDER
          </p>

          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Meet The Vision Behind
            <span className="block text-white/70">
              WOLF THE GYM
            </span>
          </h2>

          <div className="mt-6 h-[3px] w-24 rounded-full bg-white/30" />

          <p className="mt-8 text-lg leading-9 text-neutral-400">
            WOLF THE GYM was created with one purpose —
            to provide a place where people don't just work out,
            they transform physically, mentally and emotionally.

            Every machine, every corner and every decision
            reflects a commitment to excellence and an obsession
            with helping members become the strongest version
            of themselves.
          </p>

          <div className="mt-10">

            <Link
              href="/founder"
              className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/15
              bg-white/5
              px-7
              py-4
              text-white
              backdrop-blur-xl
              transition-all
              duration-300
              hover:bg-white
              hover:text-black
              "
            >
              Discover The Founder

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="order-1 flex justify-center lg:order-2"
        >

          <div className="group relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-[40px] bg-white/10 blur-3xl transition duration-500 group-hover:bg-white/20" />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[40px] border border-white/10">

              <Image
                src="/founder.webp"
                alt="Founder"
                width={520}
                height={700}
                className="
                h-[420px]
                w-[320px]
                object-cover
                transition
                duration-700
                group-hover:scale-110

                sm:h-[520px]
                sm:w-[380px]

                lg:h-[620px]
                lg:w-[470px]
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Shine */}

              <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -left-full top-0 h-full w-1/2 rotate-12 bg-white/15 blur-3xl transition-all duration-1000 group-hover:left-[180%]" />

              </div>

              {/* Info */}

              <div className="absolute bottom-8 left-8 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">

                <h3 className="text-2xl font-bold text-white">
                  SATYENDRA KUMAR
                </h3>

                <p className="mt-1 text-white/70">
                  Founder & Head Coach
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
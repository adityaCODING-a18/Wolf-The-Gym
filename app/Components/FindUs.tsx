"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Camera
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function FindUs() {

  return (
    <section id="find-us" className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            FIND US
          </p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            Visit WOLF THE GYM
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            We'd love to welcome you. Visit us, explore our facilities,
            or simply stop by and experience the atmosphere.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* MAP */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: .3 }}
            className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.584323696458!2d84.98562647483806!3d25.21723693088978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2b5f3ebca9f55%3A0xfd5f70d1a373eea3!2sWolf%20The%20Gym%20(%20The%20Biggest%20Gym%20Jehanabad%20)!5e0!3m2!1sen!2sin!4v1785225339750!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              className="h-[380px] w-full border-0 md:h-[520px]"
            />

          </motion.div>

          {/* INFO */}

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: .3 }}
            className="
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-b
            from-white/[0.07]
            to-white/[0.03]
            p-8
            backdrop-blur-xl
            "
          >

            <div className="space-y-7">

              <Info
                icon={<MapPin size={22} />}
                title="Address"
                value="3rd Floor, Siya Babu Building, Near Hp Petrol Pump, P G Road, Patna Gaya Dobhi Road, Jehanabad-804408, Bihar"
              />

              <Info
                icon={<Phone size={22} />}
                title="Call Us"
                value="+91 9431258129"
              />

              <Info
                icon={<Mail size={22} />}
                title="Email"
                value="wolfthegym2.o@gmail.com"
              />

            </div>

            {/* CTA */}

            <Link
              href="https://maps.app.goo.gl/9J7856n71RNnBwfF8"
              target="_blank"
              className="
              mt-10
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-7
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
              "
            >

              <Navigation size={20} />

              Get Directions

            </Link>

            {/* Social */}

            <div className="mt-12 flex gap-4">

              <Social
                href="https://www.instagram.com/_wolf_2.o?igsh=MXAzdGg4b280bXNpYQ%3D%3D&utm_source=qr"
                icon={<FaInstagram size={22} />}
              />

              <Social
                href="https://www.facebook.com/pages/The%20Wolf%20Gym%20Jehanabad/100813128796169"
                icon={<FaFacebookF size={22} />}
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-5">

      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">

        {icon}

      </div>

      <div>

        <p className="text-sm uppercase tracking-[0.25em] text-white/40">
          {title}
        </p>

        <p className="mt-1 text-lg font-medium text-white">
          {value}
        </p>

      </div>

    </div>
  );
}

function Social({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/5
      text-white
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:bg-white
      hover:text-black
      "
    >
      {icon}
    </Link>
  );
}
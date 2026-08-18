"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa6";

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {


  return (
    <Link
      href={href}
      className="
      group
      relative
      inline-block
      w-fit
      text-neutral-400
      transition-all
      duration-300
      hover:text-white
      "
    >
      <span className="flex items-center gap-2">

        <ChevronRight
          size={15}
          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
        />

        {children}

      </span>

      <span
        className="
        absolute
        -bottom-1
        left-0
        h-px
        w-0
        bg-white
        transition-all
        duration-300
        group-hover:w-full
        "
      />
    </Link>
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
    <div className="flex gap-4">

      <div
        className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        text-white
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-[0.3em] text-white/35">
          {title}
        </p>

        <p className="mt-1 text-neutral-300">
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
      group
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/[0.04]
      backdrop-blur-xl
      transition-all
      duration-500
      hover:-translate-y-2
      hover:rotate-6
      hover:bg-white
      hover:text-black
      hover:shadow-[0_20px_40px_rgba(255,255,255,.18)]
      "
    >
      {icon}
    </Link>
  );
}

export default function Footer() {

  const handleJoin = () => {
    const phone = "919386868111";
    const message = "Hi, I want to join! WOLF THE GYM";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-black">

      {/* Top Divider */}

      <div className="relative h-px w-full overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-white" />

      </div>

      {/* Ghost Typography */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">

        <h1
          className="
          select-none
          whitespace-nowrap
          text-[28vw]
          font-black
          uppercase
          tracking-[0.08em]
          text-white/[0.025]
          md:text-[18vw]
          "
        >
          WOLF
        </h1>

      </div>

      {/* Blur Lights */}

      <div className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[180px]" />

      <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">

        {/* Hero CTA */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[0.45em] text-white/35">
            WOLF THE GYM
          </p>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl lg:text-7xl">

            BUILT FOR
            <br />
            CHAMPIONS.

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-400">

            More than equipment.
            More than workouts.
            A premium environment where discipline,
            ambition and consistency create extraordinary people.

          </p>

          <button
            onClick={handleJoin}
            className="
            group
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-white/15
            bg-white/10
            px-8
            py-4
            text-white
            backdrop-blur-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:bg-white
            hover:text-black
            hover:shadow-[0_20px_60px_rgba(255,255,255,.20)]
            "
          >

            Join The Pack

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </motion.div>

        {/* Divider */}

        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Footer Grid */}

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h3 className="text-5xl font-black tracking-wider text-white">

              WOLF

            </h3>

            <p className="mt-3 text-xs uppercase tracking-[0.45em] text-white/35">

              DISCIPLINE • STRENGTH • LEGACY

            </p>

            <p className="mt-8 leading-8 text-neutral-400">

              We believe greatness isn't given —
              it's earned through discipline,
              relentless effort and consistency.
              WOLF THE GYM exists to help every member
              become stronger than yesterday.

            </p>

          </div>

          {/* Navigation */}

          <div>

            <h4 className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">

              Navigation

            </h4>

            <div className="flex flex-col gap-5">

              <FooterLink href="/">Home</FooterLink>

              <FooterLink href="/about">About</FooterLink>

              <FooterLink href="/founder">Founder</FooterLink>

              {/* <FooterLink href="/membership">
                Membership
              </FooterLink>

              <FooterLink href="/contact">
                Contact
              </FooterLink> */}

            </div>

          </div>
          {/* Contact */}

          <div>

            <h4 className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">

              Contact

            </h4>

            <div className="space-y-6">

              <Info
                icon={<Phone size={18} />}
                title="Call Us"
                value="+91 94312 58129"
              />

              <Info
                icon={<Mail size={18} />}
                title="Email"
                value="wolfthegym2.o@gmail.com"
              />

              <Info
                icon={<MapPin size={18} />}
                title="Visit Us"
                value="Jehanabad, Bihar, India"
              />

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-white/60">

              Community

            </h4>

            <div className="flex gap-4">

              <Social
                href="https://instagram.com"
                icon={<FaInstagram size={22} />}
              />

              <Social
                href="https://facebook.com"
                icon={<FaFacebookF size={22} />}
              />

            </div>

            <p className="mt-8 leading-8 text-neutral-400">

              Join thousands of fitness enthusiasts,
              watch member transformations,
              discover training tips,
              and become part of the WOLF community.

            </p>

          </div>

        </div>

        {/* Bottom Divider */}

        <div className="relative mt-20">

          <div className="h-px bg-white/10" />

          <div
            className="
            absolute
            left-1/2
            top-0
            h-px
            w-36
            -translate-x-1/2
            bg-white/60
            "
          />

        </div>

        {/* Bottom */}

        <div
          className="
          mt-8
          flex
          flex-col
          items-center
          justify-between
          gap-6

          lg:flex-row
          "
        >

          <p className="text-center text-sm text-neutral-500 lg:text-left">

            © {new Date().getFullYear()} WOLF THE GYM.
            All Rights Reserved.

          </p>

          <div
            className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-6
            text-sm
            "
          >

            <Link
              href="/privacy-policy"
              className="
              text-neutral-500
              transition
              duration-300
              hover:text-white
              "
            >
              Privacy Policy
            </Link>

            <span className="hidden text-neutral-700 md:block">
              •
            </span>

            <Link
              href="/terms-and-conditions"
              className="
              text-neutral-500
              transition
              duration-300
              hover:text-white
              "
            >
              Terms & Conditions
            </Link>

          </div>

          <p className="text-center text-sm text-neutral-500 lg:text-right">

            Crafted with
            <span className="mx-2 text-white">♥</span>
            by &nbsp;
            <Link href="https://www.instagram.com/aditya.raj_official_/" target="_blank" className="text-white">
              ADITYA RAJ
            </Link>

          </p>

        </div>

      </div>

    </footer>
  );
}
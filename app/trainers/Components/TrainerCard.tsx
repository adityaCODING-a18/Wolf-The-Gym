import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Volume2,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { Trainer } from "../types/trainer";

type TrainerCardProps = {
  trainer: Trainer;
};

export default function TrainerCard({
  trainer,
}: TrainerCardProps) {
  return (
    <section
      className="
        relative
        mx-auto
        w-full
        max-w-[95vw]
        overflow-hidden
        rounded-[24px]
        border border-white/10
        bg-linear-to-br from-[#050505] via-[#0B0B0B] to-[#111111]
        p-4
        shadow-[0_20px_100px_rgba(0,0,0,.5)]

        sm:rounded-[30px]
        sm:p-6

        md:rounded-[36px]
        md:p-10

        lg:p-12
      "
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-56
          w-56
          rounded-full
          bg-white/[0.03]
          blur-[100px]

          sm:h-72
          sm:w-72
          sm:blur-[120px]
        "
      />

      <div
        className="
          relative
          grid
          min-w-0
          items-center
          gap-8

          lg:grid-cols-[1.2fr_420px]
          lg:gap-10
        "
      >
        {/* RIGHT / VIDEO */}

        <div
          className="
            order-1
            flex
            min-w-0
            justify-center

            lg:order-2
          "
        >
          <div
            className="
              relative
              aspect-[9/16]
              w-[min(100%,280px)]
              overflow-hidden
              rounded-[24px]
              border border-white/10
              bg-linear-to-b from-[#181818] to-[#050505]
              shadow-2xl

              sm:w-[min(100%,320px)]
              sm:rounded-[30px]

              lg:max-w-[360px]
              lg:rounded-[34px]
            "
          >
            <video
              src={trainer.reel}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Featured label */}
            <div
              className="
                absolute
                left-3
                top-3
                max-w-[calc(100%-60px)]
                rounded-full
                bg-black/60
                px-3
                py-1.5
                text-xs
                text-white
                backdrop-blur-xl

                sm:left-4
                sm:top-4
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              Featured Reel
            </div>

            {/* Volume */}
            <button
              type="button"
              aria-label="Toggle video sound"
              className="
                absolute
                right-3
                top-3
                rounded-full
                bg-black/60
                p-2.5
                text-white
                backdrop-blur-xl

                sm:right-4
                sm:top-4
                sm:p-3
              "
            >
              <Volume2 size={17} />
            </button>

            {/* Stats */}
            <div
              className="
                absolute
                bottom-3
                left-3
                max-w-[calc(100%-24px)]
                truncate
                rounded-full
                bg-black/60
                px-3
                py-1.5
                text-xs
                text-white
                backdrop-blur-xl

                sm:bottom-5
                sm:left-5
                sm:px-4
                sm:py-2
                sm:text-sm
              "
            >
              {trainer.followers}+ followers • {trainer.posts}+ posts
            </div>
          </div>
        </div>

        {/* LEFT / CONTENT */}

        <div
          className="
            order-2
            min-w-0

            lg:order-1
          "
        >
          {/* Role */}
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.18em]
              text-zinc-300

              sm:text-sm
              sm:tracking-widest
            "
          >
            {trainer.role}
          </p>

          {/* Avatar + Name */}
          <div
            className="
              mt-4
              flex
              min-w-0
              items-center
              gap-3

              sm:mt-5
              sm:gap-4
            "
          >
            <Image
              src={trainer.avatar}
              width={84}
              height={84}
              alt={trainer.name}
              className="
                h-16
                w-16
                shrink-0
                rounded-2xl
                border
                border-white/10

                sm:h-[72px]
                sm:w-[72px]
                sm:rounded-3xl

                md:h-[84px]
                md:w-[84px]
              "
            />

            <div className="min-w-0">
              <h2
                className="
                  truncate
                  text-2xl
                  font-black
                  leading-tight
                  text-white

                  sm:text-3xl

                  lg:text-4xl
                "
              >
                {trainer.name}
              </h2>

              <p
                className="
                  mt-0.5
                  truncate
                  text-sm
                  text-zinc-400

                  sm:text-base
                "
              >
                @{trainer.username}
              </p>
            </div>
          </div>

          {/* Bio */}
          <p
            className="
              mt-6
              text-sm
              leading-7
              text-zinc-300

              sm:mt-8
              sm:text-base
              sm:leading-8
            "
          >
            {trainer.bio}
          </p>

          {/* Tags */}
          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2

              sm:mt-8
              sm:gap-3
            "
          >
            {trainer.tags.map((tag) => (
              <span
                key={tag}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-3.5
                  py-2
                  text-xs
                  text-zinc-200
                  transition-colors
                  hover:bg-white/[0.08]

                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Featured reel */}
          <div
            className="
              mt-6
              border-l-2
              border-white/15
              pl-4
              text-sm
              leading-6
              text-zinc-300

              sm:mt-8
              sm:pl-5
              sm:text-base
              sm:leading-7
            "
          >
            Featured reel theme: staying locked in with a gym-edit
            motivation push and sharper training plan.
          </div>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              flex-col
              gap-3

              sm:mt-10
              sm:flex-row
              sm:flex-wrap
              sm:gap-4
            "
          >
            <Link
              href="/"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-white
                px-5
                py-3.5
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:bg-zinc-200

                sm:w-auto
                sm:px-6
                sm:py-4
                sm:text-base
              "
            >
              <FaInstagram size={18} />
              Instagram Profile
            </Link>

            <Link
              href="/"
              className="
                inline-flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-5
                py-3.5
                text-sm
                text-white
                transition-all
                duration-300
                hover:bg-white/[0.06]

                sm:w-auto
                sm:px-6
                sm:py-4
                sm:text-base
              "
            >
              Reel
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
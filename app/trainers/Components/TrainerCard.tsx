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
      overflow-hidden
      rounded-[36px]
      border border-white/10
      bg-linear-to-br from-[#050505] via-[#0B0B0B] to-[#111111]
      p-6
      md:p-10
      lg:p-12
      shadow-[0_20px_100px_rgba(0,0,0,.5)]
      "
    >
      {/* background glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/[0.03] blur-[120px]" />

      <div
        className="
        relative
        grid
        gap-10
        lg:grid-cols-[1.2fr_420px]
        items-center
      "
      >
        {/* LEFT */}

        <div className="order-2 lg:order-1">
          <p className="text-zinc-300 text-sm font-semibold tracking-widest uppercase">
            {trainer.role}
          </p>

          <div className="mt-5 flex items-center gap-4">
            <Image
              src={trainer.avatar}
              width={84}
              height={84}
              alt={trainer.name}
              className="rounded-3xl border border-white/10"
            />

            <div>
              <h2 className="text-5xl font-black text-white">
                {trainer.name}
              </h2>

              <p className="text-zinc-400">
                @{trainer.username}
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-zinc-300 leading-8">
            {trainer.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {trainer.tags.map((tag) => (
              <span
                key={tag}
                className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-3
                    text-sm
                    text-zinc-200
                    transition-colors
                    hover:bg-white/[0.08]
                "
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className="
            mt-8
            border-l-2
            border-white/15
            pl-5
            text-zinc-300
          "
          >
            Featured reel theme: staying locked in with a gym-edit
            motivation push and sharper training plan.
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                bg-white
                px-6
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-zinc-200
                hover:scale-[1.03]
                "
            >
              <FaInstagram size={18} />
              Instagram Profile
            </Link>

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-2
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                px-6
                py-4
                text-white
                transition-all
                duration-300
                hover:bg-white/[0.06]
                "
            >
              Reel
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>

        {/* RIGHT */}

        <div className="order-1 lg:order-2 flex justify-center">
          <div
            className="
            relative
            aspect-[9/16]
            w-full
            max-w-[360px]
            overflow-hidden
            rounded-[34px]
            border
            border-white/10
            bg-linear-to-b from-[#181818] to-[#050505]
            shadow-2xl
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

            <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-white backdrop-blur-xl">
              Featured Reel
            </div>

            <button className="absolute right-4 top-4 rounded-full bg-black/60 p-3 backdrop-blur-xl">
              <Volume2 size={18} />
            </button>

            <div className="absolute bottom-5 left-5 rounded-full bg-black/60 px-4 py-2 text-white backdrop-blur-xl">
              {trainer.followers}+ followers • {trainer.posts}+ posts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
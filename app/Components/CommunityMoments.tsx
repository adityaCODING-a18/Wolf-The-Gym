"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { Camera, ZoomIn } from "lucide-react";
import CommunityLightbox from "./CommunityLightbox";

const posts = [
  "/community/1.jpg",
  "/community/2.jpg",
  "/community/3.jpg",
  "/community/4.jpg",
  "/community/5.jpg",
  "/community/6.jpg",
];

export default function CommunityMoments() {
  const [selected, setSelected] = useState<string | null>(null);

  const plugin = useRef(
    AutoScroll({
      speed: 1,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [plugin.current]
  );

  return (
    <>
      <section id="community-moments" className="overflow-hidden bg-black py-24">

        <div className="mx-auto mb-16 max-w-7xl lg:min-w-7xl px-5 text-center">

          <p className="mb-3 uppercase tracking-[0.35em] text-white/40">
            OUR COMMUNITY
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Community Moments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-400">
            Every workout creates another story worth remembering.
          </p>

        </div>

        <div className="relative">

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-black to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="overflow-hidden" ref={emblaRef}>

            <div className="flex">

              {posts.map((image, index) => (

                <div
                  key={index}
                  className="
                  min-w-0
                  flex-[0_0_75%]

                  sm:flex-[0_0_55%]

                  md:flex-[0_0_40%]

                  lg:flex-[0_0_25%]

                  xl:flex-[0_0_20%]

                  px-3
                "
                >

                  <button
                    onClick={() => setSelected(image)}
                    className="
                    group
                    relative
                    aspect-[3/4]
                    w-full
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-white/10
                  "
                  >

                    <Image
                      src={image}
                      alt=""
                      fill
                      className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-110
                    "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full bg-black/40 p-3 backdrop-blur-xl">
                      <Camera
                        size={18}
                        className="text-white"
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                      <div className="rounded-full border border-white/20 bg-white/10 p-4 backdrop-blur-xl">

                        <ZoomIn
                          className="text-white"
                          size={24}
                        />

                      </div>

                    </div>

                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      <CommunityLightbox
        image={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
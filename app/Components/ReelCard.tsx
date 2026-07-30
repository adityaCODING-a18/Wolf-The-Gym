"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

type ReelCardProps = {
  url: string;
};

export default function ReelCard({ url }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setMuted(newMuted);
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-white/20
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(255,255,255,0.08)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(255,255,255,0.18)]
      "
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="
          aspect-[9/16]
          w-[260px]
          object-cover

          sm:w-[300px]
          md:w-[340px]
          lg:w-[380px]
        "
      >
        <source src={url} type="video/mp4" />
        
      </video>

      <button
        onClick={toggleMute}
        className="
          absolute
          bottom-4
          right-4
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-black/60
          text-white
          backdrop-blur-md
          transition
          hover:scale-110
          hover:bg-black/80
        "
      >
        {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
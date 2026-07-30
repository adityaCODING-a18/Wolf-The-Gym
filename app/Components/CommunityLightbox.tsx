"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  image: string | null;
  onClose: () => void;
}

export default function CommunityLightbox({
  image,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: .85 }}
            animate={{ scale: 1 }}
            exit={{ scale: .85 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 20,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
            />

            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-black/40 p-3 backdrop-blur-xl"
            >
              <X className="text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
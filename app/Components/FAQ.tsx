"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Can beginners join WOLF THE GYM?",
    answer:
      "Absolutely. Whether you're stepping into a gym for the first time or you're an experienced athlete, our trainers create a plan that matches your current fitness level and goals.",
  },
  {
    question: "Do you provide personal training?",
    answer:
      "Yes. Our certified trainers offer personalised coaching, nutrition guidance and continuous progress tracking to help you achieve your goals faster.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We're open every day from early morning until late evening, giving members the flexibility to train around work, studies or personal commitments.",
  },
  {
    question: "Do you have parking?",
    answer:
      "Yes. Dedicated parking is available for members, making your workouts convenient and hassle-free.",
  },
  {
    question: "Do you provide locker rooms and showers?",
    answer:
      "Yes. Members have access to clean changing rooms, lockers and shower facilities designed for comfort and convenience.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 sm:px-8 lg:px-12">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[180px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}

        <div className="mb-16 text-center">

          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
            FAQs
          </p>

          <h2 className="text-3xl font-black text-white md:text-5xl">
            Frequently Asked Questions
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

          <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
            Everything you need to know before becoming a member of
            <span className="font-semibold text-white"> WOLF THE GYM</span>.
          </p>

        </div>

        {/* FAQs */}

        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const open = active === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  duration: 0.35,
                }}
                className={`
                  overflow-hidden
                  rounded-[24px]
                  border
                  backdrop-blur-xl
                  ${
                    open
                      ? "border-white/20 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03]"
                  }
                `}
              >

                <button
                  onClick={() =>
                    setActive(open ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-6 text-left"
                >

                  <h3 className="pr-5 text-base font-semibold text-white md:text-lg">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{
                      rotate: open ? 45 : 0,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border

                      ${
                        open
                          ? "border-white/20 bg-white/10"
                          : "border-white/10 bg-transparent"
                      }
                    `}
                  >
                    <Plus className="text-white" size={20} />
                  </motion.div>

                </button>

                <AnimatePresence>

                  {open && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                    >

                      <div className="border-t border-white/10 px-6 pb-6 pt-5">

                        <p className="leading-8 text-neutral-400">
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
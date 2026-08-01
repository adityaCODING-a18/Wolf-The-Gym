import { trainers } from "../data/trainers";
import TrainerCard from "./TrainerCard";

export default function CardGroup() {
    return (
        <section id="trainers-InstagramProfile" className="flex flex-col flex-1 gap-10 mx-5 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="mb-20 text-center">

                <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/40">
                    EXPERT TRAINERS
                </p>

                <h2 className="text-4xl font-black text-white md:text-5xl lg:text-6xl">
                    PUBLIC PROFILE OF OUR TRAINERS
                </h2>

                <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-white/30" />

                <p className="mx-auto mt-6 max-w-2xl text-neutral-400">
                    Our expert trainers are dedicated to helping you reach your fitness goals.
                </p>

            </div>
            <TrainerCard key={trainers[0].id} trainer={trainers[0]} />
            <TrainerCard key={trainers[1].id} trainer={trainers[1]} />
        </section>
    )
}
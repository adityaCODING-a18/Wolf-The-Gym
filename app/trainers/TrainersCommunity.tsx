import Footer from "../Components/Footer";
import FounderCTA from "../founder/Components/FounderCTA";
import CardGroup from "./Components/CardGroup";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Stickers from "./Components/Stickers";

export default function TrainersCommunity() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <Hero />
            <Stickers />
            <CardGroup />
            <FounderCTA />
            <Footer />
        </div>
    )
}
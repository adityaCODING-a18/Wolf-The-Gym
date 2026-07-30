import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Vision from "./Components/Vision";
import Leadership from "./Components/Leadership";
import FounderCTA from "./Components/FounderCTA";
import Footer from "../Components/Footer";

export default function Founder() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Navbar />
            <Hero />
            <Vision />
            <Leadership />
            <FounderCTA />
            <Footer />
        </div>
    )
}
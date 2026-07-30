"use client"

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Reels from "./Components/Reels";
import Services from "./Components/Services";
import GymInterior from "./Components/GymInterior";
import CommunityMoments from "./Components/CommunityMoments";
import Feedback from "./Components/Feedback";
import Founder from "./Components/Founder";
import FAQ from "./Components/FAQ";
import FindUs from "./Components/FindUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <Hero />
      <Reels />
      <Services />
      <GymInterior />
      <CommunityMoments />
      <Feedback />
      <Founder />
      <FAQ />
      <FindUs />
      <Footer />
    </div>
  );
}

"use client"

import Footer from "../Components/Footer"
import FounderCTA from "../founder/Components/FounderCTA"
import AdvancedCards from "./Components/AdvancedCards"
import FeatureCards from "./Components/FeatureCards"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import PicTabs from "./Components/PicTabs"

export default function GalleryContent() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
              <Navbar />
              <Hero />
              <FeatureCards />
              <PicTabs />
              <AdvancedCards />
              <FounderCTA />
              <Footer />
        </div>
    )
}
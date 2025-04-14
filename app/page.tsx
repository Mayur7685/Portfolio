"use client"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Toolbox from "@/components/toolbox"
import ProjectCarousel from "@/components/project-carousel"
import HackathonCarousel from "@/components/hackathon-carousel"
import ProfileSection from "@/components/profile-section"
import MenuDrawer from "@/components/menu-drawer"
import RaccoonTraits from "@/components/raccoon-traits"
import CurrentStatus from "@/components/current-status"
import SpotifyWidget from "@/components/spotify-widget"
import BookRecommendations from "@/components/book-recommendations"
import IdeaPlayground from "@/components/idea-playground"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <main className="min-h-screen bg-pegboard text-gray-800 font-sans p-2 sm:p-4 md:p-6">
      {/* Main container with glassmorphism effect */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-lg p-2 sm:p-4 md:p-6 relative overflow-hidden">
        {/* Header - Full width */}
        <div className="mb-2 sm:mb-4">
          <Header />
        </div>

        {/* Profile Section - Full width */}
        <div className="mb-4 sm:mb-6">
          <ProfileSection />
        </div>

        {/* Widget Grid - Mobile First Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {/* Row 1 - Widgets */}
          <div className="h-[200px] sm:h-[220px] md:h-[250px]">
            <CurrentStatus />
          </div>

          <div className="h-[200px] sm:h-[220px] md:h-[250px]">
            <RaccoonTraits />
          </div>

          <div className="h-[200px] sm:h-[220px] md:h-[250px]">
            <SpotifyWidget />
          </div>

          <div className="h-[200px] sm:h-[220px] md:h-[250px]">
            <BookRecommendations />
          </div>

          {/* Row 2 - Toolbox (Full Width) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-2 sm:mt-4">
            <Toolbox />
          </div>

          {/* Row 2.5 - Idea Playground (Full Width) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-2 sm:mt-4">
            <IdeaPlayground />
          </div>

          {/* Row 3 - Project Carousel (Full Width) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-2 sm:mt-4">
            <ProjectCarousel />
          </div>

          {/* Row 4 - Hackathon Carousel (Full Width) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 mt-2 sm:mt-4">
            <HackathonCarousel />
          </div>
        </div>

        {/* Pegboard holes overlay - more subtle */}
        <div className="absolute inset-0 pointer-events-none bg-pegboard-holes opacity-10"></div>
      </div>

      {/* Menu Drawer */}
      <MenuDrawer />
    </main>
  )
}

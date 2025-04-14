"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { profileInfo } from "@/config/portfolio-data"

export default function Header() {
  const [showNote, setShowNote] = useState(false)

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1 sm:mb-2 font-sans">
        {profileInfo.name}
      </h1>
      <p className="text-xs sm:text-sm md:text-base max-w-2xl">{profileInfo.bio}</p>
     

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">About Me</h3>
          <p>
            Full-stack developer specializing in AI and Web3 technologies. Always exploring new tools and frameworks to
            build innovative solutions.
          </p>
        </StickyNote>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"

export default function RaccoonMotivation() {
  const [showNote, setShowNote] = useState(false)

  // Simplified traits for better mobile display
  const traits = [
    { text: "Curious", color: "bg-blue-400" },
    { text: "Crafty", color: "bg-green-400" },
    { text: "Witty", color: "bg-yellow-400" },
    { text: "Hands Dirty", color: "bg-orange-400" },
    { text: "No Cages", color: "bg-purple-400" },
  ]

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">Raccoon Traits</h2>
        <div className="w-6 h-6 sm:w-8 sm:h-8 overflow-hidden">
          <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
              fill="#F3F3F3"
            />
          </svg>
        </div>
      </div>

      <div className="flex-grow flex flex-wrap gap-1 content-center justify-center">
        {traits.map((trait, index) => (
          <div
            key={index}
            className={`${trait.color} text-white text-xs sm:text-sm font-medium px-2 py-1 rounded-full shadow-sm`}
          >
            {trait.text}
          </div>
        ))}
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Raccoon Traits</h3>
          <p>These are the traits that define my approach to work and problem-solving.</p>
        </StickyNote>
      )}
    </div>
  )
}

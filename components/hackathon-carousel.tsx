"use client"

import type React from "react"
import { useState, useRef } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { hackathons } from "@/config/portfolio-data"

export default function HackathonCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showNote, setShowNote] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hackathons.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % hackathons.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return

    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (diff > 50) {
      goToNext()
    } else if (diff < -50) {
      goToPrevious()
    }

    touchStartX.current = null
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 font-sans flex items-center">
        <Trophy size={14} className="mr-1.5" />
        <span>Hackathons</span>
      </h2>

      <div className="relative overflow-hidden">
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors ml-1"
          aria-label="Previous hackathon"
        >
          <ChevronLeft size={14} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors mr-1"
          aria-label="Next hackathon"
        >
          <ChevronRight size={14} />
        </button>

        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="w-full flex-shrink-0 px-2 sm:px-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="md:w-1/3">
                  <div className="aspect-video bg-white/50 backdrop-blur-sm overflow-hidden rounded-xl border border-white/50">
                    <img
                      src={hackathon.image || "/placeholder.svg"}
                      alt={hackathon.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{hackathon.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{hackathon.date}</p>

                  <div className="bg-white/50 backdrop-blur-sm p-2 rounded-xl border border-white/50 mb-2">
                    <h4 className="font-bold mb-1 text-xs">Project: {hackathon.project}</h4>
                    <div className="flex flex-wrap gap-1">
                      {hackathon.stack.map((tech) => (
                        <span key={tech} className="bg-white/70 px-2 py-0.5 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hackathon.description && (
                    <p className="text-xs text-gray-600">{hackathon.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-3 space-x-1">
          {hackathons.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to hackathon ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Hackathon Achievements</h3>
          <p>Competitions I've participated in, including projects built, technologies used, and accomplishments.</p>
        </StickyNote>
      )}
    </div>
  )
}

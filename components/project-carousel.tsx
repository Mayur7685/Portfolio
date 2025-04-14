"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { projects } from "@/config/portfolio-data"

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showNote, setShowNote] = useState(false)
  const touchStartX = useRef<number | null>(null)

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isHovered, projects.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  // ✅ Fixed function definition
  const handleTouchMove = (e: React.TouchEvent) => {
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
      onMouseEnter={() => {
        setIsHovered(true)
        setShowNote(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setShowNote(false)
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 font-sans">Projects</h2>

      <div className="relative overflow-hidden">
        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors ml-1"
          aria-label="Previous project"
        >
          <ChevronLeft size={14} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors mr-1"
          aria-label="Next project"
        >
          <ChevronRight size={14} />
        </button>

        <div
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="w-full flex-shrink-0 px-2 sm:px-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-white/50 backdrop-blur-sm overflow-hidden rounded-xl border border-white/50">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{project.title}</h3>
                  <p className="mb-2 text-xs line-clamp-2 sm:line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="bg-white/70 px-2 py-0.5 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-1 bg-white/70 text-gray-800 px-2 py-1 rounded-full text-xs transition-colors hover:bg-white"
                      >
                        <Github size={12} />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 bg-white/70 text-gray-800 px-2 py-1 rounded-full text-xs transition-colors hover:bg-white"
                      >
                        <ExternalLink size={12} />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-3 space-x-1">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-gray-800 scale-110" : "bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Featured Projects</h3>
          <p>
            Showcase of my recent work including AI agents, NFT platforms, blockchain games, and crowdfunding solutions.
          </p>
        </StickyNote>
      )}
    </div>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { StickyNote } from "@/components/sticky-note"

type JellyBeanTrait = {
  id: string
  text: string
  color: string
  x: number
  y: number
  vx: number
  vy: number
  scale: number
}

export default function RaccoonTraits() {
  const [showNote, setShowNote] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>(0)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })

  // Initial traits as jelly beans
  const [traits, setTraits] = useState<JellyBeanTrait[]>([
    { id: "curious", text: "Curious", color: "bg-blue-400", x: 20, y: 30, vx: 0.5, vy: 0.3, scale: 1 },
    { id: "crafty", text: "Crafty", color: "bg-green-400", x: 60, y: 50, vx: -0.4, vy: 0.5, scale: 1.1 },
    { id: "witty", text: "Witty", color: "bg-yellow-400", x: 40, y: 70, vx: 0.3, vy: -0.4, scale: 0.9 },
    { id: "dirty", text: "Hands Dirty", color: "bg-orange-400", x: 10, y: 90, vx: 0.45, vy: -0.35, scale: 1.05 },
    { id: "cages", text: "No Cages", color: "bg-purple-400", x: 70, y: 20, vx: -0.5, vy: 0.4, scale: 0.95 },
  ])

  // Update container size on resize
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  // Animate jelly beans
  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return

    const animate = () => {
      setTraits((prevTraits) =>
        prevTraits.map((trait) => {
          // Calculate new position
          let newX = trait.x + trait.vx
          let newY = trait.y + trait.vy
          let newVx = trait.vx
          let newVy = trait.vy

          // Bounce off walls
          if (newX < 0 || newX > 100) {
            newVx = -newVx
            newX = newX < 0 ? 0 : 100
          }

          if (newY < 0 || newY > 100) {
            newVy = -newVy
            newY = newY < 0 ? 0 : 100
          }

          return {
            ...trait,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationRef.current)
  }, [containerSize])

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">Raccoon Traits</h2>
        <div className="w-10 h-10 overflow-hidden border-gray-200">
          <img
            src="raccoon.svg?height=200&width=200&text=🦝"
            alt="Raccoon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div ref={containerRef} className="flex-grow relative overflow-hidden">
        {traits.map((trait) => (
          <div
            key={trait.id}
            className={`absolute ${trait.color} text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full shadow-md transform transition-transform duration-200 hover:scale-110`}
            style={{
              left: `${trait.x}%`,
              top: `${trait.y}%`,
              transform: `translate(-50%, -50%) scale(${trait.scale})`,
              transition: "transform 0.2s ease-in-out",
            }}
          >
            {trait.text}
          </div>
        ))}
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Raccoon Traits</h3>
          <p>These bouncing traits define my approach to work and problem-solving.</p>
        </StickyNote>
      )}
    </div>
  )
}

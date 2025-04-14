"use client"

import { useState, useEffect, useRef } from "react"
import { StickyNote } from "@/components/sticky-note"
import { profileInfo } from "@/config/portfolio-data"

export default function ProfileFrame() {
  const [showNote, setShowNote] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Sample profile images
  const profileImages = [
    profileInfo.profileImage || "/PFP.jpg?height=400&width=400&text=Profile",
    "/PFP2.png?height=400&width=400&text=Profile+2",
  ]

  // Switch between profile images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Draw the neon effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = 200
    canvas.width = size
    canvas.height = size

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Create gradient for neon effect
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, "#ff00cc")
    gradient.addColorStop(1, "#3333ff")

    // Draw neon lines
    const drawNeonLine = (x1: number, y1: number, x2: number, y2: number, thickness: number) => {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.lineWidth = thickness
      ctx.strokeStyle = gradient
      ctx.stroke()

      // Glow effect
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.lineWidth = thickness + 4
      ctx.strokeStyle = "rgba(255, 0, 204, 0.3)"
      ctx.stroke()
    }

    // Draw diagonal neon lines
    for (let i = 0; i < 5; i++) {
      const offset = i * 20
      drawNeonLine(0, offset, offset, 0, 2)
      drawNeonLine(size - offset, 0, size, offset, 2)
      drawNeonLine(0, size - offset, offset, size, 2)
      drawNeonLine(size - offset, size, size, size - offset, 2)
    }
  }, [])

  return (
    <div
      className="rounded-3xl bg-gray-900/90 backdrop-blur-md border border-purple-500/30 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 font-sans text-white">Profile</h2>

      <div className="flex-grow flex items-center justify-center">
        <div className="relative">
          {/* Profile Image with transition */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg border-2 border-purple-500/50">
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
            >
              <img
                src={profileImages[0] || "/placeholder.svg"}
                alt={profileInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: currentImageIndex === 1 ? 1 : 0 }}
            >
              <img
                src={profileImages[1] || "/placeholder.svg"}
                alt={profileInfo.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Neon border glow */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent shadow-[0_0_15px_rgba(255,0,204,0.7)] pointer-events-none"></div>

            {/* Glassmorphism name panel */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-white/20 backdrop-blur-md border-t border-white/30 flex items-center justify-center overflow-hidden">
              {/* White glowing text */}
              <p
                className="text-white text-xs font-bold tracking-wide"
                style={{
                  textShadow: `
                    0 0 5px rgba(255, 255, 255, 0.8),
                    0 0 10px rgba(255, 255, 255, 0.5),
                    0 0 15px rgba(255, 255, 255, 0.3)
                  `,
                }}
              >
                Mayur Asodara
              </p>
            </div>
          </div>

          {/* Neon overlay */}
          <div className="absolute -top-2 -right-2 w-16 h-16 transform rotate-12">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{
                filter: "drop-shadow(0 0 8px rgba(255, 0, 204, 0.7))",
              }}
            />
          </div>
        </div>
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Profile</h3>
          <p>This is where I showcase my profile with a retro neon effect.</p>
        </StickyNote>
      )}
    </div>
  )
}

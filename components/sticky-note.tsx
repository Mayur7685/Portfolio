"use client"

import { useState, useEffect, type ReactNode } from "react"

type StickyNoteProps = {
  children: ReactNode
  color?: "yellow" | "blue" | "green" | "pink" | "orange" | "purple" | "red"
}

const colorMap = {
  yellow: "bg-yellow-100 border-yellow-300",
  blue: "bg-blue-100 border-blue-300",
  green: "bg-green-100 border-green-300",
  pink: "bg-pink-100 border-pink-300",
  orange: "bg-orange-100 border-orange-300",
  purple: "bg-purple-100 border-purple-300",
  red: "bg-red-100 border-red-300",
}

const colorKeys = Object.keys(colorMap) as Array<keyof typeof colorMap>

export function StickyNote({ children, color }: StickyNoteProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [randomColor, setRandomColor] = useState<keyof typeof colorMap>("yellow")

  useEffect(() => {
    // If color is provided, use it; otherwise, use a random color
    if (!color) {
      const randomIndex = Math.floor(Math.random() * colorKeys.length)
      setRandomColor(colorKeys[randomIndex])
    }

    setIsVisible(true)
    return () => setIsVisible(false)
  }, [color])

  const finalColor = color || randomColor

  return (
    <div
      className={`absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 ${colorMap[finalColor]} p-4 rounded-2xl shadow-lg z-10 w-64 rotate-3 font-sans border-2 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="sticky-note-content">{children}</div>
    </div>
  )
}

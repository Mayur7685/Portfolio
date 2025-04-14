"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { User, MapPin, Briefcase, Calendar } from "lucide-react"

export default function AboutSection() {
  const [showNote, setShowNote] = useState(false)

  const aboutDetails = [
    { icon: <User className="w-5 h-5" />, label: "Name", value: "Mayur Asodara" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Role", value: "AI & Web3 Developer" },
    { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "India" },
    { icon: <Calendar className="w-5 h-5" />, label: "Experience", value: "3+ Years" },
  ]

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <h2 className="text-2xl font-bold mb-6 font-sans">About Me</h2>

      <div className="flex flex-col space-y-4">
        {aboutDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50"
          >
            <div className="p-2 rounded-full bg-gray-100/80">{detail.icon}</div>
            <div>
              <p className="text-xs text-gray-500">{detail.label}</p>
              <p className="font-medium">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/50">
        <p className="text-sm">
          Full-stack developer specializing in AI and Web3 technologies. Always exploring new tools and frameworks to
          build innovative solutions.
        </p>
      </div>

      {showNote && (
        <StickyNote color="yellow">
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

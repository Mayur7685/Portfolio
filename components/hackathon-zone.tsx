"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Trophy } from "lucide-react"

type Hackathon = {
  id: number
  name: string
  date: string
  project: string
  stack: string[]
  image: string
}

export default function HackathonZone() {
  const hackathons: Hackathon[] = [
    {
      id: 1,
      name: "Hack This Fall",
      date: "Oct 2023",
      project: "StoryChain",
      stack: ["React", "Solidity"],
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 2,
      name: "Hack for India",
      date: "Aug 2023",
      project: "StarkBot",
      stack: ["Starknet", "Cairo"],
      image: "/placeholder.svg?height=100&width=200",
    },
    {
      id: 3,
      name: "WaveHack",
      date: "May 2023",
      project: "Nillion AI",
      stack: ["Python", "AI"],
      image: "/placeholder.svg?height=100&width=200",
    },
  ]

  const [activeHackathon, setActiveHackathon] = useState<number | null>(null)

  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-6 transition-all duration-300 hover:shadow-xl relative">
      <h2 className="text-2xl font-bold mb-6 font-sans flex items-center">
        <Trophy size={20} className="mr-2" />
        <span>Hackathons</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="bg-white/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
            onMouseEnter={() => setActiveHackathon(hackathon.id)}
            onMouseLeave={() => setActiveHackathon(null)}
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={hackathon.image || "/placeholder.svg"}
                alt={hackathon.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{hackathon.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{hackathon.date}</p>
              <p className="text-sm mb-2">Project: {hackathon.project}</p>
              <div className="flex flex-wrap gap-1">
                {hackathon.stack.map((tech) => (
                  <span key={tech} className="bg-white/70 px-2 py-0.5 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {activeHackathon === hackathon.id && (
              <StickyNote color="pink">
                <h3 className="font-bold">{hackathon.name}</h3>
                <p className="text-sm">Date: {hackathon.date}</p>
                <p className="text-sm">Project: {hackathon.project}</p>
                <p className="text-sm">Stack: {hackathon.stack.join(", ")}</p>
              </StickyNote>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Trophy } from "lucide-react"

type Hackathon = {
  id: number
  name: string
  date: string
  project: string
  stack: string[]
  image: string
}

export default function HackathonBadges() {
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

  const [expandedHackathon, setExpandedHackathon] = useState<number | null>(null)

  const toggleHackathon = (id: number) => {
    setExpandedHackathon(expandedHackathon === id ? null : id)
  }

  return (
    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-4 h-full">
      <h2 className="text-xl font-bold font-dot-matrix mb-3 flex items-center">
        <Trophy size={18} className="mr-2" />
        <span>Hackathons</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {hackathons.map((hackathon) => (
          <div
            key={hackathon.id}
            className="border-2 border-gray-800 rounded-lg overflow-hidden cursor-pointer bg-gray-100"
            onClick={() => toggleHackathon(hackathon.id)}
          >
            <div className="aspect-[2/1] overflow-hidden border-b-2 border-gray-800">
              <img
                src={hackathon.image || "/placeholder.svg"}
                alt={hackathon.name}
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="p-2">
              <h3 className="font-bold text-sm">{hackathon.name}</h3>
              <p className="text-xs text-gray-600">{hackathon.date}</p>

              {expandedHackathon === hackathon.id && (
                <div className="mt-2 pt-2 border-t border-gray-400">
                  <p className="text-xs font-medium">Project: {hackathon.project}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {hackathon.stack.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-200 px-1 py-0.5 rounded-sm border border-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

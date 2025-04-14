"use client"

import { useState } from "react"

type Trait = {
  id: string
  name: string
  description: string
  icon: string
}

export default function PersonalityCard() {
  const traits: Trait[] = [
    {
      id: "curious",
      name: "Curious",
      description: "Always exploring new technologies and ideas.",
      icon: "🔍",
    },
    {
      id: "cages",
      name: "Dislike cages",
      description: "Prefer freedom to explore and create without constraints.",
      icon: "🔓",
    },
    {
      id: "crafty",
      name: "Crafty",
      description: "Finding creative solutions to complex problems.",
      icon: "🛠️",
    },
    {
      id: "dirty",
      name: "Willing to get hand dirty",
      description: "Not afraid to dive deep into code and debug complex issues.",
      icon: "💪",
    },
  ]

  const [expandedTrait, setExpandedTrait] = useState<string | null>(null)

  const toggleTrait = (id: string) => {
    setExpandedTrait(expandedTrait === id ? null : id)
  }

  return (
    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-4 h-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold font-dot-matrix">Raccoon ?</h2>
        <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-800">
          <img
            src="/placeholder.svg?height=100&width=100"
            alt="Raccoon"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
      </div>

      <div className="space-y-2">
        {traits.map((trait) => (
          <div
            key={trait.id}
            className="bg-gray-100 border-2 border-gray-800 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => toggleTrait(trait.id)}
          >
            <div className="p-2 flex items-center justify-between">
              <span className="font-medium">{trait.name}</span>
              <span className="text-xl">{trait.icon}</span>
            </div>
            {expandedTrait === trait.id && (
              <div className="p-2 bg-gray-300 border-t-2 border-gray-800 text-sm">{trait.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

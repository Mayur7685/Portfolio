"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { ChevronDown, ChevronUp } from "lucide-react"
import { toolboxCategories } from "@/config/portfolio-data"

export default function Toolbox() {
  const [categories, setCategories] = useState(toolboxCategories)
  const [showNote, setShowNote] = useState(false)
  const [activeCategory, setActiveCategory] = useState("")

  const toggleCategory = (index: number) => {
    const newCategories = [...categories]
    newCategories[index].expanded = !newCategories[index].expanded
    setCategories(newCategories)
  }

  const handleMouseEnter = (categoryName: string) => {
    setShowNote(true)
    setActiveCategory(categoryName)
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-xl relative"
      onMouseLeave={() => setShowNote(false)}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-3 font-sans">Toolbox</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {categories.map((category, index) => (
          <div key={category.name} className="space-y-1.5">
            <div
              className={`flex items-center justify-between p-2 rounded-xl ${category.color} text-black backdrop-blur-sm border border-white/50 cursor-pointer transition-all duration-200 hover:shadow-lg`}
              onClick={() => toggleCategory(index)}
              onMouseEnter={() => handleMouseEnter(category.name)}
            >
              <h3 className="text-sm sm:text-base font-medium">{category.name}</h3>
              <div className="bg-white/80 text-gray-800 rounded-full p-1">
                {category.expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>

            {category.expanded && (
              <div className="space-y-1 overflow-hidden transition-all duration-300 ease-in-out max-h-[500px]">
                {category.tools.map((tool) => (
                  <div
                    key={tool}
                    className={`p-1.5 rounded-lg ${category.color} text-grey backdrop-blur-sm border border-white/30 ml-3 transform transition-all duration-200 hover:translate-x-1`}
                  >
                    <span className="text-xs">{tool}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">{activeCategory}</h3>
          <p>
            {activeCategory === "LLMs" && "Large Language Models for natural language processing and generation."}
            {activeCategory === "VLMs" && "Vision Language Models for image generation and understanding."}
            {activeCategory === "Computer Vision" && "Tools for image processing and computer vision tasks."}
            {activeCategory === "Blockchain" && "Technologies for building decentralized applications."}
          </p>
        </StickyNote>
      )}
    </div>
  )
}

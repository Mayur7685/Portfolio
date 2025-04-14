"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

type Tool = {
  name: string
  level: number // 1-5
}

type ToolCategory = {
  name: string
  icon: string
  tools: Tool[]
  expanded: boolean
}

export default function ToolboxPanel() {
  const [categories, setCategories] = useState<ToolCategory[]>([
    {
      name: "LLMs",
      icon: "🤖",
      tools: [
        { name: "GPT-4", level: 5 },
        { name: "Claude", level: 4 },
        { name: "Llama", level: 3 },
        { name: "Mistral", level: 4 },
      ],
      expanded: false,
    },
    {
      name: "VLMs",
      icon: "👁️",
      tools: [
        { name: "CLIP", level: 4 },
        { name: "Stable Diffusion", level: 5 },
        { name: "DALL-E", level: 4 },
      ],
      expanded: false,
    },
    {
      name: "Computer Vision",
      icon: "📷",
      tools: [
        { name: "OpenCV", level: 5 },
        { name: "TensorFlow", level: 4 },
        { name: "PyTorch", level: 3 },
      ],
      expanded: false,
    },
    {
      name: "Blockchain",
      icon: "⛓️",
      tools: [
        { name: "Solidity", level: 5 },
        { name: "Ethers.js", level: 4 },
        { name: "Hardhat", level: 4 },
        { name: "Foundry", level: 3 },
      ],
      expanded: false,
    },
  ])

  const toggleCategory = (index: number) => {
    const newCategories = [...categories]
    newCategories[index].expanded = !newCategories[index].expanded
    setCategories(newCategories)
  }

  return (
    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-4 h-full overflow-auto">
      <h2 className="text-xl font-bold font-dot-matrix mb-3">Toolbox</h2>

      <div className="space-y-3">
        {categories.map((category, index) => (
          <div key={category.name} className="border-2 border-gray-800 rounded-lg overflow-hidden">
            <button
              className="w-full flex items-center justify-between p-2 bg-gray-100 hover:bg-gray-300 transition-colors"
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center">
                <span className="mr-2 text-xl">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </div>
              {category.expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {category.expanded && (
              <div className="p-2 bg-gray-100 border-t-2 border-gray-800">
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool.name} className="flex items-center justify-between">
                      <span>{tool.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < tool.level ? "bg-gray-800" : "bg-gray-400"}`}
                          ></div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

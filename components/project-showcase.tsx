"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"

export default function ProjectShowcase() {
  const [showNote, setShowNote] = useState(false)

  return (
    <div
      className="bg-gray-500 rounded-md p-6 relative"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Snapback Project"
            className="w-full h-auto rounded-md filter grayscale"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-2 font-dot-matrix">Snapback</h2>
          <p className="mb-4">Food compliant AI agent.....</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-300 px-3 py-1 rounded-md text-sm">NLP</span>
            <span className="bg-gray-300 px-3 py-1 rounded-md text-sm">VLM</span>
            <span className="bg-gray-300 px-3 py-1 rounded-md text-sm">GPT</span>
            <span className="bg-gray-300 px-3 py-1 rounded-md text-sm">AI</span>
          </div>
          <div className="flex gap-2">
            <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded-md">
              Github
            </a>
            <a href="#" className="bg-gray-600 text-white px-4 py-2 rounded-md">
              Demo
            </a>
          </div>
        </div>
      </div>

      {showNote && (
        <StickyNote color="red">
          <h3 className="font-bold">Snapback AI</h3>
          <p>
            An AI-powered food complaint agent that helps users get refunds and replacements for bad food orders. Built
            with GPT-4 and computer vision models to analyze food images.
          </p>
        </StickyNote>
      )}
    </div>
  )
}

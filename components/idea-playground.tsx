"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Lightbulb, Plus, X, Edit, Check } from "lucide-react"

type Idea = {
  id: number
  text: string
  color: string
  rotation: number
  position: { x: number; y: number }
  isEditing: boolean
}

export default function IdeaPlayground() {
  const [showNote, setShowNote] = useState(false)
  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: 1,
      text: "Build an AI-powered food complaint agent",
      color: "yellow",
      rotation: -2,
      position: { x: 0, y: 0 },
      isEditing: false,
    },
    {
      id: 2,
      text: "Create a decentralized identity solution",
      color: "blue",
      rotation: 3,
      position: { x: 0, y: 0 },
      isEditing: false,
    },
    {
      id: 3,
      text: "Develop a VR training platform",
      color: "green",
      rotation: -1,
      position: { x: 0, y: 0 },
      isEditing: false,
    },
    {
      id: 4,
      text: "Build a blockchain-based voting system",
      color: "pink",
      rotation: 2,
      position: { x: 0, y: 0 },
      isEditing: false,
    },
  ])
  const [newIdea, setNewIdea] = useState("")
  const [showInput, setShowInput] = useState(false)
  const [editText, setEditText] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const colors = ["yellow", "blue", "green", "pink", "orange", "purple"]

  useEffect(() => {
    // Focus the textarea when editing starts
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [editText])

  const addIdea = () => {
    if (newIdea.trim()) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const randomRotation = Math.random() * 6 - 3 // Random rotation between -3 and 3 degrees

      setIdeas([
        ...ideas,
        {
          id: Date.now(),
          text: newIdea,
          color: randomColor,
          rotation: randomRotation,
          position: { x: 0, y: 0 },
          isEditing: false,
        },
      ])
      setNewIdea("")
      setShowInput(false)
    }
  }

  const removeIdea = (id: number) => {
    setIdeas(ideas.filter((idea) => idea.id !== id))
  }

  const startEditing = (id: number, text: string) => {
    setIdeas(ideas.map((idea) => (idea.id === id ? { ...idea, isEditing: true } : { ...idea, isEditing: false })))
    setEditText(text)
  }

  const saveEdit = (id: number) => {
    if (editText.trim()) {
      setIdeas(ideas.map((idea) => (idea.id === id ? { ...idea, text: editText, isEditing: false } : idea)))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, id?: number) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (id) {
        saveEdit(id)
      } else {
        addIdea()
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 md:p-5 transition-all duration-300 hover:shadow-xl relative min-h-[300px]"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">Idea Playground</h2>
        <div className="p-1.5 bg-yellow-100 rounded-full">
          <Lightbulb size={14} className="text-yellow-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className={`bg-${idea.color}-100 p-4 rounded-md shadow-md border border-${idea.color}-200 relative transform transition-all duration-300 hover:z-10 hover:shadow-lg`}
            style={{
              transform: `rotate(${idea.rotation}deg)`,
              boxShadow: `0 3px 5px rgba(0,0,0,0.1), 2px 2px 5px rgba(0,0,0,0.05)`,
            }}
          >
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-300 rounded-full shadow-sm"></div>

            {idea.isEditing ? (
              <div className="flex flex-col gap-2">
                <textarea
                  ref={textareaRef}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, idea.id)}
                  className={`p-2 text-sm border border-${idea.color}-300 rounded-md focus:outline-none focus:ring-2 focus:ring-${idea.color}-400 bg-white/80 min-h-[80px] resize-none`}
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => saveEdit(idea.id)}
                    className={`p-1 bg-${idea.color}-200 text-${idea.color}-800 rounded-md hover:bg-${idea.color}-300 transition-colors`}
                  >
                    <Check size={14} />
                  </button>
                  <button
                    onClick={() => setIdeas(ideas.map((i) => (i.id === idea.id ? { ...i, isEditing: false } : i)))}
                    className="p-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between mb-1">
                  <button
                    onClick={() => startEditing(idea.id, idea.text)}
                    className={`p-1 text-${idea.color}-600 hover:text-${idea.color}-800 rounded-full`}
                  >
                    <Edit size={12} />
                  </button>
                  <button
                    onClick={() => removeIdea(idea.id)}
                    className={`p-1 text-${idea.color}-600 hover:text-${idea.color}-800 rounded-full`}
                  >
                    <X size={12} />
                  </button>
                </div>
                <p className="text-sm font-handwritten" style={{ lineHeight: 1.5 }}>
                  {idea.text}
                </p>
              </>
            )}
          </div>
        ))}

        {/* Add new idea button or input */}
        {showInput ? (
          <div className="bg-white/80 p-4 rounded-md shadow-md border border-gray-200 flex flex-col gap-2 transform rotate-1">
            <textarea
              value={newIdea}
              onChange={(e) => setNewIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your idea..."
              className="p-2 text-sm border border-yellow-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 min-h-[80px] resize-none"
              autoFocus
            />
            <div className="flex gap-2 justify-end">
              <button
                onClick={addIdea}
                className="px-3 py-1 bg-yellow-400 text-yellow-800 rounded-md text-xs font-medium hover:bg-yellow-500 transition-colors"
              >
                Add
              </button>
              <button
                onClick={() => setShowInput(false)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md text-xs font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowInput(true)}
            className="bg-white/50 p-4 rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center hover:bg-white/80 transition-colors transform rotate-1 shadow-sm"
          >
            <Plus size={16} className="mr-1 text-gray-500" />
            <span className="text-sm text-gray-500">Add idea</span>
          </button>
        )}
      </div>

      {showNote && (
        <StickyNote color="yellow">
          <h3 className="font-bold">Idea Playground</h3>
          <p>This is where I collect and organize my project ideas and inspirations.</p>
        </StickyNote>
      )}
    </div>
  )
}

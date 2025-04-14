"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { BookOpen, ChevronRight, ChevronLeft } from "lucide-react"

export default function BookRecommendations() {
  const [showNote, setShowNote] = useState(false)
  const [currentBook, setCurrentBook] = useState(0)
  const [isRotating, setIsRotating] = useState(false)

  // Enhanced book recommendations with covers
  const books = [
    {
      title: "Superintelligence",
      author: "Nick Bostrom",
      category: "AI",
      cover: "https://m.media-amazon.com/images/I/71UvMcdcE9L.jpg?height=300&width=200&text=Superintelligence",
      description: "Paths, Dangers, Strategies",
    },
    {
      title: "The Innovators",
      author: "Walter Isaacson",
      category: "Tech History",
      cover: "https://m.media-amazon.com/images/I/71LOesgcrUL._AC_UF894,1000_QL80_.jpg?height=300&width=200&text=The+Innovators",
      description: "How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
    },
    {
      title: "Zero to One",
      author: "Peter Thiel",
      category: "Startups",
      cover: "https://m.media-amazon.com/images/I/61PDzIhVLnL._AC_UF1000,1000_QL80_.jpg?height=300&width=200&text=Zero+to+One",
      description: "Notes on Startups, or How to Build the Future",
    },
  ]

  // Cycle through books
  const nextBook = () => {
    setIsRotating(true)
    setTimeout(() => {
      setCurrentBook((prev) => (prev + 1) % books.length)
      setTimeout(() => setIsRotating(false), 50)
    }, 250)
  }

  const prevBook = () => {
    setIsRotating(true)
    setTimeout(() => {
      setCurrentBook((prev) => (prev === 0 ? books.length - 1 : prev - 1))
      setTimeout(() => setIsRotating(false), 50)
    }, 250)
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">Reading</h2>
        <div className="p-1.5 bg-orange-100 rounded-full">
          <BookOpen size={12} className="text-orange-600" />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center">
        <div className="relative w-full flex justify-center">
          {/* Book Cover with 3D effect */}
          <div
            className={`relative w-20 h-28 sm:w-24 sm:h-32 perspective-500 transition-all duration-300 ${
              isRotating ? "opacity-0 scale-90 rotate-y-90" : "opacity-100 scale-100 rotate-y-0"
            }`}
          >
            {/* Book cover */}
            <div className="absolute inset-0 rounded-md overflow-hidden shadow-lg transform-style-3d rotate-y-5 hover:rotate-y-15 transition-transform duration-300">
              <img
                src={books[currentBook].cover || "/placeholder.svg"}
                alt={books[currentBook].title}
                className="w-full h-full object-cover"
              />

              {/* Book spine */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/20 to-transparent"></div>

              {/* Book shadow */}
              <div className="absolute -right-4 top-0 bottom-0 w-4 bg-gradient-to-l from-transparent to-black/10 transform skew-y-6"></div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevBook}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <ChevronLeft size={14} />
          </button>

          <button
            onClick={nextBook}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors shadow-sm"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Book details */}
        <div className="text-center mt-3 px-2">
          <p className="font-medium text-sm">{books[currentBook].title}</p>
          <p className="text-xs text-gray-500 mb-1">{books[currentBook].author}</p>

          <div className="flex justify-center mb-1">
            <span className="inline-block  text-orange-400 rounded-full text-xs">
              {books[currentBook].category}
            </span>
          </div>

        </div>
      </div>

      {showNote && (
        <StickyNote color="orange">
          <h3 className="font-bold">Book Recommendations</h3>
          <p>Books I'm currently reading or recommend in my field.</p>
        </StickyNote>
      )}
    </div>
  )
}

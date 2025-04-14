"use client"

import { useState, useEffect } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Music, Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react"

export default function SpotifyWidget() {
  const [showNote, setShowNote] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(65)

  // Sample currently playing songs playlist
  const playlist = [
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      cover: "/placeholder.svg?height=200&width=200&text=After+Hours",
      duration: "3:20",
      progress: 65,
    },
    {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      cover: "/placeholder.svg?height=200&width=200&text=Harry's+House",
      duration: "2:47",
      progress: 0,
    },
    {
      title: "Starboy",
      artist: "The Weeknd",
      album: "Starboy",
      cover: "/placeholder.svg?height=200&width=200&text=Starboy",
      duration: "3:50",
      progress: 0,
    },
  ]

  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const currentSong = playlist[currentSongIndex]

  // Simulate progress bar movement when playing
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.5
          if (newProgress >= 100) {
            clearInterval(interval)
            return 0
          }
          return newProgress
        })
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, progress])

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length)
    setProgress(0)
  }

  const handlePrevious = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? playlist.length - 1 : prev - 1))
    setProgress(0)
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">Now Playing</h2>
        <div className="p-1.5 bg-green-100 rounded-full">
          <Music size={12} className="text-green-600" />
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div className="flex items-center space-x-3">
          {/* Album Cover with reflection effect */}
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
            <div className="w-full h-full rounded-md overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105">
              <img
                src={currentSong.cover || "/placeholder.svg"}
                alt={`${currentSong.album} cover`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Reflection */}
            <div className="absolute -bottom-4 left-0 w-full h-1/2 opacity-30 transform scale-y-[-1] blur-[1px]">
              <img
                src={currentSong.cover || "/placeholder.svg"}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="animate-marquee">
              <p className="font-medium text-sm whitespace-nowrap">{currentSong.title}</p>
            </div>
            <p className="text-xs text-gray-600">{currentSong.artist}</p>
            <p className="text-xs text-gray-500 italic">{currentSong.album}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>
              {Math.floor(
                progress * 0.01 * Number.parseInt(currentSong.duration.split(":")[0]) * 60 +
                  Number.parseInt(currentSong.duration.split(":")[1]),
              )
                .toString()
                .padStart(2, "0")}
              :
              {(
                (progress * 0.01 * Number.parseInt(currentSong.duration.split(":")[0]) * 60 +
                  Number.parseInt(currentSong.duration.split(":")[1])) %
                60
              )
                .toFixed(0)
                .padStart(2, "0")}
            </span>
            <span>{currentSong.duration}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
            <div className="bg-green-500 h-1.5 rounded-full relative" style={{ width: `${progress}%` }}>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full border-2 border-green-500 shadow-sm"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center">
            <button className="p-1.5 text-gray-600 hover:text-gray-800 transition-colors" onClick={handlePrevious}>
              <SkipBack size={16} />
            </button>

            <button
              className="p-2.5 bg-green-500 rounded-full hover:bg-green-600 transition-colors shadow-md transform hover:scale-105 active:scale-95"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <Pause size={16} className="text-white" />
              ) : (
                <Play size={16} className="text-white ml-0.5" />
              )}
            </button>

            <button className="p-1.5 text-gray-600 hover:text-gray-800 transition-colors" onClick={handleNext}>
              <SkipForward size={16} />
            </button>

            <button className="p-1.5 text-gray-600 hover:text-gray-800 transition-colors">
              <Volume2 size={16} />
            </button>
          </div>
        </div>
      </div>

      {showNote && (
        <StickyNote color="green">
          <h3 className="font-bold">Music Taste</h3>
          <p>What I'm currently listening to on Spotify.</p>
        </StickyNote>
      )}
    </div>
  )
}

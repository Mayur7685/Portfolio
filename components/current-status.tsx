"use client"

import { useState, useEffect } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Clock, MapPin, Briefcase } from "lucide-react"

export default function CurrentStatus() {
  const [showNote, setShowNote] = useState(false)

  // Get current time in India (UTC+5:30)
  const getIndianTime = () => {
    const now = new Date()
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
    return new Date(utcTime + 5.5 * 3600000)
  }

  const [time, setTime] = useState(getIndianTime())

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getIndianTime())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  // Format time as HH:MM AM/PM
  const formatTime = (date: Date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`
  }

  // Determine if it's working hours in India (9 AM to 6 PM)
  const isWorkingHours = () => {
    const hours = time.getHours()
    return hours >= 9 && hours < 18
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 font-sans">Status</h2>

      <div className="flex-grow flex flex-col justify-center space-y-2">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-full bg-white/80">
            <Clock size={14} className="text-gray-700" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Local Time</p>
            <p className="text-xs font-medium">{formatTime(time)}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-full bg-white/80">
            <MapPin size={14} className="text-gray-700" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-xs font-medium">India</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-full bg-white/80">
            <Briefcase size={14} className="text-gray-700" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Availability</p>
            <p className="text-xs font-medium">
              {isWorkingHours() ? (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Available
                </span>
              ) : (
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-1"></span>
                  Away
                </span>
              )}
            </p>
          </div>
        </div>
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Current Status</h3>
          <p>My current local time and availability for new projects or collaborations.</p>
        </StickyNote>
      )}
    </div>
  )
}

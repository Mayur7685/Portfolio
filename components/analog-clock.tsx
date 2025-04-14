"use client"

import { useState, useEffect, useRef } from "react"

export default function AnalogClock() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [time, setTime] = useState(new Date())

  // Set up the Indian time (UTC+5:30)
  useEffect(() => {
    const getIndianTime = () => {
      const now = new Date()
      // Indian time is UTC+5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000
      return new Date(utcTime + 5.5 * 3600000) // 5.5 hours in milliseconds
    }

    const timer = setInterval(() => {
      setTime(getIndianTime())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  // Draw the clock
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = canvas.offsetWidth
    canvas.width = size
    canvas.height = size

    const centerX = size / 2
    const centerY = size / 2
    const radius = size * 0.4

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw clock face
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
    ctx.fillStyle = "#f8f8f8"
    ctx.fill()
    ctx.lineWidth = 4
    ctx.strokeStyle = "#202020"
    ctx.stroke()

    // Draw hour marks
    ctx.lineWidth = 2
    ctx.strokeStyle = "#404040"
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6
      const x1 = centerX + radius * 0.8 * Math.sin(angle)
      const y1 = centerY - radius * 0.8 * Math.cos(angle)
      const x2 = centerX + radius * 0.9 * Math.sin(angle)
      const y2 = centerY - radius * 0.9 * Math.cos(angle)

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }

    // Draw minute marks
    ctx.lineWidth = 1
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        const angle = (i * Math.PI) / 30
        const x1 = centerX + radius * 0.85 * Math.sin(angle)
        const y1 = centerY - radius * 0.85 * Math.cos(angle)
        const x2 = centerX + radius * 0.9 * Math.sin(angle)
        const y2 = centerY - radius * 0.9 * Math.cos(angle)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    // Draw hour numbers
    ctx.font = "bold 16px Courier New"
    ctx.fillStyle = "#202020"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    for (let i = 1; i <= 12; i++) {
      const angle = (i * Math.PI) / 6
      const x = centerX + radius * 0.7 * Math.sin(angle)
      const y = centerY - radius * 0.7 * Math.cos(angle)
      ctx.fillText(i.toString(), x, y)
    }

    // Get time components
    const hours = time.getHours() % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    // Draw hour hand
    const hourAngle = (hours * Math.PI) / 6 + (minutes * Math.PI) / (6 * 60)
    const hourHandLength = radius * 0.5
    const hourHandX = centerX + hourHandLength * Math.sin(hourAngle)
    const hourHandY = centerY - hourHandLength * Math.cos(hourAngle)

    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(hourHandX, hourHandY)
    ctx.lineWidth = 6
    ctx.strokeStyle = "#202020"
    ctx.stroke()

    // Draw minute hand
    const minuteAngle = (minutes * Math.PI) / 30 + (seconds * Math.PI) / (30 * 60)
    const minuteHandLength = radius * 0.7
    const minuteHandX = centerX + minuteHandLength * Math.sin(minuteAngle)
    const minuteHandY = centerY - minuteHandLength * Math.cos(minuteAngle)

    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(minuteHandX, minuteHandY)
    ctx.lineWidth = 4
    ctx.strokeStyle = "#404040"
    ctx.stroke()

    // Draw second hand
    const secondAngle = (seconds * Math.PI) / 30
    const secondHandLength = radius * 0.8
    const secondHandX = centerX + secondHandLength * Math.sin(secondAngle)
    const secondHandY = centerY - secondHandLength * Math.cos(secondAngle)

    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(secondHandX, secondHandY)
    ctx.lineWidth = 2
    ctx.strokeStyle = "#606060"
    ctx.stroke()

    // Draw center circle
    ctx.beginPath()
    ctx.arc(centerX, centerY, 6, 0, 2 * Math.PI)
    ctx.fillStyle = "#202020"
    ctx.fill()
  }, [time])

  // Format time for display
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const seconds = date.getSeconds().toString().padStart(2, "0")
    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className="bg-gray-200 border-2 border-gray-800 rounded-lg p-4 h-full">
      <h2 className="text-xl font-bold font-dot-matrix mb-3">Indian Time</h2>
      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} className="w-full max-w-[200px] aspect-square mb-3"></canvas>
        <div className="text-center font-mono text-lg font-bold">{formatTime(time)}</div>
        <div className="text-xs text-gray-600 mt-1">GMT+5:30</div>
      </div>
    </div>
  )
}

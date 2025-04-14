"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react"

export default function GithubActivity() {
  const [showNote, setShowNote] = useState(false)

  // Sample GitHub activity data
  const activities = [
    {
      type: "commit",
      repo: "ai-food-agent",
      message: "Add vision model integration",
      date: "2 days ago",
      icon: <GitCommit size={12} />,
    },
    {
      type: "pr",
      repo: "web3-starter",
      message: "Fix wallet connection issues",
      date: "3 days ago",
      icon: <GitPullRequest size={12} />,
    },
    {
      type: "star",
      repo: "next-auth",
      message: "Starred next-auth/next-auth",
      date: "5 days ago",
      icon: <Star size={12} />,
    },
    {
      type: "commit",
      repo: "portfolio-site",
      message: "Update mobile layout",
      date: "1 week ago",
      icon: <GitCommit size={12} />,
    },
  ]

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-base sm:text-lg md:text-xl font-bold font-sans">GitHub Activity</h2>
        <a
          href="https://github.com/mayur7685"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 bg-white/80 rounded-full"
        >
          <Github size={14} />
        </a>
      </div>

      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white/50 backdrop-blur-sm p-2 rounded-xl border border-white/50 text-xs">
            <div className="flex items-center space-x-1 mb-1">
              <div className="p-1 bg-gray-100 rounded-full">{activity.icon}</div>
              <span className="font-medium">{activity.repo}</span>
              <span className="text-xs text-gray-500 ml-auto">{activity.date}</span>
            </div>
            <p className="text-xs pl-6">{activity.message}</p>
          </div>
        ))}
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">GitHub Activity</h3>
          <p>My recent commits, pull requests, and other GitHub activities.</p>
        </StickyNote>
      )}
    </div>
  )
}

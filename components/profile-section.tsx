"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Github, GitCommit, GitPullRequest, Star } from "lucide-react"
import { profileInfo } from "@/config/portfolio-data"

export default function ProfileSection() {
  const [showNote, setShowNote] = useState(false)

  // Sample GitHub activity data
  const activities = [
    {
      type: "commit",
      repo: "ai-food-agent",
      message: "Add vision model integration",
      date: "2 days ago",
      icon: <GitCommit size={14} />,
    },
    {
      type: "pr",
      repo: "web3-starter",
      message: "Fix wallet connection issues",
      date: "3 days ago",
      icon: <GitPullRequest size={14} />,
    },
    {
      type: "star",
      repo: "next-auth",
      message: "Starred next-auth/next-auth",
      date: "5 days ago",
      icon: <Star size={14} />,
    },
    {
      type: "commit",
      repo: "portfolio-site",
      message: "Update mobile layout",
      date: "1 week ago",
      icon: <GitCommit size={14} />,
    },
  ]

  // Social links
  const socialLinks = [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/MayurAsodara", color: "bg-blue-100 text-blue-600" },
    { name: "GitHub", icon: "Github", url: "https://github.com/mayuras7685", color: "bg-gray-100 text-gray-700" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/mayur_7685", color: "bg-pink-100 text-pink-600" },
      ]

  // Function to get the appropriate icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Twitter":
        return <span className="text-blue-500">𝕏</span>
      case "Github":
        return <Github size={16} />
      case "Instagram":
        return <span className="text-pink-500">📸</span>
    
      default:
        return <span>{iconName}</span>
    }
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-4 md:p-6 transition-all duration-300 hover:shadow-xl relative"
      onMouseEnter={() => setShowNote(true)}
      onMouseLeave={() => setShowNote(false)}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Profile Picture and Info */}
        <div className="flex flex-col items-center md:w-1/3">
          {/* Square Profile Picture */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-2 border-white/80 shadow-md mb-4">
            <img
              src={profileInfo.profileImage || "/placeholder.svg?height=400&width=400&text=Profile"}
              alt={profileInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <h2 className="text-xl font-bold text-center mb-1">{profileInfo.name}</h2>
          <p className="text-sm text-gray-600 text-center mb-2">{profileInfo.role}</p>
          <div className="flex items-center justify-center text-sm mb-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-white/50">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available for work
            </span>
          </div>
        </div>

        {/* Connect Section */}
        <div className="md:w-2/3">
          <h3 className="text-lg font-bold mb-3">Connect</h3>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} flex items-center justify-center gap-2 p-3 rounded-xl transition-all duration-200 hover:shadow-md hover:scale-105`}
              >
                {getIcon(link.icon)}
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Company Tags */}
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Companies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 font-medium text-sm border border-purple-200 shadow-sm">
                AdagradAI
              </span>
              <span className="px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-sm border border-blue-200 shadow-sm">
                RoboFlow
              </span>
              <span className="px-3 py-1.5 rounded-full bg-green-100 text-green-700 font-medium text-sm border border-green-200 shadow-sm">
                PCT
              </span>
            </div>
          </div>

          {/* Bio */}
          <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/50">
            <p className="text-sm">{profileInfo.bio}</p>
          </div>
        </div>
      </div>

      {/* GitHub Activity Feed */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">GitHub Activity</h3>
          <a
            href="https://github.com/mayuras7685/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <Github size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white/50 backdrop-blur-sm p-3 rounded-xl border border-white/50">
              <div className="flex items-center gap-2 mb-1">
                <div className="p-1.5 bg-white rounded-full">{activity.icon}</div>
                <span className="font-medium text-sm">{activity.repo}</span>
                <span className="text-xs text-gray-500 ml-auto">{activity.date}</span>
              </div>
              <p className="text-xs pl-8">{activity.message}</p>
            </div>
          ))}
        </div>
      </div>

      {showNote && (
        <StickyNote>
          <h3 className="font-bold">Profile Section</h3>
          <p>A clean, minimal profile section with social links and recent GitHub activity.</p>
        </StickyNote>
      )}
    </div>
  )
}

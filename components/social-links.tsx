"use client"

import { useState } from "react"
import { Twitter, Github, Instagram } from "lucide-react"
import { StickyNote } from "@/components/sticky-note"
import { socialLinks } from "@/config/portfolio-data"

export default function SocialLinks() {
  const [activeLink, setActiveLink] = useState<string | null>(null)

  // Function to get the appropriate icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Twitter":
        return <Twitter size={16} />
      case "Github":
        return <Github size={16} />
      case "Instagram":
        return <Instagram size={16} />
      case "Farcaster":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 14L12 10L16 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return <span>{iconName}</span>
    }
  }

  return (
    <div
      className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-3 sm:p-4 transition-all duration-300 hover:shadow-xl relative h-full flex flex-col"
      onMouseLeave={() => setActiveLink(null)}
    >
      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-2 font-sans">Connect</h2>

      <div className="flex-grow grid grid-cols-2 gap-2 place-items-center">
        {socialLinks.slice(0, 4).map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center ${link.color} rounded-full w-full aspect-square backdrop-blur-sm transition-all duration-300 hover:scale-105`}
            onMouseEnter={() => setActiveLink(link.id)}
          >
            <div className="bg-white rounded-full p-1.5 mb-1 flex items-center justify-center">
              {getIcon(link.icon)}
            </div>
            <span className="text-xs font-medium">{link.name}</span>

            {activeLink === link.id && (
              <StickyNote>
                <h3 className="font-bold">{SocialLinks.name}</h3>
                <p>Connect with me on {SocialLinks.name}</p>
              </StickyNote>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { StickyNote } from "@/components/sticky-note"
import { Github, ExternalLink } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

export default function ProjectGrid() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Snapback AI",
      description: "A Zomato nugget-style food complaint agent",
      tags: ["AI", "NLP"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Zora NFT Playground",
      description: "Mint + explore NFTs on Zora",
      tags: ["Web3", "NFT"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Card Clash",
      description: "On-chain card game",
      tags: ["Web3", "Game"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "CrowdSpark",
      description: "Crowdfunding platform on Avalanche",
      tags: ["Web3", "DeFi"],
      github: "#",
      demo: "#",
    },
  ]

  const [activeProject, setActiveProject] = useState<number | null>(null)

  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-6 font-sans">Project Grid</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/50 backdrop-blur-sm p-5 rounded-2xl border border-white/50 transition-all duration-300 hover:shadow-lg hover:scale-105 relative"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-white/70 px-3 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.github && (
                <a
                  href={project.github}
                  className="flex items-center gap-1 bg-white/70 text-gray-800 px-3 py-1.5 rounded-full text-sm transition-colors hover:bg-gray-100"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="flex items-center gap-1 bg-white/70 text-gray-800 px-3 py-1.5 rounded-full text-sm transition-colors hover:bg-gray-100"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
                </a>
              )}
            </div>

            {activeProject === project.id && (
              <StickyNote color="green">
                <h3 className="font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="mt-2">
                  <p className="text-sm">Technologies: {project.tags.join(", ")}</p>
                </div>
              </StickyNote>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

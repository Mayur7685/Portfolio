"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Home, Briefcase, Award, PenToolIcon as Tool, User, Github, Twitter, Instagram } from "lucide-react"

type MenuItem = {
  id: string
  icon: React.ReactNode
  label: string
  action: () => void
}

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const menuItems: MenuItem[] = [
    {
      id: "home",
      icon: <Home size={24} />,
      label: "Home",
      action: () => scrollToSection("home"),
    },
    {
      id: "projects",
      icon: <Briefcase size={24} />,
      label: "Projects",
      action: () => scrollToSection("projects"),
    },
    {
      id: "hackathons",
      icon: <Award size={24} />,
      label: "Hackathons",
      action: () => scrollToSection("hackathons"),
    },
    {
      id: "toolbox",
      icon: <Tool size={24} />,
      label: "Toolbox",
      action: () => scrollToSection("toolbox"),
    },
    {
      id: "about",
      icon: <User size={24} />,
      label: "About Me",
      action: () => scrollToSection("about"),
    },
  ]

  const socialItems: MenuItem[] = [
    {
      id: "github",
      icon: <Github size={24} />,
      label: "GitHub",
      action: () => window.open("https://github.com/mayuras7685", "_blank"),
    },
    {
      id: "twitter",
      icon: <Twitter size={24} />,
      label: "Twitter",
      action: () => window.open("https://twitter.com/MayurAsodara", "_blank"),
    },
    {
      id: "instagram",
      icon: <Instagram size={24} />,
      label: "Instagram",
      action: () => window.open("https://instagram.com/mayur_7685", "_blank"),
    },
    {
      id: "farcaster",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      ),
      label: "Farcaster",
      action: () => window.open("https://farcaster.xyz/", "_blank"),
    },
  ]

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsAnimating(true)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsAnimating(true)
    setIsOpen(false)
  }

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-md text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors border border-white/50"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={handleClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Drawer Content */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-white/90 backdrop-blur-md shadow-lg z-50 transform transition-transform duration-300 ease-out rounded-l-3xl border-l border-t border-b border-white/50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold font-sans">Menu</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="flex flex-col items-center justify-center p-4 bg-white/70 rounded-2xl border border-white/50 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="text-gray-800 mb-2">{item.icon}</div>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Connect</h3>
            <div className="flex justify-between">
              {socialItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="p-3 rounded-full bg-white/70 text-gray-800 hover:bg-white hover:shadow-md transition-all duration-200 border border-white/50"
                  aria-label={item.label}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-sm text-gray-500 border-t border-gray-100">
          © 2025 Mayur Asodara
        </div>
      </div>
    </>
  )
}

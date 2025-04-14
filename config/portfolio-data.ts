// Social media links
export const socialLinks = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/MayurAsodara",
    icon: "Twitter",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/mayuras7685",
    icon: "Github",
    color: "bg-gray-100 text-gray-700",
  },
  {
    id: "instagram",
    name: "Instagram",
    url: "https://instagram.com/mayur_7685",
    icon: "Instagram",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "farcaster",
    name: "Farcaster",
    url: "https://farcaster.xyz/",
    icon: "Farcaster",
    color: "bg-purple-100 text-purple-600",
  },
]

// Profile information
export const profileInfo = {
  name: "Mayur Asodara",
  role: "AI & Web3 Developer",
  location: "India",
  experience: "5+ Years",
  bio: "I craft AI agents, computer vision models, and Web3 dApps. Ideas are my tools—always ready to build something cool.",
  companies: ["AdagradAI", "RoboFlow", "PCT.co"],
  profileImage: "/PFP.jpg?height=400&width=400&text=Developer",
}

// Projects data
// Projects data
export const projects = [
  {
    id: 0,
    title: "Promraw",
    description:
      "Promraw is a decentralized and AI-powered creative platform where users submit daily sketches based on AI-generated prompts. The platform scores submissions using AI and offers users the ability to mint their best artworks as NFTs using Zora’s protocol. A leaderboard ranks artists based on AI scores, enabling rewards and access to exclusive features.",
    tags: ["AI", "Creativity", "Web3", "NFT"],
    github: "https://github.com/Mayur7685/zora-impl-promraw",
    demo: "https://promraw-app.vercel.app/",
    image: "/p1.png?height=300&width=600",
  },
  {
    id: 1,
    title: "Snapback AI",
    description:
      "An AI-powered food complaint resolution tool inspired by Zomato nuggets. It uses GPT-4 and computer vision to analyze food images and help users get refunds or replacements for bad orders.",
    tags: ["AI", "NLP", "Computer Vision"],
    github: "https://github.com/mayuras7685/SnapBack",
    demo: "https://snapback-agent.streamlit.app/",
    image: "/p2.png?height=300&width=600",
  },
  {
    id: 2,
    title: "XRPflow: UI for Escrow",
    description:
      "A no-code tool for creating and managing XRPL escrows via a drag-and-drop interface. Users can visually set conditions for releasing funds without writing any code.",
    tags: ["Web3", "XRPL", "No-Code"],
    github: "https://github.com/mayuras7685/XRPflow",
    demo: "https://github.com/mayuras7685/XRPflow",
    image: "/p3.png?height=300&width=600",
  },
  {
    id: 3,
    title: "Nillion AI - Brain Tumor Classifier",
    description:
      "A privacy-focused medical tool that classifies brain tumor types from MRI scans using deep learning. The model runs on the Nillion testnet and protects user data by processing images without storing them.",
    tags: ["AI", "Healthcare", "Nillion"],
    github: "https://github.com/mayuras7685/Nillion-AI-Brain-tumor-classification",
    demo: "https://nillion-brain-tumor-classification.streamlit.app/",
    image: "/p4.png?height=300&width=600",
  },
  {
    id: 4,
    title: "Fire-NOC Agent",
    description:
      "A fire safety compliance assistant built with Streamlit and Moondream VLM. It analyzes uploaded property images to assess readiness for a temporary Fire NOC, aiding owners before official inspections.",
    tags: ["AI", "VLM", "Streamlit"],
    github: "https://github.com/Mayur7685/fire-noc-agent",
    demo: "https://github.com/Mayur7685/fire-noc-agent",
    image: "/p5.png?height=300&width=600",
  },
  {
    id: 5,
    title: "Avax God on Intersect",
    description:
      "A Web3 strategy card game hosted on Avalanche's Intersect Testnet. Players collect NFT cards and engage in real-time, on-chain battles using crypto wallets for every move.",
    tags: ["Web3", "GameFi", "Avalanche"],
    github: "https://github.com/mayuras7685/AvaXGod-Intersect",
    demo: "https://avaxgod-intersect.vercel.app/",
    image: "/p6.png?height=300&width=600",
  },
  {
    id: 6,
    title: "Moondream VLM Agent",
    description:
      "An interactive Streamlit app showcasing Moondream's vision-language capabilities. Features include caption generation, visual Q&A, object detection, and pinpointing objects in uploaded images.",
    tags: ["VLM", "AI", "Vision-Language"],
    github: "https://github.com/",
    demo: "https://moondream-vlm-demo.streamlit.app/",
    image: "/p7.png?height=300&width=600",
  },
  {
    id: 7,
    title: "CLIP All-in-One",
    description:
      "A multi-functional app that showcases OpenAI's CLIP capabilities including zero-shot image classification, semantic search, image-text clustering, and visual understanding—all in one place.",
    tags: ["AI", "CLIP", "Vision-Language"],
    github: "https://github.com/mayuras7685/CLIP-ALL-IN-ONE",
    demo: "https://clip-all-in-one.streamlit.app/",
    image: "/p8.png?height=300&width=600",
  },
];


// Hackathon data
// Hackathon data
export const hackathons = [
  {
    id: 1,
    name: "Hacker House Goa (HHGOA)",
    date: "Aug 2024",
    project: "Brain Tumor Classifier on Nillion",
    stack: ["Nada AI", "Nillion", "Streamlit"],
    image: "/h1.png?height=100&width=200",
    certificate: "https://certificate.com/",
    description:
      "Built a privacy-preserving Brain Tumor Classifier using Nillion’s secure multiparty compute framework with Nada AI. Hosted on the testnet and won a $1000 bounty in the AI x Web3 track.",
   },
  {
    id: 2,
    name: "Intersect Hackathon by Avalanche",
    date: "Feb 2024",
    project: "Avax God & Defindstarter",
    stack: ["Solidity", "React", "Avalanche"],
    image: "/h2.png?height=100&width=200",
    certificate: "https://certificate.com/",
    description:
      "Created two projects: Avax God – a Web3 battle card game on Avalanche Subnet for the Gaming track, and Defindstarter – a decentralized Kickstarter for the Security track. Won a $1000 bounty for standout contributions.",

      },
  {
    id: 3,
    name: "Hack for India",
    date: "Sep 2023",
    project: "Smart Camera for MSMEs",
    stack: ["Raspberry Pi", "OpenCV", "Python"],
    image: "/h3.png?height=100&width=200",
    certificate: "https://certificate.com/",
    description:
      "Developed a smart camera device using Raspberry Pi to help small manufacturers monitor production lines. It used real-time image processing and alerts for quality control in MSMEs.",
  },
  {   
      id: 4,
      name: "Hack This Fall",
      date: "Feb 2023",
      project: "Document Classifier",
      stack: ["Python", "ML"],
      image: "/h4.png?height=100&width=200",
      certificate: "https://certificate.com/",
      description:
        "Built a document classification tool using classical ML techniques to categorize PDFs and scanned documents by type. Implemented OCR and TF-IDF pipelines to assist with automated office workflows.",
   
    },
];


// Toolbox categories
export const toolboxCategories = [
  {
    name: "LLMs",
    tools: ["GPT-4", "Claude", "Llama", "Mistral"],
    expanded: false,
    color: "bg-blue-400/80",
  },
  {
    name: "VLMs",
    tools: ["CLIP", "Stable Diffusion", "DALL-E"],
    expanded: false,
    color: "bg-green-400/80",
  },
  {
    name: "Computer Vision",
    tools: ["OpenCV", "TensorFlow", "PyTorch"],
    expanded: false,
    color: "bg-yellow-400/80",
  },
  {
    name: "Blockchain",
    tools: ["Solidity", "Ethers.js", "Hardhat", "Foundry"],
    expanded: false,
    color: "bg-purple-400/80",
  },
]

// Raccoon traits
export const raccoonTraits = [
  {
    id: "curious",
    text: "Curious",
    color: "bg-blue-400",
    x: 20,
    y: 30,
    vx: 1.5,
    vy: 1,
    rotation: 5,
  },
  {
    id: "crafty",
    text: "Crafty",
    color: "bg-green-400",
    x: 60,
    y: 50,
    vx: -1.2,
    vy: 1.3,
    rotation: -8,
  },
  {
    id: "witty",
    text: "Witty",
    color: "bg-yellow-400",
    x: 40,
    y: 70,
    vx: 1.1,
    vy: -1.4,
    rotation: 12,
  },
  {
    id: "dirty",
    text: "Hands Dirty",
    color: "bg-orange-400",
    x: 10,
    y: 90,
    vx: 1.3,
    vy: -1.1,
    rotation: -5,
  },
  {
    id: "cages",
    text: "No Cages",
    color: "bg-purple-400",
    x: 70,
    y: 20,
    vx: -1.4,
    vy: 1.2,
    rotation: 7,
  },
]

// Book recommendations
export const bookRecommendations = [
  {
    title: "Superintelligence",
    author: "Nick Bostrom",
    cover: "/placeholder.svg?height=120&width=80&text=Book",
    category: "AI",
  },
  {
    title: "The Innovators",
    author: "Walter Isaacson",
    cover: "/placeholder.svg?height=120&width=80&text=Book",
    category: "Tech History",
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "/placeholder.svg?height=120&width=80&text=Book",
    category: "Startups",
  },
]

// Currently playing music
export const currentlyPlaying = {
  title: "Blinding Lights",
  artist: "The Weeknd",
  album: "After Hours",
  coverArt: "/placeholder.svg?height=80&width=80&text=Album",
  progress: 65, // percentage
}

// GitHub activity
export const githubActivity = [
  {
    type: "commit",
    repo: "ai-food-agent",
    message: "Add vision model integration",
    date: "2 days ago",
    icon: "GitCommit",
  },
  {
    type: "pr",
    repo: "web3-starter",
    message: "Fix wallet connection issues",
    date: "3 days ago",
    icon: "GitPullRequest",
  },
  {
    type: "star",
    repo: "next-auth",
    message: "Starred next-auth/next-auth",
    date: "5 days ago",
    icon: "Star",
  },
  {
    type: "commit",
    repo: "portfolio-site",
    message: "Update mobile layout",
    date: "1 week ago",
    icon: "GitCommit",
  },
]

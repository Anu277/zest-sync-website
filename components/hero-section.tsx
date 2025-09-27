"use client"

import { Button } from "@/components/ui/button"
import { Play, Download, Github, AppWindow } from "lucide-react"
import Image from "next/image"
import logo from "@/assets/images/logo_900_t.webp"
import win11 from "../assets/images/win11.png"
import { useState, useEffect, useRef } from "react"
import { DownloadCounter } from "@/components/download-counter"




export function HeroSection() {
  const [intensity, setIntensity] = useState(300)
  const [isAutoAnimating, setIsAutoAnimating] = useState(true)
  const animationRef = useRef(null)

  const handleIntensityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntensity(Number(e.target.value))
    setIsAutoAnimating(false)
  }

  useEffect(() => {
    if (!isAutoAnimating) return

    const startTime = performance.now()
    const isMdOrLarger = window.matchMedia('(min-width: 768px)').matches
    const duration = isMdOrLarger ? 140000 : 8000
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = (elapsed % duration) / duration
      
      let value
      if (progress <= 0.5) {
        value = 300 + (progress * 2) * 700
      } else {
        value = 1000 - ((progress - 0.5) * 2) * 700
      }
      
      setIntensity(value)
      
      if (isAutoAnimating) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isAutoAnimating])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-10">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background"
        style={{
          background: `linear-gradient(135deg, #121212 0%, #121212 70%, rgba(229, 9, 20, ${(10 + (intensity / 10) * 0.5) / 100}) 100%)`
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo placeholder */}
        <div className="mb-0">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full flex items-center justify-center mb-2">
            <Image src={logo} alt="Logo" width={150} height={150} className="text-primary-foreground" />
          </div>
        </div>

        {/* Application name */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"><span className="text-gray-200">Zest</span> <span className="text-primary">Sync</span> <span className="text-foreground">Player</span></h1>
          <p className="text-[10px] md:text-[10px] lg:text-[12px] text-muted-foreground font-light">Creato da Solo</p>
        </div>

        {/* Divider line */}
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground to-transparent mx-auto mb-8 opacity-50"></div>

        {/* Main tagline with highlighted words */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight">
          <span className="text-white">The Video Player That</span><br />
          <span className="text-white">Fills Your</span> <span className="text-primary">{"{"}</span><span className="text-primary">Blanks</span><span className="text-primary">{"}"}</span> <span className="text-white">before</span><br />
          <span className="bg-gradient-to-r from-pink-400 via-red-500 to-orange-500 bg-clip-text text-transparent">Searching</span> <span className="text-white">and</span> <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">Understanding</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
          AI-powered subtitle generation and translation for 10+ languages. Experience video content like never before
          with intelligent playback tuning.
        </p>

        {/* Download Counter */}
        <div className="flex justify-center mb-12">
          <DownloadCounter />
        </div>



        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="glass-hover neon-glow-hover px-8 py-4 text-lg font-semibold"
            onClick={() => {
              const installationSection = document.getElementById('installation-section')
              if (installationSection) {
                installationSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Image src={win11} alt="Logo" width={20} height={20} className="mr-2 hue-rotate-30 invert" />
            Download Now (win 10/11)
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="glass glass-hover px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary bg-transparent"
            onClick={() => {
              const demoSection = document.getElementById('demo-section')
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <Play className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="glass-hover px-8 py-4 text-lg font-semibold border hover:border-primary bg-transparent"
            onClick={() => window.open('https://github.com/anu277/zest-sync-player', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
      
    </section>
  )
}

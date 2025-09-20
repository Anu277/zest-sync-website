import { Card } from "@/components/ui/card"
import { Upload, Volume2, FileText, Languages, Play, Plus, ArrowRight, ArrowDown } from "lucide-react"

const steps = [
  {
    icon: Plus,
    title: "Import Video",
    description: "Import/open your video file into Zest Sync Player",
  },
  {
    icon: Volume2,
    title: "Audio Extraction",
    description: "FFmpeg extracts high-quality audio for processing",
  },
  {
    icon: FileText,
    title: "AI Generation",
    description: "Whisper AI generates accurate English subtitles",
  },
  {
    icon: Languages,
    title: "Translation",
    description: "EasyNMT translates to your preferred language",
  },
  {
    icon: Play,
    title: "Smart Playback",
    description: "Enjoy optimized video with intelligent subtitles",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span className="text-primary text-2xl text-bold">Intelligent</span> workflow transforms your videos into multilingual experiences with just a few clicks.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 md:gap-6 gap-y-16 md:gap-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="glass glass-hover p-6 text-center h-full">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>

              {/* Arrow connectors */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop horizontal arrow */}
                  <div className="hidden md:flex absolute top-1/2 -right-8 transform -translate-y-1/2 z-10 items-center">
                    <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary mr-1"></div>
                    <ArrowRight className="w-4 h-4 text-secondary" />
                  </div>
                  
                  {/* Mobile vertical arrow with curved line */}
                  <div className="md:hidden flex flex-col items-center absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <svg width="2" height="20" className="mb-1">
                      <path d="M1,0 Q1,10 1,20" stroke="url(#gradient)" strokeWidth="2" fill="none" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e50914" />
                          <stop offset="100%" stopColor="#f61a27" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <ArrowDown className="w-4 h-4 text-secondary" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

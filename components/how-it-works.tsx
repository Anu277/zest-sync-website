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

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Main connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connecting node */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-20"></div>
                
                <Card className="glass glass-hover p-6 text-center mt-12">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 neon-glow">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>

                {/* Branch lines */}
                {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-primary/50 z-10"></div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent z-0"></div>
          
          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-center">
                {/* Node */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-20"></div>
                
                {/* Branch line */}
                <div className="absolute left-8 w-8 h-0.5 bg-primary/50 z-10"></div>
                
                <Card className="glass glass-hover p-6 ml-16 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center neon-glow flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

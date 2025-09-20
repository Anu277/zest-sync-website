import { Card } from "@/components/ui/card"
import { Play, FileText, Languages } from "lucide-react"
import { Bowlby_One_SC } from 'next/font/google'

const bowlbyOne = Bowlby_One_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export function FeatureHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:items-center lg:text-center ">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-balance text-center lg:text-left">
              Redefining <span className="text-primary font-bold">playback</span> with the{" "}
              <span className="text-primary font-bold">offline</span> smart tuner.
            </h2>
           <p className={`text-center lg:text-left text-lg tracking-widest ${bowlbyOne.className}`} >PLAYE<span className="text-2xl">R</span> . GENERATO<span className="text-2xl">R</span> . TRANSLATO<span className="text-2xl">R</span></p>
          </div>

          <div className="space-y-4 md:space-y-0 md:flex md:flex-row md:gap-4 lg:flex-col lg:space-y-4">
            <Card className="glass glass-hover p-6 relative overflow-hidden group md:flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur opacity-5 group-hover:opacity-15" />
              <div className="relative z-10 flex items-center gap-4 flex-col text-center lg:flex-row lg:text-left">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center relative">

                  <Play className="w-6 h-6 text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Smart <span className="text-primary">Player</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Intelligent playback with adaptive speed and quality optimization
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-6 relative overflow-hidden group md:flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className="absolute -inset-1 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-lg blur opacity-5 group-hover:opacity-15"
              />
              <div className="relative z-10 flex items-center gap-4 flex-col text-center lg:flex-row lg:text-left">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center relative">

                  <FileText className="w-6 h-6 text-secondary relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    AI <span className="text-secondary">Generator</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Automatic subtitle generation powered by Whisper AI technology
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass glass-hover p-6 relative overflow-hidden group md:flex-1">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div
                className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-primary/30 rounded-lg blur opacity-5 group-hover:opacity-15"
              />
              <div className="relative z-10 flex items-center gap-4 flex-col text-center lg:flex-row lg:text-left">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center relative">

                  <Languages className="w-6 h-6 text-accent relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Multi-Language <span className="text-accent">Translator</span>
                  </h3>
                  <p className="text-muted-foreground">
                    Translate subtitles into 14 languages with Helsinki MarianMT models
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Monitor, Subtitles, Languages, Download } from "lucide-react"

export function DemoSection() {
  return (
    <section id="demo-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See It In <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the power of AI-driven subtitle generation and translation in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Main Video Demo */}
          <div className="lg:col-span-2">
            <Card className="glass p-6">
              <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  controls
                >
                  <source src="https://files.catbox.moe/6o0h2z.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Workflow Demo</h3>
              <p className="text-muted-foreground">
                See how Zest Sync Player processes videos, generates subtitles, and provides seamless translation.
              </p>
            </Card>
          </div>

          {/* Feature Previews */}
          <div className="space-y-4">
            <Card className="glass p-4 hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Subtitles className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">Auto Subtitles</h4>
              </div>
              <p className="text-sm text-muted-foreground">AI-powered subtitle generation with 95% accuracy</p>
            </Card>

            <Card className="glass p-4 hover:bg-secondary/5 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Languages className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="font-semibold">Multi-Language</h4>
              </div>
              <p className="text-sm text-muted-foreground">Translate to 14 languages instantly</p>
            </Card>

            <Card className="glass p-4 hover:bg-accent/5 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Monitor className="w-5 h-5 text-accent" />
                </div>
                <h4 className="font-semibold">Modern UI</h4>
              </div>
              <p className="text-sm text-muted-foreground">Clean, intuitive interface for all users</p>
            </Card>
          </div>
        </div>

        {/* Quick Features Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Download, title: "Easy Import", desc: "Drag & drop videos" },
            { icon: Subtitles, title: "AI Processing", desc: "Whisper AI engine" },
            { icon: Languages, title: "Translation", desc: "14 languages" },
            { icon: Play, title: "Playback", desc: "Smooth experience" },
          ].map((feature, index) => (
            <Card key={index} className="glass p-3 md:p-4 text-center hover:bg-primary/5 transition-all duration-300">
              <div className="p-2 md:p-3 bg-primary/10 rounded-full w-fit mx-auto mb-2 md:mb-3">
                <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-xs md:text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { Zap, Globe, Minimize2, Play, WifiOff, Heart } from "lucide-react"

export function KeyHighlights() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key <span className="text-primary">Highlights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zest Sync Player is designed for minimal, distraction-free, and smart offline video playback. Here's what
            makes it stand out:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart subtitle generation</h3>
              <p className="text-muted-foreground">Powered by Whisper AI for accurate, automated subtitles.</p>
            </div>
          </Card>

          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Translate into 10+ languages</h3>
              <p className="text-muted-foreground">Supports 14 languages in total.</p>
            </div>
          </Card>

          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Minimize2 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Minimal, fast UI</h3>
              <p className="text-muted-foreground">Focused on smooth, distraction-free experience.</p>
            </div>
          </Card>

          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smooth Playback</h3>
              <p className="text-muted-foreground">Uses MPV engine + FFmpeg under the hood.</p>
            </div>
          </Card>

          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <WifiOff className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Offline-first</h3>
              <p className="text-muted-foreground">Works completely offline after initial model download.</p>
            </div>
          </Card>

          <Card className="glass glass-hover p-6 text-center group relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur opacity-0 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free & open-source</h3>
              <p className="text-muted-foreground">Open for contributions and improvements.</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

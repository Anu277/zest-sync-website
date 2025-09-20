"use client"

import { Card } from "@/components/ui/card"
import { Heart, Cpu, Languages, Play, Code } from "lucide-react"

export function CreditsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Credits & <span className="text-primary">Acknowledgments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zest Sync Player is built on the shoulders of amazing open-source libraries and models. 
            Huge thanks to these incredible projects that make this possible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 mb-8">
          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://openai.com/research/whisper', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">Whisper AI</h3>
            <p className="text-sm text-muted-foreground mb-2">OpenAI</p>
            <p className="text-xs text-muted-foreground">Automatic speech recognition</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://huggingface.co/Helsinki-NLP', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Languages className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">MarianMT</h3>
            <p className="text-sm text-muted-foreground mb-2">Helsinki-NLP</p>
            <p className="text-xs text-muted-foreground">Neural machine translation</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://mpv.io', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-accent" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">MPV + FFmpeg</h3>
            <p className="text-sm text-muted-foreground mb-2">Community Projects</p>
            <p className="text-xs text-muted-foreground">Media playback foundation</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://www.qt.io', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-green-500" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">Qt Framework</h3>
            <p className="text-sm text-muted-foreground mb-2">The Qt Company</p>
            <p className="text-xs text-muted-foreground">Cross-platform GUI framework</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://onnxruntime.ai', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">ONNX Runtime</h3>
            <p className="text-sm text-muted-foreground mb-2">Microsoft</p>
            <p className="text-xs text-muted-foreground">ML inference optimization</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://www.nltk.org', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Languages className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">NLTK</h3>
            <p className="text-sm text-muted-foreground mb-2">NLTK Project</p>
            <p className="text-xs text-muted-foreground">Natural language processing</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://huggingface.co', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">Hugging Face</h3>
            <p className="text-sm text-muted-foreground mb-2">Hugging Face Inc.</p>
            <p className="text-xs text-muted-foreground">Model hub & transformers</p>
          </Card>

          <Card className="glass glass-hover p-3 md:p-6 text-center group cursor-pointer" onClick={() => window.open('https://github.com/spyder-ide/qtawesome', '_blank')}>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6 md:w-8 md:h-8 text-teal-500" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 underline">QtAwesome</h3>
            <p className="text-sm text-muted-foreground mb-2">Spyder Project</p>
            <p className="text-xs text-muted-foreground">Icon fonts for Qt</p>
          </Card>
        </div>

        <div className="text-center">
          <Card className="glass p-6 inline-flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500 animate-pulse" />
            <p className="text-muted-foreground">
              Meticulously crafted through relentless perseverance and unwavering tenacity
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
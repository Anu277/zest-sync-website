"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Settings, FolderOpen, Zap, CheckCircle, AlertTriangle, Github } from "lucide-react"

export function InstallationSection() {
  return (
    <section id="installation-section" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            <span className="text-primary">Installation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting started with Zest Sync Player is simple. Download the setup, run the installer, and you're ready to
            enjoy smart offline video playback. <span className="text-secondary">No internet</span> is required after the initial model download.
          </p>
        </div>

        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-bold"
              onClick={() => window.open('https://github.com/Anu277/Zest-Sync-Player/releases/download/v2.1.0/ZestSyncPlayerSetup.exe', '_blank')}
            >
              <Download className="w-6 h-6 mr-3" />
              Download CPU v2.1.0
            </Button>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-bold bg-orange-600 hover:bg-orange-700"
              onClick={() => window.open('https://github.com/Anu277/Zest-Sync-Player/releases/download/v2.1.0/ZestSyncGSetup.exe', '_blank')}
            >
              <Download className="w-6 h-6 mr-3" />
              GPU v2.1.0 (COMING SOON)
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://github.com/anu277/zest-sync-player/releases', '_blank')}
            >
              <Github className="w-6 h-6 mr-3" />
              Visit Releases
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4 animate-pulse">Free and Open Source </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Normal Windows Setup */}
          <Card className="glass p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Zest Sync Player (CPU Version)</h3>
              <p className="text-muted-foreground">Standard CPU processing - works on all devices</p>
            </div>

            <Button size="lg" className="neon-glow mb-6 w-full">
              Zest Sync Player v2.1.0 - CPU
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h4 className="font-semibold">Download installer</h4>
                  <p className="text-sm text-muted-foreground">Bundled with MPV + FFmpeg</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h4 className="font-semibold">Run setup wizard</h4>
                  <p className="text-sm text-muted-foreground">Quick installation process</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent/5 rounded-lg">
                <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h4 className="font-semibold">Launch application</h4>
                  <p className="text-sm text-muted-foreground">Open Zest Sync Player</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h4 className="font-semibold">Import video file</h4>
                  <p className="text-sm text-muted-foreground">Select your video to process</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-secondary/5 rounded-lg">
                <span className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div>
                  <h4 className="font-semibold">Enjoy smart playback</h4>
                  <p className="text-sm text-muted-foreground">AI-powered subtitle generation</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <p className="text-sm text-green-400">Works completely offline after first model download</p>
            </div>
          </Card>

          {/* Windows with CUDA Setup */}
          <Card className="glass p-6 border-orange-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-400">Zest Sync G (GPU Version)</h3>
              <p className="text-muted-foreground">GPU-accelerated for 5-10x faster processing</p>
            </div>

            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 mb-6 w-full flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Zest Sync G v2.1.0 - GPU
            </Button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <div>
                  <h4 className="font-semibold">Download installer</h4>
                  <p className="text-sm text-muted-foreground">Bundled with MPV + FFmpeg</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <div>
                  <h4 className="font-semibold">Run setup wizard</h4>
                  <p className="text-sm text-muted-foreground">Quick installation process</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <div>
                  <h4 className="font-semibold">Download CUDA</h4>
                  <p className="text-sm text-muted-foreground">CUDA 12.8 from NVIDIA official site</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <div>
                  <h4 className="font-semibold">Install CUDA</h4>
                  <p className="text-sm text-muted-foreground">Follow NVIDIA installation guide</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <div>
                  <h4 className="font-semibold">Enjoy 5-10x faster speed</h4>
                  <p className="text-sm text-muted-foreground">GPU-accelerated subtitle generation</p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-yellow-400" />
                <p className="text-sm text-yellow-400">Requires NVIDIA GPU with CUDA support</p>
              </div>
              <Button variant="outline" size="sm" className="w-full flex items-center gap-2" onClick={() => window.open('https://developer.nvidia.com/cuda-12-8-0-download-archive', '_blank')}>
                <Download className="w-4 h-4" />
                Download CUDA 12.8 from NVIDIA
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

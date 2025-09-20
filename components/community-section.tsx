"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Bug, MessageCircle } from "lucide-react"

export function CommunitySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Zest Sync Player is built for everyone who loves smart, offline video playback. Share ideas, report bugs, or
            contribute improvements — your feedback drives the project forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glass glass-hover p-6 text-center group">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">⭐ Star on GitHub</h3>
            <p className="text-muted-foreground mb-4">Support the project</p>
            <Button 
              variant="outline" 
              className="w-full bg-transparent"
              onClick={() => window.open('https://github.com/Anu277/Zest-Sync-Player', '_blank')}
            >
              Star Project
            </Button>
          </Card>

          <Card className="glass glass-hover p-6 text-center group">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Bug className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">🐞 Report a Bug</h3>
            <p className="text-muted-foreground mb-4">Help me fix issues</p>
            <Button 
              variant="outline" 
              className="w-full bg-transparent"
              onClick={() => window.open('https://github.com/Anu277/Zest-Sync-Player/issues/new', '_blank')}
            >
              Report Bug
            </Button>
          </Card>

          <Card className="glass glass-hover p-6 text-center group">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">💬 Join Discussion</h3>
            <p className="text-muted-foreground mb-4">Participate in feature ideas and chats</p>
            <Button 
              variant="outline" 
              className="w-full bg-transparent"
              onClick={() => window.open('https://github.com/Anu277/Zest-Sync-Player/discussions', '_blank')}
            >
              Join Chat
            </Button>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Open-source, welcoming, and constantly evolving. Everyone is welcome to contribute.
        </p>
      </div>
    </section>
  )
}

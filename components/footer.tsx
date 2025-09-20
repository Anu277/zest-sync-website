import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <Card className="glass p-8 text-center">
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">
              Made by a <span className="text-primary font-semibold">student dev</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-6">
              <a
                href="https://github.com/anu277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/anurag-bheemani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="mailto:anub0709@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">anub0709@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">© 2025 Anurag Bheemani. All rights reserved.</p>
          </div>
        </Card>
      </div>
    </footer>
  )
}

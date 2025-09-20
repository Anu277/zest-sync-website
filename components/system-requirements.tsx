import { Card } from "@/components/ui/card"
import { Monitor, Cpu, HardDrive, AlertTriangle, MemoryStick } from "lucide-react"

export function SystemRequirements() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            System <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-lg text-muted-foreground">Optimized for Windows with everything included</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass glass-hover p-6 text-center">
            <Monitor className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Platform</h3>
            <p className="text-muted-foreground">Windows 10/11 - Native desktop app</p>
          </Card>

          <Card className="glass glass-hover p-6 text-center">
            <Cpu className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Processor</h3>
            <p className="text-muted-foreground">Min: i3-8100 (4C) | Rec: i5-10300H+ (6C)</p>
          </Card>

          <Card className="glass glass-hover p-6 text-center">
            <MemoryStick className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Memory</h3>
            <p className="text-muted-foreground">Min: 6GB RAM | Rec: 12GB+ for models</p>
          </Card>

          <Card className="glass glass-hover p-6 text-center">
            <HardDrive className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Storage</h3>
            <p className="text-muted-foreground">2GB base + up to 14.1GB language models</p>
          </Card>
        </div>

        {/* Performance disclaimer */}
        <Card className="p-6" style={{backdropFilter: 'blur(2px)', boxShadow: '0 0 5px rgba(249, 115, 22, 0.5)', background: 'rgba(249, 115, 22, 0.03)', border: '1px solid rgba(249, 115, 22, 0.3)'}}>
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-500">Performance Notes</h3>
              <p className="text-muted-foreground">
                AI transcription is <span className="text-yellow-500">CPU-intensive</span>. Performance scales with cores/threads. <span className="text-secondary">i5-10th gen</span> benchmark: <span className="text-yellow-500">10min video ~50sec</span> processing. <span className="text-yellow-500">More cores = faster</span> subtitle generation.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

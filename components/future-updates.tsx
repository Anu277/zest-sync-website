import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Clock, Cpu, Layers, Gauge, FileText } from "lucide-react"

export function FutureUpdates() {
  const upcomingFeatures = [
    {
      icon: Zap,
      title: "CUDA GPU Acceleration",
      description: "Hardware-accelerated media processing using NVIDIA CUDA for lightning-fast subtitle generation",
      status: "In Development",
      priority: "High",
      benefits: ["10x faster processing", "Reduced CPU usage", "Better performance"]
    },
    {
      icon: Layers,
      title: "Batch Processing System",
      description: "Intelligent audio segmentation for long videos with parallel processing and real-time UI updates",
      status: "Planned",
      priority: "High",
      benefits: ["No UI freezing", "Parallel processing", "Real-time progress"]
    },
    {
      icon: Clock,
      title: "Smart Time Management",
      description: "10-minute audio segments with automatic timestamp alignment and progressive SRT file building",
      status: "Research Phase",
      priority: "Medium",
      benefits: ["Faster processing", "Live preview", "Memory efficient"]
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Advanced memory management and processing queue optimization for handling large video files",
      status: "Planned",
      priority: "Medium",
      benefits: ["Lower memory usage", "Better stability", "Smoother experience"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Development": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Planned": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Research Phase": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-500/20 text-red-400 border-red-500/30"
      case "Medium": return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Low": return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Future <span className="text-primary">Updates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Exciting new features and improvements coming to Zest Sync Player. 
            Built with performance and user experience in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {upcomingFeatures.map((feature, index) => (
            <Card key={index} className="glass glass-hover p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <div className="flex gap-2">
                        <Badge className={`text-xs ${getStatusColor(feature.status)}`}>
                          {feature.status}
                        </Badge>
                        <Badge className={`text-xs ${getPriorityColor(feature.priority)}`}>
                          {feature.priority} Priority
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Details */}
        <Card className="glass p-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Technical Implementation</h3>
            <p className="text-muted-foreground">Advanced processing architecture for optimal performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-3">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">GPU Acceleration</h4>
              <p className="text-sm text-muted-foreground">
                CUDA-powered processing for 10x performance boost on compatible hardware
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-secondary/10 rounded-full w-fit mx-auto mb-3">
                <Layers className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold mb-2">Parallel Processing</h4>
              <p className="text-sm text-muted-foreground">
                Multi-threaded batch processing with intelligent queue management
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-accent/10 rounded-full w-fit mx-auto mb-3">
                <FileText className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold mb-2">Real-time Updates</h4>
              <p className="text-sm text-muted-foreground">
                Live SRT file building with 5-second refresh intervals during processing
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
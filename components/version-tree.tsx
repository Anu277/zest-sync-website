"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, Zap, Cpu, Tag } from "lucide-react";

type Version = {
  version: string;
  tag: string;
  release_date: string;
  status: string;
  type: string;
  title: string;
  expandable_details: {
    summary: string;
    new_features?: string[];
    improvements?: string[];
    bug_fixes?: string[];
    features?: string[];
  };
};

const versions: Version[] = [
  {
    version: "2.1.0",
    tag: "v2.1.0",
    release_date: "2025-09-24",
    status: "latest",
    type: "major",
    title: "GPU Acceleration & Enhanced UI",
    expandable_details: {
      summary: "Major update introducing GPU acceleration for 5-10x faster subtitle generation with enhanced UI improvements.",
      new_features: [
        "🚀 Zest Sync G - GPU-accelerated version with CUDA support",
        "📱 Responsive UI design with adaptive sizing",
        "🎨 Font color customization (7 colors)",
        "✨ Text stroke toggle for improved readability"
      ],
      improvements: [
        "🔧 Better model path handling for EXE compatibility",
        "💾 Enhanced memory management for translation models",
        "⚡ VRAM optimization for GPU processing"
      ],
      bug_fixes: [
        "🐛 Fixed memory leaks during long processing sessions",
        "🔧 Resolved UI responsiveness issues",
        "💾 Fixed settings persistence across app restarts"
      ]
    }
  },
  {
    version: "2.0.0",
    tag: "v2.0",
    release_date: "2025-09-21",
    status: "stable",
    type: "major",
    title: "Complete Rewrite with Modern UI",
    expandable_details: {
      summary: "Complete application rewrite with PyQt6, introducing AI-powered subtitle generation and modern interface.",
      new_features: [
        "🎯 Dual Accuracy Modes (Fast/Slow)",
        "🎓 Interactive Tutorial system",
        "🤖 AI-powered subtitle generation using faster-whisper",
        "🌍 Multi-language translation support (14 languages)"
      ]
    }
  },
  {
    version: "1.0.0",
    tag: "v1.0.0",
    release_date: "2024-04-14",
    status: "legacy",
    type: "initial",
    title: "Initial Release",
    expandable_details: {
      summary: "First release featuring VLC integration with background subtitle generation using OpenAI Whisper.",
      features: [
        "🎬 VLC media player integration",
        "🔌 ZSLoader extension for VLC",
        "🤖 OpenAI Whisper for speech recognition",
        "⚙️ Background processing system"
      ]
    }
  }
];

export function VersionTree() {
  const [expanded, setExpanded] = useState<string[]>([]);

  const toggle = (version: string) => {
    setExpanded(prev => prev.includes(version) ? prev.filter(v => v !== version) : [...prev, version]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "latest": return "bg-green-500/20 text-green-400";
      case "stable": return "bg-blue-500/20 text-blue-400";
      case "legacy": return "bg-gray-500/20 text-gray-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const getIcon = (version: string) => {
    if (version.startsWith("2.1")) return <Zap className="w-5 h-5" />;
    if (version.startsWith("2.0")) return <Cpu className="w-5 h-5" />;
    return <Tag className="w-5 h-5" />;
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Version <span className="text-primary">History</span></h2>
        
        <div className="relative border-l-2 border-primary/30 ml-6">
          {versions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="mb-10 ml-6"
            >
              {/* Dot */}
              <div className="absolute -left-5 w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground">
                {getIcon(item.version)}
              </div>
              
              {/* Content */}
              <div className="bg-card border rounded-lg p-4 cursor-pointer" onClick={() => toggle(item.version)}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    {expanded.includes(item.version) ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                    <h3 className="text-xl font-bold">{item.version}</h3>
                    <Badge className={getStatusColor(item.status)}>{item.status}</Badge>
                  </div>
                  <time className="text-sm text-muted-foreground">{item.release_date}</time>
                </div>
                
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.expandable_details.summary}</p>
                
                {expanded.includes(item.version) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 pt-4 border-t space-y-3"
                  >
                    {item.expandable_details.new_features && (
                      <div>
                        <h5 className="font-semibold text-green-400 mb-2">New Features</h5>
                        <ul className="space-y-1">
                          {item.expandable_details.new_features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.expandable_details.improvements && (
                      <div>
                        <h5 className="font-semibold text-blue-400 mb-2">Improvements</h5>
                        <ul className="space-y-1">
                          {item.expandable_details.improvements.map((improvement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{improvement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.expandable_details.bug_fixes && (
                      <div>
                        <h5 className="font-semibold text-orange-400 mb-2">Bug Fixes</h5>
                        <ul className="space-y-1">
                          {item.expandable_details.bug_fixes.map((fix, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{fix}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.expandable_details.features && (
                      <div>
                        <h5 className="font-semibold text-purple-400 mb-2">Features</h5>
                        <ul className="space-y-1">
                          {item.expandable_details.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

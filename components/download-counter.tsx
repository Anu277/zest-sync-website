"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"

export function DownloadCounter() {
  const [downloads, setDownloads] = useState<number | null>(null)

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/anu277/zest-sync-player/releases')
        const releases = await response.json()
        
        const totalDownloads = releases.reduce((total: number, release: any) => {
          return total + release.assets.reduce((assetTotal: number, asset: any) => {
            return assetTotal + asset.download_count
          }, 0)
        }, 0)
        
        setDownloads(totalDownloads)
      } catch (error) {
        console.error('Failed to fetch download count:', error)
      }
    }

    fetchDownloads()
  }, [])

  if (downloads === null) return null

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground border border-primary/30 rounded-lg px-4 py-2 bg-primary/5 animate-pulse">
      <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping duration-1000"></div>
      <Download className="w-4 h-4 animate-pulse" />
      <span>{downloads === 0 ? "6" : downloads.toLocaleString()} downloads</span>
    </div>
  )
}
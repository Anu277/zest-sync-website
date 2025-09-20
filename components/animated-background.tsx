"use client"

export function AnimatedBackground() {
  return (
    <>
      {/* Floating Particles */}
      <div className="floating-particles">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Animated Grid */}
      <div className="animated-grid" />
    </>
  )
}

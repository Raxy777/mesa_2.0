"use client"

import LiquidEther from "@/components/animation/liquid-ether"

export default function SiteBackdrop() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none" aria-hidden="true">
      {/* Liquid Ether — molten orange flow field */}
      <LiquidEther
        colors={["#120703", "#3d1604", "#7c2d12", "#b45309", "#f97316", "#fbbf24", "#fde68a"]}
        mouseForce={14}
        cursorSize={120}
        isViscous={false}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={true}
        autoSpeed={0.4}
        autoIntensity={2.0}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.8}
        style={{ touchAction: "pan-y" }}
      />

      {/* Blueprint Grids */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-blueprint-grid-major opacity-15" />

      {/* Vignette to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,hsl(var(--background)/0.6)_100%)]" />
    </div>
  )
}

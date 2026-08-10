import type React from "react"
import { cn } from "@/lib/utils"

interface GradientBgProps {
  children?: React.ReactNode
  className?: string
}

export function LightGradientBg({ children, className }: GradientBgProps) {
  return (
    <div
      className={cn("relative min-h-screen w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#FFF0E6] via-[#F0F7FF] to-[#FFF5F7] overflow-hidden text-slate-900", className)}
    >
      {/* Rich Multi-Colored Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Vibrant Colorful Orbs */}
        <div className="absolute -top-24 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#FF6B35]/30 via-[#FFD166]/35 to-rose-300/30 blur-[120px]" />
        <div className="absolute top-1/4 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-sky-400/30 via-cyan-200/35 to-indigo-300/25 blur-[130px]" />
        <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-emerald-300/30 via-amber-200/35 to-pink-200/30 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-purple-300/20 to-pink-300/25 blur-[120px]" />

        {/* Soft colorful light streaks */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.35) 0%, rgba(56, 189, 248, 0) 100%)',
            mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
            WebkitMask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
            transform: 'skewX(45deg)'
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4) 0%, rgba(255, 209, 102, 0) 100%)',
            mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
            WebkitMask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
            transform: 'skewX(45deg)'
          }}
        />
      </div>

      {/* Subtle Doodle Texture Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-repeat pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: '160px'
        }}
      />

      {/* Subtle, Soft & Pleasant Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(30, 41, 59, 0.5) 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function DarkGradientBg({ children, className }: GradientBgProps) {
  return (
    <div
      className={cn("relative min-h-screen w-full bg-black overflow-hidden", className)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-100"
          style={{
            background: 'radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)',
            mask: 'radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)',
            WebkitMask: 'radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)'
          }}
        >
          {/* Skewed fading blue streaks */}
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)',
              mask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
              WebkitMask: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)',
              transform: 'skewX(45deg)'
            }}
          />
        </div>
      </div>

      <div
        className="absolute inset-0 opacity-5 bg-repeat pointer-events-none"
        style={{
          backgroundImage: 'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: '149.76px'
        }}
      />
      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  )
}

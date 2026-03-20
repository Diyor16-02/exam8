export default function GlassCard({
    children,
    className = "mt-11 h-[895px]",
  }: {
    children: React.ReactNode
    className?: string
  }) {
    return (
      <div
        className={`bg-white/40 backdrop-blur-[20px] rounded-[50px] shadow-[0_20px_80px_rgba(0,0,0,0.15)] ${className}`}>
        {children}
      </div>
    )
  }
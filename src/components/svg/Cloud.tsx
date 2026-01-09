interface CloudProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
}

const sizeMap = {
  sm: { width: 80, height: 50 },
  md: { width: 120, height: 70 },
  lg: { width: 180, height: 100 },
}

export default function Cloud({ className = '', size = 'md', opacity = 0.9 }: CloudProps) {
  const { width, height } = sizeMap[size]

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 70"
      className={`cloud-shadow ${className}`}
      aria-hidden="true"
      style={{ opacity }}
    >
      {/* Main cloud body */}
      <ellipse cx="60" cy="45" rx="50" ry="22" fill="white" />
      
      {/* Top bumps */}
      <circle cx="35" cy="35" r="22" fill="white" />
      <circle cx="60" cy="25" r="25" fill="white" />
      <circle cx="85" cy="35" r="20" fill="white" />
      
      {/* Subtle highlights */}
      <ellipse cx="45" cy="28" rx="8" ry="6" fill="white" opacity="0.8" />
      <ellipse cx="70" cy="22" rx="6" ry="4" fill="#F0F9FF" opacity="0.6" />
      
      {/* Bottom shadow for depth */}
      <ellipse cx="60" cy="52" rx="45" ry="10" fill="#E0F2FE" opacity="0.5" />
    </svg>
  )
}

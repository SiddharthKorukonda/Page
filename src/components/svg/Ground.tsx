interface GroundProps {
  className?: string
}

export default function Ground({ className = '' }: GroundProps) {
  return (
    <div className={`w-full ${className}`} aria-hidden="true">
      {/* Grass top layer */}
      <div className="h-4 bg-mario-green relative overflow-hidden">
        {/* Grass texture */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <pattern id="grass" patternUnits="userSpaceOnUse" width="20" height="16">
            <path d="M0 16 L5 8 L10 16" fill="#2D8B4D" />
            <path d="M10 16 L15 6 L20 16" fill="#1A5C33" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grass)" />
        </svg>
      </div>
      
      {/* Dirt layer */}
      <div className="h-8 bg-ground-dark relative overflow-hidden">
        {/* Dirt texture dots */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <pattern id="dirt" patternUnits="userSpaceOnUse" width="16" height="16">
            <circle cx="4" cy="4" r="2" fill="#8B4513" opacity="0.5" />
            <circle cx="12" cy="10" r="1.5" fill="#654321" opacity="0.4" />
            <circle cx="8" cy="14" r="1" fill="#8B4513" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dirt)" />
        </svg>
      </div>
    </div>
  )
}

interface BrickProps {
  className?: string
  variant?: 'tan' | 'brown' | 'gold'
}

const variantColors = {
  tan: {
    main: '#D2B48C',
    light: '#E6CBA8',
    dark: '#A0826D',
    line: '#8B7355',
  },
  brown: {
    main: '#8B4513',
    light: '#A0522D',
    dark: '#5C2E0D',
    line: '#3D1F0D',
  },
  gold: {
    main: '#FBD000',
    light: '#FFE44D',
    dark: '#C4A000',
    line: '#9A7B00',
  },
}

export default function Brick({ className = '', variant = 'tan' }: BrickProps) {
  const colors = variantColors[variant]

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      {/* Main brick background */}
      <rect width="32" height="32" fill={colors.main} />
      
      {/* Brick pattern - horizontal lines */}
      <line x1="0" y1="8" x2="32" y2="8" stroke={colors.line} strokeWidth="1" />
      <line x1="0" y1="16" x2="32" y2="16" stroke={colors.line} strokeWidth="1" />
      <line x1="0" y1="24" x2="32" y2="24" stroke={colors.line} strokeWidth="1" />
      
      {/* Brick pattern - vertical lines (offset) */}
      <line x1="16" y1="0" x2="16" y2="8" stroke={colors.line} strokeWidth="1" />
      <line x1="8" y1="8" x2="8" y2="16" stroke={colors.line} strokeWidth="1" />
      <line x1="24" y1="8" x2="24" y2="16" stroke={colors.line} strokeWidth="1" />
      <line x1="16" y1="16" x2="16" y2="24" stroke={colors.line} strokeWidth="1" />
      <line x1="8" y1="24" x2="8" y2="32" stroke={colors.line} strokeWidth="1" />
      <line x1="24" y1="24" x2="24" y2="32" stroke={colors.line} strokeWidth="1" />
      
      {/* Top highlight */}
      <rect x="1" y="1" width="30" height="2" fill={colors.light} opacity="0.5" />
      
      {/* Bottom shadow */}
      <rect x="1" y="29" width="30" height="2" fill={colors.dark} opacity="0.5" />
    </svg>
  )
}

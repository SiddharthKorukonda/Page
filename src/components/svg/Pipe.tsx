import { useTheme } from '../../context/ThemeContext'

interface PipeProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'gold' | 'red'
}

const sizeMap = {
  sm: { width: 60, height: 80 },
  md: { width: 80, height: 100 },
  lg: { width: 100, height: 120 },
}

const variantColors = {
  default: {
    main: '#2D8B4D',
    light: '#5AC575',
    dark: '#1A5C33',
    rim: '#43B047',
  },
  gold: {
    main: '#D4A500',
    light: '#FBD000',
    dark: '#9A7800',
    rim: '#E6B800',
  },
  red: {
    main: '#C41E3A',
    light: '#E52521',
    dark: '#8B0000',
    rim: '#DC143C',
  },
}

export default function Pipe({ className = '', size = 'md', variant = 'default' }: PipeProps) {
  const { isRetro } = useTheme()
  const { width, height } = sizeMap[size]
  const colors = variantColors[variant]

  if (!isRetro) {
    return (
      <div
        className={`${className} rounded-lg bg-classic-accent`}
        style={{ width, height: height * 0.3 }}
        aria-hidden="true"
      />
    )
  }

  const rimHeight = height * 0.2
  const bodyHeight = height - rimHeight

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
    >
      {/* Pipe body */}
      <rect
        x={width * 0.15}
        y={rimHeight}
        width={width * 0.7}
        height={bodyHeight}
        fill={colors.main}
      />
      
      {/* Body left highlight */}
      <rect
        x={width * 0.15}
        y={rimHeight}
        width={width * 0.15}
        height={bodyHeight}
        fill={colors.light}
      />
      
      {/* Body right shadow */}
      <rect
        x={width * 0.7}
        y={rimHeight}
        width={width * 0.15}
        height={bodyHeight}
        fill={colors.dark}
      />
      
      {/* Pipe rim (top) */}
      <rect
        x={0}
        y={0}
        width={width}
        height={rimHeight}
        rx={4}
        fill={colors.main}
      />
      
      {/* Rim left highlight */}
      <rect
        x={0}
        y={0}
        width={width * 0.2}
        height={rimHeight}
        rx={4}
        fill={colors.light}
      />
      
      {/* Rim right shadow */}
      <rect
        x={width * 0.8}
        y={0}
        width={width * 0.2}
        height={rimHeight}
        rx={4}
        fill={colors.dark}
      />
      
      {/* Inner pipe opening (dark) */}
      <ellipse
        cx={width / 2}
        cy={rimHeight * 0.4}
        rx={width * 0.25}
        ry={rimHeight * 0.25}
        fill={colors.dark}
        opacity={0.7}
      />
      
      {/* Highlight shine */}
      <rect
        x={width * 0.25}
        y={rimHeight * 0.15}
        width={width * 0.1}
        height={rimHeight * 0.5}
        rx={2}
        fill="white"
        opacity={0.3}
      />
    </svg>
  )
}

import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Pipe from './svg/Pipe'
import { ReactNode } from 'react'

interface PipeTileProps {
  to: string
  label: string
  icon: ReactNode
  variant?: 'default' | 'gold' | 'red'
  delay?: number
}

export default function PipeTile({ to, label, icon, variant = 'default', delay = 0 }: PipeTileProps) {
  const { isRetro } = useTheme()

  if (!isRetro) {
    // Classic mode - clean button style
    return (
      <Link
        to={to}
        className="
          group flex flex-col items-center gap-3 p-6
          bg-white rounded-xl shadow-lg border border-gray-200
          hover:shadow-xl hover:border-classic-accent hover:-translate-y-1
          transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-classic-accent focus-visible:ring-offset-2
        "
        aria-label={`Navigate to ${label}`}
      >
        <div className="p-3 rounded-full bg-classic-accent/10 text-classic-accent group-hover:bg-classic-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <span className="font-display text-sm text-gray-900 group-hover:text-classic-accent transition-colors">
          {label}
        </span>
      </Link>
    )
  }

  // Retro mode - pipe style
  return (
    <Link
      to={to}
      className="
        pipe-button group flex flex-col items-center gap-2
        focus-visible:outline-none
      "
      style={{ animationDelay: `${delay}ms` }}
      aria-label={`Navigate to ${label}`}
    >
      {/* Label above pipe */}
      <span className="
        px-3 py-1.5 rounded-lg
        bg-white/95 shadow-lg
        font-display text-xs sm:text-sm text-mario-brown
        transform group-hover:-translate-y-1 transition-transform duration-300
        border-2 border-mario-brown
      ">
        {label}
      </span>
      
      {/* Icon */}
      <div className="
        p-2 rounded-full bg-mario-yellow
        text-mario-brown shadow-md
        transform group-hover:scale-110 transition-transform duration-300
        animate-bounce-subtle
      " style={{ animationDelay: `${delay + 100}ms` }}>
        {icon}
      </div>
      
      {/* Pipe */}
      <div className="animate-bob" style={{ animationDelay: `${delay}ms` }}>
        <Pipe size="md" variant={variant} />
      </div>
      
      {/* Glow effect on hover */}
      <div className="
        absolute -bottom-2 left-1/2 -translate-x-1/2
        w-16 h-4 rounded-full
        bg-pipe-green/0 group-hover:bg-pipe-green/30
        blur-md transition-all duration-300
      " />
    </Link>
  )
}

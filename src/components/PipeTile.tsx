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
  const { isRetro, isDark } = useTheme()

  if (!isRetro) {
    // Classic mode - clean button style
    return (
      <Link
        to={to}
        className={`
          group flex flex-col items-center gap-3 p-6
          rounded-xl shadow-lg border transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          ${isDark 
            ? 'bg-gray-800 border-gray-700 hover:border-blue-400 focus-visible:ring-blue-400' 
            : 'bg-white border-gray-200 hover:border-classic-accent focus-visible:ring-classic-accent'
          }
        `}
        aria-label={`Navigate to ${label}`}
      >
        <div className={`p-3 rounded-full transition-colors duration-300 ${isDark ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' : 'bg-classic-accent/10 text-classic-accent group-hover:bg-classic-accent group-hover:text-white'}`}>
          {icon}
        </div>
        <span className={`font-display text-sm transition-colors ${isDark ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-classic-accent'}`}>
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

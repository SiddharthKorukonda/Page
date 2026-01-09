import { ReactNode } from 'react'
import { useTheme } from '../context/ThemeContext'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const { isRetro, isDark } = useTheme()

  return (
    <article
      className={`
        rounded-xl overflow-hidden
        ${isRetro 
          ? 'bg-white border-4 border-mario-brown shadow-[4px_4px_0_rgba(139,69,19,0.3)]' 
          : isDark
            ? 'bg-gray-800 border border-gray-700 shadow-lg'
            : 'bg-white border border-gray-200 shadow-lg'
        }
        ${hover 
          ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' 
          : ''
        }
        ${className}
      `}
    >
      {children}
    </article>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  const { isRetro, isDark } = useTheme()

  return (
    <div className={`
      px-6 py-4 border-b
      ${isRetro 
        ? 'bg-mario-yellow/10 border-mario-brown/20' 
        : isDark
          ? 'bg-gray-700/50 border-gray-700'
          : 'bg-gray-50 border-gray-100'
      }
      ${className}
    `}>
      {children}
    </div>
  )
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  )
}

interface CardFooterProps {
  children: ReactNode
  className?: string
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  const { isRetro, isDark } = useTheme()

  return (
    <div className={`
      px-6 py-4 border-t
      ${isRetro 
        ? 'bg-gray-50 border-mario-brown/20' 
        : isDark
          ? 'bg-gray-700/50 border-gray-700'
          : 'bg-gray-50 border-gray-100'
      }
      ${className}
    `}>
      {children}
    </div>
  )
}

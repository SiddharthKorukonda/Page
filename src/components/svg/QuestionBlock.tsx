interface QuestionBlockProps {
  className?: string
  animate?: boolean
}

export default function QuestionBlock({ className = '', animate = true }: QuestionBlockProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={`${className} ${animate ? 'animate-bounce-subtle' : ''}`}
      aria-hidden="true"
    >
      {/* Block background */}
      <rect width="40" height="40" rx="4" fill="#FBD000" />
      
      {/* Inner border */}
      <rect x="2" y="2" width="36" height="36" rx="3" fill="#E6B800" />
      
      {/* Inner fill */}
      <rect x="4" y="4" width="32" height="32" rx="2" fill="#FBD000" />
      
      {/* Question mark */}
      <text
        x="20"
        y="28"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="#8B4513"
      >
        ?
      </text>
      
      {/* Top highlight */}
      <rect x="4" y="4" width="32" height="4" rx="2" fill="white" opacity="0.3" />
      
      {/* Corner rivets */}
      <circle cx="8" cy="8" r="2" fill="#C4A000" />
      <circle cx="32" cy="8" r="2" fill="#C4A000" />
      <circle cx="8" cy="32" r="2" fill="#C4A000" />
      <circle cx="32" cy="32" r="2" fill="#C4A000" />
    </svg>
  )
}

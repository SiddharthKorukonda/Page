interface StarProps {
  className?: string
  size?: number
  color?: string
}

export default function Star({ className = '', size = 24, color = '#FBD000' }: StarProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z"
        fill={color}
        stroke="#C4A000"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Highlight */}
      <path
        d="M12 4L13.5 8.5L12 7.5L10.5 8.5L12 4Z"
        fill="white"
        opacity="0.4"
      />
    </svg>
  )
}

interface DiamondProps {
  className?: string
  size?: number
  color?: string
}

export default function Diamond({ className = '', size = 24, color = '#3B82F6' }: DiamondProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      {/* Faceted diamond (gem shape) */}
      <path
        d="M12 2L22 12L12 22L2 12L12 2Z"
        fill={color}
        stroke="#1D4ED8"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Top facet highlight */}
      <path
        d="M12 4L20 12L12 10L4 12L12 4Z"
        fill="white"
        opacity="0.35"
      />
    </svg>
  )
}

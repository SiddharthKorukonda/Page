import { useTheme } from '../context/ThemeContext'
import { SearchIcon } from './icons'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchInput({ value, onChange, placeholder = 'Search...' }: SearchInputProps) {
  const { isRetro, isDark } = useTheme()

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon
          size={20}
          className={isRetro ? 'text-mario-brown/50' : isDark ? 'text-gray-400' : 'text-gray-400'}
        />
      </div>
      <input
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className={`
          w-full pl-12 pr-4 py-3 rounded-xl
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${isRetro
            ? 'bg-white border-3 border-mario-brown/30 focus:border-mario-green focus:ring-mario-green placeholder:text-mario-brown/40'
            : isDark
              ? 'bg-gray-700 border-2 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-400'
              : 'bg-white border-2 border-gray-200 focus:border-classic-accent focus:ring-classic-accent placeholder:text-gray-400'
          }
        `}
        aria-label={placeholder}
      />
    </div>
  )
}

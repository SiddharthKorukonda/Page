import { useTheme } from '../context/ThemeContext'

interface TagFilterProps {
  tags: string[]
  selectedTag: string | null
  onSelectTag: (tag: string | null) => void
}

export default function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  const { isRetro } = useTheme()

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
      <button
        onClick={() => onSelectTag(null)}
        className={`
          px-4 py-2 rounded-full text-sm font-medium
          transition-all duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
          ${selectedTag === null
            ? isRetro
              ? 'bg-mario-green text-white focus-visible:ring-mario-green'
              : 'bg-classic-accent text-white focus-visible:ring-classic-accent'
            : isRetro
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400'
          }
        `}
        aria-pressed={selectedTag === null}
      >
        All
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          onClick={() => onSelectTag(tag)}
          className={`
            px-4 py-2 rounded-full text-sm font-medium
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            ${selectedTag === tag
              ? isRetro
                ? 'bg-mario-green text-white focus-visible:ring-mario-green'
                : 'bg-classic-accent text-white focus-visible:ring-classic-accent'
              : isRetro
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus-visible:ring-gray-400'
            }
          `}
          aria-pressed={selectedTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}

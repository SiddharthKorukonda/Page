import { useTheme } from '../context/ThemeContext'
import PipeTile from './PipeTile'
import { CodeIcon, BriefcaseIcon, BookIcon, TrophyIcon, UserIcon } from './icons'

const navItems = [
  { to: '/projects', label: 'Projects', icon: <CodeIcon size={24} />, variant: 'default' as const },
  { to: '/experience', label: 'Experience', icon: <BriefcaseIcon size={24} />, variant: 'default' as const },
  { to: '/research', label: 'Research', icon: <BookIcon size={24} />, variant: 'gold' as const },
  { to: '/awards', label: 'Awards', icon: <TrophyIcon size={24} />, variant: 'gold' as const },
  { to: '/about', label: 'About', icon: <UserIcon size={24} />, variant: 'red' as const },
]

export default function PipeMap() {
  const { isRetro } = useTheme()

  return (
    <section
      className={`
        relative py-8 sm:py-12
        ${isRetro ? 'mt-8' : 'mt-4'}
      `}
      aria-label="Site navigation"
    >
      {/* Map container */}
      <div className={`
        relative rounded-2xl p-6 sm:p-8 lg:p-12
        ${isRetro 
          ? 'bg-gradient-to-b from-sky-light/50 to-transparent border-4 border-mario-brown/30' 
          : 'bg-gray-50 border border-gray-200'
        }
      `}>
        {/* Retro decorations */}
        {isRetro && (
          <>
            {/* Ground tiles at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden rounded-b-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-ground-dark to-mario-green" />
              <div className="absolute inset-0 ground-pattern" />
            </div>
            
            {/* Corner question blocks */}
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-mario-yellow rounded-lg border-4 border-mario-orange flex items-center justify-center animate-bounce-subtle">
              <span className="text-mario-brown font-bold text-lg">?</span>
            </div>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-mario-yellow rounded-lg border-4 border-mario-orange flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '500ms' }}>
              <span className="text-mario-brown font-bold text-lg">?</span>
            </div>
          </>
        )}

        {/* Navigation grid */}
        <div className={`
          relative grid gap-6 sm:gap-8
          ${isRetro 
            ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 pb-12' 
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'
          }
        `}>
          {navItems.map((item, index) => (
            <PipeTile
              key={item.to}
              to={item.to}
              label={item.label}
              icon={item.icon}
              variant={item.variant}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

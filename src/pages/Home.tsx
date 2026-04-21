import { useTheme } from '../context/ThemeContext'
import TopNav from '../components/TopNav'
import PipeMap from '../components/PipeMap'
import Cloud from '../components/svg/Cloud'
import Ground from '../components/svg/Ground'
import { siteConfig } from '../data/content'

export default function Home() {
  const { isRetro, isDark } = useTheme()

  return (
    <div className={`min-h-screen ${isRetro ? 'theme-retro' : isDark ? 'bg-gray-900' : 'theme-classic'}`}>
      <TopNav />

      {/* Background elements for retro mode */}
      {isRetro && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Sky gradient is applied via theme-retro class */}
          
          {/* Animated clouds */}
          <div className="absolute top-16 animate-cloud-drift-slow" style={{ left: '-180px' }}>
            <Cloud size="lg" opacity={0.8} />
          </div>
          <div className="absolute top-32 animate-cloud-drift" style={{ left: '-120px', animationDelay: '8s' }}>
            <Cloud size="md" opacity={0.6} />
          </div>
          <div className="absolute top-48 animate-cloud-drift-fast" style={{ left: '-80px', animationDelay: '15s' }}>
            <Cloud size="sm" opacity={0.7} />
          </div>
          <div className="absolute top-24 animate-cloud-drift" style={{ left: '-100px', animationDelay: '20s' }}>
            <Cloud size="md" opacity={0.5} />
          </div>
          
          {/* Pixel grid overlay */}
          <div className="absolute inset-0 bg-pixel-grid opacity-20" />
          
          {/* Ground at bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <Ground />
          </div>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16">
          <div className={`
            inline-block px-6 py-8 sm:px-12 sm:py-12 rounded-2xl
            ${isRetro 
              ? 'bg-white/95 backdrop-blur-sm border-4 border-mario-brown shadow-[8px_8px_0_rgba(139,69,19,0.3)]' 
              : isDark
                ? 'bg-gray-800 shadow-2xl'
                : 'bg-white shadow-2xl'
            }
          `}>
            {/* Welcome badge */}
            {isRetro && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mario-yellow text-mario-brown text-sm font-bold mb-4 animate-bounce-subtle">
                <span>★</span>
                <span>Welcome to my world!</span>
                <span>★</span>
              </div>
            )}

            {/* Name */}
            <h1 className={`
              text-4xl sm:text-5xl lg:text-6xl font-display mb-4
              ${isRetro 
                ? 'text-mario-brown text-shadow-retro' 
                : isDark
                  ? 'text-white'
                  : 'text-gray-900'
              }
            `}>
              {siteConfig.name}
            </h1>

            {/* Role */}
            <p className={`
              text-xl sm:text-2xl font-medium mb-2
              ${isRetro 
                ? 'text-pipe-dark' 
                : isDark
                  ? 'text-blue-400'
                  : 'text-classic-accent'
              }
            `}>
              {siteConfig.role}
            </p>

            {/* Headline (e.g. upcoming role) — same visual style as role above */}
            <p className={`
              text-xl sm:text-2xl font-medium mb-4
              ${isRetro 
                ? 'text-pipe-dark' 
                : isDark
                  ? 'text-blue-400'
                  : 'text-classic-accent'
              }
            `}>
              {siteConfig.headline}
            </p>

            {/* Tagline */}
            <p className={`
              text-lg sm:text-xl max-w-2xl mx-auto
              ${isRetro 
                ? 'text-mario-brown/80' 
                : isDark
                  ? 'text-gray-400'
                  : 'text-gray-600'
              }
            `}>
              {siteConfig.tagline}
            </p>

            {/* Decorative coins for retro mode */}
            {isRetro && (
              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-mario-yellow border-2 border-mario-orange animate-bounce-subtle"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pipe Map Navigation */}
        <PipeMap />

        {/* Hint text */}
        <p className={`
          text-center mt-8 text-sm
          ${isRetro 
            ? 'text-white/80' 
            : isDark
              ? 'text-gray-500'
              : 'text-gray-500'
          }
        `}>
          {isRetro 
            ? '🎮 Click a pipe to explore! Press the ☀️ button to switch to Classic Mode.' 
            : 'Click a section to explore. Press the 🎮 button for Retro Mode!'
          }
        </p>
      </main>

      {/* Footer */}
      <footer className={`
        py-8 text-center text-sm
        ${isRetro ? 'text-white/70 relative z-10' : isDark ? 'text-gray-500' : 'text-gray-500'}
      `}>
        <p>© {new Date().getFullYear()} {siteConfig.name} • Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

import { ReactNode } from 'react'
import TopNav from './TopNav'
import { useTheme } from '../context/ThemeContext'
import Cloud from './svg/Cloud'

interface PageShellProps {
  children: ReactNode
  title: string
  subtitle?: string
}

export default function PageShell({ children, title, subtitle }: PageShellProps) {
  const { isRetro } = useTheme()

  return (
    <div className={`min-h-screen ${isRetro ? 'theme-retro' : 'theme-classic'}`}>
      <TopNav />
      
      {/* Background decorations for retro mode */}
      {isRetro && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          {/* Animated clouds */}
          <div className="absolute top-20 animate-cloud-drift-slow" style={{ left: '-180px' }}>
            <Cloud size="lg" opacity={0.7} />
          </div>
          <div className="absolute top-40 animate-cloud-drift" style={{ left: '-120px', animationDelay: '5s' }}>
            <Cloud size="md" opacity={0.5} />
          </div>
          <div className="absolute top-60 animate-cloud-drift-fast" style={{ left: '-80px', animationDelay: '10s' }}>
            <Cloud size="sm" opacity={0.6} />
          </div>
          
          {/* Pixel grid overlay */}
          <div className="absolute inset-0 bg-pixel-grid opacity-30" />
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className={`page-content rounded-2xl p-6 sm:p-8 lg:p-12 ${isRetro ? 'border-4 border-mario-brown' : ''}`}>
          {/* Page header */}
          <header className="mb-8 sm:mb-12">
            <h1 className={`
              section-title text-3xl sm:text-4xl lg:text-5xl font-display
              ${isRetro ? 'text-mario-brown' : 'text-gray-900'}
            `}>
              {title}
            </h1>
            {subtitle && (
              <p className={`
                mt-3 text-lg sm:text-xl
                ${isRetro ? 'text-mario-brown/70' : 'text-gray-600'}
              `}>
                {subtitle}
              </p>
            )}
          </header>

          {/* Page content */}
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className={`
        py-6 text-center text-sm
        ${isRetro ? 'text-white/70' : 'text-gray-500'}
      `}>
        <p>© {new Date().getFullYear()} • Built with passion</p>
      </footer>
    </div>
  )
}

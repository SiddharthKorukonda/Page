import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { ResumeIcon, LinkedInIcon, GitHubIcon, EmailIcon, GamepadIcon, SunIcon, MoonIcon, HomeIcon } from './icons'
import { siteConfig } from '../data/content'

export default function TopNav() {
  const { theme, toggleTheme, isRetro, isDark, toggleDark } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4
        ${isRetro 
          ? 'bg-gradient-to-r from-mario-blue/90 to-sky-mid/90 backdrop-blur-md border-b-4 border-mario-brown' 
          : isDark
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700'
            : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
        }
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Name and home link */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              to="/"
              className={`
                p-2 rounded-lg transition-all duration-200
                ${isRetro 
                  ? 'hover:bg-white/20 text-white' 
                  : isDark
                    ? 'hover:bg-gray-700 text-gray-300'
                    : 'hover:bg-gray-100 text-gray-700'
                }
              `}
              aria-label="Go to home"
              title="Home"
            >
              <HomeIcon size={20} />
            </Link>
          )}
          <Link to="/" className="flex flex-col gap-0.5">
            <span className={`
              font-display text-lg sm:text-xl font-bold
              ${isRetro ? 'text-white text-shadow-retro' : isDark ? 'text-white' : 'text-gray-900'}
            `}>
              {siteConfig.name}
            </span>
            <span className={`
              text-xs sm:text-sm font-medium
              ${isRetro ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-600'}
            `}>
              {siteConfig.headline}
            </span>
            <span className={`
              text-xs sm:text-sm
              ${isRetro ? 'text-white/80' : isDark ? 'text-gray-400' : 'text-gray-500'}
            `}>
              {siteConfig.role}
            </span>
          </Link>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-mario-yellow text-mario-brown hover:bg-yellow-300' 
                : isDark
                  ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label={`Switch to ${theme === 'retro' ? 'classic' : 'retro'} mode`}
            title={`Switch to ${theme === 'retro' ? 'Classic' : 'Retro'} Mode`}
          >
            {isRetro ? <SunIcon size={18} /> : <GamepadIcon size={18} />}
          </button>

          {/* Dark mode toggle - only in classic mode */}
          {!isRetro && (
            <button
              onClick={toggleDark}
              className={`
                p-2 sm:p-2.5 rounded-lg transition-all duration-200
                ${isDark
                  ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'
                  : 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                }
              `}
              aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
            >
              {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>
          )}

          <div className="w-px h-6 bg-current opacity-20" />

          {/* Social links */}
          <Link
            to="/resume"
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label="View Resume"
            title="Resume"
          >
            <ResumeIcon size={18} />
          </Link>

          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label="LinkedIn Profile (opens in new tab)"
            title="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>

          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label="GitHub Profile (opens in new tab)"
            title="GitHub"
          >
            <GitHubIcon size={18} />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label="Send Email"
            title="Email"
          >
            <EmailIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}

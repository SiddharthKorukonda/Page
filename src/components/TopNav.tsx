import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { ResumeIcon, LinkedInIcon, GitHubIcon, EmailIcon, GamepadIcon, SunIcon, HomeIcon } from './icons'
import { siteConfig } from '../data/content'

export default function TopNav() {
  const { theme, toggleTheme, isRetro } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4
        ${isRetro 
          ? 'bg-gradient-to-r from-mario-blue/90 to-sky-mid/90 backdrop-blur-md border-b-4 border-mario-brown' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
        }
      `}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Name and back link */}
        <div className="flex items-center gap-4">
          {!isHome && (
            <Link
              to="/"
              className={`
                p-2 rounded-lg transition-all duration-200
                ${isRetro 
                  ? 'hover:bg-white/20 text-white' 
                  : 'hover:bg-gray-100 text-gray-700'
                }
              `}
              aria-label="Go to home"
            >
              <HomeIcon size={20} />
            </Link>
          )}
          <Link to="/" className="flex flex-col">
            <span className={`
              font-display text-lg sm:text-xl font-bold
              ${isRetro ? 'text-white text-shadow-retro' : 'text-gray-900'}
            `}>
              {siteConfig.name}
            </span>
            <span className={`
              text-xs sm:text-sm
              ${isRetro ? 'text-white/80' : 'text-gray-500'}
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
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label={`Switch to ${theme === 'retro' ? 'classic' : 'retro'} mode`}
            title={`Switch to ${theme === 'retro' ? 'Classic' : 'Retro'} Mode`}
          >
            {isRetro ? <SunIcon size={18} /> : <GamepadIcon size={18} />}
          </button>

          <div className="w-px h-6 bg-current opacity-20" />

          {/* Social links */}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
            aria-label="Download Resume (opens in new tab)"
            title="Resume"
          >
            <ResumeIcon size={18} />
          </a>

          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              p-2 sm:p-2.5 rounded-lg transition-all duration-200
              ${isRetro 
                ? 'bg-white/20 text-white hover:bg-white/30' 
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

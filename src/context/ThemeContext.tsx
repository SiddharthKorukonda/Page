import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'retro' | 'classic'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isRetro: boolean
  isDark: boolean
  toggleDark: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_KEY = 'portfolio-theme'
const DARK_KEY = 'portfolio-dark'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'classic' || saved === 'retro') {
        return saved
      }
    }
    return 'retro'
  })

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(DARK_KEY)
      return saved === 'true'
    }
    return false
  })

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    localStorage.setItem(DARK_KEY, String(isDark))
    
    // Update document class for global theme styling
    document.documentElement.classList.remove('theme-retro', 'theme-classic', 'dark')
    document.documentElement.classList.add(`theme-${theme}`)
    
    // Only apply dark mode in classic theme
    if (theme === 'classic' && isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [theme, isDark])

  const toggleTheme = () => {
    setTheme(prev => prev === 'retro' ? 'classic' : 'retro')
  }

  const toggleDark = () => {
    setIsDark(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRetro: theme === 'retro', isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

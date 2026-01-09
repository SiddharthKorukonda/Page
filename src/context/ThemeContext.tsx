import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'retro' | 'classic'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  isRetro: boolean
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_KEY = 'portfolio-theme'

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

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    
    // Update document class for global theme styling
    document.documentElement.classList.remove('theme-retro', 'theme-classic')
    document.documentElement.classList.add(`theme-${theme}`)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'retro' ? 'classic' : 'retro')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isRetro: theme === 'retro' }}>
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

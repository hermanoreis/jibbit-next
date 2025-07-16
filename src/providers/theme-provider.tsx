"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "geniex" | "neobrutalism" | "bubblegum" | "vintagepaper" | "preparasp"
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "geniex",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "geniex",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Only run on client-side
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem(storageKey) as Theme
    
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    if (!mounted) return

    // Remove any existing theme classes and add the current one
    document.documentElement.classList.remove("theme-geniex", "theme-neobrutalism", "theme-bubblegum", "theme-vintagepaper", "theme-preparasp")
    document.documentElement.classList.add(`theme-${theme}`)

    // Save the theme preference to localStorage
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey, mounted])

  // Avoid hydration mismatch by not rendering anything theme-specific on server
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (mounted) {
        setTheme(theme)
      }
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
} 
"use client"

import { useTheme } from "@/providers/theme-provider"
import { useTheme as useNextTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { PaletteIcon, SunIcon, MoonIcon } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { resolvedTheme, setTheme: setColorMode } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on client-side info
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder to avoid layout shift
    return (
      <Button variant="ghost" size="icon">
        <PaletteIcon className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <PaletteIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>UI Theme</DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={() => setTheme("geniex")}
          className={theme === "geniex" ? "bg-accent text-accent-foreground" : ""}
        >
          GenieX
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("neobrutalism")}
          className={theme === "neobrutalism" ? "bg-accent text-accent-foreground" : ""}
        >
          NeoBrutalism
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("bubblegum")}
          className={theme === "bubblegum" ? "bg-accent text-accent-foreground" : ""}
        >
          Bubblegum
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("vintagepaper")}
          className={theme === "vintagepaper" ? "bg-accent text-accent-foreground" : ""}
        >
          Vintage Paper
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("preparasp")}
          className={theme === "preparasp" ? "bg-accent text-accent-foreground" : ""}
        >
          Prepara SP
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuLabel>Color Mode</DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={() => setColorMode("light")}
          className={resolvedTheme === "light" ? "bg-accent text-accent-foreground" : ""}
        >
          <SunIcon className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setColorMode("dark")}
          className={resolvedTheme === "dark" ? "bg-accent text-accent-foreground" : ""}
        >
          <MoonIcon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorMode("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProvider } from "@/providers/theme-provider"
import { WhitelabelProvider } from "@/providers/whitelabel-provider"

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
      disableTransitionOnChange
                storageKey="geniex-theme"
    >
              <ThemeProvider defaultTheme="geniex" storageKey="ui-theme">
        <WhitelabelProvider>
          {children}
        </WhitelabelProvider>
      </ThemeProvider>
    </NextThemesProvider>
  )
} 
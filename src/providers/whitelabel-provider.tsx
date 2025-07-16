"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useTheme } from "./theme-provider"

type WhitelabelInfo = {
  name: string
  description: string
}

const whitelabelConfig: Record<string, WhitelabelInfo> = {
  geniex: {
    name: "GenieX",
    description: "Seu companheiro de estudo",
  },
  preparasp: {
    name: "Prepara SP",
    description: "Sua plataforma de estudos",
  },
}

type WhitelabelProviderState = {
  info: WhitelabelInfo
}

const initialState: WhitelabelProviderState = {
      info: whitelabelConfig.geniex,
}

const WhitelabelProviderContext = createContext<WhitelabelProviderState>(initialState)

export function WhitelabelProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()
  const [info, setInfo] = useState<WhitelabelInfo>(whitelabelConfig[theme])

  useEffect(() => {
    setInfo(whitelabelConfig[theme] || whitelabelConfig.geniex)
  }, [theme])

  return (
    <WhitelabelProviderContext.Provider value={{ info }}>
      {children}
    </WhitelabelProviderContext.Provider>
  )
}

export const useWhitelabel = () => {
  const context = useContext(WhitelabelProviderContext)

  if (context === undefined) {
    throw new Error("useWhitelabel must be used within a WhitelabelProvider")
  }

  return context
} 
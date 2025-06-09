"use client"

import { useEffect } from "react"
import { useWhitelabel } from "@/providers/whitelabel-provider"

export function MetadataUpdater() {
  const { info } = useWhitelabel()
  
  useEffect(() => {
    document.title = `${info.name} | ${info.description}`
  }, [info])

  return null
} 
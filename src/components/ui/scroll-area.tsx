"use client"

import * as React from "react"

interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`overflow-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  )
)

ScrollArea.displayName = "ScrollArea"

export { ScrollArea } 
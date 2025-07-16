import * as React from "react"
import { cn } from "@/lib/utils"

// Basic form context
const FormContext = React.createContext<Record<string, unknown>>({})

// Form component
export function Form({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <FormContext.Provider value={{}}>
      <form {...props}>
        {children}
      </form>
    </FormContext.Provider>
  )
}

// FormField component
export function FormField({ children, ...props }: { children: React.ReactNode }) {
  return <div {...props}>{children}</div>
}

// FormItem component
export function FormItem({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props} />
  )
}

// FormLabel component
export function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
}

// FormControl component
export function FormControl({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

// FormMessage component
export function FormMessage({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  )
} 
import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-[8px] border border-[#E2D4C0] bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:border-[#C05A35] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C05A35]/30 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }

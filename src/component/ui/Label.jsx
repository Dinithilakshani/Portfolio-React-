import * as React from "react"
import { cn } from "@/lib/util.js" // Optional helper for merging classes

const Label = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={cn(
                "text-sm font-medium text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                className
            )}
            {...props}
        />
    )
})

Label.displayName = "Label"

export { Label }

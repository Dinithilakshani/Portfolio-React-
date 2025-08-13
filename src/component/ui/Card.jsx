import * as React from "react"

// Main Card wrapper
const Card = React.forwardRef(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`rounded-xl border bg-white text-gray-900 shadow-sm ${className}`}
        {...props}
    />
))
Card.displayName = "Card"

// Card Header
const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`flex flex-col space-y-1.5 p-6 ${className}`}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

// Card Title
const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
    <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

// Card Description
const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => (
    <p
        ref={ref}
        className={`text-sm text-gray-500 ${className}`}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

// Card Content
const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
    <div
        ref={ref}
        className={`p-6 pt-0 ${className}`}
        {...props}
    />
))
CardContent.displayName = "CardContent"

export { Card, CardHeader, CardTitle, CardDescription, CardContent }

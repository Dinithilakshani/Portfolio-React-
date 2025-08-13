// src/components/ui/input.jsx
import React from "react";

export const Input = React.forwardRef(({ className = "", ...props }, ref) => {
    return (
        <input
            ref={ref}
            className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
            {...props}
        />
    );
});

Input.displayName = "Input";

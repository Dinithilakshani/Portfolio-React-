import React from 'react';

export function Button({ children, onClick, className }) {
    return (
        <button
            onClick={onClick}
            className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition ${className}`}
        >
            {children}
        </button>
    );
}

import React from 'react';

export function Badge({ text }) {
    return (
        <span className="inline-block bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
      {text}
    </span>
    );
}

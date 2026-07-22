import React from 'react';

// Apple Minimalist Blue Curved Underline
export const SketchUnderline = ({ className = "w-48 text-sky-500 mt-1" }) => {
    return (
        <svg className={`h-3 ${className}`} viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M 4 8 C 50 2, 120 12, 196 5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
};

// Apple Curved Pill Highlight around badges/text
export const SketchCircle = ({ children, className = "" }) => {
    return (
        <div className={`relative inline-block ${className}`}>
            {children}
            <svg className="absolute -inset-1.5 w-[calc(100%+12px)] h-[calc(100%+12px)] pointer-events-none text-sky-400/50" viewBox="0 0 100 40" preserveAspectRatio="none">
                <rect
                    x="2"
                    y="2"
                    width="96"
                    height="36"
                    rx="18"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
};

// Apple Card Border Accent
export const SketchCardBorder = ({ children, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            {children}
        </div>
    );
};

// Apple Sleek Blue Progress Bar — instant render, no animation delay
export const PencilProgressBar = ({ level = '85%' }) => {
    return (
        <div className="h-2.5 bg-slate-100/80 rounded-full overflow-hidden border border-sky-100 relative p-0.5 shadow-inner">
            <div
                style={{ width: level }}
                className="h-full rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 shadow-sm shadow-sky-500/30 transition-all duration-500"
            />
        </div>
    );
};

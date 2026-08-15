import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const SketchAvatar = ({ imageSrc = "/aditya.jpeg", alt = "Aditya Chaudhary" }) => {
    return (
        <div className="relative group flex flex-col items-center select-none">
            {/* Apple Minimalist Avatar Frame */}
            <div className="relative">
                {/* Glowing Ice Blue Ambient Ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500 animate-pulse" />

                {/* Avatar Container */}
                <div className="w-36 h-36 md:w-44 md:h-44 p-1.5 bg-white/90 backdrop-blur-xl rounded-full border-2 border-white shadow-xl shadow-sky-500/15 relative overflow-hidden transition-all duration-500 group-hover:scale-[1.02]">
                    <div className="w-full h-full relative overflow-hidden rounded-full bg-slate-100">
                        <img
                            src={imageSrc}
                            alt={alt}
                            className="w-full h-full object-cover transition-all duration-500 filter contrast-105 brightness-105 saturate-110 scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* Apple Status Caption */}
            <div className="mt-6 flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                <CheckCircle2 size={13} className="text-sky-500" />
                <span>Available for Full Stack Engineering Roles</span>
            </div>
        </div>
    );
};

export default SketchAvatar;

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        // Subtle paper grain dots
        const numDots = Math.min(Math.floor((width * height) / 25000), 40);
        const dots = [];
        for (let i = 0; i < numDots; i++) {
            dots.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.25 + 0.1,
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            for (const d of dots) {
                d.x += d.vx;
                d.y += d.vy;

                if (d.x < 0 || d.x > width) d.vx *= -1;
                if (d.y < 0 || d.y > height) d.vy *= -1;

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 168, 83, ${d.alpha})`;
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Subtle Canvas Dot Grain */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

            {/* Paper Grain Overlay */}
            <div className="absolute inset-0 paper-grain opacity-50" />

            {/* Sketchbook Grid Overlay */}
            <div className="absolute inset-0 tech-grid-bg opacity-15" />

            {/* Warm Ambient Glows */}
            <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-800/12 to-yellow-700/6 blur-[120px]" />
            <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-amber-700/8 to-orange-900/4 blur-[140px]" />
        </div>
    );
};

export default AnimatedBackground;

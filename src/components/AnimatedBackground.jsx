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

        // Particle configuration
        const numParticles = Math.min(Math.floor((width * height) / 15000), 75);
        const particles = [];
        const mouse = { x: null, y: null, radius: 150 };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Create particles
        const colors = [
            'rgba(99, 102, 241, ', // Indigo
            'rgba(6, 182, 212, ',  // Cyan
            'rgba(16, 185, 129, ', // Emerald
        ];

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                size: Math.random() * 2 + 1,
                colorPrefix: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.5 + 0.2,
            });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            // Update & draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                p.x += p.vx;
                p.y += p.vy;

                // Bounce off edges
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction attraction/push
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const force = (mouse.radius - dist) / mouse.radius;
                        p.x -= (dx / dist) * force * 1.5;
                        p.y -= (dy / dist) * force * 1.5;
                    }
                }

                // Draw point
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.colorPrefix + p.alpha + ')';
                ctx.shadowBlur = 8;
                ctx.shadowColor = p.colorPrefix + '0.8)';
                ctx.fill();

                // Draw connecting constellation lines
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        const lineAlpha = (1 - dist / 130) * 0.25;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(99, 102, 241, ${lineAlpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.shadowBlur = 0;
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* HTML5 Canvas Particle Constellation */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

            {/* Glowing Ambient Mesh Orbs */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-600/20 to-cyan-500/10 blur-[130px] animate-pulse" />
            <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-cyan-600/15 to-purple-600/10 blur-[150px]" />
            <div className="absolute -bottom-40 left-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-indigo-600/15 to-emerald-500/10 blur-[140px]" />

            {/* Subtle Tech Grid overlay */}
            <div className="absolute inset-0 tech-grid-bg opacity-20" />
        </div>
    );
};

export default AnimatedBackground;

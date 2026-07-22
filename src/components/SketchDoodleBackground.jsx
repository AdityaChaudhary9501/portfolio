import React, { useEffect, useRef } from 'react';

const programmingSymbols = [
    '{ }', '</>', 'def main():', 'SELECT * FROM', '010101', 'git commit',
    'async / await', 'db.connect()', 'lambda x: x*2', 'npm run build',
    'docker run', 'import torch', 'Math.sqrt()', '[...spread]', '=== true',
    'pip install', 'const data =', 'return res.json()', 'spark.read.parquet()',
    'if (err) throw', 'git push origin', 'API.get()', 'key={id}', '=>'
];

const SketchDoodleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse position tracking for interactive push physics
        const mouse = { x: -1000, y: -1000, radius: 140 };
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particle class for floating programming doodles
        class DoodleParticle {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                this.x = Math.random() * canvas.width;
                this.y = initial ? Math.random() * canvas.height : canvas.height + 30;
                this.symbol = programmingSymbols[Math.floor(Math.random() * programmingSymbols.length)];
                this.fontSize = Math.floor(Math.random() * 8) + 14; // 14px to 22px
                this.speedY = Math.random() * 0.4 + 0.2; // Slow upward drift
                this.speedX = (Math.random() - 0.5) * 0.2;
                this.swayAngle = Math.random() * Math.PI * 2;
                this.swaySpeed = Math.random() * 0.02 + 0.005;
                this.opacity = Math.random() * 0.2 + 0.12; // Subtle opacity
                this.color = Math.random() > 0.4 ? '#D4A853' : (Math.random() > 0.5 ? '#7EB3CC' : '#E8E0CC');
            }

            update() {
                this.swayAngle += this.swaySpeed;
                this.y -= this.speedY;
                this.x += this.speedX + Math.sin(this.swayAngle) * 0.3;

                // Mouse interaction - push particles away gently
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += (dx / dist) * force * 2.5;
                    this.y += (dy / dist) * force * 2.5;
                }

                // Reset if moved past top of screen
                if (this.y < -40 || this.x < -100 || this.x > canvas.width + 100) {
                    this.reset(false);
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                ctx.font = `${this.fontSize}px "JetBrains Mono", monospace`;
                ctx.fillText(this.symbol, this.x, this.y);
                ctx.restore();
            }
        }

        // Spawn 45 floating programming doodles
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
        const particles = Array.from({ length: particleCount }, () => new DoodleParticle());

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-80"
        />
    );
};

export default SketchDoodleBackground;

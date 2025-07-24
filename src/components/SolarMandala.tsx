import React, { useEffect, useRef } from 'react';

interface SolarMandalaProps {
  phase: string;
}

export const SolarMandala: React.FC<SolarMandalaProps> = ({ phase }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 120;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Base circle
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
      gradient.addColorStop(0, getPhaseColor(phase, 0.8));
      gradient.addColorStop(0.5, getPhaseColor(phase, 0.4));
      gradient.addColorStop(1, getPhaseColor(phase, 0.1));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
      ctx.fill();

      // Rotating rays
      const time = Date.now() * 0.001;
      const rayCount = 12;
      
      for (let i = 0; i < rayCount; i++) {
        const angle = (i / rayCount) * 2 * Math.PI + time * 0.5;
        const x1 = centerX + Math.cos(angle) * (radius - 20);
        const y1 = centerY + Math.sin(angle) * (radius - 20);
        const x2 = centerX + Math.cos(angle) * (radius + 20);
        const y2 = centerY + Math.sin(angle) * (radius + 20);

        ctx.strokeStyle = getPhaseColor(phase, 0.6);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Inner mandala patterns
      drawMandalaPattern(ctx, centerX, centerY, radius * 0.6, time);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [phase]);

  const getPhaseColor = (phase: string, alpha: number) => {
    switch (phase) {
      case 'Dawn':
        return `rgba(255, 165, 0, ${alpha})`;
      case 'Zenith':
        return `rgba(255, 215, 0, ${alpha})`;
      case 'Twilight':
        return `rgba(255, 140, 0, ${alpha})`;
      default:
        return `rgba(139, 69, 19, ${alpha})`;
    }
  };

  const drawMandalaPattern = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, time: number) => {
    const petals = 8;
    for (let i = 0; i < petals; i++) {
      const angle = (i / petals) * 2 * Math.PI + time * 0.2;
      const x = centerX + Math.cos(angle) * radius * 0.5;
      const y = centerY + Math.sin(angle) * radius * 0.5;

      ctx.strokeStyle = getPhaseColor(phase, 0.8);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, 2 * Math.PI);
      ctx.stroke();
    }
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="drop-shadow-2xl"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-serif font-bold text-amber-800 mb-2">
            ॐ
          </div>
          <div className="text-sm font-medium text-amber-700">
            {phase}
          </div>
        </div>
      </div>
    </div>
  );
};
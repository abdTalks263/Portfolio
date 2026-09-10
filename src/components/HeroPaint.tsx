import React, { useEffect, useRef } from 'react';

interface HeroPaintProps {
  className?: string;
}

const HeroPaint: React.FC<HeroPaintProps> = ({ className = "hero-paint" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext('2d');
    if (!canvas || !host || !context) return;

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(pointer: fine)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let lastTime = 0;
    let previous: { x: number; y: number } | null = null;
    let strokes: { x: number; y: number; age: number; hue: number; size: number }[] = [];
    let visible = true;

    const clear = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      strokes = [];
      previous = null;
      context.clearRect(0, 0, width, height);
    };
    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const draw = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = 'screen';
      strokes = strokes.filter(stroke => stroke.age < 3600);
      for (const stroke of strokes) {
        stroke.age += delta;
        const life = Math.max(0, 1 - stroke.age / 3600);
        const radius = stroke.size * (1 + (1 - life) * .65);
        const paint = context.createRadialGradient(stroke.x, stroke.y, 0, stroke.x, stroke.y, radius);
        paint.addColorStop(0, `hsla(${stroke.hue}, 100%, 72%, ${life * 0.95})`);
        paint.addColorStop(0.35, `hsla(${stroke.hue - 15}, 98%, 58%, ${life * 0.65})`);
        paint.addColorStop(0.7, `hsla(${stroke.hue - 30}, 95%, 45%, ${life * 0.25})`);
        paint.addColorStop(1, `hsla(${stroke.hue}, 90%, 35%, 0)`);
        context.fillStyle = paint;
        context.fillRect(stroke.x - radius, stroke.y - radius, radius * 2, radius * 2);
      }
      frame = strokes.length ? requestAnimationFrame(draw) : 0;
    };
    const move = (event: PointerEvent) => {
      if (!visible || motion.matches || !pointer.matches || event.pointerType === 'touch') return;
      const rect = host.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const start = previous || { x, y };
      const distance = Math.hypot(x - start.x, y - start.y);
      const steps = Math.min(18, Math.max(1, Math.ceil(distance / 12)));
      const hue = 16 + 28 * Math.sin(performance.now() / 1500);
      for (let step = 1; step <= steps; step++) {
        strokes.push({
          x: start.x + (x - start.x) * step / steps,
          y: start.y + (y - start.y) * step / steps,
          age: 0,
          hue,
          size: Math.min(180, Math.max(80, width * .18))
        });
      }
      strokes = strokes.slice(-150);
      previous = { x, y };
      if (!frame) {
        lastTime = performance.now();
        frame = requestAnimationFrame(draw);
      }
    };
    const leave = () => { previous = null; };
    const visibility = () => { if (document.hidden) clear(); };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) clear();
    });
    resize();
    observer.observe(host);
    intersection.observe(host);
    host.addEventListener('pointermove', move, { passive: true });
    host.addEventListener('pointerleave', leave);
    motion.addEventListener('change', clear);
    pointer.addEventListener('change', clear);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      clear();
      observer.disconnect();
      intersection.disconnect();
      host.removeEventListener('pointermove', move);
      host.removeEventListener('pointerleave', leave);
      motion.removeEventListener('change', clear);
      pointer.removeEventListener('change', clear);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
export default HeroPaint;

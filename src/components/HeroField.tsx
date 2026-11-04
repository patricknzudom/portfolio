"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

/**
 * Champ de nœuds et de traces en arrière-plan de l'accueil — pas une démo de particules
 * générique : la distance d'accroche et le surlignage suivent le pointeur comme un oscilloscope
 * suit un signal. Se met en pause une fois défilé hors écran, et à l'arrêt complet si le système
 * demande moins de mouvement.
 */
export function HeroField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let raf = 0;

    // Les canvas ne résolvent pas var(--…) ni color-mix() : on lit les couleurs calculées en JS,
    // et on les relit si le thème (classe .dark) change.
    function hexToRgb(hex: string) {
      const m = hex.trim().replace("#", "");
      const n = parseInt(m.length === 3 ? m.split("").map((c) => c + c).join("") : m, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    }
    let lineRgb = { r: 201, g: 206, b: 211 };
    let copperRgb = { r: 173, g: 106, b: 48 };
    function readPalette() {
      const styles = getComputedStyle(document.documentElement);
      const lineHex = styles.getPropertyValue("--color-line");
      const copperHex = styles.getPropertyValue("--color-copper");
      if (lineHex) lineRgb = hexToRgb(lineHex);
      if (copperHex) copperRgb = hexToRgb(copperHex);
    }
    readPalette();
    const themeObserver = new MutationObserver(readPalette);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(14, Math.min(34, Math.round((width * height) / 26000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
      }));
    }

    const linkDist = 150;
    const pointerDist = 220;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > linkDist) continue;

          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const pDist = Math.hypot(midX - pointer.current.x, midY - pointer.current.y);
          const near = Math.max(0, 1 - pDist / pointerDist);

          const base = 1 - dist / linkDist;
          const cr = Math.round(lerp(lineRgb.r, copperRgb.r, near));
          const cg = Math.round(lerp(lineRgb.g, copperRgb.g, near));
          const cb = Math.round(lerp(lineRgb.b, copperRgb.b, near));
          const alpha = Math.min(1, base * 0.55 + near * 0.4);
          ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
          ctx.lineWidth = near > 0.08 ? 1.1 : 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const pDist = Math.hypot(n.x - pointer.current.x, n.y - pointer.current.y);
        const near = Math.max(0, 1 - pDist / pointerDist);
        const c = near > 0.1 ? copperRgb : lineRgb;
        ctx.fillStyle = `rgb(${c.r}, ${c.g}, ${c.b})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, near > 0.1 ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    function start() {
      if (raf) return;
      raf = requestAnimationFrame(frame);
    }
    function stop() {
      cancelAnimationFrame(raf);
      raf = 0;
    }

    resize();
    frame();
    if (reduced) stop();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduced) start();
        else stop();
      },
      { threshold: 0.05 },
    );
    io.observe(canvas);

    const onResize = () => resize();
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onPointerLeave = () => {
      pointer.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      stop();
      io.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}

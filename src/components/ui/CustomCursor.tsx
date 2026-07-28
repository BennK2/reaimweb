'use client';

import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if the user is on a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    // Hide default cursor globally
    document.body.style.cursor = 'none';
    
    // Style links to none to override defaults
    const addStyle = document.createElement('style');
    addStyle.innerHTML = `
      * { cursor: none !important; }
    `;
    document.head.appendChild(addStyle);

    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Move dot instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const render = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.15;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.15;
      
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = 'auto';
      if (document.head.contains(addStyle)) {
        document.head.removeChild(addStyle);
      }
    };
  }, []);

  return (
    <>
      <div ref={outlineRef} className={styles.cursorOutline} />
      <div ref={dotRef} className={styles.cursorDot} />
    </>
  );
}


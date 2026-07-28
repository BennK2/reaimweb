'use client';
import { useEffect, useState } from 'react';
import { useInView } from '@/hooks/useInView';
import styles from './KPICard.module.css';

export default function KPICard({ 
  title, 
  value, 
  suffix = '', 
  icon: Icon,
  delay = 0 
}: { 
  title: string, 
  value: number, 
  suffix?: string, 
  icon?: any,
  delay?: number 
}) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        // Easing out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
    }
  }, [isInView, value, delay]);

  return (
    <div 
      ref={ref} 
      className={`glass-panel ${styles.kpiCard} scale-reveal ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.iconWrapper}>
        {Icon && <Icon size={28} />}
      </div>
      <div className={styles.content}>
        <div className={styles.value}>
          {count}{suffix}
        </div>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}


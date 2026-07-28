'use client';
import { useInView } from '@/hooks/useInView';
import styles from './Timeline.module.css';

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.timelineContainer}>
      <div className={styles.line}></div>
      {children}
    </div>
  );
}

export function TimelineItem({ 
  time, 
  title, 
  description, 
  speaker, 
  location,
  type = 'session',
  icon: Icon,
  delay = 0
}: any) {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref} 
      className={`${styles.item} reveal ${isInView ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={`${styles.dot} ${styles['dot-' + type]}`}>
        {Icon && <Icon size={16} />}
      </div>
      
      <div className={styles.timeBox}>
        <span className={styles.time}>{time}</span>
      </div>
      
      <div className={`glass-panel ${styles.content}`}>
        <div className={styles.header}>
          {type !== 'session' && (
            <span className={`${styles.badge} ${styles['badge-' + type]}`}>{type}</span>
          )}
          <h3>{title}</h3>
        </div>
        
        {description && <p className={styles.description}>{description}</p>}
        
        {(speaker || location) && (
          <div className={styles.meta}>
            {speaker && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Speaker</span>
                <span className={styles.metaValue}>{speaker}</span>
              </div>
            )}
            {location && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Location</span>
                <span className={styles.metaValue}>{location}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}


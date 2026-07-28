import { getNewsBySlug, newsArticles } from '@/data/news';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import styles from '../page.module.css';

export function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);
  if (!article) return { title: 'Not Found' };
  
  return {
    title: `${article.title} | News | REAIM 2027`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getNewsBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <article className={styles.articlePage}>
      <div className={styles.heroImageWrapper}>
        <Image 
          src={article.image} 
          alt={article.title}
          fill
          sizes="100vw"
          style={{objectFit: 'cover'}}
          priority
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={`container ${styles.articleContainer}`}>
        <Link href="/news" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to News
        </Link>
        
        <header className={styles.articleHeader}>
          <div className={styles.newsDate}><Calendar size={16} /> {article.date}</div>
          <h1 className={styles.articleTitle}>{article.title}</h1>
        </header>

        <div className={styles.articleContent}>
          {article.content.split('\n').map((paragraph, idx) => {
            if (!paragraph.trim()) return null;
            if (paragraph.trim().startsWith('-')) {
              return <li key={idx} style={{marginLeft: '1.5rem', marginBottom: '0.5rem'}}>{paragraph.trim().substring(1).trim()}</li>;
            }
            if (paragraph.trim().endsWith(':')) {
              return <h3 key={idx} style={{marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)'}}>{paragraph}</h3>;
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>
      </div>
    </article>
  );
}

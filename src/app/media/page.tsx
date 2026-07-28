'use client';
import { newsArticles } from '@/data/news';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Video, FileText, Camera, ShieldAlert } from 'lucide-react';
import styles from './page.module.css';

export default function MediaCenter() {
  return (
    <div className={styles.newsPage}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Media Center</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>
            Press accreditation, official releases, and digital assets
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          <div className="grid-2" style={{marginBottom: '5rem'}}>
            <div className="glass-panel hover-lift" style={{padding: '3rem', borderLeft: '4px solid var(--color-accent-gold)'}}>
              <h2 className="text-primary" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <ShieldAlert className="text-accent" /> Media Accreditation
              </h2>
              <p className="text-muted" style={{marginBottom: '1.5rem', lineHeight: '1.8'}}>
                Accreditation for REAIM 2027 is now open for local and international journalists, photographers, and broadcast media. All media personnel must be accredited to access the Bomas of Kenya summit venue.
              </p>
              <ul className="text-muted" style={{paddingLeft: '1.5rem', marginBottom: '2rem', lineHeight: '1.8'}}>
                <li>Valid national press card or assignment letter required.</li>
                <li>Background security checks are mandatory for all applicants.</li>
                <li>Applications close 14 days prior to the summit.</li>
              </ul>
              <a href="mailto:media@reaim2027.mod.go.ke" className="btn btn-primary">Apply for Accreditation</a>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              <div className="glass-panel" style={{padding: '2rem', flex: 1}}>
                <h3 className="text-primary" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <Video className="text-kenya-green" /> Broadcast & Facilities
                </h3>
                <p className="text-muted" style={{margin: 0, fontSize: '0.95rem'}}>
                  A fully equipped International Broadcasting Center (IBC) will be available at the Bomas of Kenya, providing high-speed internet, workstation desks, and live feeds of all plenary sessions.
                </p>
              </div>
              <div className="glass-panel" style={{padding: '2rem', flex: 1}}>
                <h3 className="text-primary" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                  <Camera className="text-kenya-green" /> Digital Assets
                </h3>
                <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.95rem'}}>
                  Access the official REAIM 2027 media kit, including high-resolution logos, venue photography, and b-roll footage.
                </p>
                <Link href="/resources" className="text-accent" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500}}>
                  <FileText size={16} /> Go to Resources <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="text-primary">Press Releases & News</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>The latest developments on the road to REAIM 2027.</p>
          </div>

          <div className={styles.newsGrid}>
            {newsArticles.map((article, index) => (
              <div key={article.slug} className={styles.newsCard}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{objectFit: 'cover'}} 
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.newsDate}><Calendar size={14} /> {article.date}</div>
                  <h3 className={styles.newsTitle}>{article.title}</h3>
                  <p className={styles.newsExcerpt}>{article.excerpt}</p>
                  <Link href={`/media/${article.slug}`} className={styles.newsLink}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

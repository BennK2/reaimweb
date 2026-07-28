'use client';
import { useInView } from '@/hooks/useInView';
import KPICard from '@/components/ui/KPICard';
import { Globe, Users, Shield, Cpu, ArrowRight, Calendar, MapPin, Mic, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { newsArticles } from '@/data/news';
import styles from './page.module.css';

export default function Home() {
  const { ref: heroRef, isInView: heroInView } = useInView();
  const { ref: trackRef, isInView: trackInView } = useInView({ threshold: 0.1 });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.2 });
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.2 });
  const { ref: welcomeRef, isInView: welcomeInView } = useInView({ threshold: 0.2 });
  const { ref: themesRef, isInView: themesInView } = useInView({ threshold: 0.1 });
  const { ref: newsRef, isInView: newsInView } = useInView({ threshold: 0.1 });

  return (
    <main>
      {/* 1. Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <div className={`reveal ${heroInView ? 'is-visible' : ''}`}>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
              <div className="badge">
                First African Nation to Host
              </div>
              <div className="badge" style={{background: 'var(--color-primary)', color: '#fff', borderColor: 'var(--color-primary)'}}>
                Summit Upcoming
              </div>
            </div>
            <h1>RE<span className="text-accent">AI</span>M <span className="text-accent">2027</span></h1>
            <p className={styles.subtitle}>
              Responsible AI in the Military Domain Summit<br/>
              Nairobi, Republic of Kenya • 14–15 April 2027<br/>
              <span style={{fontSize: '1rem', color: 'var(--color-primary)', marginTop: '0.5rem', display: 'block', fontWeight: 600}}>
                Hosted by the Ministry of Defence, Republic of Kenya
              </span>
            </p>
            <div style={{display: 'flex', gap: '1rem'}}>
              <Link href="/attend" className="btn btn-primary">
                Register Delegation <ArrowRight size={18} />
              </Link>
              <Link href="/programme" className="btn btn-outline">
                View Programme
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className="container">
          <div className="grid-4">
            <KPICard title="Participating Nations" value={90} suffix="+" icon={Globe} delay={0.1} />
            <KPICard title="Global Delegates" value={2000} suffix="+" icon={Users} delay={0.2} />
            <KPICard title="Endorsing States" value={60} suffix="+" icon={Shield} delay={0.3} />
            <KPICard title="Previous Summits" value={4} icon={Cpu} delay={0.4} />
          </div>
        </div>
      </section>

      {/* 3. Event Details (Two-Track) */}
      <section className={styles.trackSection} ref={trackRef}>
        <div className="container">
          <div className="grid-2">
            <div className={`reveal ${trackInView ? 'is-visible' : ''}`}>
              <div className={styles.trackCard}>
                <div className={styles.trackHeader}>
                  <h3 className="text-primary" style={{margin: 0}}>Day 1: Plenary Sessions</h3>
                  <div className="badge" style={{margin: 0}}>14 April 2027</div>
                </div>
                <p className="text-muted" style={{marginBottom: '1.5rem', minHeight: '80px'}}>
                  A comprehensive overview of current military AI capabilities, near-term projections, and debates on the effectiveness of current international frameworks. Features tech innovators, civil society, and academia.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-graphite)'}}>
                  <MapPin size={18} className="text-accent" />
                  <strong>Venue:</strong> Bomas of Kenya, Nairobi
                </div>
                <Link href="/programme" className="btn btn-outline" style={{width: '100%', justifyContent: 'center'}}>
                  View Plenary Schedule
                </Link>
              </div>
            </div>
            
            <div className={`reveal reveal-delay-1 ${trackInView ? 'is-visible' : ''}`}>
              <div className={styles.trackCard}>
                <div className={styles.trackHeader}>
                  <h3 className="text-primary" style={{margin: 0}}>Day 2: Ministerial Roundtable</h3>
                  <div className="badge" style={{margin: 0}}>15 April 2027</div>
                </div>
                <p className="text-muted" style={{marginBottom: '1.5rem', minHeight: '80px'}}>
                  Closed sessions synthesizing breakout outcomes into actionable policy. Formal adoption of the REAIM 2027 outcomes and Blueprints for Action by participating states and ministers.
                </p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-graphite)'}}>
                  <MapPin size={18} className="text-accent" />
                  <strong>Venue:</strong> Hemingways Ballroom, Karen (TBC)
                </div>
                <Link href="/programme" className="btn btn-outline" style={{width: '100%', justifyContent: 'center'}}>
                  View Ministerial Agenda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. About Summary */}
      <section className={styles.aboutSection} ref={aboutRef}>
        <div className="container">
          <div className="grid-2" style={{alignItems: 'center'}}>
            <div className={`reveal ${aboutInView ? 'is-visible' : ''}`}>
              <div className="badge" style={{marginBottom: '1rem'}}>The Summit</div>
              <h2 className="text-primary" style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Historic. Inclusive. Action-Oriented.</h2>
              <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '1.5rem'}}>
                The Responsible Use of Artificial Intelligence in the Military Domain (REAIM) Summit is a global platform that brings together governments, industry, academia, and civil society to address the opportunities, risks, and governance challenges associated with military applications of AI.
              </p>
              <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '2rem'}}>
                As the first African nation to host this summit, Kenya provides a unique platform to move beyond declarations towards verifiable, capacity-building frameworks, integrating developing nations' perspectives into global AI governance.
              </p>
              <Link href="/summit" className="btn btn-primary">
                Discover The Summit
              </Link>
            </div>
            <div className={`reveal reveal-delay-1 ${aboutInView ? 'is-visible' : ''}`} style={{textAlign: 'center', padding: '2rem'}}>
              <div style={{
                width: '100%',
                height: '400px',
                borderRadius: 'var(--radius-lg)',
                backgroundImage: 'url(/african-print.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                 <div style={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                    border: '1px solid var(--color-border-glow)'
                  }}>
                    <Image src="/coat-of-arms.webp" alt="Kenya Coat of Arms" width={80} height={80} style={{marginBottom: '1rem'}} />
                    <h3 className="text-primary" style={{margin: 0}}>Republic of Kenya</h3>
                    <p style={{margin: '0.5rem 0 0', fontWeight: 600, color: 'var(--color-kenya-green)'}}>Official Host 2027</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Welcome Message */}
      <section className={styles.welcomeSection} ref={welcomeRef}>
        <div className="container">
          <div className={`reveal ${welcomeInView ? 'is-visible' : ''}`}>
            <div className={styles.welcomeCard}>
              <div style={{flex: '0 0 250px'}}>
                <div style={{width: '100%', aspectRatio: '1/1', position: 'relative', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '2px solid var(--color-accent-gold)'}}>
                  <Image src="/placeholder-speaker.webp" alt="Minister of Defence" fill style={{objectFit: 'cover'}} />
                </div>
              </div>
              <div>
                <h3 className="text-primary" style={{marginBottom: '0.5rem'}}>Welcome to REAIM 2027</h3>
                <p className="text-accent" style={{fontWeight: '600', marginBottom: '1.5rem'}}>Hon. Minister of Defence, Republic of Kenya</p>
                <div style={{fontSize: '1.1rem', color: 'var(--color-graphite)', fontStyle: 'italic', lineHeight: '1.8', borderLeft: '3px solid var(--color-accent-gold)', paddingLeft: '1.5rem', marginBottom: '1.5rem'}}>
                  "Kenya is deeply honored to host the REAIM 2027 Summit in Nairobi. As technology advances at an unprecedented pace, it is our shared responsibility to ensure that artificial intelligence in the military domain is governed by ethical frameworks, human oversight, and international law. We welcome the global community to Nairobi to forge actionable pathways for peace, security, and responsible innovation."
                </div>
                <Link href="/summit" className="text-kenya-green" style={{fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
                  Read full message <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Themes Section */}
      <section className={styles.themesSection} ref={themesRef}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="text-primary">Summit Thematic Areas</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>Six core pillars driving the discourse on responsible AI integration in global defense strategies.</p>
          </div>
          <div className="grid-3">
            {[
              { id: '01', title: 'Autonomous Systems & IHL', desc: 'Compliance with International Humanitarian Law and ensuring human control.' },
              { id: '02', title: 'AI Governance Frameworks', desc: 'Developing robust policies, norms, and verifiable accountability mechanisms.' },
              { id: '03', title: 'Data Ethics & Privacy', desc: 'Safeguarding data integrity and mitigating algorithmic biases in military applications.' },
              { id: '04', title: 'Cyber-Physical Security', desc: 'Defending against AI-driven threats and securing military infrastructure.' },
              { id: '05', title: 'Civil-Military Cooperation', desc: 'Bridging the gap between commercial tech innovations and defense requirements.' },
              { id: '06', title: 'Verification & Trust', desc: 'Building confidence-building measures between states regarding military AI.' }
            ].map((theme, i) => (
              <div key={theme.id} className={`${styles.themeCard} reveal reveal-delay-${i % 3} ${themesInView ? 'is-visible' : ''}`}>
                <div className={styles.themeNumber}>{theme.id}</div>
                <h3 className="text-primary" style={{marginBottom: '1rem', fontSize: '1.25rem'}}>{theme.title}</h3>
                <p className="text-muted" style={{fontSize: '0.95rem'}}>{theme.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{marginTop: '3rem'}}>
             <Link href="/summit" className="btn btn-outline">Explore All Themes</Link>
          </div>
        </div>
      </section>

      {/* 7. Gallery Section */}
      <section className={styles.gallerySection}>
        <div className="container">
          <div className="text-center" style={{marginBottom: '3rem'}}>
            <h2 className="text-primary">Experience Nairobi</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>A world-class summit hosted in a world-class destination.</p>
          </div>
          <div className={styles.homeGallery}>
            <div className={`${styles.galleryItem} ${styles.large}`}>
              <Image src="/bomas.webp" alt="Bomas of Kenya" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImage} />
              <div className={styles.galleryCaption}>
                <h3>Main Venue: Bomas of Kenya</h3>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image src="/nairobi-light.webp" alt="Nairobi Skyline" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImage} />
              <div className={styles.galleryCaption}>
                <h3>Innovation Hub</h3>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image src="/nairobi-park.webp" alt="Nairobi National Park" fill sizes="(max-width: 768px) 100vw, 50vw" className={styles.galleryImage} />
              <div className={styles.galleryCaption}>
                <h3>Urban Wildlife</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. News Section */}
      <section className={styles.newsSection}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-primary">Latest News & Media</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>Stay updated on the latest developments, regional consultations, and announcements leading up to REAIM 2027.</p>
          </div>
          
          <div className={styles.newsGrid} ref={newsRef}>
            {newsArticles.slice(0, 3).map((article, index) => (
              <div key={article.slug} className={`${styles.newsCard} reveal reveal-delay-${index} ${newsInView ? 'is-visible' : ''}`}>
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
                  <Link href={`/media/${article.slug}`} className={styles.newsLink}>Read More <ArrowRight size={16} /></Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{marginTop: '3rem'}}>
             <Link href="/media" className="btn btn-outline">Visit Media Centre</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

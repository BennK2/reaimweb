'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './page.module.css';

// Placeholder data since we don't have confirmed speakers yet
const highLevelSpeakers = [
  { name: 'H.E. William Ruto', title: 'President', org: 'Republic of Kenya', image: '/placeholder-speaker.webp' },
  { name: 'Hon. Minister of Defence', title: 'Cabinet Secretary', org: 'Ministry of Defence, Kenya', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Minister of Defence', org: 'Republic of Korea', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Minister of Defence', org: 'The Netherlands', image: '/placeholder-speaker.webp' },
];

const plenarySpeakers = [
  { name: 'To Be Announced', title: 'Director of AI Policy', org: 'Global Tech Institute', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Senior Researcher', org: 'Humanitarian Law Center', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Professor of Computer Science', org: 'Leading University', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Head of Responsible AI', org: 'Defense Industry Partner', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Special Envoy on Technology', org: 'International Organization', image: '/placeholder-speaker.webp' },
  { name: 'To Be Announced', title: 'Chief Executive Officer', org: 'AI Safety Startup', image: '/placeholder-speaker.webp' },
];

export default function Speakers() {
  return (
    <div className={styles.speakersPage}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Speakers</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>The voices shaping responsible AI governance</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div style={{marginBottom: '4rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>The Summit (High-Level)</h2>
            <p className="text-muted" style={{maxWidth: '800px', marginBottom: '2rem'}}>
              Heads of State, Ministers of Defence, and diplomatic envoys leading the ministerial dialogues and closing plenary.
            </p>
            <div className={styles.speakerGrid}>
              {highLevelSpeakers.map((speaker, i) => (
                <div key={i} className={styles.speakerCard}>
                  <div className={styles.speakerImage}>
                    <Image src={speaker.image} alt={speaker.name} fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.speakerInfo}>
                    <h3 className={styles.speakerName}>{speaker.name}</h3>
                    <div className={styles.speakerTitle}>{speaker.title}</div>
                    <div className={styles.speakerOrg}>{speaker.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginBottom: '4rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>Plenary & Breakout Speakers</h2>
            <p className="text-muted" style={{maxWidth: '800px', marginBottom: '2rem'}}>
              Industry leaders, academics, civil society representatives, and military tech experts driving the thematic breakout sessions.
            </p>
            <div className={styles.speakerGrid}>
              {plenarySpeakers.map((speaker, i) => (
                <div key={i} className={styles.speakerCard}>
                  <div className={styles.speakerImage}>
                    <Image src={speaker.image} alt={speaker.name} fill style={{objectFit: 'cover'}} />
                  </div>
                  <div className={styles.speakerInfo}>
                    <h3 className={styles.speakerName}>{speaker.name}</h3>
                    <div className={styles.speakerTitle}>{speaker.title}</div>
                    <div className={styles.speakerOrg}>{speaker.org}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{padding: '3rem', textAlign: 'center', marginTop: '5rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>Have a speaker suggestion?</h2>
            <p className="text-muted" style={{marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem'}}>
              We welcome nominations for speakers, panellists, and moderators who can contribute to the REAIM 2027 agenda.
            </p>
            <a href="mailto:reaim2027@mod.go.ke" className="btn btn-primary" style={{display: 'inline-flex'}}>
              <Mail size={18} style={{marginRight: '0.5rem'}} /> Contact the Programme Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

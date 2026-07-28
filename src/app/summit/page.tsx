'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { MapPin, Globe2, ShieldCheck, Flag, ArrowRight } from 'lucide-react';
import styles from '../attend/page.module.css'; // Assume attend has the styles

export default function Summit() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">RE<span className="text-accent">AI</span>M 2027 — The Summit</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>Understanding the Global Summit on Responsible AI in the Military Domain</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Globe2 className="text-accent" /> What is REAIM?
              </h2>
              <div className="glass-panel" style={{padding: '2rem', marginBottom: '2.5rem'}}>
                <p className="text-muted" style={{fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                  The Responsible Use of Artificial Intelligence in the Military Domain (REAIM) Summit is a global platform that brings together governments, industry, academia, and civil society to address the opportunities, risks, and governance challenges associated with military applications of AI.
                </p>
                <ul className={styles.deadlineList} style={{gap: '1.5rem', display: 'flex', flexDirection: 'column'}}>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-primary)'}}>1.5-Track International Forum</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>A hybrid diplomatic format that combines official government representation with multi-stakeholder participation.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-primary)'}}>Non-binding Consensus Documents</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>Produces political declarations rather than legally binding treaties.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-primary)'}}>Strategic Importance</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>Raises global awareness, contributes to the formation of international norms, and provides a neutral platform for dialogue.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <ShieldCheck className="text-accent" /> Who Participates?
              </h3>
              <div className="glass-panel" style={{padding: '1.5rem'}}>
                <ul className={styles.deadlineList} style={{gap: '1rem', display: 'flex', flexDirection: 'column'}}>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-kenya-green)'}}>State Representatives</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>Heads of State, Ministers of Defence, Ministers of Foreign Affairs, and diplomatic envoys.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-kenya-green)'}}>Industry & Tech Leaders</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>CEOs, AI developers, and defense contractors building next-gen systems.</p>
                    </div>
                  </li>
                  <li>
                    <div className={styles.dateDetail}>
                      <strong style={{color: 'var(--color-kenya-green)'}}>Civil Society & Academia</strong>
                      <p className="text-muted" style={{margin: '0.25rem 0 0'}}>Researchers, ethicists, humanitarian organizations, and non-governmental actors.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h2 className="text-primary" style={{marginBottom: '2rem'}}>History of RE<span className="text-accent">AI</span>M Summits</h2>
              <Timeline>
                <TimelineItem 
                  time="Feb 2023"
                  title="The Hague, Netherlands"
                  type="history"
                  description="First global summit on responsible AI in the military domain. Established the foundational dialogues."
                  location="Call to Action"
                  icon={MapPin}
                  delay={0.1}
                />
                <TimelineItem 
                  time="Sep 2024"
                  title="Seoul, South Korea"
                  type="history"
                  description="Advancing global discussions on governance, bringing together defense ministers, tech innovators, and civil society."
                  location="Blueprint for Action"
                  icon={MapPin}
                  delay={0.2}
                />
                <TimelineItem 
                  time="Feb 2026"
                  title="A Coruña, Spain"
                  type="history"
                  description="Translating responsible AI principles into operational practice and building concrete international standards."
                  location="Pathways to Action"
                  icon={MapPin}
                  delay={0.3}
                />
                <TimelineItem 
                  time="Apr 2027"
                  title="Nairobi, Kenya"
                  type="history"
                  description="Moving beyond declarations towards verifiable, capacity-building frameworks, and integrating developing nations' perspectives."
                  location="Upcoming Summit"
                  icon={Flag}
                  delay={0.4}
                />
              </Timeline>
            </div>
          </div>
          
          <div style={{marginTop: '5rem'}}>
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2 className="text-primary">Summit Thematic Areas</h2>
              <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>The six core pillars that will frame discussions and breakout sessions at REAIM 2027.</p>
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
                <div key={theme.id} style={{
                  background: 'var(--color-bg-main)',
                  border: '1px solid var(--color-border)',
                  padding: 'var(--space-lg)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    color: 'var(--color-accent-gold)',
                    marginBottom: 'var(--space-sm)',
                    opacity: 0.7
                  }}>{theme.id}</div>
                  <h3 className="text-primary" style={{marginBottom: '1rem', fontSize: '1.25rem'}}>{theme.title}</h3>
                  <p className="text-muted" style={{fontSize: '0.95rem'}}>{theme.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{marginTop: '5rem'}}>
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2 className="text-primary">RE<span className="text-accent">AI</span>M 2027 Co-Hosts</h2>
              <p className="text-muted">A global coalition dedicated to responsible AI.</p>
            </div>
            <div className="grid-5" style={{textAlign: 'center'}}>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/ke.svg" alt="Flag of Kenya" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Republic of Kenya</strong>
                <span className="text-accent" style={{fontSize: '0.85rem'}}>Host</span>
              </div>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/kr.svg" alt="Flag of South Korea" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Republic of Korea</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/nl.svg" alt="Flag of the Netherlands" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>The Netherlands</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/sg.svg" alt="Flag of Singapore" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Singapore</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/gb.svg" alt="Flag of the United Kingdom" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>United Kingdom</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '4rem', textAlign: 'center'}}>
            <div className="glass-panel" style={{display: 'inline-block', padding: '2rem 4rem'}}>
               <h3 className="text-primary" style={{marginBottom: '1rem'}}>Explore the Summit Schedule</h3>
               <p className="text-muted" style={{marginBottom: '1.5rem'}}>View the complete day-by-day agenda, plenary sessions, and breakouts.</p>
               <Link href="/programme" className="btn btn-primary">
                 View Programme <ArrowRight size={18} style={{marginLeft: '0.5rem'}}/>
               </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

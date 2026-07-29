'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { MapPin, Globe2, ShieldCheck, Flag, ArrowRight, Cpu, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import styles from '../attend/page.module.css';

export default function Summit() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">RE<span className="text-accent">AI</span>M 2027 — The Summit</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>
            7–8 April 2027 • Nairobi, Republic of Kenya
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {/* Overview & Pillars */}
          <div className="grid-2" style={{marginBottom: '4rem'}}>
            <div>
              <div className="badge">Global Initiative</div>
              <h2 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                <Globe2 className="text-accent" /> What is REAIM?
              </h2>
              <div className="glass-panel" style={{padding: '2rem', marginBottom: '2.5rem'}}>
                <p className="text-muted" style={{fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem'}}>
                  Jointly launched in 2023 by the Netherlands and South Korea, the Responsible Artificial Intelligence in the Military Domain (REAIM) initiative promotes international dialogue, transparency, and cooperation in the responsible development, deployment, and use of AI technologies in defence. 
                  The initiative encourages multistakeholder engagement including states, industry, academia, and civil society, seeking to enhance transparency and promote international norms regarding the responsible development and application of AI in the military.
                </p>
                <p className="text-muted" style={{fontSize: '1rem', lineHeight: '1.7'}}>
                  Kenya joined REAIM in 2024 to champion African representation, global equity, and inclusive governance norms in military AI safety and international security.
                </p>
              </div>
              
              <h3 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem'}}>
                <ShieldCheck className="text-accent" /> Foundational Pillars of REAIM
              </h3>
              <div className="glass-panel" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{color: 'var(--color-accent-gold)', fontWeight: 'bold', fontSize: '1.2rem'}}>I.</div>
                  <div>
                    <strong style={{color: 'var(--color-primary)'}}>Norms, Rules, and Principles</strong>
                    <p className="text-muted" style={{margin: '0.25rem 0 0', fontSize: '0.9rem'}}>Encouraging strict adherence to International Humanitarian Law (IHL) and exploring necessary normative frameworks.</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{color: 'var(--color-accent-gold)', fontWeight: 'bold', fontSize: '1.2rem'}}>II.</div>
                  <div>
                    <strong style={{color: 'var(--color-primary)'}}>Responsible Development & Deployment</strong>
                    <p className="text-muted" style={{margin: '0.25rem 0 0', fontSize: '0.9rem'}}>Ensuring AI system safety, explainability, meaningful human control, and operational accountability mechanisms.</p>
                  </div>
                </div>
                <div style={{display: 'flex', gap: '1rem'}}>
                  <div style={{color: 'var(--color-accent-gold)', fontWeight: 'bold', fontSize: '1.2rem'}}>III.</div>
                  <div>
                    <strong style={{color: 'var(--color-primary)'}}>International Cooperation & Capacity Building</strong>
                    <p className="text-muted" style={{margin: '0.25rem 0 0', fontSize: '0.9rem'}}>Supporting global knowledge exchange, technical assistance, and developing inclusive AI ecosystems.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="badge">Diplomatic Evolution</div>
              <h2 className="text-primary" style={{marginBottom: '2rem'}}>REAIM Global & Regional Timeline</h2>
              <Timeline>
                <TimelineItem 
                  time="Feb 2023"
                  title="The Hague, Netherlands"
                  type="history"
                  description="Inaugural REAIM Summit launched by Netherlands & South Korea. Established foundational dialogue."
                  location="Call to Action"
                  icon={MapPin}
                  delay={0.1}
                />
                <TimelineItem 
                  time="June 2024"
                  title="Nairobi Regional Workshop"
                  type="history"
                  description="Kenya hosted inaugural African regional workshop with delegates & military personnel from 14 African countries."
                  location="Nairobi, Kenya"
                  icon={Flag}
                  delay={0.15}
                />
                <TimelineItem 
                  time="Sep 2024"
                  title="Seoul Summit, South Korea"
                  type="history"
                  description="Kenyan delegation led by CS for Defence contributed to AI, peacekeeping, and operational accountability."
                  location="Blueprint for Action"
                  icon={MapPin}
                  delay={0.2}
                />
                <TimelineItem 
                  time="August 2025"
                  title="Nairobi Regional Consultations"
                  type="history"
                  description="Co-hosted by KDF with Netherlands, Spain, South Korea & UNIDIR with 17 participating nations."
                  location="Nairobi, Kenya"
                  icon={Flag}
                  delay={0.25}
                />
                <TimelineItem 
                  time="June 2026"
                  title="UNGA AIMD Exchanges (Geneva)"
                  type="history"
                  description="Kenya contributed substantively to UN General Assembly informal exchanges on AIMD & capacity building."
                  location="Geneva, Switzerland"
                  icon={MapPin}
                  delay={0.3}
                />
                <TimelineItem 
                  time="7–8 April 2027"
                  title="REAIM 2027 Global Summit"
                  type="history"
                  description="Nairobi hosts the 4th REAIM Global Summit, consolidating African leadership and global accountable AI governance."
                  location="Bomas of Kenya, Nairobi"
                  icon={Flag}
                  delay={0.4}
                />
              </Timeline>
            </div>
          </div>
          
          {/* Kenya's 5 Strategic Priorities */}
          <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <div className="badge badge-green">National Strategy</div>
              <h2 className="text-primary">Kenya’s 5 Strategic Priorities under REAIM</h2>
              <p className="text-muted" style={{maxWidth: '700px', margin: '0 auto'}}>
                Positioning Kenya as a continental convener while cementing ethical standards and national defence modernization.
              </p>
            </div>

            <div className="grid-3">
              <div className="glass-panel" style={{padding: '2rem'}}>
                <div style={{color: 'var(--color-accent-gold)', marginBottom: '1rem'}}><Award size={32} /></div>
                <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.75rem'}}>I. Capacity Building & Support</h3>
                <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                  Strengthening national frameworks and training defence, diplomatic, and legal personnel on AI ethics, oversight, and international law compliance.
                </p>
              </div>

              <div className="glass-panel" style={{padding: '2rem'}}>
                <div style={{color: 'var(--color-kenya-green)', marginBottom: '1rem'}}><Globe2 size={32} /></div>
                <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.75rem'}}>II. African Regional Leadership</h3>
                <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                  Serving as a regional convener for responsible military AI dialogue and amplifying African perspectives in global security governance.
                </p>
              </div>

              <div className="glass-panel" style={{padding: '2rem'}}>
                <div style={{color: 'var(--color-maasai-red)', marginBottom: '1rem'}}><BookOpen size={32} /></div>
                <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.75rem'}}>III. Transparency & Policy</h3>
                <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                  Promoting voluntary national AI reporting, risk assessments, and procurement standards integrated into defence & cyber strategy.
                </p>
              </div>

              <div className="glass-panel" style={{padding: '2rem'}}>
                <div style={{color: 'var(--color-accent-gold)', marginBottom: '1rem'}}><ShieldCheck size={32} /></div>
                <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.75rem'}}>IV. Humanitarian Safeguards & IHL</h3>
                <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                  Upholding International Humanitarian Law and advocating for human-centred safeguards and meaningful human judgement in military AI.
                </p>
              </div>

              <div className="glass-panel" style={{padding: '2rem', gridColumn: 'span 2'}}>
                <div style={{color: 'var(--color-kenya-green)', marginBottom: '1rem'}}><Cpu size={32} /></div>
                <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.75rem'}}>
                  V. Moran AI & Cybersecurity Center of Excellence
                </h3>
                <p className="text-muted" style={{fontSize: '0.95rem', margin: 0}}>
                  Leveraging the <strong>Moran AI Center</strong> as a sovereign national and regional platform for elite human capital development, mission-driven research, testing, doctrinal development, and strategic advisory for the Kenya Defence Forces and regional partners.
                </p>
              </div>
            </div>
          </div>

          {/* Co-Hosts */}
          <div style={{marginTop: '5rem'}}>
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2 className="text-primary">RE<span className="text-accent">AI</span>M 2027 Partner Nations</h2>
              <p className="text-muted">A global coalition dedicated to responsible AI in defence.</p>
            </div>
            <div className="grid-5" style={{textAlign: 'center'}}>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/ke.svg" alt="Flag of Kenya" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Republic of Kenya</strong>
                <span className="text-accent" style={{fontSize: '0.85rem'}}>Host Nation</span>
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
                  <Image src="https://flagcdn.com/es.svg" alt="Flag of Spain" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Spain</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
              <div className="glass-panel hover-lift" style={{padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
                <div style={{position: 'relative', width: '80px', height: '53px', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)'}}>
                  <Image src="https://flagcdn.com/sg.svg" alt="Flag of Singapore" fill style={{objectFit: 'cover'}} />
                </div>
                <strong style={{fontSize: '1.1rem', color: 'var(--color-primary)'}}>Singapore</strong>
                <span className="text-muted" style={{fontSize: '0.85rem'}}>Co-Host</span>
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '4rem', textAlign: 'center'}}>
            <div className="glass-panel" style={{display: 'inline-block', padding: '2rem 4rem'}}>
               <h3 className="text-primary" style={{marginBottom: '1rem'}}>Explore the Summit Schedule</h3>
               <p className="text-muted" style={{marginBottom: '1.5rem'}}>View the complete agenda for 6, 7 & 8 April 2027 in Nairobi.</p>
               <Link href="/programme" className="btn btn-primary">
                 View Official Programme <ArrowRight size={18} style={{marginLeft: '0.5rem'}}/>
               </Link>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

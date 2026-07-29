'use client';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Mic, Users, Monitor, BookOpen, Target, Globe, Calendar, Presentation, Download } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Programme() {
  return (
    <div className={styles.programmePage}>
      <header className={styles.pageHeader} style={{ backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.85), rgba(10, 25, 47, 0.95)), url(\$\{process.env.NEXT_PUBLIC_BASE_PATH || ''\}/african-print.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h1 className="text-primary">Summit Programme</h1>
          <p className="text-accent font-display" style={{fontSize: '1.25rem'}}>Nairobi, Republic of Kenya</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div style={{marginBottom: '3rem'}}>
                <h2 className="text-primary" style={{marginBottom: '1rem'}}>13 April 2027 (Pre-Summit)</h2>
                <div className="badge" style={{marginBottom: '2rem'}}>Side Events & Regional Consultations</div>
                <Timeline>
                  <TimelineItem 
                    time="09:00 - 17:00" 
                    title="African Regional Consultation & Academic Forum" 
                    description="A pre-summit consultation bringing together regional delegates, civil society, researchers, and Moran AI Center advisors."
                    location={<><a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}><a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Bomas of Kenya</a></a> (Pavilion)</>}
                    type="breakout"
                    icon={BookOpen}
                    delay={0.1}
                  />
                  <TimelineItem 
                    time="14:00 - 17:00" 
                    title="Youth & Emerging Leaders in AI Governance" 
                    description="Special consultation session ensuring next-generation voices from Africa and the Global South shape the summit."
                    type="breakout"
                    icon={Users}
                    delay={0.2}
                  />
                </Timeline>
              </div>

              <div>
                <h2 className="text-primary" style={{marginBottom: '1rem'}}>14 April 2027 (Day 1)</h2>
                <div className="badge" style={{marginBottom: '2rem'}}>Plenary Sessions</div>
                <Timeline>
                  <TimelineItem 
                    time="09:00 - 09:30" 
                    title="Opening Ceremony & Welcome Address" 
                    speaker="H.E. William Ruto, President of the Republic of Kenya"
                    location={<>Main Auditorium, <a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}><a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Bomas of Kenya</a></a></>}
                    type="plenary"
                    icon={Mic}
                    delay={0.1}
                  />
                  <TimelineItem 
                    time="09:30 - 10:45" 
                    title="Plenary Session 1: State of Play in Military AI" 
                    description="A comprehensive overview of current military AI capabilities, near-term projections, and ethical challenges."
                    speaker="High-Level Panel"
                    type="plenary"
                    icon={Monitor}
                    delay={0.2}
                  />
                  <TimelineItem 
                    time="11:15 - 12:30" 
                    title="Plenary Session 2: Norms, Rules & Principles" 
                    description="Evaluating international frameworks, adherence to IHL, and normative governance principles."
                    type="plenary"
                    icon={BookOpen}
                    delay={0.3}
                  />
                  <TimelineItem 
                    time="13:30 - 15:00" 
                    title="Plenary Session 3: Operationalizing Responsible AI" 
                    description="Translating principles into verification, explainability, human control, and operational compliance mechanisms."
                    speaker="High-Level Panel"
                    type="plenary"
                    icon={Monitor}
                    delay={0.4}
                  />
                  <TimelineItem 
                    time="15:30 - 17:00" 
                    title="Plenary Session 4: Global Cooperation & Capacity Building" 
                    description="Building international consensus, technical assistance, and equity for developing nations."
                    type="plenary"
                    icon={Users}
                    delay={0.5}
                  />
                </Timeline>
              </div>
            </div>
            
            <div>
              <div style={{marginBottom: '3rem'}}>
                <h2 className="text-primary" style={{marginBottom: '1rem'}}>15 April 2027 (Day 2)</h2>
                <div className="badge" style={{marginBottom: '2rem'}}>Ministerial & High-Level</div>
                <Timeline>
                  <TimelineItem 
                    time="09:00 - 12:00" 
                    title="Ministerial Roundtable (Closed Session)" 
                    speaker="Ministers of Defence and Foreign Affairs"
                    location={<><a href="https://maps.app.goo.gl/3A5T7j9Z2QYw2JqK9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}><a href="https://maps.app.goo.gl/3A5T7j9Z2QYw2JqK9" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Hemingways Ballroom</a></a>, Karen</>}
                    type="plenary"
                    icon={Users}
                    delay={0.1}
                  />
                  <TimelineItem 
                    time="13:30 - 15:00" 
                    title="Plenary Session 3: The Path Forward" 
                    description="Synthesizing breakout outcomes into actionable policy."
                    type="plenary"
                    icon={Monitor}
                    delay={0.2}
                  />
                  <TimelineItem 
                    time="15:30 - 16:30" 
                    title="Closing Session & Blueprint Adoption" 
                    description="Formal adoption of the REAIM 2027 outcomes."
                    location={<>Main Auditorium, <a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}><a href="https://maps.app.goo.gl/uX3L3Y7WqY2q6W4a8" target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "inherit"}}>Bomas of Kenya</a></a></>}
                    type="plenary"
                    icon={Mic}
                    delay={0.3}
                  />
                </Timeline>
              </div>

              <div className="glass-panel" style={{padding: '2rem'}}>
                <h3 className="text-primary" style={{marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                  <Download className="text-accent" /> Official Programme
                </h3>
                <p className="text-muted" style={{marginBottom: '1.5rem'}}>
                  Download the comprehensive summit programme booklet, including detailed session descriptions, breakout room locations, and speaker biographies.
                </p>
                <Link href="/resources" className="btn btn-primary" style={{width: '100%', justifyContent: 'center'}}>
                  Download Programme PDF
                </Link>
              </div>
            </div>
          </div>
          
          <div style={{marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--color-border)'}}>
            <div className="text-center" style={{marginBottom: '3rem'}}>
              <h2 className="text-primary">Featured Side Events & Workshops</h2>
              <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>A multi-stakeholder approach fostering deep-dives into specific topics.</p>
            </div>
            
            <div className="grid-3" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div className="glass-panel" style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div>
                  <BookOpen size={24} className="text-accent" />
                </div>
                <div>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Academic Symposium on AI Ethics</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>A dedicated forum for researchers and ethicists to present peer-reviewed papers on the moral implications of autonomous systems in warfare.</p>
                  <div style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Calendar size={14} /> 14 April</span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Users size={14} /> 150+ Attendees</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div>
                  <Target size={24} className="text-accent" />
                </div>
                <div>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Industry Innovation Showcase</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>Leading defense contractors and civilian tech firms demonstrate dual-use AI technologies that emphasize human-machine teaming.</p>
                  <div style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Calendar size={14} /> 14-15 April</span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Presentation size={14} /> Bomas Expo</span>
                  </div>
                </div>
              </div>

              <div className="glass-panel" style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div>
                  <Globe size={24} className="text-accent" />
                </div>
                <div>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Global South Perspectives</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>A closed-door session focusing on capacity building, technology transfer, and unique defense challenges for developing nations.</p>
                  <div style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Calendar size={14} /> 15 April</span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Users size={14} /> Invite Only</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center" style={{marginTop: '3rem'}}>
              <p className="text-muted" style={{marginBottom: '1rem'}}>Interested in hosting a side event?</p>
              <Link href="/attend" className="btn btn-outline">Apply to Host a Session</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

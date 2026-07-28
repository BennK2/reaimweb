'use client';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { Mic, Users, Monitor, BookOpen, Target, Globe, Calendar, Presentation, Download } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';
import sideEventsStyles from '../side-events/page.module.css';

export default function Programme() {
  return (
    <div className={styles.programmePage}>
      <header className={styles.pageHeader}>
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
                <h2 className="text-primary" style={{marginBottom: '1rem'}}>13 April 2027 (Pre-Event)</h2>
                <div className="badge" style={{marginBottom: '2rem'}}>Side Events & Forums</div>
                <Timeline>
                  <TimelineItem 
                    time="09:00 - 17:00" 
                    title="CSO & Academic Forum" 
                    description="A dedicated pre-summit day for civil society organizations, academia, and independent researchers."
                    location="Bomas of Kenya (Pavilion)"
                    type="breakout"
                    icon={BookOpen}
                    delay={0.1}
                  />
                  <TimelineItem 
                    time="14:00 - 17:00" 
                    title="Youth in AI Governance" 
                    description="Special consultation session ensuring next-generation voices are integrated into the summit's outcomes."
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
                    location="Main Auditorium, Bomas of Kenya"
                    type="plenary"
                    icon={Mic}
                    delay={0.1}
                  />
                  <TimelineItem 
                    time="09:30 - 10:45" 
                    title="Plenary Session 1: State of Play" 
                    description="A comprehensive overview of current military AI capabilities and near-term projections."
                    speaker="High-Level Panel"
                    type="plenary"
                    icon={Monitor}
                    delay={0.2}
                  />
                  <TimelineItem 
                    time="11:15 - 12:30" 
                    title="Plenary Session 2: Norms & Governance" 
                    description="Debating the effectiveness of current international frameworks."
                    type="plenary"
                    icon={BookOpen}
                    delay={0.3}
                  />
                  <TimelineItem 
                    time="13:30 - 15:00" 
                    title="Breakout Track A" 
                    description="Technical deep dive into autonomous targeting systems."
                    type="breakout"
                    icon={Users}
                    delay={0.4}
                  />
                  <TimelineItem 
                    time="15:30 - 17:00" 
                    title="Breakout Track B" 
                    description="Ethical frameworks and human-machine teaming."
                    type="breakout"
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
                    location="Hemingways Ballroom, Karen"
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
                    location="Main Auditorium, Bomas of Kenya"
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
            
            <div className={sideEventsStyles?.eventsList || "grid-3"} style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
              <div className={sideEventsStyles?.eventCard || "glass-panel"} style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div className={sideEventsStyles?.eventIcon || ""}>
                  <BookOpen size={24} className="text-accent" />
                </div>
                <div className={sideEventsStyles?.eventContent || ""}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Academic Symposium on AI Ethics</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>A dedicated forum for researchers and ethicists to present peer-reviewed papers on the moral implications of autonomous systems in warfare.</p>
                  <div className={sideEventsStyles?.eventMeta || ""} style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Calendar size={14} /> 14 April</span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Users size={14} /> 150+ Attendees</span>
                  </div>
                </div>
              </div>

              <div className={sideEventsStyles?.eventCard || "glass-panel"} style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div className={sideEventsStyles?.eventIcon || ""}>
                  <Target size={24} className="text-accent" />
                </div>
                <div className={sideEventsStyles?.eventContent || ""}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Industry Innovation Showcase</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>Leading defense contractors and civilian tech firms demonstrate dual-use AI technologies that emphasize human-machine teaming.</p>
                  <div className={sideEventsStyles?.eventMeta || ""} style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Calendar size={14} /> 14-15 April</span>
                    <span style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Presentation size={14} /> Bomas Expo</span>
                  </div>
                </div>
              </div>

              <div className={sideEventsStyles?.eventCard || "glass-panel"} style={{padding: '1.5rem', display: 'flex', gap: '1rem'}}>
                <div className={sideEventsStyles?.eventIcon || ""}>
                  <Globe size={24} className="text-accent" />
                </div>
                <div className={sideEventsStyles?.eventContent || ""}>
                  <h3 style={{marginBottom: '0.5rem', fontSize: '1.2rem', color: 'var(--color-primary)'}}>Global South Perspectives</h3>
                  <p className="text-muted" style={{marginBottom: '1rem', fontSize: '0.9rem'}}>A closed-door session focusing on capacity building, technology transfer, and unique defense challenges for developing nations.</p>
                  <div className={sideEventsStyles?.eventMeta || ""} style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--color-accent-gold)'}}>
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

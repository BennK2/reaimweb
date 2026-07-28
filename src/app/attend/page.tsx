'use client';
import { ShieldAlert, Globe, Clock, PlaneTakeoff, Info, MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from './page.module.css';

export default function Attend() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Be part of RE<span className="text-accent">AI</span>M 2027.</h1>
          <p className="text-accent font-display" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>Registration, Accreditation, and Travel Information</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="text-primary">How to Participate</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>REAIM 2027 is open to participants across government, business, civil society, media, and academia. Find your participation pathway below.</p>
          </div>

          <div className="glass-panel" style={{marginBottom: '5rem', overflowX: 'auto'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '1px solid var(--color-border)', textAlign: 'left', background: 'rgba(255,255,255,0.02)'}}>
                  <th style={{padding: '1rem', color: 'var(--color-primary)'}}>Participation Type</th>
                  <th style={{padding: '1rem', color: 'var(--color-primary)'}}>Who It's For</th>
                  <th style={{padding: '1rem', color: 'var(--color-primary)'}}>How to Register</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '1.5rem 1rem', fontWeight: 600}}>Official Delegation</td>
                  <td style={{padding: '1.5rem 1rem'}} className="text-muted">Heads of State, Government Ministers, Official delegations, AU/EU/IFI representatives</td>
                  <td style={{padding: '1.5rem 1rem'}}>Through official channels via DAO. Contact <a href="mailto:invitation@reaim2027.mod.go.ke" className="text-accent">Secretariat</a></td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '1.5rem 1rem', fontWeight: 600}}>Academic & Civil Society</td>
                  <td style={{padding: '1.5rem 1rem'}} className="text-muted">Researchers, think tanks, civil society organisations</td>
                  <td style={{padding: '1.5rem 1rem'}}>Upon invitation / Expression of interest</td>
                </tr>
                <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                  <td style={{padding: '1.5rem 1rem', fontWeight: 600}}>Media and Press</td>
                  <td style={{padding: '1.5rem 1rem'}} className="text-muted">Journalists, photographers, broadcast media</td>
                  <td style={{padding: '1.5rem 1rem'}}><Link href="/media" className="text-accent">Apply via Media Portal</Link></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="text-primary">Travel and Logistics</h2>
            <p className="text-muted" style={{maxWidth: '600px', margin: '0 auto'}}>Practical information to ensure a seamless arrival and stay in Nairobi.</p>
          </div>

          <div className="grid-2" style={{marginBottom: '5rem'}}>
            <div>
              <h3 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem'}}>
                <MapPin className="text-accent" /> Getting to the Venues
              </h3>
              <div className="glass-panel" style={{padding: '2rem'}}>
                <p className="text-muted" style={{marginBottom: '1rem'}}>
                  The primary summit venue is the <strong>Bomas of Kenya</strong>, located on Forest Edge Road off Lang'ata Road, approximately 18km from Jomo Kenyatta International Airport (JKIA).
                </p>
                <p className="text-muted" style={{marginBottom: '1rem'}}>
                  The Ministerial Roundtable will be hosted at <strong>Hemingways Nairobi</strong> in Karen.
                </p>
                <p className="text-muted">
                  Transfer options include ride-hail apps (Uber/Bolt) and official event shuttle services from recommended hotels. VIP transportation is provided for Ministers.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-primary" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem'}}>
                <Info className="text-accent" /> Visa and Entry Requirements
              </h3>
              <div className="glass-panel" style={{padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column'}}>
                <p className="text-muted" style={{marginBottom: '1.5rem'}}>
                  Kenya operates an Electronic Travel Authorisation (eTA) system. Most nationalities can obtain an eTA online before travel. Citizens of 43 countries (including EAC) are exempt.
                </p>
                <ul className="text-muted" style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
                  <li>Valid passport (6+ months)</li>
                  <li>Return ticket</li>
                  <li>Yellow fever certificate (if applicable)</li>
                </ul>
                <a href="https://www.etakenya.go.ke" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop: 'auto', textAlign: 'center', width: '100%'}}>
                  Apply for eTA
                </a>
              </div>
            </div>
          </div>

          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="text-primary">Frequently Asked Questions</h2>
          </div>

          <div className="glass-panel" style={{padding: '3rem', maxWidth: '800px', margin: '0 auto', marginBottom: '5rem'}}>
            <div style={{marginBottom: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '0.5rem', fontSize: '1.2rem'}}>When and where is the Summit?</h3>
              <p className="text-muted">The REAIM Summit takes place on 7–8 April 2027 in Nairobi, Kenya. The main plenary sessions are hosted at the Bomas of Kenya, and the Ministerial Roundtable is at Hemingways Nairobi. Pre-summit regional consultations occur on 6 April 2027.</p>
            </div>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '0.5rem', fontSize: '1.2rem'}}>How do I register to attend?</h3>
              <p className="text-muted">Official delegations participate through diplomatic channels via a Designated Accreditation Officer (DAO). Media representatives apply via the media accreditation portal. Civil society and academia participate upon invitation.</p>
            </div>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '0.5rem', fontSize: '1.2rem'}}>Are there interpretation services?</h3>
              <p className="text-muted">The summit is conducted in English. Simultaneous interpretation in English, French, and Swahili is provided for all plenary and livestreamed sessions. Interpretation booths are available for the Ministerial Roundtable (national remarks only).</p>
            </div>
            
            <div style={{marginBottom: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '0.5rem', fontSize: '1.2rem'}}>What is the expected outcome?</h3>
              <p className="text-muted">The summit will culminate in the adoption of a non-binding political declaration and 'Blueprint for Action', building upon the frameworks established in The Hague, Seoul, and A Coruña.</p>
            </div>
          </div>

          <div className="text-center" style={{marginTop: '4rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>Ready to attend?</h2>
            <p className="text-muted" style={{marginBottom: '2rem'}}>Secure your place at REAIM 2027.</p>
            <a href="mailto:registration@reaim2027.mod.go.ke" className="btn btn-primary" style={{display: 'inline-flex', padding: '0.75rem 2rem'}}>
              Contact Registration Team
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}

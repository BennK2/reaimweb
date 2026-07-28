'use client';
import { FileText, Download, ExternalLink, FileDown } from 'lucide-react';
import styles from './page.module.css';

export default function Resources() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Resources</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>Official documents, outcome declarations, and concept notes</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          <div style={{marginBottom: '4rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>RE<span className="text-accent">AI</span>M 2027 Documents</h2>
            <p className="text-muted" style={{marginBottom: '2rem'}}>Essential reading and documentation for summit participants.</p>
            
            <div className={styles.resourceGrid}>
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FileText size={24} />
                </div>
                <h3 className={styles.resourceTitle}>Summit Concept Note</h3>
                <p className={styles.resourceDesc}>The foundational document outlining the themes, objectives, and structure of the Nairobi summit.</p>
                <a href="#" className={styles.downloadBtn}>
                  <Download size={18} /> Download PDF (1.2 MB)
                </a>
              </div>
              
              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FileText size={24} />
                </div>
                <h3 className={styles.resourceTitle}>Information Note</h3>
                <p className={styles.resourceDesc}>Logistical details for delegations including visa, accommodation, and protocol information.</p>
                <a href="#" className={styles.downloadBtn}>
                  <Download size={18} /> Download PDF (2.4 MB)
                </a>
              </div>

              <div className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  <FileText size={24} />
                </div>
                <h3 className={styles.resourceTitle}>Official Programme</h3>
                <p className={styles.resourceDesc}>The complete day-by-day agenda, including plenary sessions and breakout tracks.</p>
                <a href="#" className={styles.downloadBtn}>
                  <Download size={18} /> Download PDF (3.1 MB)
                </a>
              </div>
            </div>
          </div>

          <div style={{marginBottom: '4rem'}}>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>Previous Summit Outcomes</h2>
            <p className="text-muted" style={{marginBottom: '2rem'}}>Political declarations and frameworks established in previous REAIM summits.</p>
            
            <div className="glass-panel">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                <div>
                  <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>REAIM 2026 - A Coruña</h3>
                  <p className="text-muted" style={{margin: 0, fontSize: '0.9rem'}}>Pathways to Action (February 2026)</p>
                </div>
                <a href="#" className="btn btn-outline" style={{padding: '0.5rem 1rem'}}>
                  <FileDown size={18} style={{marginRight: '0.5rem'}} /> PDF
                </a>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                <div>
                  <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>REAIM 2024 - Seoul</h3>
                  <p className="text-muted" style={{margin: 0, fontSize: '0.9rem'}}>Blueprint for Action (September 2024)</p>
                </div>
                <a href="#" className="btn btn-outline" style={{padding: '0.5rem 1rem'}}>
                  <FileDown size={18} style={{marginRight: '0.5rem'}} /> PDF
                </a>
              </div>
              
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem'}}>
                <div>
                  <h3 className="text-primary" style={{fontSize: '1.2rem', marginBottom: '0.25rem'}}>REAIM 2023 - The Hague</h3>
                  <p className="text-muted" style={{margin: 0, fontSize: '0.9rem'}}>Call to Action (February 2023)</p>
                </div>
                <a href="#" className="btn btn-outline" style={{padding: '0.5rem 1rem'}}>
                  <FileDown size={18} style={{marginRight: '0.5rem'}} /> PDF
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-primary" style={{marginBottom: '1rem'}}>Related Links</h2>
            <div className="grid-3">
              <a href="https://hcss.nl/gcreaim" target="_blank" rel="noopener noreferrer" className="glass-panel hover-lift" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', textDecoration: 'none'}}>
                <span className="text-primary" style={{fontWeight: 500}}>Global Commission (GC REAIM)</span>
                <ExternalLink size={18} className="text-accent" />
              </a>
              <a href="https://hcss.nl" target="_blank" rel="noopener noreferrer" className="glass-panel hover-lift" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', textDecoration: 'none'}}>
                <span className="text-primary" style={{fontWeight: 500}}>HCSS</span>
                <ExternalLink size={18} className="text-accent" />
              </a>
              <a href="https://unidir.org" target="_blank" rel="noopener noreferrer" className="glass-panel hover-lift" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', textDecoration: 'none'}}>
                <span className="text-primary" style={{fontWeight: 500}}>UNIDIR</span>
                <ExternalLink size={18} className="text-accent" />
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

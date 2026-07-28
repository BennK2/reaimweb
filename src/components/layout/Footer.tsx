import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, MapPin, MessageCircle, Share2, Building } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.brand}>
            <div className={styles.logoGroup} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
              <Image src="/coat-of-arms.webp" alt="Kenya Coat of Arms" width={55} height={55} />
              <div className={styles.logoDivider}></div>
              <Image src="/logo.png" alt="REAIM 2027 Logo" width={180} height={60} style={{ objectFit: 'contain' }} />
            </div>
            <p className={styles.brandDesc}>
              The premier global platform addressing the opportunities, risks, and governance challenges of artificial intelligence in the military domain.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Social Media"><MessageCircle size={20} /></a>
              <a href="#" aria-label="Share"><Share2 size={20} /></a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <h4>Event</h4>
            <ul>
              <li><Link href="/summit">The Summit</Link></li>
              <li><Link href="/programme">Programme</Link></li>
              <li><Link href="/speakers">Speakers</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>

          <div className={styles.footerLinks}>
            <h4>Attend</h4>
            <ul>
              <li><Link href="/attend">Register</Link></li>
              <li><Link href="/attend">Accreditation</Link></li>
              <li><Link href="/attend">Travel & FAQ</Link></li>
              <li><Link href="/discover">Nairobi</Link></li>
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4>Support</h4>
            <ul>
              <li>
                <Link href="/media" style={{display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#a0aec0'}}>
                  <MessageCircle size={18} className="text-accent" /> <span>Media Centre</span>
                </Link>
              </li>
              <li>
                <Building size={18} className="text-accent" />
                <span>Ministry of Defence, Republic of Kenya</span>
              </li>
              <li>
                <MapPin size={18} className="text-accent" />
                <span>Nairobi, Republic of Kenya</span>
              </li>
              <li>
                <Mail size={18} className="text-accent" />
                <a href="mailto:reaim2027@mod.go.ke">reaim2027@mod.go.ke</a>
              </li>
              <li>
                <Globe size={18} className="text-accent" />
                <a href="https://www.reaim2027.mod.go.ke" target="_blank" rel="noopener noreferrer">www.reaim2027.mod.go.ke</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>© {new Date().getFullYear()} Ministry of Defence, Republic of Kenya. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



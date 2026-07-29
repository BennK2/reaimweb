'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'sw', label: 'Kiswahili' },
    { code: 'ar', label: 'العربية' },
    { code: 'zh-CN', label: '中文' }
  ];

  const handleLanguageChange = (code: string) => {
    // Set cookie to remember choice
    document.cookie = `googtrans=/en/${code}; path=/;`;

    // Find the Google Translate select dropdown and trigger change
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
    } else {
      // If widget hasn't loaded yet, reload to apply cookie
      window.location.reload();
    }
    setLangMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/coat-of-arms.webp`} alt="Kenya Coat of Arms" width={32} height={32} className={styles.logoImage} />
          <div className={styles.logoDivider}></div>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/kdf-logo.webp`} alt="KDF Logo" width={28} height={34} style={{ objectFit: 'contain' }} />
          <div className={styles.logoDivider}></div>
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logo.png`} alt="REAIM 2027 Summit Logo" width={125} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Home</span>
          </Link>
          <Link href="/summit" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>The Summit</span>
          </Link>
          <Link href="/programme" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Programme</span>
          </Link>
          <Link href="/speakers" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Speakers</span>
          </Link>
          <Link href="/attend" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Attend</span>
          </Link>
          <Link href="/discover" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Discover</span>
          </Link>
          <Link href="/media" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Media</span>
          </Link>
          <Link href="/resources" className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
            <span>Resources</span>
          </Link>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/app-simulator.html`} target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={() => setMobileMenuOpen(false)} style={{color: 'var(--color-accent-gold)', fontWeight: 700}}>
            <span>📱 Event App</span>
          </a>

          <div className={styles.mobileActions}>
            <Link href="/attend" className="btn btn-primary btn-sm" onClick={() => setMobileMenuOpen(false)}>
              <User size={18} /> Register
            </Link>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className="langContainer" onMouseLeave={() => setLangMenuOpen(false)}>
            <button
              className={styles.iconBtn}
              aria-label="Language"
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <Globe size={20} />
            </button>
            <div className={`langDropdown ${langMenuOpen ? 'open' : ''}`}>
              {languages.map(lang => (
                <button
                  key={lang.code}
                  className="langOption"
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
          <Link href="/attend" className="btn btn-primary btn-sm">
            <User size={18} /> Register
          </Link>
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}



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
        <Link href="/" className={styles.logo}>
          <div className={styles.logoImages}>
            <Image src="/coat-of-arms.webp" alt="Kenya Coat of Arms" width={40} height={40} className={styles.logoImage} />
            <div className={styles.logoDivider}></div>
            <Image src="/kdf-logo.webp" alt="KDF Logo" width={32} height={40} className={styles.logoImage} style={{ objectFit: 'contain' }} />
          </div>
          REAIM <span className="text-accent">2027</span>
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

          <div className={styles.mobileActions}>
            <Link href="/registration" className="btn btn-primary btn-sm" onClick={() => setMobileMenuOpen(false)}>
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
          <Link href="/registration" className="btn btn-primary btn-sm">
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



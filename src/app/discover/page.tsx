'use client';
import Image from 'next/image';
import { MapPin, Info, ArrowRight, Compass, Camera, Coffee } from 'lucide-react';
import styles from './page.module.css';

export default function DiscoverNairobi() {
  return (
    <div className={styles.discoverPage}>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Kenya: Origin of Wonder.</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>From the Great Rift Valley to the innovation hubs of Nairobi.</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          
          <div className="text-center" style={{marginBottom: '4rem'}}>
            <h2 className="text-primary">Why Nairobi</h2>
            <p className="text-muted" style={{maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem'}}>Kenya stands as a living testament to where we began and a bold vision of where we are going.</p>
          </div>

          <div className="grid-3" style={{marginBottom: '5rem'}}>
            <div className="glass-panel hover-lift" style={{padding: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '1rem', fontSize: '1.2rem'}}>Silicon Savannah</h3>
              <p className="text-muted" style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
                Kenya's thriving tech and startup ecosystem has earned Nairobi its reputation as Africa's Silicon Savannah. Home to M-Pesa and backed by strong government support for innovation, Kenya leads the continent in digital technology and entrepreneurship.
              </p>
            </div>
            <div className="glass-panel hover-lift" style={{padding: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '1rem', fontSize: '1.2rem'}}>Gateway to East Africa</h3>
              <p className="text-muted" style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
                Nairobi is the region's undisputed financial hub, home to the Nairobi Securities Exchange and a base for major international banks. The city serves as the primary gateway to the dynamic East African market of over 300 million people.
              </p>
            </div>
            <div className="glass-panel hover-lift" style={{padding: '2rem'}}>
              <h3 className="text-primary" style={{marginBottom: '1rem', fontSize: '1.2rem'}}>Diplomatic Hub</h3>
              <p className="text-muted" style={{fontSize: '0.95rem', lineHeight: '1.6'}}>
                Nairobi hosts the global headquarters of the UN Environment Programme (UNEP) and UN-Habitat, making it one of only four UN headquarters cities worldwide. With its increasing geopolitical leadership, Kenya is a natural convening ground.
              </p>
            </div>
          </div>

          <div className="grid-2" style={{marginBottom: '5rem'}}>
            <div>
              <div className="badge" style={{marginBottom: '1rem'}}>The Venue</div>
              <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Bomas of Kenya</h2>
              <div className="glass-panel" style={{padding: '2rem'}}>
                <p className="text-muted" style={{marginBottom: '1.5rem'}}>
                  The REAIM 2027 Summit takes place at the iconic Bomas of Kenya, a premier cultural and conference facility celebrating Kenya's diverse heritage. Located in a lush setting just outside the city center, it provides an inspiring backdrop for global dialogue.
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-graphite)'}}>
                    <MapPin size={16} className="text-accent" /> Forest Edge Road, off Lang'ata Road, Nairobi
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-graphite)'}}>
                    <MapPin size={16} className="text-accent" /> 18 km from Jomo Kenyatta International Airport
                  </div>
                </div>
              </div>
            </div>
            <div style={{position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden'}}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/bomas.webp`} alt="Bomas of Kenya" fill style={{objectFit: 'cover'}} />
            </div>
          </div>

          <div style={{marginBottom: '5rem'}}>
            <div className="badge" style={{marginBottom: '1rem'}}>Beyond the Summit</div>
            <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Discover Kenya</h2>
            <div className="glass-panel" style={{padding: '3rem'}}>
              <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8'}}>
                Kenya is home to eight UNESCO World Heritage Sites, from the ancient Swahili trading towns of Lamu to the flamingo-lined shores of Lake Turkana. Its landscapes span equatorial glaciers, arid savannahs, lush highlands, and pristine coastline - a rich tapestry of natural heritage unmatched in its diversity.
              </p>
              <p className="text-muted" style={{fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8'}}>
                Nairobi itself is the only capital city in the world with a national park within its borders - Nairobi National Park, where lions, giraffes, and rhinos roam against a backdrop of skyscrapers.
              </p>
              <div style={{padding: '2rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--color-accent-gold)'}}>
                <h3 className="text-kenya-green" style={{marginBottom: '0.5rem'}}>Karibu Kenya!</h3>
                <p className="text-muted" style={{marginBottom: '1.5rem'}}>Kenya says to you all 'Welcome Home!' Discover more of Kenya beyond your stay by exploring Magical Kenya, the official tourism guide.</p>
                <a href="https://magicalkenya.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{borderColor: 'var(--color-accent-gold)', color: 'var(--color-accent-gold)'}}>
                  Visit Magical Kenya <ArrowRight size={16} style={{marginLeft: '0.5rem'}}/>
                </a>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <div style={{position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '340px', border: '1px solid var(--color-border)'}}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/nairobi-park.webp`} alt="Kenya Wildlife Experience Poster" fill style={{objectFit: 'cover'}} />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,27,61,0.85) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '2rem'}}>
                <span className="badge badge-green" style={{alignSelf: 'flex-start', marginBottom: '0.5rem'}}>Magical Kenya Official</span>
                <h3 style={{color: '#fff', fontSize: '1.5rem', margin: 0}}>Wildlife Experience & Safari Guide</h3>
              </div>
            </div>

            <div>
              <div className="badge" style={{marginBottom: '1rem'}}>Discover Kenya</div>
              <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Visitor Brochure & Travel Guide</h2>
              <div className="glass-panel" style={{padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                <p className="text-muted" style={{fontSize: '1rem', lineHeight: '1.7', margin: 0}}>
                  Explore Kenya's world-renowned national parks, pristine beaches, and cultural heritage sites with the official Kenya Tourism Board visitor brochure and safari planner.
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <a href="https://magicalkenya.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{justifyContent: 'center'}}>
                    Download Visitor Brochure (PDF)
                  </a>
                  <a href="https://magicalkenya.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{justifyContent: 'center'}}>
                    Explore Official Kenya Tourism Guide
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}

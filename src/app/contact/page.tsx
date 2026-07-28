'use client';
import styles from '../attend/page.module.css';

export default function Contact() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Contact Us</h1>
          <p className="text-accent" style={{fontSize: '1.25rem', marginTop: '0.5rem'}}>REAIM 2027 Secretariat — Ministry of Defence, Republic of Kenya</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Department Contacts</h2>
              <div className="glass-panel" style={{padding: '1.5rem', overflowX: 'auto'}}>
                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                  <thead>
                    <tr style={{borderBottom: '1px solid var(--color-border)', textAlign: 'left'}}>
                      <th style={{padding: '0.75rem', color: 'var(--color-primary)'}}>Purpose</th>
                      <th style={{padding: '0.75rem', color: 'var(--color-primary)'}}>Email Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>General Inquiries</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:reaim2027@mod.go.ke" className="text-accent">reaim2027@mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Registration</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:registration@reaim2027.mod.go.ke" className="text-accent">registration@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Programme</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:programme@reaim2027.mod.go.ke" className="text-accent">programme@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Invitation</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:invitation@reaim2027.mod.go.ke" className="text-accent">invitation@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Ministerial</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:roundtable@reaim2027.mod.go.ke" className="text-accent">roundtable@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Information</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:information@reaim2027.mod.go.ke" className="text-accent">information@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Media</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:media@reaim2027.mod.go.ke" className="text-accent">media@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr style={{borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
                      <td style={{padding: '0.75rem'}}>Logistics</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:logistics@reaim2027.mod.go.ke" className="text-accent">logistics@reaim2027.mod.go.ke</a></td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem'}}>Security</td>
                      <td style={{padding: '0.75rem'}}><a href="mailto:security@reaim2027.mod.go.ke" className="text-accent">security@reaim2027.mod.go.ke</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h2 className="text-primary" style={{marginBottom: '1.5rem'}}>Secretariat Office</h2>
              <div className="glass-panel" style={{padding: '2rem'}}>
                <h3 className="text-primary" style={{marginBottom: '0.5rem'}}>Ministry of Defence</h3>
                <p className="text-muted">Republic of Kenya</p>
                <p className="text-muted" style={{marginTop: '1.5rem', lineHeight: 1.6}}>
                  For urgent matters related to your delegation, please contact your assigned Liaison Officer or reach out to the Registration team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

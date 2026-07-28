import styles from '../registration/page.module.css';

export const metadata = {
  title: 'Contact Us | REAIM 2027',
  description: 'Contact the REAIM 2027 Secretariat.',
};

export default function Contact() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <div className="container">
          <h1 className="text-primary">Contact Us</h1>
          <p className="text-accent">REAIM 2027 Secretariat - Ministry of Defence, Republic of Kenya</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2 className="text-primary">Department Contacts</h2>
              <table className={styles.badgeTable}>
                <thead>
                  <tr>
                    <th>Purpose</th>
                    <th>Email Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>General Inquiries</td><td>reaim2027@mod.go.ke</td></tr>
                  <tr><td>Registration</td><td>registration@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Programme</td><td>programme@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Invitation</td><td>invitation@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Ministerial</td><td>roundtable@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Information</td><td>information@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Media</td><td>media@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Logistics</td><td>logistics@reaim2027.mod.go.ke</td></tr>
                  <tr><td>Security</td><td>security@reaim2027.mod.go.ke</td></tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h2 className="text-primary">Secretariat Office</h2>
              <div className={styles.infoCard}>
                <h3>Ministry of Defence</h3>
                <p className="text-muted">Republic of Kenya</p>
                <p className="text-muted" style={{marginTop: '1rem'}}>
                  For urgent matters related to your delegation, please contact your assigned Liaison Officer or reach out to the Registration team.
                </p>
                <div style={{marginTop: '2rem'}}>
                  <strong>Official Website:</strong><br />
                  <a href="https://www.reaim2027.mod.go.ke" className="text-accent">www.reaim2027.mod.go.ke</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


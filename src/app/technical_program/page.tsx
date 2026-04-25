export const metadata = { title: 'Technical Program | COMSNETS 2027' };

export default function TechnicalProgramPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container-fluid" style={{ marginTop: '20px', marginBottom: '40px' }}>
        <div className="content-card" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', margin: '20px auto', overflow: 'hidden', maxWidth: '1400px', paddingBottom: '20px' }}>
          <div className="card-header" style={{ background: '#0f172a', color: '#ffffff', padding: '35px 20px', textAlign: 'center' }}>
            <h2 style={{ fontWeight: 800, fontSize: '30px', marginBottom: '5px', color: '#ffffff' }}>TECHNICAL PROGRAM</h2>
            <p style={{ color: '#ffffff', opacity: 0.9 }}>COMSNETS 2027</p>
          </div>

          <ul className="nav nav-pills custom-nav" style={{ margin: '20px 10px', borderBottom: '2px solid #ddd', paddingBottom: '10px', listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            <li><a href="/schedule" style={{ borderRadius: '50px', backgroundColor: '#f8f9fa', color: '#0f172a', border: '1px solid #e2e8f0', fontWeight: 600, padding: '10px 20px', display: 'inline-block', textDecoration: 'none' }}>Conference Schedule (Day-wise)</a></li>
            <li className="active"><a href="/technical_program" style={{ borderRadius: '50px', backgroundColor: '#2563eb', color: 'white', border: '1px solid #2563eb', fontWeight: 600, padding: '10px 20px', display: 'inline-block', textDecoration: 'none' }}>Technical Program</a></li>
            <li><a href="/schedule?view=single" style={{ borderRadius: '50px', backgroundColor: '#f8f9fa', color: '#0f172a', border: '1px solid #e2e8f0', fontWeight: 600, padding: '10px 20px', display: 'inline-block', textDecoration: 'none' }}>Switch to Single Pageview</a></li>
          </ul>

          <div id="edas-content" className="border content-bg" style={{ margin: '20px', border: 'none' }}>
            <div className="sp-content">
              <p style={{ color: '#64748b', fontStyle: 'italic' }}>(All times will be mentioned in IST time zone.)</p>

              <h5>Presentation Duration</h5>
              <ul>
                <li><h6>Invited talk: 20 mins including Q&amp;A</h6></li>
                <li><h6>Regular papers (Accepted as 20 minutes talk): 20 minute talk (Plan for 15 minutes + 5 minutes Q&amp;A)</h6></li>
                <li><h6>Papers accepted as 10 minutes talk: 10 minute talk (Plan for 7-8 minute max + 2 minutes Q&amp;A)</h6></li>
              </ul>
              <hr />

              <div className="tba-container" style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '20px 0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>Technical Program</h2>
                <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  The full technical program for COMSNETS 2027 will be published once paper acceptances and session assignments are finalised. Stay tuned for updates.
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3>Previous Programs</h3>
                <p>
                  View the technical program from <a href="/archive/2026/technical_program.php" style={{ color: '#3b82f6', fontWeight: 600 }}>COMSNETS 2026</a> and previous years in the <a href="/archive" style={{ color: '#3b82f6', fontWeight: 600 }}>archive</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

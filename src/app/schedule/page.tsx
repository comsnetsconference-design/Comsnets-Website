export const metadata = { title: 'Schedule | COMSNETS 2027' };

export default function SchedulePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Schedule</h1>

              <div style={{ textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '40px 0' }}>
                <div style={{ fontSize: '80px', color: '#3b82f6', opacity: 0.3, marginBottom: '30px' }}>
                  <i className="fa fa-calendar"></i>
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>Conference Schedule</h2>
                <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  The detailed schedule for COMSNETS 2027 will be published soon.<br />
                  Stay tuned for updates.
                </p>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginTop: '30px', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', color: 'white', padding: '12px 30px', borderRadius: '50px', fontSize: '20px', fontWeight: 700, marginBottom: '15px' }}>
                  <i className="fa fa-calendar-check-o"></i> January 5-9, 2027
                </div>
                <h3 style={{ color: '#1e293b', margin: '20px 0 10px 0' }}>Conference Dates</h3>
                <p style={{ color: '#64748b', marginBottom: '25px' }}>
                  <i className="fa fa-map-marker"></i> Chancery Pavilion Hotel, Bengaluru, India
                </p>

                <hr style={{ border: 'none', borderTop: '2px solid #e2e8f0', margin: '30px 0' }} />

                <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>Previous Schedules</h3>
                <p style={{ color: '#64748b' }}>
                  View the schedule from <a href="/archive/2026/schedule.php" style={{ color: '#3b82f6' }}>COMSNETS 2026</a> and previous years in the <a href="/previous_comsnets" style={{ color: '#3b82f6' }}>archive</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

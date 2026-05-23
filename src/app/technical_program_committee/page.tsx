export const metadata = { title: 'Technical Program Committee | COMSNETS 2027' };
export default function TPCPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Technical Program Committee</h1>

              <div style={{ textAlign: 'center', padding: '80px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '40px 0' }}>
                <div style={{ fontSize: '80px', color: '#3b82f6', opacity: 0.3, marginBottom: '30px' }}>
                  <i className="fa fa-list-alt"></i>
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>Technical Program Committee</h2>
                <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  The technical program committee for COMSNETS 2027 will be announced soon.<br />
                  Stay tuned for updates.
                </p>
              </div>

              <div style={{ background: 'white', padding: '30px', borderRadius: '12px', marginTop: '30px' }}>
                <h3 style={{ color: '#1e293b', marginBottom: '20px' }}>Previous Committees</h3>
                <p style={{ color: '#64748b' }}>
                  View the program committee from <a href="/archive/2026/technical_program_committee.php" style={{ color: '#3b82f6' }}>COMSNETS 2026</a> and previous years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

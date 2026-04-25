export const metadata = { title: 'Conference Summary | COMSNETS 2027' };

export default function ConferenceSummaryPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Conference Summary</h1>
              {/* DISABLED: Source PHP only had "Page will be updated post the conference." with the
                  remaining content commented out (a 2016 day-by-day session summary accordion).
                  TODO: fill content for 2027 post-conference. */}
              <div className="tba-container" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <i className="fa fa-file-text-o" style={{ fontSize: '64px', color: '#3b82f6', opacity: 0.3, marginBottom: '20px' }}></i>
                <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>Coming Soon</h2>
                <p style={{ fontSize: '16px', color: '#64748b' }}>The conference summary will be published after COMSNETS 2027.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

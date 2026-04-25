export const metadata = { title: 'Watch COMSNETS LIVE | COMSNETS 2027' };

export default function LivePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Watch COMSNETS <span style={{ color: '#dc2626' }}>LIVE</span>
              </h1>

              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '30px 0' }}>
                <div style={{ fontSize: '64px', color: '#3b82f6', opacity: 0.3, marginBottom: '20px' }}>
                  <i className="fa fa-video-camera"></i>
                </div>
                <h2 style={{ fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>Coming Soon</h2>
                <p style={{ fontSize: 18, color: '#64748b', maxWidth: 640, margin: '0 auto' }}>
                  The COMSNETS 2027 livestream schedule will be published as the conference approaches. Subscribe to email updates to be notified when keynote talks go live.
                </p>
              </div>

              {/* TODO: fill content for 2027.
                  Legacy live.php (453 lines) listed COMSNETS 2021 keynote/industry-keynote schedule
                  with date, time, speaker, affiliation, YouTube embed, and social-share buttons.
                  Re-create the schedule once 2027 streaming details are confirmed. */}

              <p>
                In the meantime, please refer to the{' '}
                <a href="/keynote_speakers">keynote speakers</a> page for upcoming speakers and the{' '}
                <a href="/program_at_a_glance">program-at-a-glance</a> for session timing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

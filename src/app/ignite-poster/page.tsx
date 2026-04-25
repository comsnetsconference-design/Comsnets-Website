export const metadata = { title: 'Entrepreneur Ignite Summit Poster | COMSNETS 2027' };

export default function IgnitePosterPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneur Ignite Summit &mdash; Poster</h1>
              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px' }}>
                <div style={{ fontSize: '64px', color: '#3b82f6', opacity: 0.3, marginBottom: '20px' }}>
                  <i className="fa fa-rocket"></i>
                </div>
                <h2 style={{ fontWeight: 700, color: '#1e293b' }}>Coming Soon</h2>
                <p style={{ color: '#64748b', maxWidth: 640, margin: '0 auto' }}>
                  The Entrepreneur Ignite Summit poster and chair line-up for COMSNETS 2027 will be published closer to the event.
                </p>
              </div>
              {/* TODO: fill content for 2027 (poster image, summit chairs, registration links). */}
              {/* Reference: archived 2024 page included poster image (assets/images/ignite2024/igniteposter.png),
                  Live Schedule Changes link, registration buttons, and summit chairs:
                  Somali Chaterji (Purdue), Aloknath De (Samsung R&D), Anupam Rastogi (VC),
                  Amit Saha (Cisco Meraki), Gaurav Vaid (Venturis Group). */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

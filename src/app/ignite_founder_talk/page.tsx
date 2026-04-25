export const metadata = { title: 'Ignite Founder Talk | COMSNETS 2027' };

export default function IgniteFounderTalkPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Ignite Founder Talk</h1>
              {/* TODO: refresh founder speaker for 2027 */}
              <div className="container" style={{ fontFamily: "'Comic Neue', cursive", fontWeight: 'bold' }}>
                <div className="image-section">
                  <img src="/assets/images/ignite2024/rahul_narayan.png" alt="Rahul Narayan" style={{ width: '200px', height: '200px' }} />
                  <p>
                    <u><a href="https://www.linkedin.com/in/rahulnarayan/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Rahul Narayan</a></u>
                  </p>
                </div>
                <div className="details-section">
                  <p>NWO is developing a clean-sheet, all-electric, autonomous PRT (Personal Rapid Transport) system that operates on a dedicated, elevated corridor — ideally positioned to address the last/first-mile connectivity challenge for high-density urban clusters such as airports, bus terminals, and downtown retail zones.</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

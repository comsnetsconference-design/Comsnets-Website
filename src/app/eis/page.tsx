export const metadata = { title: 'Entrepreneur Ignite Summit (EIS) 2027 | COMSNETS 2027' };

export default function EISPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Entrepreneur Ignite Summit (EIS) 2027</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h3 className="section-title">Special Panel</h3>
                  <div style={{ background: '#fff', border: '1px solid #dde7f3', borderRadius: '12px', padding: '24px', marginBottom: '30px', boxShadow: '0 2px 12px rgba(30,65,101,.05)' }}>
                    <h4 style={{ color: '#1E4165', fontWeight: 'bold', fontSize: '1.3em', marginTop: 0 }}>From Algorithms to Agents: What Should the Next Great Founders Build?</h4>
                    <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '15px' }}><em>Where VCs, Founders, and Academics Think the Smart Money Is Going</em></p>
                    <div className="text-justify" style={{ marginBottom: '15px', lineHeight: 1.6, color: '#444' }}>
                      AI agents are shifting the center of gravity in computer science. The prize is no longer the biggest model or the cleverest benchmark. It is the systems that move markets, reshape industries, and operate in the real world, along with the founders, investors, and researchers who will build them. So, what should the next generation build? Which technical foundations still matter when the model layer is commoditizing every quarter? Where are the biggest opportunities hiding: in networks, in data centers, in the orchestration layer, in vertical agents that reshape entire industries? And how do we prepare students not just to publish papers, but to launch products, start companies, and lead the next wave of innovation? With perspectives from venture capital, startups, academia, and industry, this panel tackles what comes next!
                    </div>
                    <h3 className="section-title" style={{ marginTop: '26px' }}>Organizer</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                      <img src="/assets/images/somali.jpg" alt="Prof. Somali Chaterji" className="round-photo" />
                      <div className="member-name">Prof. Somali Chaterji</div>
                    </div>

                    <h3 className="section-title">Panelists</h3>
                    <p className="tba-note">On their way!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

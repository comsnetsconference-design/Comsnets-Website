export const metadata = { title: 'Entrepreneur Ignite Summit (EIS) 2027 | COMSNETS 2027' };

export default function EISPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
                <h1 className="page-title" style={{ color: '#004286', fontWeight: 700, borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneur Ignite Summit (EIS) 2027</h1>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <h3 style={{ color: '#004286', marginBottom: '20px' }}>Special Panel</h3>
                  <div style={{ background: '#fff', border: '1px solid #ddd', borderLeft: '5px solid #b30000', padding: '20px', marginBottom: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                    <h4 style={{ color: '#b30000', fontWeight: 'bold', fontSize: '1.3em', marginTop: 0 }}>From Algorithms to Agents: What Should the Next Great Founders Build?</h4>
                    <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '15px' }}><em>Where VCs, Founders, and Academics Think the Smart Money Is Going</em></p>
                    <div className="text-justify" style={{ marginBottom: '15px', lineHeight: 1.6, color: '#444' }}>
                      AI agents are shifting the center of gravity in computer science. The prize is no longer the biggest model or the cleverest benchmark. It is the systems that move markets, reshape industries, and operate in the real world, along with the founders, investors, and researchers who will build them. So, what should the next generation build? Which technical foundations still matter when the model layer is commoditizing every quarter? Where are the biggest opportunities hiding: in networks, in data centers, in the orchestration layer, in vertical agents that reshape entire industries? And how do we prepare students not just to publish papers, but to launch products, start companies, and lead the next wave of innovation? With perspectives from venture capital, startups, academia, and industry, this panel tackles what comes next!
                    </div>
                    <div style={{ marginTop: '30px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
                      <h3 style={{ color: '#2c3e50', fontWeight: 600, marginTop: 0, marginBottom: '15px', fontSize: '20px' }}>Organizer</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#fdfdfd', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px', marginBottom: '20px' }}>
                        <img src="/assets/images/somali.jpg" alt="Prof. Somali Chaterji" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #337ab7' }} />
                        <div>
                          <h3 style={{ marginTop: 0, marginBottom: '5px', color: '#2c3e50' }}>Prof. Somali Chaterji</h3>
                        </div>
                      </div>

                      <h3 style={{ color: '#2c3e50', fontWeight: 600, marginTop: 0, marginBottom: '15px', fontSize: '20px' }}>Panelists</h3>
                      <div>
                        <p style={{ fontSize: '1.1em', color: '#555' }}><strong>On their way!</strong></p>
                      </div>
                    </div>
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

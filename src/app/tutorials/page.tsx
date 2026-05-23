export const metadata = { title: 'Tutorials | COMSNETS 2027' };

export default function TutorialsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Tutorials</h1>

              {/* DISABLED: source PHP calls disable_page(). Tutorials for COMSNETS 2027 will be announced soon. */}
              <div className="tba-container" style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '20px 0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>Tutorials</h2>
                <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  Tutorial information for COMSNETS 2027 will be announced soon. Stay tuned for updates.
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3>Previous Tutorials</h3>
                <p>
                  View tutorials from <a href="/archive/2026/tutorials.php" style={{ color: '#3b82f6', fontWeight: 600 }}>COMSNETS 2026</a> and previous years in the <a href="/archive" style={{ color: '#3b82f6', fontWeight: 600 }}>archive</a>.
                </p>
              </div>

              {/*
                Original COMSNETS 2023 tutorials (preserved as JSX comment for future reference):
                - Toward Automated Security Risk Assessment - Dr Dan Dongseong Kim (University of Queensland, Australia)
                - Identification of Causal Dependencies in Multivariate Time Series - Sujoy Roychowdhury, Serene Banerjee, Ranjani H.G. (Ericsson, India)
                - 5G Architecture Overview, Software Stack and Use Cases - Atahar Khan, Satya Priyo Dhar, Ramakrishnan Shanmugasundaram (Cisco, India)
                - Deep Learning based Radio Frequency Signal Classification: Hands-on - Prabhu Chandhar and Sathish Babu (Chandhar Research Lab, India)
                - 5G Non-Terrestrial Networks - Sumit Kumar and Jorge Querol (University of Luxembourg, Luxembourg)
                - Cloud-native Networking Deep Dive - Chander Govindarajan and Priyanka Naik (IBM Research, India)
                - OTFS Aided Cell-free Massive MIMO for Beyond 5G - Prem Singh (IIIT Bangalore) and Ekant Sharma (IIT Roorkee)
                Tutorial Co-Chairs (2023): Vireshwar Kumar (IIT Delhi), Sougata Sen (BITS Goa)
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

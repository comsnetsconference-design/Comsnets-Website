export const metadata = { title: 'TASIR Workshop | COMSNETS 2027' };

export default function TASIRWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>TASIR Workshop: Testbeds for Advanced Systems Implementation and Research</h1>

              {/* DISABLED: source PHP calls disable_page(). Workshop details for COMSNETS 2027 will be announced soon. */}
              <div className="tba-container" style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '20px 0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>TASIR Workshop</h2>
                <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                  Information about the TASIR Workshop for COMSNETS 2027 will be announced soon. Stay tuned for updates.
                </p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3>Previous Editions</h3>
                <p>
                  View prior editions in the <a href="/archive" style={{ color: '#3b82f6', fontWeight: 600 }}>archive</a>.
                </p>
              </div>

              {/*
                Preserved reference (COMSNETS 2023 TASIR Workshop, 8 January 2023, Venue: SIGMA 1):
                Workshop Co-Chairs: Serge Fdida (Sorbonne Université, France), Manu Gosain (Northeastern University, US).
                Keynote Speakers (2023): Dr Antony Franklin, Dr Subhramoy Mohanti, Dr Abdul Kayum.
                Topics: testbeds for advanced wireless systems, mmWave/THz, integrated sensing and communication,
                multi-radio management, digital twins, edge/fog infrastructures, TaaS methodology.
                CFP page limit: 6 pages IEEE format. Submission via EDAS (https://edas.info/N29765).
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

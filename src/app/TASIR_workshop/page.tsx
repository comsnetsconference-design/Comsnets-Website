export const metadata = { title: 'TASIR Workshop | COMSNETS 2027' };

export default function TASIRWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>TASIR Workshop: Testbeds for Advanced Systems Implementation and Research</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              {/* DISABLED: source PHP calls disable_page(). Workshop details for COMSNETS 2027 will be announced soon. */}
              <div className="coming-soon">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h4>Coming Soon</h4>
                <p>Information about the TASIR Workshop for COMSNETS 2027 will be announced soon. Stay tuned for updates.</p>
              </div>

              <div style={{ marginTop: '30px' }}>
                <h3 className="section-title">Previous Editions</h3>
                <p>View prior editions in the <a href="/archive">archive</a>.</p>
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

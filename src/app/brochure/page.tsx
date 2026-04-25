export const metadata = { title: 'Brochure | COMSNETS 2027' };

export default function BrochurePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Brochure</h1>
              {/* TODO: replace with the COMSNETS 2027 brochure once available. Currently shows the 2024 brochure as in the legacy site. */}
              <h4>COMSNETS 2024 Brochure</h4>
              <div className="alert text-center text-white col-md-12">
                <embed src="/docs/brochure2024.pdf" width="100%" height="1000" type="application/pdf" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

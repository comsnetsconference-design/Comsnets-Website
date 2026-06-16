export const metadata = { title: 'Telecom Technology Development Fund | COMSNETS 2027' };

export default function TTDFPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Telecom Technology Development Fund</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3 className="section-title">Telecom Technology Development Fund Brochure</h3>
                <embed src="/docs/TTDF_brochure.pdf" type="application/pdf" style={{ width: '100%', minHeight: '900px', border: '1px solid #dde7f3', borderRadius: '8px' }} />
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3 className="section-title">Telecom Technology Development Fund Guidelines</h3>
                <embed src="/docs/TTDF_Guidelines.pdf" type="application/pdf" style={{ width: '100%', minHeight: '900px', border: '1px solid #dde7f3', borderRadius: '8px' }} />
              </div>

              <div style={{ marginTop: '28px' }}>
                <h3 className="section-title">Digital Communication Innovation Square</h3>
                <embed src="/docs/DCIS_TTDF_BharatNet_Portal.pdf" type="application/pdf" style={{ width: '100%', minHeight: '900px', border: '1px solid #dde7f3', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

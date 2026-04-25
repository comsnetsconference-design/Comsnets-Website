export const metadata = { title: 'Telecom Technology Development Fund | COMSNETS 2027' };

export default function TTDFPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Telecom Technology Development Fund</h1>

              <div className="col-lg-12"><br /><h3><center>Telecom Technology Development Fund Brochure</center></h3>
                <div className="alert text-center text-white col-md-12">
                  <embed src="/docs/TTDF_brochure.pdf" width="100%" height="500" type="application/pdf" style={{ width: '100%', height: '100%', minHeight: '1000px' }} />
                </div>
              </div>

              <div className="col-lg-12"><br /><h3><center>Telecom Technology Development Fund Guidelines</center></h3>
                <div className="alert text-center text-white col-md-12">
                  <embed src="/docs/TTDF_Guidelines.pdf" width="100%" height="500" type="application/pdf" style={{ width: '100%', height: '100%', minHeight: '1000px' }} />
                </div>
              </div>

              <div className="col-lg-12"><br /><h3><center>Digital Communication Innovation Square</center></h3>
                <div className="alert text-center text-white col-md-12">
                  <embed src="/docs/DCIS_TTDF_BharatNet_Portal.pdf" width="100%" height="500" type="application/pdf" style={{ width: '100%', height: '100%', minHeight: '1000px' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

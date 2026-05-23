export const metadata = { title: 'COMSNETS in Media | COMSNETS 2027' };

export default function MediaPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>COMSNETS in Media</h1>
              <h4>COMSNETS 2024 in Times of India</h4>
              <div style={{ background: '#123456', textAlign: 'center', margin: 0, padding: '0.1em', fontSize: '20px', fontWeight: 800 }}>
                <h5 style={{ color: '#FFFFFF', margin: 0 }}>
                  <strong>COMSNETS 2024 Coverage in Times of India!</strong>
                </h5>
                <div className="carousel">
                  <div style={{ width: '60vw', height: 'auto', margin: 'auto', paddingBottom: '10px' }}>
                    <object data="/NEWS.pdf" type="application/pdf" style={{ width: '100%', height: '500px' }}>
                      <embed src="/NEWS.pdf" type="application/pdf" style={{ width: '100%', height: '500px' }} />
                      <p>Your browser does not support PDFs. Please download the PDF to view it: <a href="/docs/document.pdf">Download PDF</a>.</p>
                    </object>
                  </div>
                </div>
              </div>
              {/* TODO: replace 2024 coverage with 2027 media when available */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

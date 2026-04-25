export const metadata = { title: 'QCom(P) Workshop: Workshop on Quantum Technologies (WQT) | COMSNETS 2027' };

export default function QComPPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>QCom(P) Workshop: Workshop on Quantum Technologies (WQT)</h1>
              <p style={{ fontStyle: 'italic', color: '#666' }}>
                Note: this route was renamed from <code>QCom(P)</code> to <code>QCom-P</code> because parentheses in Next.js folder names are reserved for route groups.
              </p>
              <div style={{ background: '#f7f7f7', borderRadius: '8px', padding: '40px', textAlign: 'center', marginTop: '20px' }}>
                <h3 style={{ marginBottom: '12px' }}>Coming Soon</h3>
                <p style={{ color: '#666', marginBottom: '0' }}>
                  Updates for COMSNETS 2027 will be available here. The 2024 edition&rsquo;s schedule, accepted papers, and speakers are preserved in the source code.
                </p>
              </div>
              {/* DISABLED: PHP source had disable_page() call. Original 2024 archive content (538-line schedule + accepted_paper_data import + speakers_data import) preserved at /tmp/prodaudit/QCom(P).php — port full content here when 2027 program is finalized. Event Date 2024: Sunday, 7 January 2024. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

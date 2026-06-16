export const metadata = { title: 'QCom(P) Workshop: Workshop on Quantum Technologies (WQT) | COMSNETS 2027' };

export default function QComPPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>QCom(P) Workshop: Workshop on Quantum Technologies (WQT)</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>
              <div className="coming-soon">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h4>Coming Soon</h4>
                <p>Updates for COMSNETS 2027 will be available here. The 2024 edition&rsquo;s schedule, accepted papers, and speakers are preserved in the source code.</p>
              </div>
              {/* DISABLED: PHP source had disable_page() call. Original 2024 archive content (538-line schedule + accepted_paper_data import + speakers_data import) preserved at /tmp/prodaudit/QCom(P).php — port full content here when 2027 program is finalized. Event Date 2024: Sunday, 7 January 2024. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

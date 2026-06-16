export const metadata = { title: 'IMOBILE AIMS Workshop | COMSNETS 2027' };
export default function ImobilePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>The 1st ACM International Workshop on Autonomous and Intelligent Mobile Systems (IMOBILE AIMS)</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <div className="coming-soon">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h4>Coming Soon</h4>
                <p>Event logistics, timing, and location for COMSNETS 2027 will be updated shortly.</p>
              </div>

              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '26px' }}>
                <div style={{ textAlign: 'center' }}>
                  <a href="https://www.linkedin.com/company/imobile-acm-chapter/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/linkedin.png" alt="LinkedIn" style={{ height: '48px' }} /></a>
                  <p style={{ margin: '6px 0 0' }}><a href="https://www.linkedin.com/groups/10434782/" target="_blank" rel="noopener noreferrer">Join Group</a></p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <a href="https://www.facebook.com/groups/2012605552379222/about/" target="_blank" rel="noopener noreferrer"><img src="/assets/images/social_media/facebook.png" alt="Facebook" style={{ height: '48px' }} /></a>
                  <p style={{ margin: '6px 0 0' }}><a href="https://www.facebook.com/groups/2012605552379222/about/" target="_blank" rel="noopener noreferrer">Join Group</a></p>
                </div>
              </div>

              <h3 className="section-title">Workshop Co-Chairs</h3>
              <div className="member-grid">
                <div className="member-card">
                  <img src="/assets/images/committee_2020/sandip_C.jpg" alt="Sandip Chakraborty" className="member-photo" />
                  <div className="member-name"><a href="http://cse.iitkgp.ac.in/~sandipc/" target="_blank" rel="noopener noreferrer">Sandip Chakraborty</a></div>
                  <p className="member-affil">IIT Kharagpur, India</p>
                </div>
                <div className="member-card">
                  <img src="/assets/images/committee_2020/prashanta_misra.png" alt="Prasant Misra" className="member-photo" />
                  <div className="member-name"><a href="https://www.linkedin.com/in/prasantmisra/" target="_blank" rel="noopener noreferrer">Prasant Misra</a></div>
                  <p className="member-affil">TCS Research and Innovation, Bangalore</p>
                </div>
                <div className="member-card">
                  <img src="/assets/images/committee_2020/amit.jpg" alt="Amit Kumar Saha" className="member-photo" />
                  <div className="member-name"><a href="https://www.linkedin.com/in/amsaha/" target="_blank" rel="noopener noreferrer">Amit Kumar Saha</a></div>
                  <p className="member-affil">CISCO, India</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
                <img src="/assets/images/logos/acm_chapter_sym-hires.jpg" alt="ACM Chapter" style={{ maxHeight: '70px' }} />
                <img src="/assets/images/logos/ACM_ChapterEv_v1a.jpg" alt="ACM Chapter Event" style={{ maxHeight: '70px' }} />
                <a href="https://imobile.acm.org" target="_blank" rel="noopener noreferrer"><img src="/assets/images/logos/imobile_logo.png" alt="imobile" style={{ maxHeight: '70px' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

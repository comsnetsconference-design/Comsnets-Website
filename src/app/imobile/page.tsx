export const metadata = { title: 'IMOBILE AIMS Workshop | COMSNETS 2027' };
export default function ImobilePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>The 1st ACM International Workshop on Autonomous and Intelligent Mobile Systems (IMOBILE AIMS)</h1>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3>Event Logistics</h3>
                </div>
                <div className="panel-body">
                  <p><strong>Will be updated shortly!</strong></p>
                </div>
              </div>
              <br />

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3>Location</h3>
                </div>
                <div className="panel-body">
                  <p><b>Event Timing:</b> TBD</p>
                  <p><b>Event Location:</b> Will be updated shortly.</p>
                </div>
              </div>
              <br />

              <div className="panel panel-default">
                <div className="panel-body">
                  <div className="col-sm-6 col-md-6">
                    <a href="https://www.linkedin.com/company/imobile-acm-chapter/" target="_blank" rel="noopener noreferrer" className="thumbnail">
                      <img src="/assets/images/social_media/linkedin.png" className="img-responsive" alt="linkedin" />
                    </a>
                    <div className="caption">
                      <p style={{ textAlign: 'center' }}><a href="https://www.linkedin.com/groups/10434782/" target="_blank" rel="noopener noreferrer">Join Group</a></p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <a href="https://www.facebook.com/groups/2012605552379222/about/" target="_blank" rel="noopener noreferrer" className="thumbnail">
                      <img src="/assets/images/social_media/facebook.png" className="img-responsive" alt="facebook" />
                    </a>
                    <div className="caption">
                      <p style={{ textAlign: 'center' }}><a href="https://www.facebook.com/groups/2012605552379222/about/" target="_blank" rel="noopener noreferrer">Join Group</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">Workshop Co-Chairs</h3>
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <img src="/assets/images/committee_2020/sandip_C.jpg" className="thumbnail" alt="Sandip Chakraborty" />
                    <div className="caption">
                      <h4><a href="http://cse.iitkgp.ac.in/~sandipc/" target="_blank" rel="noopener noreferrer">Sandip Chakraborty</a></h4>
                      <p>IIT Kharagpur, India</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <img src="/assets/images/committee_2020/prashanta_misra.png" className="thumbnail" alt="Prasant Misra" />
                    <div className="caption">
                      <h4><a href="https://www.linkedin.com/in/prasantmisra/" target="_blank" rel="noopener noreferrer">Prasant Misra</a></h4>
                      <p>TCS Research and Innovation, Bangalore</p>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <img src="/assets/images/committee_2020/amit.jpg" className="thumbnail" alt="Amit Kumar Saha" />
                    <div className="caption">
                      <h4><a href="https://www.linkedin.com/in/amsaha/" target="_blank" rel="noopener noreferrer">Amit Kumar Saha</a></h4>
                      <p>CISCO, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <br /><br />

              <div className="logos center-block">
                <div className="row">
                  <div className="col-sm-1 col-md-1"></div>
                  <div className="col-sm-3 col-md-2">
                    <img src="/assets/images/logos/acm_chapter_sym-hires.jpg" className="thumbnail" alt="acm chapter" />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <img src="/assets/images/logos/ACM_ChapterEv_v1a.jpg" className="thumbnail" alt="acm chapter event" />
                  </div>
                  <div className="col-sm-6 col-md-4">
                    <a href="https://imobile.acm.org" target="_blank" rel="noopener noreferrer">
                      <img className="img-responsive" src="/assets/images/logos/imobile_logo.png" alt="imobile" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

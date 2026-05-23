export const metadata = { title: 'Ignite Startup Talk | COMSNETS 2027' };

export default function IgniteStartupTalkPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Ignite Startup Talk</h1>

              <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap" rel="stylesheet" />

              <div className="container" style={{ fontFamily: "'Comic Neue', cursive", fontWeight: 'bold' }}>
                <div className="image-section" style={{ textAlign: 'center' }}>
                  <img src="/assets/images/ignite2024/sruthi.png" alt="sruthi" style={{ width: '200px', height: '200px' }} />
                  <h4>
                    <u><a href="https://www.linkedin.com/in/sruthi-kannan/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Sruthi Kannan</a></u>
                  </h4>
                </div>
                <div className="details-section">
                  <p>
                    Title: 1+1&gt;2 : Co-creating for accelerating digital transformation
                    <br />Abstract: The session will delve into the pivotal role of collaborative innovation in accelerating digitization of India. With a special emphasis on sustainability, the attendees will gain insights into the journey of startups in harnessing digital solutions to empower and co-creating widespread impact. The session will also touch upon the challenges faced by startups in the digitization process and how collaborations with corporates can pave the way for overcoming hurdles and seizing growth opportunities.
                  </p>
                </div>
              </div>

              <hr />

              {/* TODO: fill content for 2027 -- speaker(s) to be announced */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

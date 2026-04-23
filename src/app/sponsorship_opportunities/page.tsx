import React from 'react';

export default function SponsorshipOpportunities() {
  const YEAR = "2027";
  
  return (
    <>
      {/* Subpage spacer */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white" style={{ padding: '30px' }}>
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Sponsorship Opportunities
              </h1>

              <p>Sponsorship of <strong>COMSNETS {YEAR}</strong> provides a company or an organization with a unique opportunity to increase its visibility and product awareness within a highly specialized, influential community.</p>
              
              <p>Acknowledgements of the sponsors, such as the company's name, product, and logo, will appear in the main page of COMSNETS, WWW Server and in all official documentation of the conference. If the company is the principal (Platinum) sponsor, it can elect to become one of the Co-organizers of the event.</p>
              
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '8px', margin: '20px 0', border: '1px solid #eee' }}>
                <p style={{ margin: 0 }}><strong>For COMSNETS sponsorship opportunities please contact:</strong><br />
                Rajeev Shorey: <a href="mailto:rajeevshorey@gmail.com">rajeevshorey@gmail.com</a><br />
                Giridhar Mandyam: <a href="mailto:mandyam@qti.qualcomm.com">mandyam@qti.qualcomm.com</a></p>
              </div>

              <p><small>*Note: USD rates apply to only foreign remittances.</small></p>

              <div className="sponsorship-tiers" style={{ marginTop: '30px' }}>
                
                <section style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: '#0056b3', borderLeft: '4px solid #0056b3', paddingLeft: '10px' }}>
                    <strong>Platinum Sponsorship (INR 8,00,000 or above, USD $10,000 or above)</strong>
                  </h4>
                  <ol>
                    <li>EIGHT full conference registrations</li>
                    <li>Exhibits space</li>
                    <li>A full page ad in the official Conference Proceedings</li>
                    <li>A full page ad in the final conference program</li>
                    <li>Inclusion of your company logo in all conference advertising</li>
                    <li>Prominent signage identifying company as a Platinum patron</li>
                    <li>Name and logo in our WWW advertising, linkage to your company website</li>
                    <li>Acknowledgement in opening address</li>
                  </ol>
                </section>

                <section style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: '#0056b3', borderLeft: '4px solid #0056b3', paddingLeft: '10px' }}>
                    <strong>Gold Sponsorship (INR 4,00,000 or above, USD $5,000 or above)</strong>
                  </h4>
                  <ol>
                    <li>SIX full conference registrations</li>
                    <li>Exhibits Space</li>
                    <li>A full page ad in the Conference Proceedings</li>
                    <li>A full page ad in the final conference program</li>
                    <li>Inclusion of your company logo in all conference advertising</li>
                    <li>Prominent signage identifying company as a Gold patron</li>
                    <li>Name and logo in our WWW advertising, linkage to your company website</li>
                    <li>Acknowledgement in opening address</li>
                  </ol>
                </section>

                <section style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: '#0056b3', borderLeft: '4px solid #0056b3', paddingLeft: '10px' }}>
                    <strong>Silver Sponsorship (INR 2,00,000 or above, USD $2,500 or above)</strong>
                  </h4>
                  <ol>
                    <li>FOUR full conference registrations</li>
                    <li>Exhibits Space</li>
                    <li>A quarter page ad in the final conference program</li>
                    <li>Inclusion of your logo in all conference advertising</li>
                    <li>Prominent signage identifying company as a Silver patron</li>
                    <li>Name and logo in our WWW advertising, linkage to your company website</li>
                    <li>Acknowledgement in opening address</li>
                  </ol>
                </section>

                <section style={{ marginBottom: '25px' }}>
                  <h4 style={{ color: '#0056b3', borderLeft: '4px solid #0056b3', paddingLeft: '10px' }}>
                    <strong>Bronze Sponsorship (INR 80,000 or above, USD $1,000 or above)</strong>
                  </h4>
                  <ol>
                    <li>TWO full conference registration</li>
                    <li>Exhibits Space</li>
                    <li>A quarter page ad in the final conference program</li>
                    <li>Inclusion of the logo in all conference advertising</li>
                    <li>Prominent signage identifying company as a Bronze patron</li>
                    <li>Name and logo in our WWW advertising, linkage to the company website</li>
                    <li>Acknowledgement in opening address</li>
                  </ol>
                </section>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

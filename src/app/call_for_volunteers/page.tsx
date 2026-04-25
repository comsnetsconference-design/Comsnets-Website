export const metadata = { title: 'Call for Volunteers | COMSNETS 2027' };

export default function CallForVolunteersPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Call for Volunteers</h1>

              <p>
                <strong>COMSNETS</strong> is a premier international conference dedicated to advances in Networking and Communications Systems. The conference is a yearly event for a world-class gathering of researchers from academia and industry, practitioners, and business leaders, providing a forum for discussing cutting edge research, and directions for new innovative business and technology.
                The conference has had a long and mutually beneficial relationship with its student volunteers in the past years many of whom have been absorbed in the industry including top multinational corporations. Here are some compelling reasons why you will want to volunteer at COMSNETS 2027.
              </p>

              <div className="panel panel-default">
                <div className="panel-body">
                  <h4>Why Volunteer?</h4>
                  <ul>
                    <li>Be a part of the <strong>FLAGSHIP</strong> conference of the country in the areas of Communications, Networks, Systems and Applications</li>
                    <li>Access to all conference sessions and workshops</li>
                    <li>A chance to mingle and share your ideas and network with thought leaders and gurus of the industry</li>
                    <li>Get to meet potential employers and future colleagues</li>
                    <li>Discuss and learn about cutting edge research/innovative business &amp; technology from thought leaders in the area gathered from all over the globe</li>
                    <li>Getting a behind-the-scenes look at the conference</li>
                  </ul>
                  <br />
                  <h4>Benefits of Volunteering</h4>
                  <ul>
                    <li>Your conference registration is complimentary and includes invites to Welcome Reception and Banquet Dinner **</li>
                    <li>AC 3 Tier train fare and boarding and lodging at IISc guest house</li>
                    <li>For local volunteers, all local conveyance would be reimbursed</li>
                    <li>Enjoy complimentary lunch &amp; tea every day at Conference Venue</li>
                    <li>Complimentary high quality COMSNETS T-Shirt</li>
                  </ul>
                  <br />
                  <h4>Volunteers assist and support the following key areas of the conference</h4>
                  <ul>
                    <li>Monitoring Session Rooms</li>
                    <li>Assisting at the Registration Desk</li>
                    <li>Preparing Conference kits</li>
                    <li>Giving directional help</li>
                    <li>Changing Signage outside halls</li>
                    <li>Crowd Control</li>
                  </ul>
                  <br />
                  <h4>Eligibility</h4>
                  <ul>
                    <li>Applicants must be physically present on all 5 days of the conference without fail</li>
                    <li>Applicants must be 18 years of age or older</li>
                    <li>Applicants must be undergraduate, or graduate students enrolled full time</li>
                  </ul>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h3>How to Apply</h3></div>
                <div className="panel-body">
                  <p><strong>The application portal for COMSNETS 2027 volunteers will open soon.</strong></p>
                  {/* TODO: fill content for 2027 (Google form link, application window) */}
                </div>
              </div>

              <h4>Important Dates</h4>
              <br />
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Deadline for Application</strong></td>
                    <td>To be announced</td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance</strong></td>
                    <td>To be announced</td>
                  </tr>
                  <tr>
                    <td><strong>Final Confirmation by Volunteers</strong></td>
                    <td>To be announced</td>
                  </tr>
                </tbody>
              </table>

              <div className="panel panel-default">
                <div className="panel-body">
                  <h4>Questions</h4>
                  <p>Please contact <a href="mailto:comsnets.conference@gmail.com">comsnets.conference@gmail.com</a> if you have any questions about volunteering at COMSNETS 2027.</p>
                  <br />
                  <p><strong>Please Note:</strong> It is a mandatory requirement for all ACM and IEEE conferences that any one who has a paper, has to register at FULL rates, including students.</p>
                  <p><strong>** Conference registration is mandatory for students with an accepted paper/poster/graduate forum proposal/demos &amp; exhibits. There will be no waiver for the same.</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

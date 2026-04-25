export const metadata = { title: 'Registration Fee Details | COMSNETS 2027' };

export default function RegistrationFeeDetailsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Registration Fee Details</h1>
              {/* TODO: confirm 2027 fee figures with finance chairs before publishing */}

              <div className="well well-grey">
                <h4><strong>Important Notes</strong></h4>
                <ol className="text-justify">
                  <li><strong>The authors must register by the respective camera ready deadline (main conference, poster, graduate forum, workshops etc.).</strong></li>
                  <li><strong>Each and every accepted paper (main conference, poster, workshops or demo) must be registered at full rate, i.e., at regular IEEE/ACM member rate, or at non-member rate even if he/she happens to be a student. One registration covers ONLY TWO PAPERS.</strong></li>
                  <li><strong>In case of accepted graduate forum papers (and no other accepted papers, in any other tracks), the authors can register at the IEEE/ACM student member or student non-member rate.</strong></li>
                  <li><strong>The conference and the workshops are two different events and require separate registrations to access.</strong></li>
                  <li><strong>Each workshop day requires a separate registration. If you wish to attend both the days, you will have to register for both the days separately. When registered, delegates can move around and attend any workshop on that day.</strong></li>
                  <li><strong>All transfer of registrations should be done before the conference. Requests received after the cut-off date will not be entertained.</strong></li>
                </ol>
              </div>
              <hr />

              <p><a id="local_delegates"></a></p>
              <h3>Local Delegates</h3>
              <p><b className="highlight-text">**All the fees are excluding GST. Additional GST@18% will be added at the payment page.</b></p>
              <hr />
              <h5><b><u>Regular Registration Fees</u></b></h5>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>IEEE/ACM Member</th>
                    <th>Non-Member</th>
                    <th>IEEE/ACM Student Member</th>
                    <th>Student Non Member</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main Conference</td>
                    <td>&#8377; 17,000</td>
                    <td>&#8377; 19,000</td>
                    <td>&#8377; 7,000</td>
                    <td>&#8377; 8,000</td>
                  </tr>
                  <tr>
                    <td>Workshops</td>
                    <td>&#8377; 5,300</td>
                    <td>&#8377; 6,300</td>
                    <td>&#8377; 2,600</td>
                    <td>&#8377; 3,200</td>
                  </tr>
                  <tr>
                    <td>Demos &amp; Exhibits</td>
                    <td>&#8377; 10,500</td>
                    <td>&#8377; 10,500</td>
                    <td>&#8377; 10,500</td>
                    <td>&#8377; 10,500</td>
                  </tr>
                </tbody>
              </table>
              <hr />

              <p><a id="int_delegates"></a></p>
              <h3>International Delegates</h3>
              <p><b className="highlight-text">**All the fees are excluding GST. Additional GST@18% will be added at the payment page.</b></p>
              <hr />
              <h5><b><u>Regular Registration Fees</u></b></h5>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>Event</th>
                    <th>IEEE/ACM Member</th>
                    <th>Non-Member</th>
                    <th>IEEE/ACM Student Member</th>
                    <th>Student Non member</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Main Conference</td>
                    <td>$700</td>
                    <td>$800</td>
                    <td>$370</td>
                    <td>$420</td>
                  </tr>
                  <tr>
                    <td>Workshops</td>
                    <td>$240</td>
                    <td>$345</td>
                    <td>$135</td>
                    <td>$185</td>
                  </tr>
                  <tr>
                    <td>Demos &amp; Exhibits</td>
                    <td>$240</td>
                    <td>$240</td>
                    <td>$240</td>
                    <td>$240</td>
                  </tr>
                </tbody>
              </table>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

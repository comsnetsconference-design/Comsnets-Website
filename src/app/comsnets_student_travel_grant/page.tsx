export const metadata = { title: 'Student Travel Grant | COMSNETS 2027' };

export default function ComsnetsStudentTravelGrantPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>COMSNETS Student Travel Grant</h1>

              <p>
                COMSNETS is dedicated towards supporting quality research endeavors. In this direction, COMSNETS shall provide four student travel grants annually, each worth 25,000 INR, to deserving students. The travel support shall only be provided to student authors of research papers accepted at top-tier conferences held outside India. The decision of the COMSNETS association shall be binding in this regard.
              </p>

              <p>
                Applications for COMSNETS Student Travel Grant will be accepted throughout the year. The adjudicators shall meet four times during the year - in January, April, July, and October, to select the award recipient from applications received until the cut-off date for the corresponding quarter. Applications not awarded will be automatically considered in the subsequent quarter if the conference is not over by then.
              </p>

              <p>To apply for the COMSNETS travel grant, an applicant:</p>

              <ul>
                <li>Must have a paper in the field of communications, networking or related areas</li>
                <li>Must be a bonafide student of an institution recognized by the Govt. of India, at the time of application</li>
                <li>Must submit a copy of the accepted manuscript, notification of acceptance, and complete peer reviews</li>
                <li>Must submit a statement of purpose highlighting the benefits to the student if given an opportunity to attend the conference</li>
                <li>Must submit a recommendation letter by the student&rsquo;s academic supervisor or faculty advisor, as applicable.</li>
              </ul>

              <p>
                The applicant needs to create a single zip file with all the above documents (all documents should be in PDF format), and email it to <a href="mailto:chand@ece.iisc.ernet.in">chand@ece.iisc.ernet.in</a> with the subject: <strong>COMSNETS Student Travel Grant</strong>.
              </p>

              <p>
                The award will be provided on reimbursement basis, that is, on submission of the actual receipts and the participation certificate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

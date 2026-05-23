export const metadata = { title: 'Participant Travel Grants | COMSNETS 2027' };

export default function ParticipantTravelGrantsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Local and International Travel Grants</h1>
              <div className="alert alert-info" style={{ marginTop: '20px' }}>
                <strong>Coming Soon.</strong> Travel grant details for COMSNETS 2027 will be announced shortly.
              </div>
              {/* DISABLED: Original page content preserved as comment until 2027 details ready.
                  Past content: COMSNETS Organizing Committee announces travel grants - local (graduate students/faculty from India with accepted papers/posters/grad forum) + international (international student applicants with accepted papers).
                  Authors of best paper get SIGCOMM grants (covers travel, lodging, registration). Partial reimbursement after conference upon submitting receipts.
                  COMSNETS-SIGCOMM International Travel Grants: Students at non-Indian institutions invited to apply, made possible by ACM SIGCOMM. Awardees required to attend all 5 days.
                  SIGCOMM GeoDiversity Travel Grants (http://www.sigcomm.org/for-authors/geodiversity-travel-grants): One author from two best locally-authored papers of regional conferences (COMSNETS, AINTEC, LANC) attends SIGCOMM. Eligibility: early career (grad student/post-doc/faculty <5yrs post-PhD), affiliated with regional institution.
                  Past Important Dates: Deadline for application 25 Dec 2019 (closed); Notification 28 Dec 2019.
                  Past notes: Grant covers travel + local conveyance only (no registration/board/lodging). Must register for full conference. Workshop-only or single-day not eligible. Original receipts required.
                  Contact: S.V.R. Anand <anandsvr@iisc.ac.in>, CC <comsnets.conference@gmail.com>.
                  Past Travel Grants Chair: S. V. R. Anand, IISc Bangalore. */}
              {/* TODO: fill content for 2027 */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

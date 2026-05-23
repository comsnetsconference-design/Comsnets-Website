export const metadata = { title: 'Conference Registration Helper | COMSNETS 2027' };

export default function RegistrationHelperPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Conference Registration Helper</h1>
              {/* DISABLED: Original PHP page calls disable_page(). The legacy helper computed
                  registration totals based on delegate/membership/paper selections.
                  Keeping placeholder until content for 2027 is ready.
                  TODO: fill content for 2027 */}
              <p>We&apos;re currently working on this handy tool. Coming soon!</p>
              <p>For current registration fees, please see <a href="/registration_fee_details">Registration Fee Details</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

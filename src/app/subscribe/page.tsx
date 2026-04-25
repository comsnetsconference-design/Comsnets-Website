export const metadata = { title: 'Subscribe | COMSNETS 2027' };
export default function SubscribePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Subscribe to COMSNETS Updates</h1>

              <p className="text-justify">Stay informed about COMSNETS 2027 announcements, deadlines, and program updates. Enter your details below to join our mailing list.</p>

              <form className="form-horizontal" method="POST" action="/subscribe">
                <fieldset>
                  <div className="form-group">
                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                    <div className="col-lg-10">
                      <input type="email" name="email_id" className="form-control" id="inputEmail" placeholder="Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputFirstname" className="col-lg-2 control-label">First Name</label>
                    <div className="col-lg-10">
                      <input type="text" name="first_name" className="form-control" id="inputFirstname" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputLastname" className="col-lg-2 control-label">Last Name</label>
                    <div className="col-lg-10">
                      <input type="text" name="last_name" className="form-control" id="inputLastname" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-10 col-lg-offset-2">
                      <button type="reset" className="btn btn-default">Cancel</button>
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </fieldset>
              </form>

              {/* TODO: wire submission to mailing-list backend for COMSNETS 2027. */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

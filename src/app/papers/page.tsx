export const metadata = { title: 'Paper Downloads | COMSNETS 2027' };

export default function PapersPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Paper Downloads</h1>
              <div className="panel panel-default">
                <div className="panel-body text-justify">
                  <h3>Make sure you are connected to COMSNETS 2027 conference Wi-Fi to access the paper download page.</h3>
                </div>
              </div>
              {/* TODO: redirect target for 2027 conference Wi-Fi paper portal */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

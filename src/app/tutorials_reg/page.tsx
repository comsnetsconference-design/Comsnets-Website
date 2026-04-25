export const metadata = { title: 'Tutorials Only Registrations | COMSNETS 2027' };

export default function TutorialsRegPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Tutorials Only Registrations (Complimentary)</h1>
              <div className="alert alert-info">
                <strong>Coming Soon</strong> &mdash; Tutorial registration links for COMSNETS 2027 will be posted here.
              </div>
              {/* TODO: fill content for 2027 -- archived 2021 tutorial registration links preserved below for reference */}
              {/*
                <p><strong>COMSNETS 2021 Tutorials are free for all. To register and attend the tutorials click the links given as follows.</strong></p>
                <h3>Tutorial Registration Links</h3>
                <table className="table table-striped table-hover table-bordered" width="100%">
                  <thead>
                    <tr>
                      <th width="48%" style={{ backgroundColor: '#d3d3d3' }} className="text-center"><strong>Title</strong></th>
                      <th width="30%" style={{ backgroundColor: '#d3d3d3' }} className="text-center"><strong>Presenters</strong></th>
                      <th width="22%" style={{ backgroundColor: '#d3d3d3' }} className="text-center"><strong>Time</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    Tutorials: WiFi 6/7, Learning-Based Massive MIMO Hybrid Beamforming, Distributed Learning Algorithms For Wireless Networks, 5G NR Deployment Considerations.
                  </tbody>
                </table>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'Technical Program | COMSNETS 2027' };

export default function TechnicalProgram2Page() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Technical Program</h1>
              <div className="alert alert-info">
                <strong>Coming Soon</strong> &mdash; The detailed technical program for COMSNETS 2027 will be posted here closer to the conference.
              </div>
              <p>For the latest accepted papers, see <a href="/accepted_papers">Accepted Papers</a>. For the high-level conference schedule, see <a href="/schedule">Schedule</a>.</p>
              {/* TODO: fill content for 2027 -- archived 2016 PHP contained a 3-day tabbed schedule (Jan 6/7/8) with paired Track 1/Track 2 paper listings */}
              {/*
                Day 1 (Wed 6 Jan 2016):
                  T1-1 Sensor Networks (Narayan Mandayam) | T2-1 Security and Trust (Rahul Mangharam)
                  T1-2 Smart Grid and CPS (Panagiotis Papadimitriou) | T2-2 Vehicular Networks (Sayandeep Sen)
                Day 2 (Thu 7 Jan 2016):
                  T1-3 Cognitive Radio Networks (Sukumar Nandi) | T2-3 Cloud Computing (Pradipta De)
                  T1-4 Wireless Networks (Shrihari Nelakuditi) | T2-4 Physical Layer (Chandramani Singh)
                Day 3 (Fri 8 Jan 2016):
                  T1-5 Heterogeneous Networks (Vinayak Naik) | T2-5 Complex Networks (Shivkumar Kalyanaraman)
                  T1-6 Networking Technology (Vijay Mann) | T2-6 Spectrum Sensing (D Manjunath)
                  T1-7 Large-Scale Networks (Animesh Mukherjee) | T2-7 Information Dissemination (Saurabh Bagchi)
                Each track had 4-6 paper entries with title + author list. The PHP used Bootstrap nav-tabs with `?date=jan6|jan7|jan8` query-string-driven tab activation.
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

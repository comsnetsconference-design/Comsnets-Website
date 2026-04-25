export const metadata = { title: 'WACI Workshop | COMSNETS 2027' };

export default function WaciWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Workshop on Wild and Crazy Ideas (WACI)
              </h1>

              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '30px 0' }}>
                <div style={{ fontSize: '64px', color: '#3b82f6', opacity: 0.3, marginBottom: '20px' }}>
                  <i className="fa fa-lightbulb-o"></i>
                </div>
                <h2 style={{ fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>Coming Soon</h2>
                <p style={{ fontSize: 18, color: '#64748b', maxWidth: 640, margin: '0 auto' }}>
                  Details for the WACI Workshop at COMSNETS 2027 (theme, keynote, invited talks, submission guidelines, deadlines, and program committee) will be announced soon.
                </p>
              </div>

              {/* TODO: fill content for 2027.
                  Legacy waci_workshop.php (1016 lines) covered the 2018 edition: "Wild and Crazy Ideas
                  on the interplay between IoT and Big Data". It listed:
                    - Keynote: Rajeev Rastogi (Amazon, India)
                    - Invited speakers: Baek-Young Choi (UMKC), Aruna Balasubramanian (Stony Brook),
                      P. Balamuralidhar (TCS), Ishwardutt Parulkar (Cisco)
                    - Startup invited talks (DataGlen, Infilect, Strike, Appknox, Czar Securities)
                    - Submission guidelines (4-page PDF, single-blind, EDAS link N23509)
                    - Deadlines (Nov 24, Dec 13, Dec 20 -- 2017)
                    - Industry 4.0 / Industrial IoT panel discussion
                  Recreate similar sections once 2027 organizers, theme, dates, and speakers are confirmed. */}

              <div className="prev-speakers-box" style={{ marginTop: 30 }}>
                <h3>Previous WACI Workshops</h3>
                <p>
                  Browse past WACI editions in the{' '}
                  <a href="/archive" style={{ color: '#3b82f6', fontWeight: 600 }}>archive</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

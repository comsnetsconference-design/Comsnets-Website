export const metadata = { title: 'WACI Workshop | COMSNETS 2027' };

export default function WaciWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Workshop on Wild and Crazy Ideas (WACI)</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <div className="coming-soon">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h4>Coming Soon</h4>
                <p>Details for the WACI Workshop at COMSNETS 2027 (theme, keynote, invited talks, submission guidelines, deadlines, and program committee) will be announced soon.</p>
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

              <div style={{ marginTop: '22px' }}>
                <h3 className="section-title">Previous WACI Workshops</h3>
                <p>Browse past WACI editions in the <a href="/archive">archive</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

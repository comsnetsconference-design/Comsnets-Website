export const metadata = { title: 'ITS Workshop | COMSNETS 2027' };

// DISABLED in source PHP via disable_page(). Original was the Workshop on Intelligent
// Transportation Systems (ITS) — last edition held 3 January 2024. Preserved as JSX comment.
// TODO: fill content for 2027 once chairs/dates/papers are confirmed.

export default function ItsWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Workshop on Intelligent Transportation Systems (ITS)</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>
              <div className="coming-soon">
                <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                <h4>Coming Soon</h4>
                <p>The Workshop on Intelligent Transportation Systems (ITS) at COMSNETS 2027 will be announced soon. Stay tuned for updates.</p>
              </div>
              {/* DISABLED: Original 2024 ITS Workshop content

                The 9th workshop on ITS, held in conjunction with COMSNETS 2024, took place
                on 3 January 2024 at Esquire (Basement). Sections included in source PHP:
                - Schedule with keynotes (Prof. Kalaga Ramchandra Rao, IIT Delhi; Dr. Tarun Rambha, IISc)
                - Lectern sessions (Deep Learning Applications in ITS, Emerging methodologies, Modeling of Heterogeneous Traffic, Transportation Data Analytics)
                - Poster session (7 posters)
                - Accepted papers list (rendered from $its array via accepted_paper_data.php)
                - Important Dates table (Manuscript submission firmly 10 Nov 2023 AoE, notification 3 Dec 2023, camera-ready 10 Dec 2023, workshop 3 Jan 2024)
                - Submission Link: https://edas.info/N31566
                - Topics of interest: Autonomous & Connected V2X vehicles, AI/ML for ITS, Naturalistic Driving Studies, Sensors & Big ITS data analytics, Human factors, ITS field tests, Traffic Flow Theory, etc.
                - Keynote and invited speakers (commented out in source)
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

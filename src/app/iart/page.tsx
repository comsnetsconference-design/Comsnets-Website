export const metadata = { title: 'I+ART: Industry-Academia Research Track | COMSNETS 2027' };

interface ScheduleItem {
  time: string;
  title: string;
  icon: string;
  affiliation?: string;
  subtext?: string;
  section?: string;
}

const schedule: ScheduleItem[] = [
  { time: '10:55 - 11:30', title: 'Keynote: Bhaskar Ramamurthi', icon: 'bi-mic', affiliation: 'IIT Madras', section: 'Session 1' },
  { time: '11:30 - 12:05', title: 'Industry Talk (PHY/MAC): Bijoy Bukhania', icon: 'bi-file-earmark-text', affiliation: 'Broadcom' },
  { time: '12:05 - 12:40', title: 'Academia Talk (PHY/MAC): Radhakrishna Ganti', icon: 'bi-file-earmark-text', affiliation: 'IIT Madras' },
  { time: '12:40 - 13:15', title: 'Industry Talk (Application-Aware Wireless): Hemanth Sampath', icon: 'bi-file-earmark-text', affiliation: 'Qualcomm' },
  { time: '13:15 - 14:00', title: 'Lunch', icon: 'bi-egg-fried' },
  { time: '14:00 - 14:35', title: 'Academia Talk (Application-Aware Wireless): Gaurav Kasbekar', icon: 'bi-file-earmark-text', affiliation: 'IIT Bombay', section: 'Session 2' },
  {
    time: '14:45 - 15:45',
    title: 'Panel on PHY/MAC - Evolution and The Future',
    icon: 'bi-people',
    subtext: '<b>Moderator:</b> Dhananjay Gore, Qualcomm<br/><b>Panel:</b><br/>&nbsp;&nbsp;&nbsp;&nbsp;Ashutosh Gore (Reliance-Jio)<br/>&nbsp;&nbsp;&nbsp;&nbsp;Neelesh Mehta (IISc)<br/>&nbsp;&nbsp;&nbsp;&nbsp;Rohit Kapoor (Qualcomm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;Srikanth Gummadi (Broadcom)',
  },
  { time: '15:45 - 16:15', title: 'Tea Break', icon: 'bi-cup-hot' },
  {
    time: '16:15 - 17:15',
    title: 'Panel on Application Aware Networking',
    icon: 'bi-people',
    subtext: '<b>Moderator:</b> Anurag Kumar, IISc<br/><b>Panel:</b><br/>&nbsp;&nbsp;&nbsp;&nbsp;Carla Fabiana Chiasserini, Politecnico di Torino<br/>&nbsp;&nbsp;&nbsp;&nbsp;Hemanth Sampath, Qualcomm<br/>&nbsp;&nbsp;&nbsp;&nbsp;Saptarshi Chaudhury, Radisys-Jio',
    section: 'Session 3',
  },
];

export default function IartPage() {
  let currentSection = '';
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>I+ART: Industry-Academia Research Track</h1>

              <h5><strong>Event Date:</strong> 8<sup>th</sup> January, 2026</h5>
              <h5><strong>Event Timings:</strong> 10:45 am to 5:30 pm</h5>
              <hr />

              <p className="text-justify">We live in exciting times, witnessing an extremely rapid pace of growth of demanding applications such as networked robotics, industrial wireless networking, connected and intelligent devices, AR/VR/XR-based games and applications. Increasingly, it is the industry that is first confronted with the need to deliver the advances required in current technology, and the requirements for next generation technology. On the other hand, academia, with their years of study, teaching, and research are superbly positioned to explore and enable fundamental and generalized solutions to these problems, and thereby also drive their own research agendas. Successful R&amp;D ecosystems around world have understood the importance of the academia-industry interface. It is with this in mind that I+ART will bring together top industry experts and researchers from academia to share their understanding of upcoming open problems and research driven solutions.</p>

              <p className="text-justify">High speed wireless networks rely fundamentally on efficient and reliable wireless PHY layer mechanisms, which have evolved today to be able to support 10s of gigabits per second in both cellular and Wi-Fi systems. On the other hand, support of demanding applications, such as AR/XR, edge-controlled robot swarms, etc., will require efficient application-aware networking, that should adopt more and more techniques from reinforcement learning and AI/ML.</p>

              <p className="text-justify">I+ART in COMSNETS 2026 will, thus, have two themes:</p>
              <ul>
                <li>The evolution and roadmap for wireless PHY/MAC techniques, and</li>
                <li>Application-aware wireless networking</li>
              </ul>

              <p className="text-justify">This will be a full day track, comprising an academia-industry keynote, and 4 invited talks, two from academia and two from the industry, each with plenty of time for discussion. The talks will provide cutting edge technical material, and intense discussion. There will be two panel discussions, one on each of the two themes.</p>

              <h3><b>Schedule</b></h3>
              <hr />
              <div className="schedule-container">
                {schedule.map((event, idx) => {
                  const showSection = event.section && event.section !== currentSection;
                  if (showSection) currentSection = event.section!;
                  return (
                    <div key={idx}>
                      {showSection && <div className="section-header" style={{ fontWeight: 600, color: '#153996', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0', padding: '0.5rem 0 0.5rem 1rem', borderLeft: '4px solid #153996', background: 'rgba(79,70,229,0.03)' }}>{event.section}</div>}
                      <div className="schedule-card" style={{ display: 'flex', alignItems: 'flex-start', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(79,70,229,0.1)', padding: '1rem', marginBottom: '1rem' }}>
                        <div className="schedule-time" style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '130px', whiteSpace: 'nowrap' }}>
                          <i className={`bi ${event.icon}`}></i>&nbsp;<span>{event.time}</span>
                        </div>
                        <div className="schedule-main" style={{ paddingLeft: '1.5rem', width: '100%' }}>
                          <div className="schedule-line" style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <span className="schedule-title" style={{ fontSize: '1.15rem', fontWeight: 600, color: '#1e293b' }}>{event.title}</span>
                            {event.affiliation && <span className="schedule-affiliation" style={{ fontSize: '1rem', color: '#64748b' }}>{event.affiliation}</span>}
                          </div>
                          {event.subtext && <div className="schedule-subtext" style={{ fontSize: '1rem', color: '#64748b', marginTop: '0.4rem' }} dangerouslySetInnerHTML={{ __html: event.subtext }} />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">I+ART: Industry-Academia Research Track Co-Chairs</h3>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="col-sm-6 col-md-6">
                      <img src="/assets/images/Committee_2025/IART/Dhananjay.jpg" className="thumbnail" alt="Dhananjay Gore" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                      <div className="caption">
                        <h4><a href="https://www.linkedin.com/in/dhananjay-gore-b2b19b1/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Dhananjay Gore</a></h4>
                        <p>Qualcomm<br />India</p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                      <img src="/assets/images/Committee_2025/IART/Anurag.jpg" className="thumbnail" alt="Anurag Kumar" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                      <div className="caption">
                        <h4><a href="https://ece.iisc.ac.in/anurag/" target="_blank" rel="noopener noreferrer">Anurag Kumar</a></h4>
                        <p>Indian Institute of Science<br />Bangalore, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

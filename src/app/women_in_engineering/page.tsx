export const metadata = { title: 'Women in Engineering | COMSNETS 2027' };

interface ScheduleItem { time: string; title: string; icon: string; }
interface CoChair { name: string; affiliation: string; image: string; link: string; }

const schedule: ScheduleItem[] = [
  { time: '10:45 AM – 10:55 AM', title: 'Welcome', icon: 'bi-person-badge' },
  { time: '10:55 AM – 12:30 PM', title: 'Hands-on Workshop: Generative AI', icon: 'bi-lightbulb' },
  { time: '12:30 PM – 12:55 PM', title: 'Presentation: Generative AI (AI with Purpose) - 1 team [10 mins]', icon: 'bi-easel' },
  { time: '12:55 PM – 1:15 PM', title: 'Close down and Group Photo', icon: 'bi-camera' },
];

const prerequisites: string[] = [
  'Gmail account',
  'A laptop with stable internet connection',
  'One idea that you want to prototype and see it live in action',
];

const coChairs: CoChair[] = [
  {
    name: 'Ambika J',
    affiliation: 'Finastra, Bangalore, India',
    image: '/assets/images/Committee_2025/women_in_engg/ambika_j.jpg',
    link: 'https://www.linkedin.com/in/ambikaj/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in',
  },
  {
    name: 'D N Sujatha',
    affiliation: 'BMSCE, Bangalore, India',
    image: '/assets/images/committee_2023/sujatha.png',
    link: 'https://bmsce.ac.in/home/facultyProfile/195/Dr-D-N-SUJATHA',
  },
];

export default function WomenInEngineeringPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Women in Engineering</h1>
                <p className="lead">Theme: AI with Purpose: Women Designing for Future</p>
                <div className="event-details">Event Date: 8<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 10:45 AM – 1:15 PM IST &nbsp;&bull;&nbsp; Venue: Sigma 1</div>
              </div>

              <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Schedule</h3>
              <div className="sched" style={{ marginBottom: '2rem' }}>
                {schedule.map((item, i) => (
                  <div key={i} className="sched-item">
                    <div className="sched-time" style={{ width: 'auto', minWidth: '175px' }}>{item.time}</div>
                    <div className="sched-body"><div className="sched-title">{item.title}</div></div>
                  </div>
                ))}
              </div>

              <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Pre-requisite for the workshop</h3>
              <div style={{ marginBottom: '2rem' }}>
                {prerequisites.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '10px',
                    padding: '12px 16px',
                    background: '#fff',
                    border: '1px solid #e6edf6',
                    borderRadius: '12px',
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #557AAB, #1E4165)',
                      color: 'white',
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      flexShrink: 0,
                    }}>{i + 1}</div>
                    <p style={{ margin: 0, color: '#1e293b', fontWeight: 500 }}>{item}</p>
                  </div>
                ))}
              </div>

              <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Workshop Speaker</h3>
              {/* TODO: port speaker data from speakers_data.php ($wie_speakers) when 2027 list is available */}
              <div style={{ background: '#fff', border: '1px solid #e1e1e1', borderRadius: '8px', padding: '25px', marginBottom: '30px', textAlign: 'center', color: '#64748b' }}>
                <p>Speaker details to be announced for COMSNETS 2027.</p>
              </div>

              <h3 className="section-title" style={{ marginBottom: '1.5rem' }}>Presentations</h3>
              <div style={{ background: '#fff', border: '1px solid #e1e1e1', borderRadius: '8px', padding: '25px', marginBottom: '30px' }}>
                <h5 style={{ fontWeight: 700, color: '#2A4D75' }}>TEAM 2 &mdash; NovaMind</h5>
                <p style={{ fontWeight: 600, color: '#1e293b' }}>
                  Title: ReguGraph: A Knowledge-Grounded Generative AI System for Explainable RBI-Compliant Financial Intelligence.
                </p>
                <p style={{ color: '#475569' }}>
                  <strong>Student:</strong> Nandini Arimanda, 4th year Student, Shiv Nadar University, Chennai
                </p>
                <p style={{ color: '#475569' }}>
                  <strong>Mentor:</strong> Dr. U. Padmavathi, Assistant Professor, Shiv Nadar University, Chennai
                </p>
                <p style={{ marginBottom: 0 }}>
                  <a href="https://www.linkedin.com/in/dr-padmavathi-u-292156238/" target="_blank" rel="noopener noreferrer" style={{ color: '#337ab7', fontWeight: 600 }}>
                    <i className="fa fa-linkedin"></i> Mentor&apos;s LinkedIn
                  </a>
                </p>
              </div>

              <h3 className="section-title">Co-Chairs</h3>
              <div className="member-grid">
                {coChairs.map((c, i) => (
                  <div key={i} className="member-card">
                    <img src={c.image} alt={c.name} className="member-photo" />
                    <div className="member-name"><a href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a></div>
                    <p className="member-affil">{c.affiliation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

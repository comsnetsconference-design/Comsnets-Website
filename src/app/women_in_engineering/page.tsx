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
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Women in Engineering</h1>
              {/* TODO: refresh date / venue / speaker list / co-chairs for COMSNETS 2027 */}

              <div style={{
                background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)',
                color: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgb(124 58 237 / 0.35)',
                marginBottom: '2rem',
                textAlign: 'center',
              }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.3rem' }}>Women in Engineering</h2>
                <p style={{ fontSize: '1.3rem', fontWeight: 600, marginBottom: '0.8rem' }}>Theme: AI with Purpose: Women Designing for Future</p>
                <div style={{ fontSize: '1rem', fontWeight: 500, background: 'rgba(255,255,255,0.2)', padding: '0.6rem 1.2rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 8<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 10:45 AM – 1:15 PM IST &nbsp;&bull;&nbsp; Venue: Sigma 1
                </div>
              </div>

              <h4 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Schedule</h4>
              <div style={{ marginBottom: '2rem' }}>
                {schedule.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(70, 123, 229, 0.1)',
                    marginBottom: '1.2rem',
                    padding: '1rem 1.5rem',
                    alignItems: 'center',
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)',
                      color: 'white',
                      fontWeight: 600,
                      padding: '0.45rem 1rem',
                      borderRadius: '12px',
                      minWidth: '160px',
                      textAlign: 'center',
                    }}>
                      {item.time}
                    </div>
                    <div style={{ marginLeft: '1.5rem', fontSize: '1.05rem', color: '#1e293b' }}>{item.title}</div>
                  </div>
                ))}
              </div>

              <h4 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Pre-requisite for the workshop</h4>
              <div style={{ marginBottom: '2rem' }}>
                {prerequisites.map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    marginBottom: '1rem',
                    padding: '12px 16px',
                    background: '#fff',
                    borderLeft: '4px solid #557AAB',
                    borderRadius: '0 8px 8px 0',
                    boxShadow: '0 2px 8px rgba(85, 122, 171, 0.1)',
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

              <h4 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Workshop Speaker</h4>
              {/* TODO: port speaker data from speakers_data.php ($wie_speakers) when 2027 list is available */}
              <div style={{ background: '#fff', border: '1px solid #e1e1e1', borderRadius: '8px', padding: '25px', marginBottom: '30px', textAlign: 'center', color: '#64748b' }}>
                <p>Speaker details to be announced for COMSNETS 2027.</p>
              </div>

              <h4 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Presentations</h4>
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

              <h4 style={{ marginBottom: '1.5rem' }}>Co-Chairs</h4>
              <div className="row">
                {coChairs.map((c, i) => (
                  <div key={i} className="col-12 col-md-6" style={{ marginBottom: '1.5rem' }}>
                    <img src={c.image} alt={c.name} style={{
                      width: '180px',
                      height: '210px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      marginBottom: '0.5rem',
                      boxShadow: '0 2px 14px rgba(70, 115, 229, 0.1)',
                      background: '#e0e7ef',
                    }}/>
                    <h5>
                      <a href={c.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1e293b' }}>{c.name}</a>
                    </h5>
                    <p>{c.affiliation}</p>
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

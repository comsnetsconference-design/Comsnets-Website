export const metadata = { title: 'Undergraduate Forum | COMSNETS 2027' };

interface Person {
  name: string;
  affiliation: React.ReactNode;
  link: string;
  image: string;
}

const panelists: Person[] = [
  { name: 'Prof. Bhaskar Raman', affiliation: 'IIT Bombay, India', link: 'https://www.cse.iitb.ac.in/~br/', image: 'Bhaskarr.jpg' },
  { name: 'Ranjita Bhagwan', affiliation: 'Google, India', link: 'https://www.linkedin.com/in/ranjita-bhagwan-2b47414', image: 'RanjitaBhagwan.png' },
  { name: 'Vijay Gabale', affiliation: 'Infilect, India', link: 'https://www.linkedin.com/in/vijaygabale', image: 'vijaygab.jpg' },
  { name: 'Nishanth Chandran', affiliation: 'Microsoft Research, India', link: 'https://www.linkedin.com/in/nishanthchandran', image: 'nishantc.jpg' },
  { name: 'Sanjay Tiwari', affiliation: '21CC Education, India', link: 'https://www.linkedin.com/in/sanjay-tiwari-21cc', image: 'sanjaytiw.jpg' },
  { name: 'Mrunmayi Bhalerao', affiliation: <>Google, India<br /><strong>(Moderator)</strong></>, link: 'https://www.linkedin.com/in/mrunmayi-bhalerao-4b85141a9/?originalSubdomain=in', image: 'mrunmayi.jpg' },
];

const cochairs: Person[] = [
  { name: 'Kaushik Chowhan', affiliation: <>Indian Institute of Technology<br />Gandhinagar, India</>, link: 'https://www.linkedin.com/in/kaushik-chowhan-b59aa0264/', image: 'Committee_2025/Kaushik.jpg' },
  { name: 'Ojaswa Varshney', affiliation: <>IIIT Surat<br />Surat, India</>, link: 'https://www.linkedin.com/in/ojaswavarshney/', image: 'Committee_2026/ojaswa.jpg' },
];

const topics = [
  { icon: '📡', title: 'Wireless Communications', desc: '5G, 6G, wireless broadband, and spectrum technologies. Including WLAN, RFID, NFC, cognitive radio, localization and sensing, CubeSats, and satellite networking.' },
  { icon: '🖥️', title: 'Data Center & Edge Computing', desc: 'Enterprise networking, data centers, edge and cloud computing integration, and multimedia networking innovations.' },
  { icon: '🌱', title: 'Green Networking', desc: 'Network sustainability, economics, and energy efficiency in communication networks.' },
  { icon: '🔬', title: 'Datasets, Benchmarks, and Testbeds', desc: 'Highlighting the foundational role of datasets, benchmarks, and testbeds in networking research for experimentation and validation.' },
  { icon: '🌐', title: 'Network Architecture & Operations', desc: 'Network architecture, traffic management, caching, content delivery systems, SDN/NFV, internet measurement, and web technologies.' },
  { icon: '🚗', title: 'Mobility & IoT', desc: 'Mobile network management, mobile sensing, vehicular networks, Internet of Things (IoT), and smart grid communications.' },
  { icon: '🔒', title: 'Blockchain & Security', desc: 'Network security, privacy, trusted computing, and the application of blockchain and distributed ledger technology.' },
  { icon: '🛠️', title: 'Semiconductors and Digital Communication', desc: 'Semiconductor advancements in inter- and intra-chip communication, peripheral interfaces (PCIe, USB, etc.), and network-on-chip (NoC) systems.' },
];

const papers = [
  'Zero-Trust Stealth Authentication for Networked Systems via Port Knocking and TLS Fingerprinting',
  'A mechanism for TCP-aware adaptive management of queues in Internet routers',
  'RFSoC-Based Integrated Navigation and Sensing Using NavIC',
  'Curiosity-Driven Deep-RL for Adaptive Handover Optimization in O-RAN on the NH-47 Corridor',
  'Proactive Self-Aware Multi-Agent Reinforcement Learning for Resource Management in NR-V2X Platooning',
];

export default function UndergraduateForumPage() {
  const thumbStyle: React.CSSProperties = { height: 210, width: 180, objectFit: 'cover', borderRadius: 12, boxShadow: '0 4px 10px rgba(0,0,0,0.1)', marginBottom: 15, border: '1px solid #ddd' };
  const sectionHeading: React.CSSProperties = { color: '#003366', fontWeight: 700, fontSize: '1.8rem', marginTop: 40, marginBottom: 20 };
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Undergraduate Forum</h1>
              <p className="text-justify">
                The Undergraduate Forum is being organized at COMSNETS 2027 to recognize the contribution of undergraduate students in the COMSNETS ecosystem. Built on the same lines as the Graduate Forum, it aims to provide a platform for undergraduate students and recently graduated professionals to showcase early research and get feedback from experienced researchers in the field. It will provide attendees an opportunity to interact, receive career advice and build collaborations with other peers and leading researchers.
              </p>
              <p className="text-justify">
                <mark style={{ padding: '5px 10px', borderRadius: 4, backgroundColor: '#fff3cd' }}>
                  Accepted papers in the main conference lead-authored by an undergraduate student or recent graduate (2026 or later) would automatically be considered for presentation in the undergraduate forum as well.
                </mark>
              </p>

              <h3 style={sectionHeading}>Best Paper Award</h3>
              <p>Best “Undergraduate Forum Paper Award” will be awarded based on the presentations by a panel of judges.</p>

              <h3 style={sectionHeading}>Topics of Interest</h3>
              <p className="text-justify"><b>The topics of interest include (but not limited to) the following:</b></p>
              <div className="row">
                <div className="col-md-6">
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {topics.slice(0, 4).map((t) => (
                      <li key={t.title} style={{ marginBottom: 15 }}>
                        <strong style={{ color: '#0078d4' }}>{t.icon} {t.title}</strong>
                        <p style={{ fontSize: '0.9em', color: '#555', marginLeft: 25 }}>{t.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {topics.slice(4).map((t) => (
                      <li key={t.title} style={{ marginBottom: 15 }}>
                        <strong style={{ color: '#0078d4' }}>{t.icon} {t.title}</strong>
                        <p style={{ fontSize: '0.9em', color: '#555', marginLeft: 25 }}>{t.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <hr />

              {/* TODO: refresh schedule, keynote, panellists for 2027 */}
              <div style={{ backgroundColor: '#f9f9f9', padding: 30, borderRadius: 12, marginTop: 30, marginBottom: 30, border: '1px solid #eef2f6' }}>
                <h3 className="text-center" style={{ marginTop: 0, marginBottom: 25, color: '#003366', fontWeight: 800, textTransform: 'uppercase' }}>Program Schedule</h3>
                <div style={{ backgroundColor: '#003366', color: 'white', padding: '12px 20px', borderRadius: 8, marginBottom: 20, fontWeight: 'bold', fontSize: '1.1em' }}>Session 1: Keynote &amp; Presentations (2:00 PM - 3:30 PM)</div>
                <div style={{ display: 'flex', marginBottom: 25, borderLeft: '4px solid #ddd', paddingLeft: 20 }}>
                  <div style={{ minWidth: 140, fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>2:00 PM - 2:40 PM</div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 700, color: '#333', fontSize: '1.1em', marginBottom: 5 }}>Keynote Talk</div>
                    <div style={{ color: '#0078d4', fontWeight: 600 }}>Prof. Bhaskar Raman, IIT Bombay</div>
                    <small>Duration: 30 Min Talk + 10 Min Q&amp;A</small>
                  </div>
                </div>
                <div style={{ display: 'flex', marginBottom: 25, borderLeft: '4px solid #ddd', paddingLeft: 20 }}>
                  <div style={{ minWidth: 140, fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>2:40 PM - 3:30 PM</div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 700, color: '#333', fontSize: '1.1em', marginBottom: 5 }}>Paper Presentations</div>
                    <small>8 Min Presentation + 2 Min Q&amp;A each</small>
                    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 10 }}>
                      {papers.map((p, i) => (
                        <li key={i} style={{ background: '#fff', border: '1px solid #eee', padding: '8px 12px', marginBottom: 5, borderRadius: 6, fontSize: '0.9em', borderLeft: '3px solid #6c757d' }}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ backgroundColor: '#fff3cd', border: '1px solid #ffeeba', color: '#856404', padding: '10px 20px', borderRadius: 8, textAlign: 'center', margin: '20px 0', fontWeight: 'bold' }}>Tea Break (3:30 PM - 4:00 PM)</div>
                <div style={{ backgroundColor: '#003366', color: 'white', padding: '12px 20px', borderRadius: 8, marginBottom: 20, fontWeight: 'bold', fontSize: '1.1em' }}>Session 2: Panel &amp; Mentorship (4:00 PM - 5:30 PM)</div>
                <div style={{ display: 'flex', marginBottom: 25, borderLeft: '4px solid #ddd', paddingLeft: 20 }}>
                  <div style={{ minWidth: 140, fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>4:00 PM - 5:30 PM</div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ fontWeight: 700, color: '#333', fontSize: '1.1em', marginBottom: 5 }}>Panel Discussion / Mentorship Session</div>
                    <p style={{ marginBottom: 10 }}><b>Panelists:</b></p>
                    <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
                      <li>Prof. Bhaskar Raman, Dr. Vijay Gabale, Dr. Ranjita Bhagwan, Mr. Sanjay Tiwari, Dr. Nishanth Chandran</li>
                      <li><b>Moderator:</b> Mrunmayi Bhalerao</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 style={sectionHeading}>Keynote Speaker</h3>
              <div className="row">
                <div className="col-md-3 text-center">
                  <img src="/assets/images/Bhaskarr.jpg" style={thumbStyle} alt="Bhaskar Raman" />
                  <div className="caption">
                    <h4><a href="https://www.cse.iitb.ac.in/~br/" target="_blank" rel="noopener noreferrer" style={{ color: '#003366' }}>Prof. Bhaskar Raman</a></h4>
                    <p>IIT Bombay, India</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <h4 style={{ color: '#0078d4', fontWeight: 800, marginTop: 0 }}>Critical Thinking in the Age of Tech-Aided Groupthink</h4>
                  <br />
                  <p><strong>Abstract:</strong></p>
                  <p className="text-justify">The human brain has evolved over millions of years during which thinking independently, or away from the group, meant almost certain death. So groupthink as a psychological phenomenon is deeply wired through Darwinian selection. Independent or critical thinking is a fairly recent phenomenon, but one more suited to a civilized society, as well as scientific research. However, throughout human civilization, there are several examples of societal level groupthink, which seem absurd only in retrospect — this talk will present a few such examples. In today’s technology driven world, unfortunately some significant pieces of technology have come to aid and fan groupthink, even at the global level — namely social media and artificial intelligence. Some of this aided groupthink has been through intentional design too. The talk aims to provide food-for-thought for students starting in their technical career: How does one navigate through such technology while still maintaining and nourishing critical thinking? How can we as a society become aware of and reduce the ill-effects of such tech-aided groupthink? What are our responsibilities as those who develop and drive technology?</p>
                </div>
              </div>

              <h3 style={sectionHeading}>Panelists</h3>
              <div className="row text-center">
                {panelists.map((p) => (
                  <div className="col-sm-6 col-md-4" key={p.name}>
                    <img src={`/assets/images/${p.image}`} style={thumbStyle} alt={p.name} />
                    <div className="caption">
                      <h4><a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#003366' }}>{p.name}</a></h4>
                      <p>{p.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 style={sectionHeading}>Undergraduate Forum Co-Chairs</h3>
              <div className="row text-center">
                {cochairs.map((c) => (
                  <div className="col-sm-6 col-md-6" key={c.name}>
                    <img src={`/assets/images/${c.image}`} style={thumbStyle} alt={c.name} />
                    <div className="caption">
                      <h4><a href={c.link} target="_blank" rel="noopener noreferrer" style={{ color: '#003366' }}>{c.name}</a></h4>
                      <p>{c.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />
              <p className="text-center" style={{ marginBottom: 50 }}>For any queries, please email all the co-chairs.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

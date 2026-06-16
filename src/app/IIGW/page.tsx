export const metadata = { title: 'Internet Intelligence and Governance Workshop (IIGW) | COMSNETS 2027' };

interface ScheduleEvent {
  time: string;
  title: string;
  subtext?: string;
  section?: string;
}

const iigwSchedule: ScheduleEvent[] = [
  { time: '09:30 – 09:40', title: 'Welcome by Chairs' },
  { time: '09:40 – 10:05', title: 'Revisiting Queue Delay Estimation Techniques in PIE and FQ-PIE: An Empirical Evaluation', subtext: 'Arun Kumar R (NITK Surathkal), Mohit P Tahiliani (NITK Surathkal)', section: 'Session 1: Presentation : 25 mins (including Q&A)' },
  { time: '10:05 – 10:30', title: 'AI-Powered Intelligent System through context aware log scrutiny for Anomaly detection', subtext: 'Shilpi Gupta (Microsoft, India), George Asirvatharaj (Microsoft, India), Ravi Teja Talluri (Microsoft, India)' },
  { time: '10:30 – 11:00', title: 'Trends and Technologies Shaping the Future Mobile Networks', subtext: 'Satish K. (Head of Nokia Standards Division, APAC [Standards Team Leader])' },
  { time: '11:00 – 11:30', title: 'Tea Break' },
  { time: '11:30 – 12:10', title: 'Governance of Digital Platforms', subtext: 'Prof. D Manjunath, IIT Bombay', section: 'Session 2' },
  { time: '12:10 – 12:35', title: 'Cost-optimized Multi-Technology Gateway Placement for Heterogeneous IoT Networks', subtext: 'Vijeth J Kotagi, Vinay M Talageri, Utkarsh Raj, Tamal Das (IIT Dharwad, India)' },
  { time: '12:35 – 13:00', title: 'TagFlow: A Hybrid Control and P4 Data Plane for Scalable IoT Device Validation and Connectivity', subtext: 'Prashanth Pvn, Rohan Vachhani, Miraj Rambhiya, Krish Kotak (VNIT Nagpur)' },
  { time: '13:00 – 14:00', title: 'Lunch Break' },
  { time: '14:00 – 14:40', title: 'Trustworthy Internet Intelligence: Security, Privacy, and Ethics by Design', subtext: 'Dr. S D Sudarsan, Executive Director, C-DAC Bangalore', section: 'Session 3' },
  { time: '14:40 – 15:05', title: 'Smarter Grids Through Clearer Vision: AI for Predictive Fault Detection', subtext: 'Gurnoor S Dang, Majid Rodgar, Michael Snyder (Stanford University, USA)' },
  { time: '15:05 – 15:30', title: 'Promoting Equitable Access to Glaucoma Screening Using Open-Source Multimodal Imaging Tools', subtext: 'Gurnoor S Dang, Gloria Wu, Ivan Chim, Swara Tewari, Priyal Badala, Brian Hoang' },
  { time: '15:30 – 16:00', title: 'Tea Break' },
  { time: '16:00 – 16:40', title: 'AI Infrastructure and the Evolution of Software Defined Networking (SDN)', subtext: 'Mr. Sreenivas Voruganti, Google', section: 'Session 4' },
  { time: '16:40 – 17:05', title: 'Environment-Aware Real-Time Intelligent Central Unit-User Plane Migration in O-RAN', subtext: 'Naren Nandakumar et al. (UT Dallas, USA), Koteswararao Kondepu (IIT Dharwad)' },
  { time: '17:05 – 17:30', title: 'Context-Aware Secure Prompt Engineering for Large Language Models Using ERP Metadata and Role-Based Data Constraints', subtext: 'Sagar Gupta (ServiceNow India), Chitta Ranjan Sahoo (ServiceNow, India)' },
  { time: '17:30 – 17:45', title: 'Closing & Best Paper Award announcement' },
];

const topics = [
  {
    heading: 'Internet',
    items: ['Multilingual Internet', 'Rural connectivity', 'Universal access and meaningful connectivity', 'Affordable Internet', 'ICT infrastructure', 'Energy-efficient technologies', 'Satellite broadband', 'Edge and cloud computing/networking, CDNs', 'Digital divide and online inequality', 'Public policy on the Internet'],
  },
  {
    heading: 'Security and Data Privacy',
    items: ['Data and identity protection', 'Cybersecurity', 'Cryptography: enabling technologies', 'Ethical use of next-generation technologies', 'Cyber hygiene for all', 'Trust, security, and stability', 'DNS security', 'Cross-border data flows'],
  },
  {
    heading: 'Advanced Technologies',
    items: ['Big data, machine learning and AI for Internet', 'Internet of Things', 'Next-generation Internet and services', 'Internetworking protocols and Internet applications', 'Blockchain and applications', 'Visible light communications', 'Metaverse'],
  },
  {
    heading: 'Standards and Policies',
    items: ['5G and beyond standards', 'Open 5G stack', 'Open RAN (O-RAN)', 'Wireless LANs', 'Internet resilience', 'Heterogeneous networks', 'Ethics of Internet', 'Inclusive Internet', 'Indian stack for services and applications'],
  },
  {
    heading: 'Applications',
    items: ['Online education', 'Smart cities', 'Health care', 'Agriculture', 'e-commerce', 'Banking and finance', 'Disaster management'],
  },
];

const topicIcons = ['fa-globe', 'fa-lock', 'fa-rocket', 'fa-cogs', 'fa-cubes'];

const tpc = [
  'Mayukh Roy Chowdhury (Nokia Bell Labs)',
  'Gaurav Kasbekar (Indian Institute of Technology Bombay)',
  'Veerendra Kumar Gautam (University of Padova, Italy)',
  'Mukesh Kumar Giluka (Jawaharlal Nehru University, Delhi)',
  'Venkateswarlu Gudepu (University of Texas at Dallas, USA)',
  'Anish Hirwe (Indian Institute of Technology Palakkad)',
  'Prashant PVN (Visvesvaraya National Institute of Technology Nagpur)',
  'Venkatrami Reddy (National Institute of Technology Warangal)',
  'Aritra Chatterjee (Nokia Standards Division)',
  'Pragati Shrivastava (Indian Institute of Technology Bhubaneswar)',
  'Anand Jee (Samsung Research India-Bangalore)',
  'Nagendra Kumar (Indian Institute of Technology Indore)',
];

export default function IIGWPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="event-page">
          {/* TODO: refresh schedule, speakers, accepted papers, dates for 2027 */}

          <div className="event-hero">
            <h1>Internet Intelligence and Governance Workshop (IIGW)</h1>
            <p className="lead">Event Date: 6<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:30 AM – 5:45 PM IST &nbsp;&bull;&nbsp; Venue: Sigma 1</p>
            <div className="event-details">COMSNETS 2027</div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Detailed Schedule</h3>
            <div className="sched">
              {(() => {
                let currentSection = '';
                return iigwSchedule.map((ev, idx) => {
                  const showSection = ev.section && ev.section !== currentSection;
                  if (showSection) currentSection = ev.section!;
                  return (
                    <div key={idx}>
                      {showSection && <div className="sched-session">{ev.section}</div>}
                      <div className="sched-item">
                        <div className="sched-time">{ev.time}</div>
                        <div className="sched-body">
                          <div className="sched-title">{ev.title}</div>
                          {ev.subtext && <div className="sched-sub">{ev.subtext}</div>}
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Workshop Overview</h3>
            <p className="text-justify">The India Internet Governance Forum (IIGF) is an initiative associated with the UN Internet Governance Forum (UN IGF), established in 2006. The IGF is a multi-stakeholder governance group that aims to enable a platform for policy dialogue on issues of Internet Governance. Through an open and inclusive process, IIGF brings together all stakeholders in the Internet Governance ecosystem in the country — including Government, Industry, Civil Society, Academic Community, and social minorities — as equal participants in the larger Internet Governance discourse. The IIGF aims to provide a platform to facilitate discussions between experts from industry, academia, and research to express their vision and findings related to the next generation Internet.</p>
            <p className="text-justify">Traditionally, a technical conference is organized with IIGF. From last year, the technical conference is organized as a workshop collocated with COMSNETS. The workshop shall provide a platform to present research work on topics of interest and an effective networking stage. The following key points are aimed as objectives at IIGW:</p>
            <ul>
              <li>Cover a broad range of digital governance issues, including civil society, AI impact on India&apos;s Internet, and data privacy.</li>
              <li>Help in understanding greater initiatives on smart cities, public policy on the Internet, and gaps to address in civil society with advanced technologies.</li>
              <li>Automate solutions to problems in agriculture, health services, energy, security, disaster management, etc., using next-generation networks.</li>
              <li>Provide a platform to discuss ongoing implementation support to various initiatives on public policies on intelligent Internet, including efforts at multilingualism and multistakeholderism.</li>
              <li>Strengthen capacities for participation in digital policymaking at all levels of expertise and backgrounds, including advanced research.</li>
            </ul>
          </div>

          <div className="event-section">
            <h3 className="section-title">Topics of Interest</h3>
            <div className="topic-grid">
              {topics.map((t, i) => (
                <div className="topic-cat" key={t.heading}>
                  <h4><i className={`fa ${topicIcons[i]}`} aria-hidden="true"></i>{t.heading}</h4>
                  <ul>
                    {t.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Submission Guidelines</h3>
            <ul>
              <li>The IIGW invites submission of original work, not previously published or under review at another conference or journal.</li>
              <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length.</li>
              <li>Reviews will be <b>double-blind:</b> authors&apos; names and affiliations must not be included in the submission.</li>
              <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; those that do not meet size and formatting requirements will not be reviewed.</li>
              <li>All papers must be in PDF and submitted through the IIG Workshop submission site on EDAS.</li>
              <li>All workshop papers (both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other A&amp;I databases.</li>
            </ul>
            <p className="text-justify">Papers can be submitted through EDAS: <a href="https://edas.info/N34338" target="_blank" rel="noopener noreferrer">https://edas.info/N34338</a></p>
            <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Call for Papers</h3>
            <div className="well">
              <a href="/docs/CFP_2026/IIGW_2026_CFP_1.pdf" download>
                <i className="glyphicon glyphicon-download-alt" style={{ marginRight: 10 }}></i> Download PDF version of the Call For Papers
              </a>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Camera Ready Guidelines</h3>
            <div className="well">
              <a href="https://www.comsnets.org/camera_ready.html">https://www.comsnets.org/camera_ready.html</a>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Important Dates</h3>
            <div className="dates-timeline">
              <div className="date-step">
                <div className="dot">1</div>
                <div className="lab">Paper Submission deadline</div>
                <div className="val"><s>15<sup>th</sup> October 2025 (AoE)</s><s>30<sup>th</sup> October 2025 (AoE)</s><span className="now">12<sup>th</sup> November 2025 (AoE)</span></div>
              </div>
              <div className="date-step">
                <div className="dot">2</div>
                <div className="lab">Notification of Acceptance</div>
                <div className="val"><s>15<sup>th</sup> November 2025</s><s>20<sup>th</sup> November 2025</s><span className="now">26<sup>th</sup> November 2025</span></div>
              </div>
              <div className="date-step">
                <div className="dot">3</div>
                <div className="lab">Camera-ready Submission</div>
                <div className="val"><s>30<sup>th</sup> November 2025</s><span className="now">5<sup>th</sup> December 2025</span></div>
              </div>
              <div className="date-step is-event">
                <div className="dot"><i className="fa fa-star" aria-hidden="true"></i></div>
                <div className="lab">Workshop Date</div>
                <div className="val">6<sup>th</sup> January 2026</div>
              </div>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Technical Program Committee</h3>
            <ul>
              {tpc.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>

          <div className="event-section">
            <h3 className="section-title">Internet Intelligence and Governance Workshop Co-Chairs</h3>
            <div className="member-grid">
              <div className="member-card">
                <img src="/assets/images/Committee_2024/Anand.jpg" alt="Anand Baswade" className="member-photo" />
                <div className="member-name"><a href="https://www.iitbhilai.ac.in/index.php?pid=anand" target="_blank" rel="noopener noreferrer">Anand Baswade</a></div>
                <p className="member-affil">Indian Institute of Technology<br />Bhilai, India</p>
              </div>
              <div className="member-card">
                <img src="https://ieeexplore.ieee.org/mediastore/IEEE/content/freeimages/6287639/10380310/10744020/majum-3491500-small.gif" alt="Chitradeep Majumdar" className="member-photo" />
                <div className="member-name"><a href="https://in.linkedin.com/in/chitradeep-majumdar-27689113" target="_blank" rel="noopener noreferrer">Chitradeep Majumdar</a></div>
                <p className="member-affil">Nokia Standards Division<br />Bangalore, India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

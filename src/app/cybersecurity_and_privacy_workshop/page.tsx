export const metadata = { title: 'Cyber Security and Privacy Workshop | COMSNETS 2027' };

interface ScheduleItem {
  time: string;
  title: string;
  icon: string;
  subtext?: string;
}

const schedule: ScheduleItem[] = [
  { time: '08:45 - 09:00', title: 'Welcome', icon: 'bi-clock' },
  { time: '09:00 - 10:00', title: 'Keynote Talk', icon: 'bi-mic', subtext: 'Salil Kanhere (University of New South Wales, Australia)' },
  { time: '10:00 - 10:10', title: 'Decision Framework for Selection of Post Quantum Cryptographic Algorithms and Libraries', icon: 'bi-file-earmark-text', subtext: 'Pankaj Kumar Sahu et al. (TCS Research, India)' },
  { time: '10:10 - 10:20', title: 'eQUIC: A Resource-friendly Encryption-based Framework to Secure QUIC Handshake Process from MITM Attacks', icon: 'bi-file-earmark-text', subtext: 'Debasmita Dey, Sayan Pal, Niray Ghosh (IIEST Shibpur, India)' },
  { time: '10:20 - 10:30', title: 'Rethinking Website Fingerprinting: A Critical Study', icon: 'bi-file-earmark-text', subtext: 'Aditi Aralkar et al. (IIT Indore / IIT Bombay, India)' },
  { time: '10:30 - 10:40', title: 'AMQP Under Siege: Characterizing and Measuring Slow Rate DoS Attacks', icon: 'bi-file-earmark-text', subtext: 'Sushant Kuril et al. (IIIT Sri City / IIT Dhanbad, India)' },
  { time: '10:40 - 10:50', title: 'Red Flags in the Browser: Detecting Impulsive Clicks for Adaptive Cybersecurity', icon: 'bi-file-earmark-text', subtext: 'Shubham Malaviya et al. (TCS Research, India)' },
  { time: '10:50 - 11:00', title: 'A Service Provider Recommendation System for Verifiable Credential Ecosystem', icon: 'bi-file-earmark-text', subtext: 'Vigneswaran R et al. (TCS, India / Australia & NZ)' },
  { time: '11:00 - 11:30', title: 'Tea / Coffee Break', icon: 'bi-cup-hot' },
  { time: '11:30 - 12:30', title: 'Keynote Talk', icon: 'bi-mic', subtext: 'Sathya Peri (IIT Hyderabad, India)' },
  { time: '12:30 - 12:40', title: 'Post-Quantum DLT Framework for Secure Financial Transactions in Banking Applications', icon: 'bi-file-earmark-text', subtext: 'Abhishek Pandey et al. (IIIT Hyderabad / Lloyds Tech Centre, India)' },
  { time: '12:40 - 12:50', title: 'A Phase-Encoded Quantum One-Time Pad for Sender-Deniable Encryption', icon: 'bi-file-earmark-text', subtext: 'Sougata Jana, Jaydeep Howlader (NIT Durgapur, India)' },
  { time: '12:50 - 13:00', title: 'HERO: A Novel Cryptographic Scheme for Secure and Efficient Data Exchange Over Future Networks', icon: 'bi-file-earmark-text', subtext: 'Avnith Mishra, Arsh Singh, Sharda Tripathi (BITS Pilani, India)' },
  { time: '13:00 - 14:00', title: 'Lunch Break', icon: 'bi-egg-fried' },
  { time: '14:00 - 15:00', title: 'Panel Discussion: Security by Design: Embedding Trust, Ethics, and Transparency into AI Systems', icon: 'bi-people', subtext: 'Moderator: Prasant Misra (TCS Research). Panelists: Ashok Kumar Das (IIIT Hyderabad), Bhavana Kanukurthi (IISc Bangalore), Supratik Mukhopadhyay (LSU, USA)' },
  { time: '15:00 - 15:10', title: 'TPACS: A Novel Trust-Aware Proactive Adaptive Caching Strategy for Named Data Networking', icon: 'bi-file-earmark-text', subtext: 'Matta Krishna Kumari et al.' },
  { time: '15:10 - 15:20', title: 'An Encryption-Aware Deduplication Approach for IoT Systems', icon: 'bi-file-earmark-text', subtext: 'Surya Pavan Devarapalli et al. (BITS Pilani Hyderabad)' },
  { time: '15:20 - 15:30', title: 'Automated Cyber Attack Anatomy and Timeline Visualization with RAG Pipeline', icon: 'bi-file-earmark-text', subtext: 'Rajalakshmi, Ghanshyam S Bopche (NIT Tiruchirappalli)' },
  { time: '15:30 - 15:40', title: 'Leveraging Quantum Kernel Methods for Enhanced Intrusion Detection', icon: 'bi-file-earmark-text', subtext: 'Anuj Tiwari, Sameer G Kulkarni (IIT Gandhinagar)' },
  { time: '15:40 - 15:50', title: 'Quantum Wasserstein GAN: A Novel Approach for Generating Anomalous Timeseries Data', icon: 'bi-file-earmark-text', subtext: 'Shashi Kumar, Sameer G Kulkarni (IIT Gandhinagar)' },
  { time: '15:50 - 16:00', title: 'Log-Based Authentication for Detecting Cooperative Impersonation', icon: 'bi-file-earmark-text', subtext: 'Ryosuke Kobayashi et al. (University of Tokyo, Japan)' },
  { time: '16:00 - 16:30', title: 'Tea Break', icon: 'bi-cup-hot' },
  { time: '16:30 - 16:40', title: 'AAPSCH: Adaptive AI-Powered Smart Contract Honeypots with RL for Blockchain Security', icon: 'bi-file-earmark-text', subtext: 'Mahesh Babu Chittem, Ashok Kumar Pradhan (SRM University AP)' },
  { time: '16:40 - 16:50', title: 'SrcTCAM-Def: A Source-based Detection System against Slow-Rate TCAM DDoS Attacks in SDN', icon: 'bi-file-earmark-text', subtext: 'Mitali Sinha, Padmalochan Bera, Manoranjan Satpathy (IIT Bhubaneswar)' },
  { time: '16:50 - 17:00', title: 'AIDE: An Adaptive Incremental Drift-Aware Engine for Malware Detection', icon: 'bi-file-earmark-text', subtext: 'Meghana Kiran et al. (SRM University AP)' },
  { time: '17:00 - 17:15', title: 'Closing & Best Paper Award Announcement', icon: 'bi-flag' },
];

const topics = [
  'Authentication, authorization, and accounting',
  'Information Security protocols and architectures',
  'Security in wired, mobile and wireless communications',
  'Security in grid/cloud/pervasive computing',
  'Network Intrusion Detection and Prevention, firewalls, packet filters',
  'Public Key Infrastructures, key management, credential management',
  'Network and internet forensics techniques',
  'Secure routing and security management',
  'Malware, botnets, and similar topics',
  'Embedded system security',
  'Zero Trust Architecture',
  'Access control security',
  'Security in parallel and distributed systems',
  'Blockchain and distributed ledger technologies',
  'Security and privacy policies',
  'Privacy-preserving data collection and analytics',
  'Anonymous communication and censorship resistance',
  'Critical infrastructure security and privacy',
  'Security and privacy for cyber physical systems',
  'Security and privacy for e-commerce/m-commerce',
  'Security and privacy in social networks',
  'AI and ML security and privacy',
  'Internet of Things (IoT) security and privacy',
  'Mobile devices security and privacy',
  'Security and privacy for digital identity',
  'Edge based security and privacy',
  'Security and privacy in the Metaverse',
  'Web security and privacy',
];

const programCommittee = [
  ['Aditya Ahuja', 'TCS Research, India'],
  ['Albert Levi', 'Sabanci University, Turkey'],
  ['Argha Sen', 'Indian Institute of Technology Kharagpur, India'],
  ['B. S. Manoj', 'Indian Institute of Space Science and Technology, India'],
  ['Basabdatta Palit', 'National Institute of Technology Rourkela, India'],
  ['Bishakh Ghosh', 'Indian Institute of Technology Kharagpur, India'],
  ['Debasree Das', 'University of Bamberg, Germany'],
  ['Dulanga Weerakoon', 'Singapore-MIT Alliance for Research and Technology, Singapore'],
  ['Meenu Dey', 'Indian Institute of Technology Guwahati, India'],
  ['Paresh Saxena', 'BITS Pilani, India'],
  ['Poonam Yadav', 'University of York, United Kingdom'],
  ['Rohit Kumar', 'Delhi Technological University'],
  ['Rohit Verma', 'Intel, India'],
  ['Roopa Vishwanathan', 'New Mexico State University, USA'],
  ['Subhasish Dhal', 'Indian Institute of Information Technology Guwahati, India'],
  ['Vishwas Patil', 'Indian Institute of Technology Bombay, India'],
];

const coChairs = [
  { name: 'Shantanu Pal', link: 'https://www.deakin.edu.au/about-deakin/people/shantanu-pal', img: '/assets/images/Committee_2025/PosterCoChairs/shantanup.jpg', org: 'Deakin University', loc: 'Australia' },
  { name: 'Robin Doss', link: 'https://experts.deakin.edu.au/708-robin-ram-mohan-doss', img: '/assets/images/Committee_2025/WorkshopCoChair/Robin_Doss.jpg', org: 'Deakin University', loc: 'Australia' },
  { name: 'Sandeep Shukla', link: 'https://www.iiit.ac.in/faculty/sandeep-kumar-shukla/', img: '/assets/images/speakers_2025/workshopkeynote/Sandeep.png', org: 'International Institute of Information Technology', loc: 'Hyderabad, India' },
];

export default function CybersecurityAndPrivacyWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Cyber Security and Privacy Workshop</h1>

              <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(124,58,237,0.35)', marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '0.3rem' }}>Cyber Security and Privacy Workshop</h1>
                <div style={{ fontSize: '1.1em', fontWeight: 500, background: 'rgba(255,255,255,0.2)', padding: '0.75rem 1.5rem', marginTop: '0.5rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 6<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 8:45 AM - 5:15 PM IST &nbsp;&bull;&nbsp; Venue: ESQUIRE (Basement)
                </div>
              </div>
              <hr />

              <h4 className="text-center" style={{ color: '#2A4D75', fontWeight: 700, borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Detailed Schedule</h4>
              <div className="schedule-container">
                {schedule.map((event, idx) => (
                  <div key={idx} style={{ display: 'flex', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(79,70,229,0.1)', padding: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '120px', textAlign: 'center' }}>
                      <i className={`bi ${event.icon}`}></i>&nbsp;<span>{event.time}</span>
                    </div>
                    <div style={{ paddingLeft: '1.5rem' }}>
                      <div style={{ fontSize: '1.05rem', fontWeight: 500, color: '#1e293b' }}>{event.title}</div>
                      {event.subtext && <div style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '0.4rem' }}>{event.subtext}</div>}
                    </div>
                  </div>
                ))}
              </div>
              <hr />

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/CSP_2026_CFP_1.pdf" download><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
              </div>
              <hr />

              <h3>Camera Ready Guidelines</h3>
              <div className="well">
                <a href="https://www.comsnets.org/camera_ready.html" target="_blank" rel="noopener noreferrer">https://www.comsnets.org/camera_ready.html</a>
              </div>
              <hr />

              <h3>Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr><td><strong>Paper Submission deadline: <s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp; 30<sup>th</sup> October 2025 (AoE)</strong></td></tr>
                  <tr><td><strong>Notification of Acceptance: <s>15<sup>th</sup> November 2025</s>&nbsp; <s>20<sup>th</sup> November 2025</s>&nbsp; 26<sup>th</sup> November 2025</strong></td></tr>
                  <tr><td><strong>Camera-ready Submission: <s>30<sup>th</sup> November 2025</s>&nbsp; 5<sup>th</sup> December 2025</strong></td></tr>
                  <tr><td><strong>Workshop Date: 6<sup>th</sup> January 2026</strong></td></tr>
                </tbody>
              </table>
              <hr />

              <p className="text-justify">The Cybersecurity and Privacy (CSP) Workshop will be held in conjunction with the annual COMSNETS conference on January 6, 2026. This workshop is intended to be a forum where researchers can meet and discuss the latest in cyber security and privacy topics as they apply to communications systems. Security and Privacy researchers and professionals from government, industry and academia are invited to propose and present original work in the following topics (or related areas):</p>
              <ul>
                {topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <p className="text-justify">Researchers are invited to submit papers based on original work written in English in these and other topics related to cyber security and privacy.</p>
              <hr />

              <h4>Submission Guidelines</h4>
              <ul>
                <li>The Cyber Security and Privacy Workshop invites submission of original work, not previously published, or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length. A minimum number of 4 pages are required.</li>
                <li>Reviews will be <b>double-blind:</b> authors&rsquo; names and affiliations must not be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted on EDAS.</li>
                <li>One of the authors must register for the workshop with the designated registration rate and present the paper in person.</li>
                <li>All workshop papers (both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.</li>
              </ul>
              <p className="text-justify">Papers can be submitted through EDAS: <a href="https://edas.info/N34097" target="_blank" rel="noopener noreferrer">https://edas.info/N34097</a></p>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              <hr />

              <h3>Program Committee</h3>
              <ul>
                {programCommittee.map(([name, aff]) => <li key={name}><b>{name}</b> ({aff})</li>)}
              </ul>
              <hr />

              <div className="organizing-committee-page center-block">
                <h3>Workshop Co-Chairs</h3>
                <div className="row">
                  {coChairs.map((c) => (
                    <div key={c.name} className="col-lg-4 col-md-4">
                      <img src={c.img} alt={c.name} className="thumbnail" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                      <div className="caption">
                        <h4><a href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a></h4>
                        <p>{c.org}<br />{c.loc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'MINDS Workshop | COMSNETS 2027' };

interface ScheduleItem {
  time: string;
  title: string;
  icon: string;
  subtext: string;
  section?: string;
}

const mindsSchedule: ScheduleItem[] = [
  { time: "09:30 – 09:40", title: "Welcome by Workshop Chairs", icon: "bi-clock", subtext: "", section: "Session 1" },
  { time: "09:40 – 10:40", title: "Keynote Talk 1: Sustainable Federated Intelligence for Networked Systems", icon: "bi-mic", subtext: "Dr. Yogesh Simmhan, IISc Bangalore" },
  { time: "10:40 – 11:00", title: "Paper-1: Enhanced Channel Estimation in Near-Field XL-MIMO Using Deep Denoising Networks", icon: "bi-file-earmark-text", subtext: "Salihath P, Mohammed Shadhil A V, Vani Devi M" },
  { time: "11:00 – 11:30", title: "Tea/Coffee", icon: "bi-cup-hot", subtext: "" },
  { time: "11:30 – 11:50", title: "Paper-2: Meta-agentic Framework for Software bug detection using Large Language Models", icon: "bi-file-earmark-text", subtext: "Srita Padmanabhuni, Bhargavi Karuturi, Jerusha Karen Indupalli, Santhan Reddy Chilla, Vivek Yelleti", section: "Session 2" },
  { time: "11:50 – 12:10", title: "Paper-3: Intent2Vec: Contrastive Learning for Predictive and Interpretable Intent Violation Detection in SDN", icon: "bi-file-earmark-text", subtext: "Anjana Jimmington, Sabu M Thampi" },
  { time: "12:10 – 12:30", title: "Paper-4: How Far is too Far? Fixing Vision of Autonomous Vehicles using Selective Super-Resolution", icon: "bi-file-earmark-text", subtext: "Najiya Naj, Ritik Vaishnav, Arani Bhattacharya" },
  { time: "12:30 – 12:50", title: "Paper-5: A Hybrid Reinforcement Learning Based Intrusion Detection And Mitigation System for Encrypted Network Traffic", icon: "bi-file-earmark-text", subtext: "Sai Akshita Dimpu Pagoti, Teja Sri Pacharu, Kamalakanta Sethi" },
  { time: "13:00 – 14:00", title: "Lunch Break", icon: "bi-egg-fried", subtext: "" },
  { time: "14:00 – 15:00", title: "Keynote Talk 2: Adapting Software Stack In the Era of Agentic AI", icon: "bi-mic", subtext: "Dr. Vijay Gabale, Infilect Inc.", section: "Session 3" },
  { time: "15:00 – 15:20", title: "Paper-6: An Explainable Attention-Driven CNN Architecture for Reliable Infectious Disease Diagnosis", icon: "bi-file-earmark-text", subtext: "Cephas Iko, Randhir Kumar, Prabhat Kumar" },
  { time: "15:20 – 15:40", title: "Paper-7: Differentially Private Federated Autoencoder Framework for Securing Internet of Medical Things", icon: "bi-file-earmark-text", subtext: "Thumma Uma Maheswari, Santosh Patil, Pavan Kumar C" },
  { time: "15:40 – 16:00", title: "Paper 8: SWiSS: Self-supervised Vision Transformer for Wideband Spectrum Segmentation", icon: "bi-file-earmark-text", subtext: "Shrutika S Sawant, Noel Jander, Adela Vagollari, Theresa Götz, Sahana Raghunandan" },
  { time: "16:00 – 16:10", title: "Closing & Best Paper Award announcement", icon: "bi-flag", subtext: "" },
  { time: "16:00 – 16:30", title: "Tea Break", icon: "bi-cup-hot", subtext: "" },
];

const tpcMembers = [
  "Dr. Rohit Kumar, Assistant Professor, DTU India",
  "Dr. Prem Singh, Assistant Professor, IIITB",
  "Dr. Manuj Mukherjee, Assistant Professor, IIIT Delhi",
  "Dr. Dimitrios Dechouniotis, Postdoctoral Fellow, National Technical University of Athens (NTUA), Greece",
  "Dr. Ram Prasad Padhy, IIT Bhubaneswar",
  "Dr. Pranay Saha, IIT ISM",
  "Dr. John Violos, Postdoctoral Research Fellow, Information Technologies Institute (ITI)",
  "Ramy Mohamed, PhD Candidate and Research Assistant, Carleton University",
  "Dr. Rahul Singh, Indian Institute of Science",
  "Dr. Subhasish Dhal, Assistant Professor, Indian Institute of Information Technology Guwahati",
  "Dr. Maria Diamanti, Postdoctoral Fellow, National Technical University of Athens (NTUA), Greece",
  "Dr. Md Yusuf Uddin, Assistant Professor, University of Missouri Kansas City (UMKC)",
  "Grigorios Kakkavas, PhD Candidate, National Technical University of Athens",
  "Dr. Anurag Satpathy, Postdoctoral Fellow, Missouri University of Science and Technology",
  "Dr. Andrey Chechulin, St. Petersburg Federal Research Center of Russian Academy of Sciences (SPC RAS)",
  "Dr. Ioannis Dimolitsas, Postdoctoral Fellow, National Technical University of Athens (NTUA), Greece",
  "Dr. Bishakh Ghosh, Indian Institute of Technology Kharagpur",
  "Dr. Aroosa Hameed, Postdoctoral Fellow, Carleton University",
  "Dr. Shubha Nath, Assistant Professor, Indian Institute of Information Technology Guwahati",
  "Dr. Dimitrios Spatharakis, Postdoctoral Fellow, National Technical University of Athens (NTUA), Greece",
  "Dr. Konstantinos Tsitseklis, Postdoctoral Fellow, National Technical University of Athens (NTUA), Greece",
  "Dr. Mridula Verma, Assistant Professor, IDRBT",
  "Dr. Debarati B. Chakraborty",
  "Dr. Dibyasundar Das",
  "Dr. Subhrendu Chattopadhyay, Assistant Professor, IDRBT",
];

export default function MindsWorkshopPage() {
  let currentSection = '';
  let isFirstSection = true;
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 8px 32px rgba(124, 58, 237, 0.35)', marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>Workshop on Machine Intelligence in Networked Data and Systems (MINDS)</h1>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255, 255, 255, 0.2)', padding: '0.75rem 1.5rem', marginTop: '1rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 6<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:30 AM – 4:30 PM IST &nbsp;&bull;&nbsp; Venue: Sigma 3
                </div>
              </div>
              <hr />

              <h4 className="text-center" style={{ fontWeight: 700, color: '#2A4D75', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Detailed Schedule</h4>
              <div>
                {mindsSchedule.map((event, idx) => {
                  const showHeader = !!event.section && event.section !== currentSection;
                  let divider = null;
                  let header = null;
                  if (showHeader) {
                    if (!isFirstSection) {
                      divider = <div key={`div-${idx}`} style={{ background: 'linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)', height: '4px', borderRadius: '2px', margin: '2rem 0 1.5rem 0' }}></div>;
                    }
                    header = <div key={`hdr-${idx}`} style={{ fontWeight: 600, color: '#153996', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0', padding: '0.5rem 0 0.5rem 1rem', borderLeft: '4px solid #153996', background: 'rgba(79, 70, 229, 0.03)' }}>{event.section}</div>;
                    currentSection = event.section!;
                    isFirstSection = false;
                  }
                  return (
                    <div key={idx}>
                      {divider}
                      {header}
                      <div style={{ display: 'flex', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(79, 70, 229, 0.1)', padding: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                        <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '120px', fontSize: '1rem', textAlign: 'center' }}>
                          <i className={`bi ${event.icon}`}></i> <span>{event.time}</span>
                        </div>
                        <div>
                          <div style={{ paddingLeft: '1.5rem', fontSize: '1.15rem', fontWeight: 500, color: '#1e293b' }}>{event.title}</div>
                          {event.subtext.trim() && (
                            <div style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: '#64748b', marginTop: '0.4rem' }}>{event.subtext}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr />

              <h3>Workshop Overview</h3>
              <p className="text-justify">As connectivity, computing, and storage are getting cheaper, we are seeing more opportunities for data-driven approaches for networked data and systems. The adaptation of machine learning, artificial intelligence, and data analytics techniques in these networked systems is set to transform and disrupt many areas of business and everyday human life. The Workshop on Machine Intelligence in Networked Data and Systems (MINDS) is co-located with COMSNETS and aims to bring together researchers and practitioners to explore and investigate this interworking of machine learning, big data analytics, and networked systems for various application domains.</p>

              <p className="text-justify">MINDS welcomes original research submissions that define challenges, report experiences, or discuss progress toward design and solutions that integrate machine learning, artificial intelligence, data analytics, deep learning, mobile systems, and networked systems in various application areas. These application areas include but are not limited to healthcare, environment, retail, transportation, life sciences, e-commerce and cloud services. Contributions describing techniques applied to real-world problems and interdisciplinary research involving novel networking architectures, system designs, IoT systems, big data systems that use techniques from machine learning, artificial intelligence, deep learning, and data analytics as the core component are especially encouraged.</p>
              <hr />

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/MINDS_2026_CFP_1.pdf" download="MINDS Workshop COMSNETS 2026 - Call for Papers.pdf"><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
              </div>
              <hr />

              <h3>Camera Ready Guidelines</h3>
              <div className="well">
                <a href="/camera_ready">/camera_ready</a>
              </div>
              <hr />

              <h3>Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Paper Submission deadline: <s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp; 30<sup>th</sup> October 2025 (AoE)</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance: <s>15<sup>th</sup> November 2025</s>&nbsp; <s>20<sup>th</sup> November 2025</s>&nbsp; 26<sup>th</sup> November 2025</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission: <s>30<sup>th</sup> November 2025</s>&nbsp; 5<sup>th</sup> December 2025</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Date: 6<sup>th</sup> January 2026</strong></td>
                  </tr>
                </tbody>
              </table>
              <hr />

              <h4>The topics of interest include, but are not limited to:</h4>
              <ul>
                <li><b>Networks</b>
                  <ul>
                    <li>ML for network management, orchestration, and control</li>
                    <li>ML for network security and privacy</li>
                    <li>Mining of large-scale network measurements</li>
                    <li>Networks for AI through programmability and hardware acceleration on the data plane (in-network computing and in-network ML)</li>
                    <li>LLMs for intent-based networking (IBN) and network configuration</li>
                    <li>AI-based assurance for self-managed networks (self-healing, self-configuration, self-optimization, self-protection)</li>
                    <li>ML for transport and transport for ML applications</li>
                    <li>ML for IoT, smart cities, and vehicular networks</li>
                    <li>AI/ML for JSAC and digital twinning</li>
                    <li>LLMs for goal/task oriented and semantic communications (SemCom)</li>
                  </ul>
                </li>
                <li><b>Systems</b>
                  <ul>
                    <li>ML for systems management, performance modelling, and optimizations</li>
                    <li>ML-driven resource provisioning, scheduling, and scaling techniques</li>
                    <li>ML for sustainable resource management in cloud and edge systems</li>
                    <li>ML-driven systems using mobile phones, embedded devices, and sensor networks</li>
                    <li>Workflow management in edge-cloud compute continuum</li>
                  </ul>
                </li>
                <li><b>Applications</b>
                  <ul>
                    <li>Design and implementation of intelligent systems for applications such as home automation, self-driving vehicles, driver assistance systems, supply chain, and logistics</li>
                    <li>Cloud-based machine and deep learning applications in retail and e-commerce</li>
                    <li>Machine learning systems for healthcare, weather modeling, financial services, life sciences, and environmental monitoring</li>
                    <li>Applications of machine learning in IoT, IIoT, manufacturing, and supply chain optimisation</li>
                    <li>Experiences in managing wearable devices, smart-home systems and mobile sensor networks</li>
                    <li>Anomaly and outlier detection in social networks</li>
                  </ul>
                </li>
              </ul>
              <hr />

              <h4>Submission Guidelines</h4>
              <ul>
                <li>MINDS invites submission of original work not previously published, or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length.</li>
                <li>Reviews will be <b>double-blind:</b> Information about the authors will not be shared with the reviewers during the review process. The submitted paper should be anonymous and not have any reference to the authors' names or institutions.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the MINDS Workshop submission site on EDAS.</li>
                <li>All workshop papers will appear in the conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.</li>
              </ul>
              <p className="text-justify">Papers can be submitted through EDAS: <a href="https://edas.info/N34100" target="_blank" rel="noopener noreferrer">https://edas.info/N34100</a></p>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              <hr />

              <h3>Technical Program Committee</h3>
              <ul>
                {tpcMembers.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">Workshop Co-Chairs</h3>
                <div className="row">
                  <div className="col-sm-4 col-md-4">
                    <img src="/assets/images/Committee_2024/mavgeris.jpg" className="thumbnail" alt="Marios Avgeris" style={{ height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://www.linkedin.com/in/mavgeris/" target="_blank" rel="noopener noreferrer">Marios Avgeris</a></h4>
                      <p>University of Amsterdam<br />Netherlands</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <img src="https://balakrishnanc.github.io/balac.jpg" className="thumbnail" alt="Balakrishnan Chandrasekaran" style={{ height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://balakrishnanc.github.io/" target="_blank" rel="noopener noreferrer">Balakrishnan Chandrasekaran</a></h4>
                      <p>Vrije Universiteit Amsterdam<br />Netherlands</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <img src="https://shashikantilager.com/assets/img/prof_pic_2024.JPG" className="thumbnail" alt="Shashikant Ilager" style={{ height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://shashikantilager.com/" target="_blank" rel="noopener noreferrer">Shashikant Ilager</a></h4>
                      <p>University of Amsterdam<br />Netherlands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

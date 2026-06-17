export const metadata = { title: 'Artificial Intelligence of Things (AIoT) | COMSNETS 2027' };

interface ScheduleItem {
  time: string;
  title: string;
  icon: string;
  subtext: string;
  section?: string;
}

const aiotSchedule: ScheduleItem[] = [
  { time: "09:30 – 10:00", title: "Welcome by Workshop Chairs", icon: "bi-clock", subtext: "", section: "Session 1" },
  { time: "10:00 – 10:30", title: "Unlocking AIoT Efficiency in the Computing Continuum - the PANDORA Framework", icon: "bi-mic", subtext: "Dr. Asterios Stroumpoulis" },
  { time: "10:30 – 11:00", title: "The Rise of On-Device AI: Challenges and Opportunities", icon: "bi-mic", subtext: "Dr. Pandarasamy Arjunan (Assistant Professor, IISc Bengaluru)" },
  { time: "11:00 – 11:30", title: "Tea/Coffee", icon: "bi-cup-hot", subtext: "" },
  { time: "11:30 – 11:50", title: "Tiny Yet Mighty: Quantized Deep Learning for Edge Plant Disease Detection", icon: "bi-file-earmark-text", subtext: "Saud Masaud Alam; Aniruddh Jain; Nikhil Tiwari Patel Mahekkumar Ghelabhai; Sourajit Behera", section: "Session 2: Resilient & Secure Edge Intelligence for AIoT Systems" },
  { time: "11:50 – 12:10", title: "Adaptive Task Scheduling in Edge-Fog-Cloud with Network Failure Resilience", icon: "bi-file-earmark-text", subtext: "Sahil Padole; Ajay Kattepur" },
  { time: "12:10 – 12:30", title: "Low-Cost IoT-Based Downtime Detection For UPS and Behaviour Analysis", icon: "bi-file-earmark-text", subtext: "Sannidhya Gupta; Prakash Nayak; Sachin Chaudhari" },
  { time: "12:30 – 12:50", title: "DP-EMAR: A Differentially Private Framework for Autonomous Model Weight Repair in Federated IoT Systems", icon: "bi-file-earmark-text", subtext: "Chethana Prasad Kabgere; Shylaja S S" },
  { time: "12:50 – 14:00", title: "Lunch Break", icon: "bi-egg-fried", subtext: "" },
  { time: "14:00 – 14:20", title: "Edge Intelligence for Speech: Evaluating Model Performance, Feature Extraction and Signal Fidelity on Commodity Hardware", icon: "bi-file-earmark-text", subtext: "Shubham; Loukik Darsi; Avaneesh Pothuri; Manik Gupta; RN Ponnalagu", section: "Session 3: AI-Enhanced IoT Sensing and Edge Intelligence" },
  { time: "14:20 – 14:40", title: "IoT-Assisted Estimation of Vehicular Traffic Status over Wide-Area", icon: "bi-file-earmark-text", subtext: "Anwesha Patel; Sudipta Saha" },
  { time: "14:40 – 15:00", title: "Real-Time Big Data Analytics for Predictive Healthcare Monitoring using IoT and Cloud Integration", icon: "bi-file-earmark-text", subtext: "Chitiz Tayal" },
  { time: "15:00 – 15:20", title: "Human Activity Recognition Using 5G RF Sensing and Interpretable Tsetlin Machines", icon: "bi-file-earmark-text", subtext: "Charitha Gadari; Sreenivasa Reddy Yeduri; Ole-Christoffer Granmo; Linga Reddy Cenkeramaddi, Sr" },
  { time: "15:20 – 15:40", title: "Green AI Orchestration Bridging Trustworthy AI and Edge AI through tinyML for Frugal Intelligence", icon: "bi-file-earmark-text", subtext: "Joao Costa; Marco Zennaro; Ioana Ntinou; John S Shawe-Taylor" },
  { time: "15:40 – 16:00", title: "TinyVLM: A Distilled and Quantized Vision-Language Model for Efficient Food Image-Text Retrieval in TinyML Settings", icon: "bi-file-earmark-text", subtext: "Podakanti Satyajith Chary; Pithani Teja Venkata Ramana Kumar; Nagarajan Ganapathy" },
  { time: "16:00 – 16:30", title: "Tea Break (along with poster session)", icon: "bi-cup-hot", subtext: "" },
  { time: "16:30 – 16:50", title: "FedVAD: A Privacy-Preserving Federated Voice Anomaly Detection Framework for Child Safety", icon: "bi-file-earmark-text", subtext: "Yagyansh Gupta; Shyam Navinkumar Modi; Neha Agrawal", section: "Session 4: Advanced AIoT Decision Systems: Federated, Secure, and Autonomous Intelligence" },
  { time: "16:50 – 17:10", title: "COSTAR: Cloud-Observed Safety and Trust-Aware Agentic Reasoning for Enterprise Workflows", icon: "bi-file-earmark-text", subtext: "Sowjanya Pandruju" },
  { time: "17:10 – 17:30", title: "Multimodal RL for Game Recommendation using Dual-Discriminator PPO Framework", icon: "bi-file-earmark-text", subtext: "Ayush Deshmukh; Siddharth Kelkar; Anand Kumar M" },
  { time: "17:30 – 17:50", title: "Fast Domain Adaption and Model Compression for IoT devices using Meta-Learning and Federated Knowledge Distillation", icon: "bi-file-earmark-text", subtext: "Nelson Sharma; Nirmit Chaurasia; Lavanya Bhadani; Rajiv Misra; Supratik Mukhopadhyay" },
  { time: "17:50 – 18:15", title: "Closing & Best Paper Award announcement", icon: "bi-flag", subtext: "" },
];

const tpcMembers = [
  "Maria Pateraki (National Technical University of Athens)",
  "Konstantinos Tserpes (National Technical University of Athens)",
  "Dušan Jakovetić (University of Novi Sad)",
  "Sotiris Ioannidis (Technical University of Crete)",
  "Patrizio Dazzi (University of Pisa)",
  "Katerina Tzompanaki (Cergy Paris University)",
  "Houssam Hajj Hassan (Télécom SudParis)",
  "Arne Bröring (Siemens)",
  "Miloš Savić (University of Novi Sad)",
  "Vladimir Kurbalija (University of Novi Sad)",
  "Patrizio Frosini (University of Pisa)",
  "Ourania Manta (Cyberalytics Limited)",
  "Karl Waedt (Framatome)",
  "Mohammad Hamad (Technical University of Munich)",
  "Branislav Vrban (Slovak University of Technology)",
  "Konstantina Agoraki (University of Piraeus)",
];

export default function AIoTPage() {
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
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>Artificial Intelligence of Things (AIoT)</h1>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255, 255, 255, 0.2)', padding: '0.75rem 1.5rem', marginTop: '1rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 10<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:30 AM – 6:15 PM IST &nbsp;&bull;&nbsp; Venue: ESQUIRE (Basement)
                </div>
              </div>
              <hr />

              <h4 className="text-center" style={{ fontWeight: 700, color: '#2A4D75', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Detailed Schedule</h4>
              <div>
                {aiotSchedule.map((event, idx) => {
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
              <p className="text-justify">The AIoT (Artificial Intelligence of Things) Workshop brings together researchers exploring the convergence of AI and IoT systems, including on-device intelligence, edge computing, federated learning, and TinyML applications.</p>

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/AIoT_2026_CFP_1.pdf" download="AI for IoT Workshop COMSNETS 2026 - Call for Papers.pdf"><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
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
                    <td><strong>Paper Submission deadline: <s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp; <s>30<sup>th</sup> October 2025 (AoE)</s>&nbsp; 12<sup>th</sup> November 2025 (AoE)</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance: <s>15<sup>th</sup> November 2025</s>&nbsp; <s>20<sup>th</sup> November 2025</s>&nbsp; 26<sup>th</sup> November 2025</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission: <s>30<sup>th</sup> November 2025</s>&nbsp; 5<sup>th</sup> December 2025</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Date: 10<sup>th</sup> January 2026</strong></td>
                  </tr>
                </tbody>
              </table>
              <hr />

              <h4>Topics of Interest:</h4>
              <p className="text-justify"><strong>AI for IoT</strong> focuses on enabling <strong>machine learning</strong> and <strong>intelligent computing</strong> on resource-constrained, secure, and connected devices. We invite submissions of innovative technologies, frameworks, and applications that advance the IoT ecosystem. Topics include, but are not limited to:</p>
              <ul>
                <li>On-device machine learning algorithms</li>
                <li>TinyML and embedded AI for resource-constrained devices</li>
                <li>Real-time computer vision and speech processing</li>
                <li>Federated learning in IoT environments</li>
                <li>AI model compression, quantization, and pruning techniques</li>
                <li>Learning-enabled IoT applications</li>
                <li>Edge AI</li>
                <li>AI for IoT security and privacy</li>
                <li>Energy Efficient AI for IoT systems</li>
                <li>Distributed inference and learning</li>
                <li>Optimized blockchain for IoT</li>
                <li>AIoT solution risk evaluation and control</li>
                <li>Systems and software engineering for IoT</li>
                <li>AI-driven IoT protocols design</li>
                <li>IoT system architecture and enabling technologies</li>
                <li>Demonstration of AI-enabled IoT applications</li>
              </ul>
              <hr />

              <h4>Submission Guidelines</h4>
              <ul>
                <li>The AIOT Workshop invites original research work <strong>not previously published</strong> or under review elsewhere.</li>
                <li>Submissions (including title, authors, abstract, figures, tables, and references) must <strong>not exceed 6 pages.</strong></li>
                <li><strong>Double-blind review:</strong> Authors' names and affiliations must not appear in the submission.</li>
                <li>Submissions must follow the <strong>IEEE formatting guidelines</strong>; non-compliant papers will not be reviewed.</li>
                <li>All papers must be in <strong>PDF</strong> format and submitted via the AIOT Workshop submission site on <strong>EDAS</strong>: <a href="https://edas.info/N34103" target="_blank" rel="noopener noreferrer">https://edas.info/N34103</a></li>
                <li>Accepted workshop papers will appear in the conference proceedings and will be submitted to <strong>IEEE Xplore</strong> and other indexing databases.</li>
              </ul>
              <p className="text-justify">Papers can be submitted through EDAS: <a href="https://edas.info/N34103" target="_blank" rel="noopener noreferrer">https://edas.info/N34103</a></p>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              <hr />

              <h3>Technical Program Committee</h3>
              <ul>
                {tpcMembers.map((m, i) => <li key={i}><b>{m.split(' (')[0]}</b> ({m.split(' (')[1]}</li>)}
              </ul>
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">Artificial Intelligence of Things (AIoT) Workshop Co-Chairs</h3>
                <hr />
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <img src="/assets/images/Committee_2026/Punit_Potrait.jpeg" className="thumbnail" alt="Punit Rathore" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://www.vistalabiisc.com/P_portfolio" target="_blank" rel="noopener noreferrer">Punit Rathore</a></h4>
                      <p>Indian Institute of Science<br />Bengaluru, India</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img src="/assets/images/Committee_2026/Asterios.png" className="thumbnail" alt="Asterios Stroumpoulis" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://www.linkedin.com/in/asteriostrou/" target="_blank" rel="noopener noreferrer">Asterios Stroumpoulis</a></h4>
                      <p>National Technical University of Athens<br />Greece</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <img src="/assets/images/Committee_2026/Ajay Kattepur.jpg" className="thumbnail" alt="Ajay Kattepur" style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href="https://www.linkedin.com/in/ajay-kattepur-801a056b/" target="_blank" rel="noopener noreferrer">Ajay Kattepur</a></h4>
                      <p>Ericsson Research<br />Bangalore, India</p>
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

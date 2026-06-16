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
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="event-page">

          <div className="event-hero">
            <h1>Artificial Intelligence of Things (AIoT)</h1>
            <p className="lead">Event Date: 10<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:30 AM – 6:15 PM IST &nbsp;&bull;&nbsp; Venue: ESQUIRE (Basement)</p>
            <div className="event-details">COMSNETS 2027</div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Detailed Schedule</h3>
            <div className="sched">
              {aiotSchedule.map((event, idx) => {
                const showHeader = !!event.section && event.section !== currentSection;
                if (showHeader) currentSection = event.section!;
                return (
                  <div key={idx}>
                    {showHeader && <div className="sched-session">{event.section}</div>}
                    <div className="sched-item">
                      <div className="sched-time">{event.time}</div>
                      <div className="sched-body">
                        <div className="sched-title">{event.title}</div>
                        {event.subtext.trim() && <div className="sched-sub">{event.subtext}</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Workshop Overview</h3>
            <p className="text-justify">The AIoT (Artificial Intelligence of Things) Workshop brings together researchers exploring the convergence of AI and IoT systems, including on-device intelligence, edge computing, federated learning, and TinyML applications.</p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Call for Papers</h3>
            <div className="well">
              <a href="/docs/CFP_2026/AIoT_2026_CFP_1.pdf" download="AI for IoT Workshop COMSNETS 2026 - Call for Papers.pdf"><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Camera Ready Guidelines</h3>
            <div className="well">
              <a href="/camera_ready">/camera_ready</a>
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
                <div className="val">10<sup>th</sup> January 2026</div>
              </div>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Topics of Interest</h3>
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
          </div>

          <div className="event-section">
            <h3 className="section-title">Submission Guidelines</h3>
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
          </div>

          <div className="event-section">
            <h3 className="section-title">Technical Program Committee</h3>
            <ul>
              {tpcMembers.map((m, i) => <li key={i}><b>{m.split(' (')[0]}</b> ({m.split(' (')[1]}</li>)}
            </ul>
          </div>

          <div className="event-section">
            <h3 className="section-title">Artificial Intelligence of Things (AIoT) Workshop Co-Chairs</h3>
            <div className="member-grid">
              <div className="member-card">
                <img src="/assets/images/Committee_2026/Punit_Potrait.jpeg" alt="Punit Rathore" className="member-photo" />
                <div className="member-name"><a href="https://www.vistalabiisc.com/P_portfolio" target="_blank" rel="noopener noreferrer">Punit Rathore</a></div>
                <p className="member-affil">Indian Institute of Science<br />Bengaluru, India</p>
              </div>
              <div className="member-card">
                <img src="/assets/images/Committee_2026/Asterios.png" alt="Asterios Stroumpoulis" className="member-photo" />
                <div className="member-name"><a href="https://www.linkedin.com/in/asteriostrou/" target="_blank" rel="noopener noreferrer">Asterios Stroumpoulis</a></div>
                <p className="member-affil">National Technical University of Athens<br />Greece</p>
              </div>
              <div className="member-card">
                <img src="/assets/images/Committee_2026/Ajay Kattepur.jpg" alt="Ajay Kattepur" className="member-photo" />
                <div className="member-name"><a href="https://www.linkedin.com/in/ajay-kattepur-801a056b/" target="_blank" rel="noopener noreferrer">Ajay Kattepur</a></div>
                <p className="member-affil">Ericsson Research<br />Bangalore, India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

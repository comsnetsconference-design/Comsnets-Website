export const metadata = { title: 'Systems for the Future of AI/ML (SysAI) | COMSNETS 2027' };

interface Paper {
  title: string;
  subtext: string;
}

interface ScheduleEvent {
  time: string;
  title?: string;
  icon: string;
  subtext?: string;
  section?: string;
  papers?: Paper[];
}

const schedule: ScheduleEvent[] = [
  { time: '09:15 - 09:30', title: 'Welcome by Workshop Chairs', icon: 'bi-clock', subtext: '', section: 'Session 1' },
  { time: '09:30 - 10:30', title: 'Keynote Talk 1', icon: 'bi-mic', subtext: 'Soma Biswas, IISc Bangalore, India' },
  {
    time: '10:30 - 11:00',
    icon: 'bi-file-earmark-text',
    papers: [
      { title: 'BloBS-FL: A Robust Architecture of Blockchain Based Decentralized Split Federated Learning', subtext: 'Shruti Mishra, Yashasav Prajapati, Keshav Aggarwal, Sujata Pal (IIT Ropar, India)' },
      { title: 'Post-Quantum Secure IoT-Enabled Crop Recommender System Using Machine Learning', subtext: 'Snehal Jain, Abhishek Pandey, Ashok Kumar Das (IIIT Hyderabad, India), Shantanu Pal (Deakin University, Australia)' },
      { title: 'Learning-Based Optimization of EV Routing with V2G Integration & On-the-Go Energy Harvesting', subtext: 'Risshab Srinivas Ramesh (Ramaiah Institute of Technology), Prasant Misra, Pandara Swamy Arjunan (IISc Bangalore)' },
    ],
  },
  { time: '11:00 - 11:30', title: 'Networking and Tea break', icon: 'bi-cup-hot', subtext: '' },
  {
    time: '11:30 - 12:30',
    icon: 'bi-file-earmark-text',
    section: 'Session 2',
    papers: [
      { title: 'Adaptive Model Selection using Meta Models and Drift Adaptation', subtext: 'Karthikeya Maruvada (IIT Roorkee), Houssam Hajj Hassan (Telecom SudParis), Ajay Kattepur (Ericsson Research), Georgios Bouloukakis (University of Patras)' },
      { title: 'A Hybrid Geostatistical and Deep Learning Framework for Urban Pollutant Concentration Prediction from Sparse Data', subtext: 'Chinmay Gupta, Arhat Amitabh, Kapil Kumar Meena, Arkopal Kishore Goswami (IIT Kharagpur)' },
      { title: 'TinyFlame: Context-Aware Cooking Activity Detection Using Flame Sensing on Edge Devices', subtext: 'Ruma Ghosh, Rima Gorai, Gokul Pal, Sneha Chand, Arindam Ghosh, Sujoy Saha (NIT Durgapur / B C Roy Engineering College)' },
      { title: 'FusionPhishGuard: An Attention-Enhanced Multi-Branch Framework for Intelligent Phishing Detection on Mobile and Web Platforms', subtext: 'Yashwanth Yallavula, Srikanth Panigrahi, Manoj Kumar Sunkara, Vishwanath Tangella (CBIT Osmania)' },
      { title: 'PDFInspect: A Unified Feature Extraction Framework for Malicious Document Detection', subtext: 'Sharmila SP (IIT Indore / Siddaganga Institute of Technology)' },
      { title: 'iAirGuard: A Modular IoT Architecture with Dynamic Sampling and TinyML-Based Fault Detection for Air Quality Monitoring', subtext: 'Molay Mondal, Arko Datta, Prashanth Durgam, Astom Mondal, Khushi Shyam, Pabitra Majhi, Subrata Nandi, Sanghita Bhattacharjee, Sujoy Saha (NIT Durgapur)' },
    ],
  },
  { time: '13:00 - 14:00', title: 'Lunch Break', icon: 'bi-egg-fried', subtext: '' },
  { time: '14:00 - 15:00', title: 'Keynote Talk 2: Efficient LLM Inference at Scale', icon: 'bi-mic', subtext: 'Nipun Kwatra, Microsoft, India', section: 'Session 3' },
  {
    time: '15:00 - 16:00',
    icon: 'bi-file-earmark-text',
    papers: [
      { title: 'Energy-Efficient Coverage Path Planning for Multi-UAVs in Dynamic Threat Environments', subtext: 'Pranita Mahajan, Abdul Kayum Ali, Navya Dhawde, Nilotpal Chakraborty (IIIT Guwahati), Mirza Ghalib Anwarul Husain Baig (IIT Mandi)' },
      { title: 'DPNet: A Lightweight TinyML Model for Real-Time Bathroom Sound Classification', subtext: 'Debolina Chowdhury, Chawan Vinod, Suman Samui, Mousumi Saha, Sujoy Saha (NIT Durgapur)' },
      { title: 'TinyMLAir: Indoor Air Quality of Domestic Activities through TinyML', subtext: 'Pritisha Sarkar (NSHM Knowledge Campus, Durgapur), Kushalava Reddy Jala (TCS), Mousumi Saha (NIT Durgapur)' },
      { title: 'Leveraging Conditional Distribution Similarity for Task-Aware Personalization in Federated Learning', subtext: 'Fatema Huseni Vadnagarwala, Prashanth Pvn (VNIT Nagpur)' },
      { title: 'ML-Based Refrigerator Scheduling for Energy Efficiency in Renewable-Integrated Smart Homes', subtext: 'Sanjiban Roy, Yamini Sisodia, Nilotpal Chakraborty (IIIT Guwahati), Preveen Kumar Devarajan (NCMRWF)' },
      { title: 'Survival Classification of High-Grade Gliomas using an Interpretable 3D Multi-modal System', subtext: 'Sandeep Verma, Neeraj Kumar (Thapar Institute of Engineering & Technology)' },
    ],
  },
  { time: '16:00 - 16:30', title: 'Networking and Tea break', icon: 'bi-cup-hot', subtext: '' },
  { time: '16:30 - 17:30', title: 'Panel Discussion: Self-Optimizing AI Systems', icon: 'bi-people', subtext: 'Moderator: Amit Saha (DocLens.ai). Panelists: Seema Kumar (Harman), Anand V Bodas (Intel), Dilip Kumar Dalei (DRDO), Ajay Kattepur (Ericsson Research)', section: 'Session 4' },
  { time: '17:30 - 18:00', title: 'Closing and Best Paper', icon: 'bi-flag', subtext: '' },
];

interface Person {
  name: string;
  affiliation: string;
  link: string;
  image: string;
}

const panelists: Person[] = [
  { name: 'Dilip Kumar Dalei', affiliation: 'DRDO', link: 'https://www.linkedin.com/in/dilipkumardalei/', image: '/assets/images/Panelists_2026/Dilip.jpg' },
  { name: 'Seema Kumar', affiliation: 'Harman', link: 'https://www.linkedin.com/in/seemakumar8/', image: '/assets/images/Panelists_2026/seema.jpeg' },
  { name: 'Ajay Kattepur', affiliation: 'Ericsson Research', link: 'https://www.linkedin.com/in/ajay-kattepur-801a056b/', image: '/assets/images/Panelists_2026/Ajay Kattepur.jpg' },
  { name: 'Anand V Bodas', affiliation: 'Intel', link: 'https://www.linkedin.com/in/anand-bodas-53734b36/', image: '/assets/images/Panelists_2026/anand.jpeg' },
];

const tpc = [
  'Sourav Kanti Addya (NIT Surathkal)',
  'Pramit Biswas (Intel)',
  'Soumyajit Chatterjee (Brave)',
  'Debasree Das (University of Bamberg)',
  'Snigdha Das (Ericsson Research)',
  'Ritesh Kalle (Hitachi Research, India)',
  'Ajay Kattepur (Ericsson Research)',
  'Meera Lakshmi (University of Technology Sydney)',
  'Guohao Lan (TU Delft)',
  'Basabdatta Palit (IIEST)',
  'Sugandh Pargal (Fujitsu)',
  'Sougata Sen (BITS Pilani - Goa Campus)',
  'Dulanga Weerakoon (SMART Research Centre, Singapore)',
  'Poonam Yadav (University of York, UK)',
];

const topics = [
  'Updating current systems to support ever-growing ML models',
  'Scalable system architectures for the future of AI/ML',
  'AI/ML for large-scale edge computing solutions',
  'Distributed systems for distributed AI models of the future',
  'Efficient deployment of AI models of the future',
  'Real-time processing and inference at the edge',
  'Resource-efficient algorithms for large-scale data',
  'Optimization techniques for edge-based AI applications',
  'System enhancements to bring AI to the edge',
  'Case studies and practical experiences in deploying AI/ML at scale and the edge',
  'Hardware-aware AI modelling and deployments',
  'Platform and AutoML for edge AI operations',
  'Generative AI on the edge',
  'Technical benchmarking and experiences from large-scale edge-based AI solutions',
];

export default function SysAIPage() {
  let lastSection = '';
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.3rem' }}>Systems for the Future of AI/ML (SysAI)</h1>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255,255,255,0.2)', padding: '0.75rem 1.5rem', display: 'inline-block', borderRadius: '9999px', marginTop: '0.5rem' }}>
                  Event Date: 6<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:15 AM &ndash; 6:00 PM IST &nbsp;&bull;&nbsp; Venue: Indian Affairs
                </div>
              </div>

              <div className="alert alert-info">This page reflects the archived COMSNETS 2026 SysAI workshop. {/* TODO: fill content for 2027 */}</div>

              <h4 className="text-center" style={{ color: '#2A4D75', fontWeight: 700, borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Detailed Schedule</h4>

              {schedule.map((ev, i) => {
                const showSectionHeader = ev.section && ev.section !== lastSection;
                if (showSectionHeader) lastSection = ev.section!;
                return (
                  <div key={i}>
                    {showSectionHeader && (
                      <div style={{ fontWeight: 600, color: '#153996', fontSize: '1.3rem', margin: '1.5rem 0 1rem', padding: '0.5rem 0 0.5rem 1rem', borderLeft: '4px solid #153996', background: 'rgba(79,70,229,0.03)' }}>
                        {ev.section}
                      </div>
                    )}
                    <div style={{ display: 'flex', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(79,70,229,0.1)', padding: '1rem', marginBottom: '1rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                      <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '140px', marginRight: '15px' }}>
                        {ev.time}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {ev.papers ? (
                          ev.papers.map((p, j) => (
                            <div key={j} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: j < ev.papers!.length - 1 ? '1px solid #eee' : 'none' }}>
                              <div style={{ fontSize: '1.05rem', fontWeight: 500, color: '#1e293b' }}>{p.title}</div>
                              <div style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '0.2rem' }}>{p.subtext}</div>
                            </div>
                          ))
                        ) : (
                          <>
                            <div style={{ fontSize: '1.05rem', fontWeight: 500, color: '#1e293b' }}>{ev.title}</div>
                            {ev.subtext && <div style={{ fontSize: '0.95rem', color: '#64748b', marginTop: '0.2rem' }}>{ev.subtext}</div>}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              <hr />

              <h3>Panel Discussion</h3>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Self-Optimizing AI Systems: Autonomic Infrastructure for the Next Era of Machine Learning</h4>
                  <p className="text-justify">As AI/ML workloads scale to unprecedented levels of complexity, the traditional model of manually tuned, statically configured infrastructure is rapidly becoming unsustainable. The next transformative leap in AI systems will come from self-optimizing, autonomic infrastructures that can observe, adapt, and reconfigure themselves in real time. This panel brings together researchers and practitioners exploring how machine learning can be used to optimize the systems that run machine learning.</p>
                  <h6><b>Date &amp; Venue: <i>6th January 2026, 4:30 &ndash; 5:30 PM (IST), Indian Affairs</i></b></h6>
                </div>
              </div>

              <h4>Moderator</h4>
              <div className="row">
                <div className="col-sm-3">
                  <div style={{ textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '10px', border: '1px solid #eee' }}>
                    <img src="/assets/images/Panelists_2026/amit_saha.jpg" alt="Amit Saha" style={{ width: '150px', height: '170px', objectFit: 'cover', borderRadius: '10px' }} />
                    <div style={{ fontWeight: 600, marginTop: '6px' }}>
                      <a href="https://www.linkedin.com/in/amsaha/" target="_blank" rel="noopener noreferrer">Amit Saha</a>
                    </div>
                    <div style={{ color: '#666' }}>DocLens.ai</div>
                  </div>
                </div>
              </div>

              <h4 style={{ marginTop: '20px' }}>Panelists</h4>
              <div className="row">
                {panelists.map((p) => (
                  <div key={p.name} className="col-sm-3" style={{ marginBottom: '15px' }}>
                    <div style={{ textAlign: 'center', background: '#fff', borderRadius: '8px', padding: '10px', border: '1px solid #eee' }}>
                      <img src={p.image} alt={p.name} style={{ width: '150px', height: '170px', objectFit: 'cover', borderRadius: '10px' }} />
                      <div style={{ fontWeight: 600, marginTop: '6px' }}>
                        <a href={p.link} target="_blank" rel="noopener noreferrer">{p.name}</a>
                      </div>
                      <div style={{ color: '#666' }}>{p.affiliation}</div>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <h3 className="text-center" style={{ color: '#2A4D75', fontWeight: 700, borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Workshop Overview</h3>
              <p className="text-justify">The rapid evolution of Artificial Intelligence (AI) and Machine Learning (ML) has brought unprecedented opportunities and challenges. As organizations increasingly deploy AI/ML solutions at scale and the edge, there is a growing need for expertise in developing, optimizing, and managing these systems. The workshop aims to bring together professionals from academia and industry to discuss and explore the challenges, solutions, and advancements in building robust and efficient systems that support real-world AI and ML solutions operating at scale and at the edge.</p>

              <hr />

              <h3 className="text-center">Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/SysAI_2026_CFP_1.pdf" download>
                  <i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers
                </a>
              </div>

              <h3 className="text-center">Camera Ready Guidelines</h3>
              <div className="well">
                <a href="/camera_ready">/camera_ready</a>
              </div>

              <hr />

              <h3 className="text-center">Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr><td><strong>Paper Submission deadline: <s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp;30<sup>th</sup> October 2025 (AoE)</strong></td></tr>
                  <tr><td><strong>Notification of Acceptance: <s>15<sup>th</sup> November 2025</s>&nbsp;<s>20<sup>th</sup> November 2025</s>&nbsp;26<sup>th</sup> November 2025</strong></td></tr>
                  <tr><td><strong>Camera-ready Submission: <s>30<sup>th</sup> November 2025</s>&nbsp;5<sup>th</sup> December 2025</strong></td></tr>
                  <tr><td><strong>Workshop Date: 6<sup>th</sup> January 2026</strong></td></tr>
                </tbody>
              </table>

              <hr />

              <h4 className="text-center">Topics of Interest</h4>
              <p className="text-justify">We encourage the submission of papers on a wide range of topics related to systems for AI and ML, particularly focusing on developments at scale and the edge. Relevant areas of interest include, but are not limited to:</p>
              <ul>{topics.map((t) => <li key={t}>{t}</li>)}</ul>

              <hr />

              <h4 className="text-center">Submission Guidelines</h4>
              <ul>
                <li>SysAI invites submission of original work not previously published or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length.</li>
                <li>Reviews will be <b>double-blind</b>: information about the authors will not be shared with the reviewers during the review process. The submitted paper should be anonymous.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>.</li>
                <li>All papers must be in Adobe PDF and submitted through the SysAI Workshop submission site on EDAS.</li>
                <li>All workshop papers will appear in the conference proceedings and be submitted to IEEE Xplore.</li>
              </ul>
              <p>Papers can be submitted through EDAS: <a href="https://edas.info/N34339" target="_blank" rel="noopener noreferrer">https://edas.info/N34339</a></p>
              <p>For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>

              <hr />

              <h3 className="text-center">Technical Program Committee</h3>
              <ul>{tpc.map((m) => <li key={m}><b>{m}</b></li>)}</ul>

              <hr />

              <h3 className="text-center">SysAI Workshop Co-Chairs</h3>
              <div className="row">
                <div className="col-sm-6 text-center">
                  <img src="/assets/images/committee_2023/alok_ranjan.jpg" alt="Alok Ranjan" className="thumbnail" style={{ height: '200px', width: '170px', objectFit: 'cover', boxShadow: '10px 10px 5px #BDBDBD' }} />
                  <h4><a href="http://linkedin.com/in/alok-ranjan" target="_blank" rel="noopener noreferrer">Alok Ranjan</a></h4>
                  <p>Bosch, India</p>
                </div>
                <div className="col-sm-6 text-center">
                  <img src="/assets/images/committee_2023/rohit.jpg" alt="Rohit Verma" className="thumbnail" style={{ height: '200px', width: '170px', objectFit: 'cover', boxShadow: '10px 10px 5px #BDBDBD' }} />
                  <h4><a href="https://www.cl.cam.ac.uk/~rv355/" target="_blank" rel="noopener noreferrer">Rohit Verma</a></h4>
                  <p>Intel Labs, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'ADVnet Workshop | COMSNETS 2027' };

interface ScheduleEvent {
  time: string;
  title: string;
  subtext?: string;
  section?: string;
}

const advnetSchedule: ScheduleEvent[] = [
  { time: '09:30 - 09:40', title: 'Welcome by Workshop Chairs', subtext: '', section: 'Session 1' },
  { time: '09:40 - 10:25', title: 'Keynote Talk 1: Driving Autonomy Through Chaos: Proactive Mobility Intelligence for Connected Vehicles in Mixed-Traffic Cities', subtext: 'Dr. Suvin P. Venthuruthiyil, Founder and CEO of Dromolys Research and Development Pvt. Ltd.' },
  { time: '10:25 - 10:40', title: 'Impact of Variable Speed Limit Concept at Bottleneck using Microsimulation Technique: A Case Study of Expressway' },
  { time: '10:40 - 10:55', title: 'Evaluating Time-to-Collision Models and Steering Feasibility for Autonomous Emergency Braking' },
  { time: '10:55 - 11:15', title: 'Tea Break', subtext: '' },
  { time: '11:15 - 11:30', title: 'Identifying Relevant Witnesses Using a BEV-Based Query Technique for Vehicle Collision Investigation', section: 'Session 2' },
  { time: '11:30 - 11:45', title: 'Q-Learning-Based Multi-UAV Path Planning with Dynamic Obstacle Avoidance' },
  { time: '11:45 - 12:00', title: 'NARMAD: A Novel Aerial Road Dataset with Oriented Annotations for Granular Traffic Analysis' },
  { time: '12:00 - 12:15', title: 'Risk Assessment of Connected Heavy Commercial Road Vehicles under Cyber Attacks' },
  { time: '12:15 - 12:30', title: 'Longitudinal Speed and Wheel Slip Estimation During Combined Cornering and Braking for Heavy Commercial Road Vehicles' },
  { time: '12:30 - 12:45', title: 'A Deep Reinforcement Learning Approach for Dynamic Microservice Placement in Vehicular Edge Computing' },
  { time: '12:45 - 13:00', title: 'Analysing Spatiotemporal Mobility Trends of Public Bicycle Sharing Scheme Using Big Data: A Metropolitan City in India' },
  { time: '13:00 - 14:00', title: 'Lunch Break', subtext: '' },
  { time: '14:00 - 15:30', title: 'Poster Presentations', subtext: 'See Accepted Posters below' },
  { time: '15:30 - 16:15', title: 'Keynote Talk 2: Reinforcement learning based vehicle control for autonomous vehicles', subtext: 'Dr. Pranamesh Chakraborty, Assistant Professor, Indian Institute of Technology Kanpur' },
  { time: '16:15 - 16:30', title: 'Tea Break', subtext: '', section: 'Session 3' },
  { time: '16:30 - 16:45', title: 'TRIP-AV: Transformer-Powered Vehicle Prediction for Autonomous Vehicles' },
  { time: '16:45 - 17:00', title: 'URLLC-Aware Bi-Objective User Scheduling for D2D Enabled V2X Networks' },
  { time: '17:00 - 17:15', title: 'Integrated V2I-V2V Data Offloading for FiWi based Vehicular Communication' },
  { time: '17:15 - 17:30', title: 'Closing, Best Paper and Best Poster Award Announcement', subtext: '' },
];

const programCommittee = [
  'Agnivesh P, IIT BHU',
  'Ajinkya Mane, Stantec',
  'Akshay Gupta, IIT (ISM) Dhanbad',
  'Amit Agarwal, IIT Roorkee',
  'Aninda Bijoy Paul, Senior Advisor (Road Safety and Compliances) at ICAT, Haryana',
  'Anshuman Sharma, IIT (BHU) Varanasi',
  'Archak Mittal, IIT Bombay',
  'Arunabha Banerjee, Postdoctoral Research Associate at Western Kentucky University',
  'Bhargava Rama Chulukuri, IIT Madras',
  'Bhupali Dutta, NIT Silchar',
  'Darshana O, NIT Tiruchirappalli',
  'Debanga Raj Neog, IIT Guwahati',
  'Digvijay Pawar, IIT Hyderabad',
  'Indrajit Ghosh, IIT Roorkee',
  'Jiten Shah, IITRAM',
  'Manish Bhatt, IIT Guwahati',
  'Nandan Maiti, Postdoctoral Researcher at Universite Gustave Eiffel',
  'Narayana Raju, Postdoctoral Researcher at Delft University of Technology',
  'Neetesh Kumar, IIT Roorkee',
  'Ninad Gore, Postdoctoral Researcher, The University of North Carolina at Charlotte',
  'Pranab Kar, Post-doctoral researcher at University of Memphis',
  'Pranamesh Chakraborty, IIT Kanpur',
  'Pushpa Choudhary, IIT Indore',
  'Ravi Kiran, IIIT Hyderabad',
  'RB Sharmila, IIT Guwahati',
  'Ritvik Chauhan, NIT Tiruchirappalli',
  'Sowjanya Dhulipala, IIT Bhubaneswar',
  'Sreedevi Indu, Delhi Technological University',
  'Suvin P. Venthuruthiyil, Dromolys Research and Development Pvt. Ltd.',
  'Tarun Rambha, IISc Bangalore',
  'Vijay Gopal Kovvali, IISc Bangalore',
  'VS Vinayaraj, Research Scientist, IITB',
  'Yogeshwar Vijaykumar Navandar, NIT Calicut',
];

export default function ADVnetPage() {
  let currentSection = '';
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Advances in Autonomous Driving and Vehicular Networks (ADVnet)</h1>

              <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                <h2 style={{ color: 'white', fontWeight: 900 }}>Advances in Autonomous Driving and Vehicular Networks (ADVnet)</h2>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255,255,255,0.2)', padding: '0.75rem 1.5rem', marginTop: '0.5rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 10<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:30 AM - 5:30 PM IST &nbsp;&bull;&nbsp; Venue: Indian Affairs (Poolside)
                </div>
              </div>
              <hr />

              <h3>Detailed Schedule</h3>
              {advnetSchedule.map((event, idx) => {
                const showSection = event.section && event.section !== currentSection;
                if (showSection) currentSection = event.section!;
                return (
                  <div key={idx}>
                    {showSection && (
                      <div style={{ fontWeight: 600, color: '#153996', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0', padding: '0.5rem 0 0.5rem 1rem', borderLeft: '4px solid #153996', background: 'rgba(79, 70, 229, 0.03)' }}>{event.section}</div>
                    )}
                    <div style={{ display: 'flex', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgba(79, 70, 229, 0.1)', padding: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                      <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '130px', textAlign: 'center' }}>{event.time}</div>
                      <div style={{ paddingLeft: '1.5rem' }}>
                        <div style={{ fontSize: '1.15rem', fontWeight: 500, color: '#1e293b' }}>{event.title}</div>
                        {event.subtext && <div style={{ fontSize: '1rem', color: '#64748b', marginTop: '0.4rem' }}>{event.subtext}</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
              <hr />

              <h3>Workshop Overview</h3>
              <p className="text-justify">The 10th workshop on Advances in Autonomous Driving and Vehicular Networks (ADVNets) will be held in conjunction with COMSNETS, highlighting the significance of Intelligent Transportation Systems&mdash;an amalgamation of cutting-edge technologies and communication used in traffic control and management systems to improve the sustainability, effectiveness, and safety of vehicular networks. This special workshop in COMSNETS aims to bring together engineers, researchers, and practitioners from various disciplines to share their experiences on interdisciplinary approaches to solving transportation problems. The workshop invites original papers that make contributions to the sensing, modeling, control, learning, and analysis in the field of connected and autonomous vehicles.</p>

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/ADVnet_2026_CFP_1.pdf" download><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
              </div>

              <h3>Camera Ready Guidelines</h3>
              <div className="well">
                <a href="https://www.comsnets.org/camera_ready.html" target="_blank" rel="noopener noreferrer">https://www.comsnets.org/camera_ready.html</a>
              </div>

              <h3>Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr><td><strong>Paper Submission deadline:&nbsp;&nbsp;&nbsp;&nbsp;<s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp; 30<sup>th</sup> October 2025 (AoE)</strong></td></tr>
                  <tr><td><strong>Notification of Acceptance:&nbsp;&nbsp;&nbsp;&nbsp;<s>15<sup>th</sup> November 2025</s>&nbsp; <s>20<sup>th</sup> November 2025</s>&nbsp; 26<sup>th</sup> November 2025</strong></td></tr>
                  <tr><td><strong>Camera-ready Submission:&nbsp;&nbsp;&nbsp;&nbsp;<s>30<sup>th</sup> November 2025</s>&nbsp; 5<sup>th</sup> December 2025</strong></td></tr>
                  <tr><td><strong>Workshop Date:&nbsp;&nbsp;&nbsp;&nbsp;10<sup>th</sup> January 2026</strong></td></tr>
                </tbody>
              </table>

              <h4>Topics of Interest include, but are not limited to:</h4>
              <ul>
                <li><b>Infrastructure, Connectivity, and Communications for CAVs</b>
                  <ul>
                    <li>Vehicle to everything (V3X) and cellular V2X (C-V2X) communications</li>
                    <li>Connected and autonomous vehicles (CAVs) - service design, management, and control</li>
                    <li>Next-generation vehicular networks (5G, 6G, etc.)</li>
                    <li>Networked land/aerial vehicular systems</li>
                    <li>Integration of roadside infrastructure with intelligent vehicles</li>
                    <li>Energy-efficient driving and sustainable mobility</li>
                  </ul>
                </li>
                <li><b>Sensing, Perception, and Cyber-Physical Architectures</b>
                  <ul>
                    <li>Sensor data fusion and signal processing for multimodal inputs</li>
                    <li>Cooperative and multi-agent perception in connected environments</li>
                    <li>Advanced sensing systems, object event detection and response (OEDR) and simultaneous localization and mapping (SLAM) for CAVs</li>
                    <li>Cyber-physical architectures, distributed/edge computing on CAVs</li>
                    <li>Integration of high-definition maps and onboard sensors</li>
                    <li>ML/DL/vision-language models for perception and localization</li>
                  </ul>
                </li>
                <li><b>Vehicle Automation, Control, Testing and Validation</b>
                  <ul>
                    <li>Automated driving systems (ADS) - design and deployment</li>
                    <li>Vehicle control and motion planning</li>
                    <li>AI/ML for vehicle automation and control</li>
                    <li>Simulations, digital twins and real-world testing methodologies</li>
                    <li>Verification and validation techniques</li>
                  </ul>
                </li>
                <li><b>Safety, Security, and Human-Machine Interaction</b>
                  <ul>
                    <li>Vehicular active and passive safety</li>
                    <li>Collision avoidance systems for vulnerable road users (VRUs), non-motorized traffic (NMT) and animals</li>
                    <li>Functional safety in intelligent vehicles and advanced driving assistance systems</li>
                    <li>Cybersecurity for CAVs - intrusion detection and prevention systems (IDS/IPS), secure and efficient over-the-air (OTA) updates, data protection</li>
                    <li>AI/ML applications for vehicle safety and uncertainty estimation in safety-critical applications</li>
                    <li>Human factors and human-machine interfaces in CAVs</li>
                    <li>Teleoperation of intelligent vehicles</li>
                    <li>Socially-aware and intention-predictive autonomous driving</li>
                    <li>Cognitive workload and driver state monitoring in shared economy</li>
                  </ul>
                </li>
                <li><b>Policy, Ethics and Emerging Mobility Paradigms</b>
                  <ul>
                    <li>Emerging mobility systems: e-mobility, air mobility, shared mobility, autonomous mobility, software-defined and cooperative vehicles, etc.</li>
                    <li>Ethical considerations, accessibility and societal acceptance of autonomous systems</li>
                    <li>Public policy, regulation, and societal issues in CAVs</li>
                    <li>Digital twins and simulation platforms for CAV design, testing and deployment</li>
                    <li>Applications of generative AI, quantum computing, blockchain to CAVs</li>
                    <li>Autonomous mobility in mixed-traffic and infrastructure-poor environments</li>
                  </ul>
                </li>
              </ul>

              <h4>Submission Guidelines</h4>
              <ul>
                <li>The ADVnet Workshop invites submission of original work, not previously published, or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) should not exceed <b>6 pages</b> in length.</li>
                <li>Reviews will be <b>double-blind:</b> authors&rsquo; names and affiliations must not be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the ADVnet Workshop submission site on EDAS.</li>
                <li>All workshop papers (both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.</li>
              </ul>
              <p className="text-justify">Papers can be submitted through EDAS: <a href="https://edas.info/N34098" target="_blank" rel="noopener noreferrer">https://edas.info/N34098</a></p>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>

              <h3>Program Committee</h3>
              <ul>
                {programCommittee.map((p, i) => <li key={i}><b>{p}</b></li>)}
              </ul>

              <h3 className="text-center">ADVnet Workshop Co-Chairs</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <img src="https://www.iitg.ac.in/storage/faculty/3645Nipjyoti-Bharadwaj.jpg" className="thumbnail" alt="Nipjyoti Bharadwaj" style={{ height: '200px', width: '170px' }} />
                  <div className="caption">
                    <h4><a href="https://www.iitg.ac.in/civil/home_faculty_profile.php?slno=RzBQeUZ5UE9ROG9id0dpdzJSK1loQT09" target="_blank" rel="noopener noreferrer">Nipjyoti Bharadwaj</a></h4>
                    <p>Indian Institute of Technology Guwahati<br />India</p>
                    <p>Email: <a href="mailto:nbharadwaj@iitg.ac.in">nbharadwaj@iitg.ac.in</a></p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <img src="https://civil.iitr.ac.in/IMG/Sanhita%20Das1.jpg" className="thumbnail" alt="Sanhita Das" style={{ height: '200px', width: '170px' }} />
                  <div className="caption">
                    <h4><a href="https://civil.iitr.ac.in/CE?Uid=sanhita.das" target="_blank" rel="noopener noreferrer">Sanhita Das</a></h4>
                    <p>Indian Institute of Technology Roorkee<br />India</p>
                    <p>Email: <a href="mailto:sanhita.das@ce.iitr.ac.in">sanhita.das@ce.iitr.ac.in</a></p>
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

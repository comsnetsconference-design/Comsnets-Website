export const metadata = { title: 'ADVnet Workshop | COMSNETS 2027' };

export default function ADVnetPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .event-hero {
          background: linear-gradient(135deg, #557AAB 0%, #1E4165 100%);
          color: white;
          border-radius: 16px;
          padding: 2rem 2rem;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
          margin-bottom: 2rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }
        .event-hero h1 {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(90deg, #fff 30%, #d1c4e9 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.5rem;
          margin-bottom: 0.3rem;
        }
        .event-hero .event-details {
          font-size: 1.1rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          margin-top: 0.5rem;
          display: inline-block;
          border-radius: 9999px;
        }
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #2A4D75;
          letter-spacing: 1.2px;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #678DC2;
          display: inline-block;
          padding-bottom: 6px;
        }
      `}} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              
              <div className="event-hero">
                <h1>Advances in Autonomous Driving and Vehicular Networks (ADVnet)</h1>
                <div className="event-details">
                  COMSNETS 2027
                </div>
              </div>
              
              <hr />

              <h3 className="section-title">Workshop Overview</h3>
              <p className="text-justify">
                The workshop on Advances in Autonomous Driving and Vehicular Networks (ADVnet) will be held in conjunction with COMSNETS 2027, highlighting the significance of Intelligent Transportation Systems—an amalgamation of cutting-edge technologies and communication used in traffic control and management systems to improve the sustainability, effectiveness, and safety of vehicular networks. This special workshop in COMSNETS 2027 aims to bring together engineers, researchers, and practitioners from various disciplines to share their experiences on interdisciplinary approaches to solving transportation problems. The workshop invites original papers that make contributions to the sensing, modeling, control, learning, and analysis in the field of connected and autonomous vehicles.
              </p>
              
              <hr />

              <h3 className="section-title">Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Paper Submission deadline:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Date:</strong> <span style={{ color: 'black' }}>January 2027</span></td>
                  </tr>
                </tbody>
              </table>
              
              <hr />

              <h3 className="section-title">Topics of Interest</h3>
              <p className="text-justify">Topics of Interest include, but are not limited to:</p>
              
              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Infrastructure, Connectivity, and Communications for CAVs</h4>
              <ul>
                <li>Vehicle to everything (V2X) and cellular V2X (C-V2X) communications</li>
                <li>Connected and autonomous vehicles (CAVs) - service design, management, and control</li>
                <li>Next-generation vehicular networks (5G, 6G, etc.)</li>
                <li>Networked land/aerial vehicular systems</li>
                <li>Integration of roadside infrastructure with intelligent vehicles</li>
                <li>Energy-efficient driving and sustainable mobility</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Sensing, Perception, and Cyber-Physical Architectures</h4>
              <ul>
                <li>Sensor data fusion and signal processing for multimodal inputs</li>
                <li>Cooperative and multi-agent perception in connected environments</li>
                <li>Advanced sensing systems, object event detection and response (OEDR) and simultaneous localization and mapping (SLAM) for CAVs</li>
                <li>Cyber-physical architectures, distributed/edge computing on CAVs</li>
                <li>Integration of high-definition maps and onboard sensors</li>
                <li>ML/DL/vision-language models for perception and localization</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Vehicle Automation, Control, Testing and Validation</h4>
              <ul>
                <li>Automated driving systems (ADS) - design and deployment</li>
                <li>Vehicle control and motion planning</li>
                <li>AI/ML for vehicle automation and control</li>
                <li>Simulations, digital twins and real-world testing methodologies</li>
                <li>Verification and validation techniques</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Safety, Security, and Human-Machine Interaction</h4>
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

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Policy, Ethics and Emerging Mobility Paradigms</h4>
              <ul>
                <li>Emerging mobility systems: e-mobility, air mobility, shared mobility, autonomous mobility, software-defined and cooperative vehicles, etc.</li>
                <li>Ethical considerations, accessibility and societal acceptance of autonomous systems</li>
                <li>Public policy, regulation, and societal issues in CAVs</li>
                <li>Digital twins and simulation platforms for CAV design, testing and deployment</li>
                <li>Applications of generative AI, quantum computing, blockchain to CAVs</li>
                <li>Autonomous mobility in mixed-traffic and infrastructure-poor environments</li>
              </ul>
              
              <hr />

              <h3 className="section-title">Submission Guidelines</h3>
              <ul>
                <li>The ADVnet Workshop invites submission of original work, not previously published, or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) should not exceed <b>6 pages</b> in length.</li>
                <li>Reviews will be <b>double-blind:</b> authors' names and affiliations must not be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the ADVnet Workshop submission site on EDAS.</li>
                <li>All workshop papers (both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</li>
              </ul>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center section-title" style={{ display: 'block', borderBottom: 'none', margin: '0 auto 20px' }}>ADVnet Workshop Co-Chair</h3>
                <div className="row text-center">
                  <div className="col-sm-12 text-center">
                    <div style={{ display: 'inline-block', margin: '0 auto' }}>
                      <img 
                        src="https://civil.iitr.ac.in/IMG/Sanhita%20Das1.jpg" 
                        className="thumbnail" 
                        alt="Sanhita Das" 
                        style={{ 
                          WebkitBoxShadow: '10px 10px 5px #BDBDBD', 
                          boxShadow: '10px 10px 5px #BDBDBD',
                          height: '200px', 
                          width: '170px', 
                          margin: '0 auto 10px',
                          objectFit: 'cover'
                        }} 
                      />
                      <div className="caption">
                        <h4>
                          <a href="https://civil.iitr.ac.in/CE?Uid=sanhita.das" target="_blank" rel="noopener noreferrer">
                            Sanhita Das
                          </a>
                        </h4>
                        <p>Indian Institute of Technology Roorkee<br />India</p>
                        <p>Email: <a href="mailto:sanhita.das@ce.iitr.ac.in">sanhita.das@ce.iitr.ac.in</a></p>
                      </div>
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

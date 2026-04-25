export const metadata = { title: 'Standards-driven Research | COMSNETS 2027' };

interface ScheduleEvent {
  time: string;
  title: string;
  subtext?: React.ReactNode;
  section?: string;
}

const schedule: ScheduleEvent[] = [
  { time: '09:00 \u2013 09:10', title: 'Welcome Remarks', subtext: 'Pamela Kumar, TSDSI', section: 'Session 1  Session Chair: Vishnu Ram' },
  { time: '09:10 \u2013 09:50', title: 'Keynote 1: Role of Privacy and Data Protection Regulations and Standards in Emerging Tech', subtext: 'Srinivas Poosarla, Infosys' },
  { time: '09:50 \u2013 10:00', title: 'Open Floor for Discussion on Standards Driven Research' },
  { time: '10:00 \u2013 10:20', title: 'Private and Public 5G Networks for XR Use Cases: A Proof of Concept implementations', subtext: 'Rathinamala Vijay, Vinay Kumar, Ramavath Pranathi, Bhaskar Rajakumar and Bharadwaj Amrutur (ARTPARK, India)' },
  { time: '10:20 \u2013 10:40', title: 'Performance comparison of 802.11mc and 802.11az Wi-Fi Fine Time Measurement protocols', subtext: 'Govind Rajendran (Arista Networks); Vijayalakshmi Chetlapalli (Arista Networks, India); Kushagra Sharma (IIT Mandi, India); Jatin Parekh (Tarana Networks, India)' },
  { time: '10:40 \u2013 11:00', title: 'Disaggregated and Federated Public WiFi Network Architecture', subtext: 'Sandeep Kumar Agrawal (Centre for Development of Telematics, India)' },
  { time: '11:00 \u2013 11:30', title: 'Break' },
  { time: '11:30 \u2013 12:30', title: 'Panel 1: Desmystifying the 6G RAN', subtext: <>Moderator: T R Ramya, Senior Principal Research Engineer, CEWiT<br/>Panelists:<br/>Srinivasan Selvaganapathy, Principal Standardization Lead, Nokia Bell Labs<br/>Subhas Mondal, Senior Vice President - 5G products, HFCL Limited<br/>Sai Prasad, Lead Engineer \u2013 R& D, Tejas Networks</>, section: 'Session 2  Session Chair: T R Ramya' },
  { time: '12:30 \u2013 12:50', title: 'BER-Conscious PAPR Mitigation Techniques for Downlink CP-OFDM System', subtext: 'Abhinaba Dey and Sreenath Ramanath (Lekha Wireless Solutions, India)' },
  { time: '12:50 \u2013 13:00', title: 'Buffer' },
  { time: '13:00 \u2013 14:00', title: 'Lunch Break' },
  { time: '14:00 \u2013 14:30', title: 'Invited Talk: B2X - An Initiative Towards Flexible Broadband Convergence in 6G', subtext: 'Preksha Shah, Freestream AI', section: 'Session 3  Session Chair: Sandeep Agrawal' },
  { time: '14:30 \u2013 15:30', title: 'Panel 2: Bringing all networks together / Ubiquitous connectivity', subtext: <>Moderator: Sandeep Agrawal<br/>Panelists:<br/>Sankaran Balasubramaniam, Nokia<br/> 2. Navin Kumar, Amrita Vishwa Vidyapeetham<br/>Suresh Kumar Karthikeyan, Susan Future Technologies<br/>N. Kishor Narang, Narnix Technolabs<br/>Anand Mohandas, C-DOT</> },
  { time: '15:30 \u2013 15:50', title: 'ToothLess: A Bluetooth Multi-Hop Architecture for Ubiquitous Smartphone Internet Provisioning in Constrained Environments', subtext: 'Spaarsh Thakkar and Kaustubh Dhondge (IIIT Surat, India)' },
  { time: '15:50 \u2013 16:00', title: 'Buffer' },
  { time: '16:00 \u2013 16:30', title: 'Break' },
  { time: '16:30 \u2013 16:50', title: 'Nishpaksh: TEC Standard-Compliant Framework for Fairness Auditing and Certification of AI Models', subtext: 'Shashank Prakash and Ranjitha Prasad (IIIT Delhi, India); Avinash Agarwal (Ministry of Communications, Government of India, India)', section: 'Session 4  Session Chair: Pamela Kumar' },
  { time: '16:50 \u2013 17:20', title: 'Invited Talk: ITU AI for Good Sandbox: A Framework for Standards Driven Research', subtext: 'Vishnu Ram, Independent Research Consultant' },
  { time: '17:20 \u2013 17:30', title: 'Closing Remarks' },
];

const papers = [
  { title: 'Private and Public 5G Networks for XR Use Cases: A Proof of Concept implementations', authors: 'Rathinamala Vijay (ARTPARK, India), Vinay Kumar (ARTPARK, India), Ramavath Pranathi (ARTPARK, India), Bhaskar Rajakumar (ARTPARK, India), Bharadwaj Amrutur (ARTPARK, India)' },
  { title: 'Performance comparison of 802.11mc and 802.11az Wi-Fi Fine Time Measurement protocols', authors: 'Govind Rajendran (Arista Networks, India); Vijayalakshmi Chetlapalli (IIT Mandi, India); Kushagra Sharma (Tarana Networks, India); Jatin Parekh (Tarana Networks, India)' },
  { title: 'Nishpaksh: TEC Standard-Compliant Framework for Fairness Auditing and Certification of AI Models', authors: 'Shashank Prakash (IIIT Delhi, India); Ranjitha Prasad (IIIT Delhi, India); Avinash Agarwal (Ministry of Communications, Government of India, India)' },
  { title: 'BER-Conscious PAPR Mitigation Techniques for Downlink CP-OFDM System', authors: 'Abhinaba Dey (Lekha Wireless Solutions, India); Sreenath Ramanath (Lekha Wireless Solutions, India)' },
  { title: 'ToothLess: A Bluetooth Multi-Hop Architecture for Ubiquitous Smartphone Internet Provisioning in Constrained Environments', authors: 'Spaarsh Thakkar (IIIT Surat, India); Kaustubh Dhondge (IIIT Surat, India)' },
  { title: 'Disaggregated and Federated Public WiFi Network Architecture', authors: 'Sandeep Kumar Agrawal (Centre for Development of Telematics, India)' },
];

interface Chair {
  name: string;
  url: string;
  affiliation: React.ReactNode;
  img: string;
}

const chairs: Chair[] = [
  { name: 'Pamela Kumar', url: 'https://www.linkedin.com/in/pamela-kumar-8b51124/?originalSubdomain=in', affiliation: <>Telecom STDs Development Society of India<br/>India</>, img: '/assets/images/Committee_2025/WorkshopCoChair/Pamela.jpg' },
  { name: 'Vishnu Ram', url: 'https://www.linkedin.com/in/vishnuramov/', affiliation: <>Independent Research Consultant<br/>India</>, img: '/assets/images/Committee_2026/Vishnu_Ram.jpg' },
  { name: 'Ashwin Rao', url: 'https://researchportal.helsinki.fi/en/persons/ashwin-rao', affiliation: <>University of Helsinki<br/>Finland</>, img: '/assets/images/Committee_2025/WorkshopCoChair/Aswin_Rao.jpg' },
];

const programCommittee = [
  'Avinash Agarwal (Department of Telecommunications, India)',
  'Sandeep Agarwal (CDOT, India)',
  'Praveen Kumar Donta (Stockholm University, Sweden)',
  'Sourav Dutta (IIT Mandi, India)',
  'Arzad Kherani (IIT Bhilai, India)',
  'Rashmi Kamran (Free Stream Technologies, India)',
  'Pamela Kumar (TSDSI, India)',
  'Ashish Singh Patel (NIT Mizoram, India)',
  'Roberto Morabito (Eurecom, France)',
  'Soumava Mukherjee (IIT Jodhpur, India)',
  'Vishnu Ram (Independent Research Consultant, India)',
  'T R Ramya (Center of Excellence in Wireless Technology, India)',
  'Ashwin Rao (University of Helsinki, Finland)',
];

export default function StandardsDrivenResearchPage() {
  let currentSection = '';
  let isFirst = true;
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fff' }}>Workshop on Standards-driven Research</h1>
                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#d8ccff' }}>THEME: &ldquo;Marching towards 6G&rdquo;</p>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255,255,255,0.2)', padding: '0.75rem 1.5rem', marginTop: '0.5rem', display: 'inline-block', borderRadius: '9999px' }}>
                  Event Date: 10<sup>th</sup> January 2026 &nbsp;&bull;&nbsp; 9:00 AM &ndash; 5:30 PM IST &nbsp;&bull;&nbsp; Venue: Sigma 1
                </div>
              </div>
              <hr/>

              <h4 className="text-center" style={{ color: '#2A4D75', fontWeight: 700, borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Detailed Schedule</h4>

              <div style={{ margin: '1rem auto' }}>
                {schedule.map((ev, idx) => {
                  const showHeader = ev.section && ev.section !== currentSection;
                  let header: React.ReactNode = null;
                  if (showHeader) {
                    const isFirstHeader = isFirst;
                    currentSection = ev.section!;
                    isFirst = false;
                    header = (
                      <>
                        {!isFirstHeader && <div style={{ background: 'linear-gradient(90deg, #e5e7eb 0%, #f3f4f6 50%, #e5e7eb 100%)', height: '4px', borderRadius: '2px', margin: '2rem 0 1.5rem 0' }}></div>}
                        <div style={{ fontWeight: 600, color: '#153996', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0', padding: '0.5rem 0', borderLeft: '4px solid #153996', paddingLeft: '1rem', background: 'rgba(79, 70, 229, 0.03)' }}>{ev.section}</div>
                      </>
                    );
                  }
                  return (
                    <div key={idx}>
                      {header}
                      <div style={{ display: 'flex', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 20px rgb(79 70 229 / 0.1)', padding: '1rem 0', marginBottom: '1rem', alignItems: 'center' }}>
                        <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', fontWeight: 600, padding: '0.45rem 1rem', borderRadius: '12px', minWidth: '120px', textAlign: 'center' }}>
                          {ev.time}
                        </div>
                        <div>
                          <div style={{ paddingLeft: '1.5rem', fontSize: '1.15rem', fontWeight: 500, color: '#1e293b' }}>{ev.title}</div>
                          {ev.subtext && <div style={{ paddingLeft: '1.5rem', fontSize: '1rem', color: '#64748b', marginTop: '0.4rem' }}>{ev.subtext}</div>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <hr/>

              <section id="accepted_papers">
                <h2>Accepted Papers</h2>
                <ol>
                  {papers.map((p, i) => (
                    <li key={i}>
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ fontWeight: 600 }}>{p.title}</div>
                        <div style={{ color: '#666' }}>{p.authors}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
              <hr/>

              <h3 style={{ color: '#2A4D75', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Context & Rationale</h3>
              <p className="text-justify">SDR Workshop is structured as an annual event for a multi-faceted global community (academics, industry, government) organized around <strong>Telecom <u>standards</u> (nominally oriented to 6G).</strong> The workshop brings together members of this diverse community to deliberate and collaborate across the FULL life cycle of Standardisation &ndash; from Pre-Standardisation activities to Standards Development and Post-Standardisation. The ability to innovate in, contribute to and adopt leading-edge globally relevant Technical Specifications or Industry standards for Telecom and networking is of paramount significance to the nation&rsquo;s industrial capacity and ultimate societal well-being.</p>
              <p className="text-justify">This implies that workshop topics be linked in some manner to current global (e.g. ITU, 3GPP, IEEE, ISO/IEC) Standards Development Organisation&rsquo;s (SDOs) Technology Working Group&rsquo;s (WG) deliberations or to future (6G) standards development roadmaps (e.g 3GPP Rel-19 and beyond). Further, contributions that summarize experiences and provide insights into strategic issues around the IP creation pipeline for various global/national SDO WGs are also welcome. Finally, the workshop particularly invites submissions that highlight aspects of telecom standardization relevant for India specific use cases and national research priorities, in view of Bharat 6G vision.</p>

              <h5>Summary:</h5>
              <p className="text-justify">The SDR workshop seeks to act as a forum for:</p>
              <ol>
                <li>interaction among academic-industry-government participants as a platform for ideas on standards development aligned with national priorities and</li>
                <li>for early consensus creation in preparation for contributions at Global SDOs, with the primary aim of:
                  <ul>
                    <li>pro-active identification of futuristic research, development and prototyping needed for standards development for next generation telecom, networking and computing technologies</li>
                    <li>identify pathways for 3-way (academic/national industry and government) collaboration on creation of pre- standards IP pipeline aligned with future technology and standards roadmaps,</li>
                    <li>creating or supporting existing working groups (WG) to pro-actively, advise the government regarding technology policy (notably spectrum allocations) and strategies for R&D resource allocation to enhance the impact at Global SDOs, to align with National Priorities.</li>
                  </ul>
                </li>
              </ol>
              <hr/>

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/SDR_2026_CFP_1.pdf" download="Standards-driven Research Workshop COMSNETS 2026 - Call for Papers.pdf"><i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
              </div>
              <hr/>

              <h3>Camera Ready Guidelines</h3>
              <div className="well">
                <a href="https://www.comsnets.org/camera_ready.html" target="_blank" rel="noopener noreferrer">https://www.comsnets.org/camera_ready.html</a>
              </div>
              <hr/>

              <h3>Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr><td><strong>Paper Submission deadline: <s>15<sup>th</sup> October 2025 (AoE)</s>&nbsp; <s>30<sup>th</sup> October 2025 (AoE)</s>&nbsp; 10<sup>th</sup> November 2025 (AoE)</strong></td></tr>
                  <tr><td><strong>Notification of Acceptance: <s>15<sup>th</sup> November 2025</s>&nbsp; <s>20<sup>th</sup> November 2025</s>&nbsp; 26<sup>th</sup> November 2025</strong></td></tr>
                  <tr><td><strong>Camera-ready Submission: <s>30<sup>th</sup> November 2025</s>&nbsp; 5<sup>th</sup> December 2025</strong></td></tr>
                  <tr><td><strong>Workshop Date: 10<sup>th</sup> January 2026</strong></td></tr>
                </tbody>
              </table>
              <hr/>

              <h3>Call for Contributions</h3>
              <p className="text-justify">The Workshop invites submission of original work, not previously published or under review at another conference/journal. A primary criterion of evaluation will be to demonstrate awareness of ongoing/emerging issues at any of various standardization bodies pertinent to telecom standards. Besides purely technology-centric submissions, commentary, or position documents on any of emerging network architectures, telecom policy, market formation or technology-cum-business strategic aspects are particularly welcome.</p>
              <h4>Topics of interest include, but are not limited to:</h4>
              <ul>
                <li><b>Pre-Standards Topics:</b>
                  <ul>
                    <li>Market design and regulatory aspects for telecom</li>
                    <li>Spectrum allocation and re-allocation</li>
                    <li>Role of industry-government-academic collaboration in IP creation</li>
                    <li>Experiences - transition from R&D to standards IP</li>
                    <li>Critique of IP creation/standardization process - Indian perspective</li>
                    <li>Bharat 6G: India-specific use cases</li>
                  </ul>
                </li>
                <li><b>Emerging Technology Areas:</b>
                  <ul>
                    <li>Immersive communication</li>
                    <li>Massive communication</li>
                    <li>Hyper-reliable and low-latency communication</li>
                    <li>Ubiquitous connectivity</li>
                    <li>AI and communication</li>
                    <li>Integrated sensing and communication</li>
                    <li>Sustainability</li>
                    <li>Connecting the unconnected</li>
                    <li>Security and resilience</li>
                    <li>Ubiquitous intelligence</li>
                    <li>Trustworthy use of Emerging Technologies</li>
                  </ul>
                </li>
                <li><b>Post-Standardisation Topics:</b>
                  <ul>
                    <li>Network performance evaluation</li>
                    <li>New capabilities - interoperability, composability, positioning, coverage</li>
                    <li>Open radio access networking</li>
                    <li>Open source for 5G and 6G</li>
                    <li>Results/experiences from deploying testbeds or field trials</li>
                  </ul>
                </li>
              </ul>
              <hr/>

              <h4>How is a Contribution different from a paper?</h4>
              <ul>
                <li>A contribution can be results from early-stage research study that is linked to existing standards with the potential as a future contribution to a Standards Development Working or Study Group (3GPP, IEEE, IETF etc)</li>
                <li>A contribution can be vision papers, technical commentary and market research intended as potential contribution to a future-looking roadmap item identified by an SDO (e.g. ITU)</li>
                <li>A contribution can be studies compiling data and resulting insights into network operations from a testbed or from the field</li>
                <li>A contribution can be an opinion piece or position paper based on a mix of technology, market and business strategic considerations.</li>
              </ul>
              <hr/>

              <h4>Submission Guidelines</h4>
              <ul>
                <li>Submissions (including title, author list, abstract, all figures, tables, and references) should <strong>not exceed 6 pages</strong> in length including all references. A <strong>minimum number of 4 pages</strong> are required.</li>
                <li>Reviews will be <strong>single-blind:</strong> authors name and affiliation should be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on COMSNETS Website.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted on edas using the submission link.</li>
              </ul>
              <p className="text-justify">All workshop papers (full papers - both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</p>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              <p className="text-justify">Submission Link: <a href="https://edas.info/N34102" target="_blank" rel="noopener noreferrer">https://edas.info/N34102</a></p>
              <hr/>

              <h3>Program Committee</h3>
              <ul>
                {programCommittee.map((m, i) => <li key={i}><b>{m.split(' (')[0]}</b> ({m.split(' (')[1]}</li>)}
              </ul>
              <hr/>

              <h3 className="text-center">Workshop Co-Chairs</h3>
              <div className="row">
                {chairs.map((c) => (
                  <div key={c.name} className="col-sm-4 col-md-4">
                    <img src={c.img} className="thumbnail" alt={c.name} style={{ boxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                    <div className="caption">
                      <h4><a href={c.url} target="_blank" rel="noopener noreferrer">{c.name}</a></h4>
                      <p>{c.affiliation}</p>
                    </div>
                  </div>
                ))}
              </div>
              <hr/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

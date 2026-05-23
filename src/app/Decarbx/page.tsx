export const metadata = { title: 'DecarbX Workshop | COMSNETS 2027' };

interface AgendaItem {
  time: string;
  icon: string;
  title: string;
  desc?: React.ReactNode;
  isBreak?: boolean;
}

const agenda: AgendaItem[] = [
  {
    time: '09:00 - 09:30',
    icon: 'fa-clock-o',
    title: 'Visionary Opening Keynote',
    desc: (
      <>
        <strong>Visionary Perspectives on India&rsquo;s Low-Carbon Future: Policy, Innovation, and Collaborative Pathways</strong><br />
        From Race to Conscious Grid: Reimagining India&rsquo;s Energy Transition<br />
        <em>Speaker: Gaurav Vaid, Chairperson, CEEDS</em>
      </>
    ),
  },
  {
    time: '09:30 - 10:15',
    icon: 'fa-clock-o',
    title: 'Invited Talk',
    desc: (
      <>
        <strong>Global Energy Transitions and the Indian Context: Lessons for a Just and Accelerated Shift</strong><br />
        <em>Speaker: Kundan Das, Director, Technology, Sustainability and Decarbonization, CEEDS</em>
      </>
    ),
  },
  { time: '10:15 - 10:30', icon: 'fa-coffee', title: 'Coffee and Networking Break', isBreak: true },
  {
    time: '10:30 - 11:30',
    icon: 'fa-clock-o',
    title: 'Panel Discussion',
    desc: (
      <>
        <strong>Research and Innovation for a Resilient Energy Future: Learning from Global Transitions to Empower India</strong><br />
        How international research priorities and innovation frameworks can inspire India&rsquo;s clean energy research agenda, and strengthen academia-industry-government collaboration to enable technology localization and scaling.<br />
        <em>Moderator:</em> Dr. Madanmohan Rao, CEEDS<br />
        <em>Panelists:</em> Puneet Joshi (OpenG2P) &bull; Prof. S. Dasappa (IISc) &bull; Kundan Das (CEEDS) &bull; Abhijit Chaudhary (Niral Networks)
      </>
    ),
  },
  {
    time: '11:45 - 13:00',
    icon: 'fa-clock-o',
    title: 'Research Paper Presentations',
    desc: (
      <>
        <strong>Peer-Reviewed Research Presentations (with moderated Q&amp;A)</strong><br />
        <em>Presenters:</em>
        <ul style={{ marginTop: 5, paddingLeft: 20 }}>
          <li><em>Dr. Sandeep Verma</em> Thapar Institute of Engineering and Technology</li>
          <li><em>Bhanu Kumar</em> Indian Institute of Science</li>
          <li><em>Rajesh Kumar</em> BITS Pilani</li>
        </ul>
        Introduced by: Ayushi Vaid, CEEDS
      </>
    ),
  },
  { time: '13:00 - 14:00', icon: 'fa-cutlery', title: 'Lunch and Networking Break', isBreak: true },
  {
    time: '14:00 - 14:45',
    icon: 'fa-clock-o',
    title: 'Panel Discussion',
    desc: (
      <>
        <strong>Incubating Sustainable Innovation: From Climate Ideas to Scalable Impact</strong><br />
        <em>Moderator:</em> Vinay Dora, Director, Community Engagement and Digital Media, CEEDS<br />
        <em>Panelists:</em> Startup Founder (TBC) &bull; Prof. Vineeth R &bull; N. Kishor Narang &bull; Santosh G (GCPIT) &bull; Prof. Ravishankar Rao (FDU, IEEE Fellow)
      </>
    ),
  },
  {
    time: '14:45 - 16:15',
    icon: 'fa-clock-o',
    title: 'Dynamic Breakout Sessions',
    desc: (
      <>
        <strong>Hands-on breakout groups across three tracks</strong>
        <ul style={{ marginTop: 5, paddingLeft: 20 }}>
          <li>Integrated Energy Systems (Energy-Water-Mobility-Food)</li>
          <li>Policy &amp; Corporate Enablement</li>
          <li>Innovation, Startups &amp; Investment</li>
        </ul>
        <em>Facilitators:</em> Gaurav Vaid &bull; Dr. Madanmohan Rao &bull; Vinay Dora &bull; Kundan Das
      </>
    ),
  },
  { time: '16:15 - 16:30', icon: 'fa-coffee', title: 'Coffee Break', isBreak: true },
  {
    time: '16:30 - 17:00',
    icon: 'fa-clock-o',
    title: 'Closing Reflections & Takeaways',
    desc: (<><em>Speakers:</em> CEEDS Team</>),
  },
];

const coChairs = [
  { name: 'Gaurav Vaid', link: 'https://www.linkedin.com/in/gaurav-vaid-product-thinker/', img: '/assets/images/Committee_2026/EIS/GauravVaid.png', role: 'Chairperson', org: 'CEEDS' },
  { name: 'Vinay Dora', link: 'https://www.linkedin.com/in/vinaydora/', img: '/assets/images/Committee_2026/Vinay Dora.jpeg', role: 'Director, Community Engagement and Digital Media', org: 'CEEDS' },
  { name: 'Dr. Madanmohan Rao', link: 'https://www.linkedin.com/in/madanmohanrao/', img: '/assets/images/Committee_2025/EIS/Madan1.png', role: 'Director, Knowledge Services and Innovation Training', org: 'CEEDS' },
  { name: 'Kundan Das', link: 'https://www.linkedin.com/in/kundan-das-a119771/', img: '/assets/images/Committee_2026/Kundan Das.jpeg', role: 'Director, Technology, Sustainability and Decarbonization', org: 'CEEDS' },
];

export default function DecarbxPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>DecarbX Workshop &mdash; COMSNETS 2026</h1>

              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
                <div style={{ fontSize: '2.5em', fontWeight: 700, marginBottom: '10px' }}>DecarbX Workshop</div>
                <div style={{ fontSize: '1.2em', fontWeight: 300, opacity: 0.9, marginBottom: '20px', color: '#e2e8f0' }}>Accelerating India&rsquo;s Energy Transition: Research, Innovation &amp; Incubation</div>
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '50px', fontWeight: 500, border: '1px solid rgba(255,255,255,0.2)' }}>
                  <i className="fa fa-calendar"></i> January 10, 2026 &nbsp;|&nbsp; Full-Day In-Person Workshop
                </div>
              </div>

              <h3 style={{ borderBottom: '2px solid #2563eb', paddingBottom: '10px', marginBottom: '20px', marginTop: '40px', color: '#0f172a' }}>Workshop Overview</h3>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src="/assets/images/decarbx_leap.png" className="img-responsive" style={{ display: 'inline-block', borderRadius: '8px', maxHeight: '300px' }} alt="DecarbX" />
              </div>
              <p className="text-justify" style={{ fontSize: '1.1em', lineHeight: 1.8, color: '#334155' }}>
                The DecarbX Workshop brings together researchers, industry leaders, startup founders, investors, incubators, and policymakers to explore how research, digital technologies, and ecosystem collaboration can accelerate India&rsquo;s transition toward a sustainable, low-carbon energy future. The workshop features a visionary keynote, an invited talk, peer-reviewed research presentations, multi-stakeholder panels, and interactive breakout sessions focused on turning ideas into scalable impact.
              </p>

              <h3 style={{ borderBottom: '2px solid #2563eb', paddingBottom: '10px', marginBottom: '20px', marginTop: '40px', color: '#0f172a' }}>Workshop Schedule</h3>

              {agenda.map((item, idx) => (
                <div key={idx} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', background: item.isBreak ? '#f1f5f9' : 'white', marginBottom: '15px', padding: '20px', borderLeft: item.isBreak ? '5px solid #94a3b8' : '5px solid #2563eb' }}>
                  <span style={{ fontWeight: 700, color: item.isBreak ? '#475569' : '#2563eb', fontSize: '1.1em', marginBottom: '5px', display: 'block' }}>
                    <i className={`fa ${item.icon}`} style={{ marginRight: '5px' }}></i> {item.time}
                  </span>
                  <div style={{ fontWeight: 700, fontSize: '1.2em', color: item.isBreak ? '#475569' : '#0f172a', marginBottom: '8px' }}>{item.title}</div>
                  {item.desc && <div style={{ color: '#475569', fontSize: '0.95em', lineHeight: 1.6 }}>{item.desc}</div>}
                </div>
              ))}

              <h3 style={{ borderBottom: '2px solid #2563eb', paddingBottom: '10px', marginBottom: '20px', marginTop: '40px', color: '#0f172a' }}>Who Should Attend</h3>
              <p style={{ fontSize: '16px' }}>
                Researchers &bull; Industry Leaders &bull; Policymakers &bull; Startup Founders &bull; Investors &bull; Incubators &bull; Sustainability &amp; Climate-Tech Practitioners
              </p>
              <hr style={{ margin: '40px 0' }} />

              <h3>Call for Papers</h3>
              <div className="well">
                <a href="/docs/CFP_2026/Decarbx_2026_CFP_1.pdf" download><i className="fa fa-download" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
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
                  <tr><td><strong>Workshop Date: 10<sup>th</sup> January 2026</strong></td></tr>
                </tbody>
              </table>
              <hr />

              <h4>Topics of Interest</h4>
              <h5>Focus Areas: Submissions may include (but are not limited to)</h5>
              <ul>
                <li><b>Smart Infrastructure &amp; Net-Zero Innovation</b>
                  <ul>
                    <li>Smart grids, AI-enabled demand response and load shaping</li>
                    <li>Grid modernization for AI data centers</li>
                    <li>Predictive analytics, digital twins, and resilient grid design</li>
                    <li>Remote monitoring, edge infrastructure, and disaster preparedness</li>
                  </ul>
                </li>
                <li><b>Sustainable Power for the Digital Age</b>
                  <ul>
                    <li>Role of MMRs/SMRs in powering clean, high-density digital infrastructure</li>
                    <li>Energy storage, renewable integration, and system flexibility</li>
                    <li>Co-optimization of AI and grid systems for decarbonization</li>
                  </ul>
                </li>
                <li><b>Policy, Platforms &amp; Equity</b>
                  <ul>
                    <li>Blockchain and emissions transparency</li>
                    <li>Energy access and digital divide</li>
                    <li>Industry collaboration, innovation ecosystems, and startups</li>
                    <li>Pathways to net-zero for developing economies</li>
                  </ul>
                </li>
              </ul>
              <p className="text-justify">In addition to paper presentations, the event will include the following formats and if you would like to participate, we welcome proposals for:</p>
              <ul>
                <li><b>Design challenges</b> (e.g., smart grid for AI tech parks)</li>
                <li><b>Simulations / demonstrations</b> (e.g., Incident recovery scenarios)</li>
                <li><b>Hackathons</b> (e.g., grid-data center co-optimization using AI)</li>
                <li><b>Panels and group discussions</b> (e.g., nuclear + AI readiness, digital equity in energy transition)</li>
              </ul>
              <hr />

              <h4>Submission Guidelines</h4>
              <ul>
                <li>Submissions (including title, abstract, all figures, tables, and references) should not exceed <b>5 pages</b> in length. A minimum number of 3 pages are required.</li>
                <li>Reviews will be <b>single-blind:</b> authors&rsquo; names and affiliations should be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted on EDAS.</li>
                <li>All workshop papers (full papers - both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.</li>
              </ul>
              <p className="text-justify">Submission Link: <a href="https://edas.info/N34336" target="_blank" rel="noopener noreferrer">https://edas.info/N34336</a></p>

              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              <hr />

              <h3>Technical Program Committee</h3>
              <p>&lt;TBA&gt;</p>
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">Decarbx Workshop Co-Chairs</h3>
                <hr />
                <div className="row">
                  {coChairs.map((c) => (
                    <div key={c.name} className="col-sm-3 col-md-3">
                      <img src={c.img} className="thumbnail" alt={c.name} style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px' }} />
                      <div className="caption">
                        <h4><a href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a></h4>
                        <p>{c.role}<br />{c.org}</p>
                      </div>
                    </div>
                  ))}
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

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
        <div className="event-page">

          <div className="event-hero">
            <h1>DecarbX Workshop</h1>
            <p className="lead">Accelerating India&rsquo;s Energy Transition: Research, Innovation &amp; Incubation</p>
            <p style={{ fontSize: '1rem', opacity: 0.92, margin: '0 0 .6rem' }}><i className="fa fa-calendar"></i> January 10, 2026 &nbsp;|&nbsp; Full-Day In-Person Workshop</p>
            <div className="event-details">COMSNETS 2027</div>
          </div>

          <img src="/assets/images/decarbx_leap.png" alt="DecarbX" style={{ display: 'block', width: '100%', borderRadius: '14px', marginBottom: '22px' }} />

          <div className="event-section">
            <h3 className="section-title">Workshop Overview</h3>
            <p className="text-justify">
              The DecarbX Workshop brings together researchers, industry leaders, startup founders, investors, incubators, and policymakers to explore how research, digital technologies, and ecosystem collaboration can accelerate India&rsquo;s transition toward a sustainable, low-carbon energy future. The workshop features a visionary keynote, an invited talk, peer-reviewed research presentations, multi-stakeholder panels, and interactive breakout sessions focused on turning ideas into scalable impact.
            </p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Workshop Schedule</h3>
            <div className="sched">
              {agenda.map((item, idx) => (
                <div key={idx} className={item.isBreak ? 'sched-item is-break' : 'sched-item'}>
                  <div className="sched-time">{item.time}</div>
                  <div className="sched-body">
                    <div className="sched-title">{item.title}</div>
                    {item.desc && <div className="sched-sub">{item.desc}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Who Should Attend</h3>
            <p style={{ fontSize: '16px' }}>
              Researchers &bull; Industry Leaders &bull; Policymakers &bull; Startup Founders &bull; Investors &bull; Incubators &bull; Sustainability &amp; Climate-Tech Practitioners
            </p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Call for Papers</h3>
            <div className="well">
              <a href="/docs/CFP_2026/Decarbx_2026_CFP_1.pdf" download><i className="fa fa-download" style={{ marginRight: '10px' }}></i> Download PDF version of the Call For Papers</a>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Camera Ready Guidelines</h3>
            <div className="well">
              <a href="https://www.comsnets.org/camera_ready.html" target="_blank" rel="noopener noreferrer">https://www.comsnets.org/camera_ready.html</a>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Important Dates</h3>
            <div className="dates-timeline">
              <div className="date-step">
                <div className="dot">1</div>
                <div className="lab">Paper Submission deadline</div>
                <div className="val"><s>15<sup>th</sup> October 2025 (AoE)</s><span className="now">30<sup>th</sup> October 2025 (AoE)</span></div>
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
            <h5>Focus Areas: Submissions may include (but are not limited to)</h5>
            <div className="topic-grid">
              <div className="topic-cat">
                <h4><i className="fa fa-leaf" aria-hidden="true"></i>Smart Infrastructure &amp; Net-Zero Innovation</h4>
                <ul>
                  <li>Smart grids, AI-enabled demand response and load shaping</li>
                  <li>Grid modernization for AI data centers</li>
                  <li>Predictive analytics, digital twins, and resilient grid design</li>
                  <li>Remote monitoring, edge infrastructure, and disaster preparedness</li>
                </ul>
              </div>
              <div className="topic-cat">
                <h4><i className="fa fa-bolt" aria-hidden="true"></i>Sustainable Power for the Digital Age</h4>
                <ul>
                  <li>Role of MMRs/SMRs in powering clean, high-density digital infrastructure</li>
                  <li>Energy storage, renewable integration, and system flexibility</li>
                  <li>Co-optimization of AI and grid systems for decarbonization</li>
                </ul>
              </div>
              <div className="topic-cat">
                <h4><i className="fa fa-balance-scale" aria-hidden="true"></i>Policy, Platforms &amp; Equity</h4>
                <ul>
                  <li>Blockchain and emissions transparency</li>
                  <li>Energy access and digital divide</li>
                  <li>Industry collaboration, innovation ecosystems, and startups</li>
                  <li>Pathways to net-zero for developing economies</li>
                </ul>
              </div>
            </div>
            <p className="text-justify">In addition to paper presentations, the event will include the following formats and if you would like to participate, we welcome proposals for:</p>
            <ul>
              <li><b>Design challenges</b> (e.g., smart grid for AI tech parks)</li>
              <li><b>Simulations / demonstrations</b> (e.g., Incident recovery scenarios)</li>
              <li><b>Hackathons</b> (e.g., grid-data center co-optimization using AI)</li>
              <li><b>Panels and group discussions</b> (e.g., nuclear + AI readiness, digital equity in energy transition)</li>
            </ul>
          </div>

          <div className="event-section">
            <h3 className="section-title">Submission Guidelines</h3>
            <ul>
              <li>Submissions (including title, abstract, all figures, tables, and references) should not exceed <b>5 pages</b> in length. A minimum number of 3 pages are required.</li>
              <li>Reviews will be <b>single-blind:</b> authors&rsquo; names and affiliations should be included in the submission.</li>
              <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
              <li>All papers must be in Adobe Portable Document Format (PDF) and submitted on EDAS.</li>
              <li>All workshop papers (full papers - both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases.</li>
            </ul>
            <p className="text-justify">Submission Link: <a href="https://edas.info/N34336" target="_blank" rel="noopener noreferrer">https://edas.info/N34336</a></p>
            <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Technical Program Committee</h3>
            <p className="tba-note">To be announced</p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Decarbx Workshop Co-Chairs</h3>
            <div className="member-grid">
              {coChairs.map((c) => (
                <div key={c.name} className="member-card">
                  <img src={c.img} alt={c.name} className="member-photo" />
                  <div className="member-name"><a href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a></div>
                  <p className="member-affil">{c.role}<br />{c.org}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

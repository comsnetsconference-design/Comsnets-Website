export const metadata = { title: 'Entrepreneur Ignite Summit | COMSNETS 2027' };

interface ScheduleSlot {
  time: string;
  body: React.ReactNode;
  image?: string;
}

const schedule: ScheduleSlot[] = [
  { time: '10:25 AM', body: 'Welcome!', image: 'pasted image 0.png' },
  { time: '10:35 AM', body: <>Inaugural talk from MeitY&apos;s Tulika Pandey [MeitY&apos;s Startup Hub]</>, image: 'pasted image 12.png' },
  {
    time: '10:50 AM - 11:20 AM',
    body: (
      <>
        <u><a href="https://www.linkedin.com/in/rahulnarayan/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Rahul Narayan</a></u> (Founder Talk), Stealth Startup nwocommute<br />
        20 minutes presentation + 10 minutes Q&amp;A
      </>
    ),
    image: 'pasted image 1.png',
  },
  {
    time: '11:20 AM - 11:55 AM',
    body: (
      <>
        <u><a href="https://research.adobe.com/person/shiv-kumar-saini/" target="_blank" rel="noopener noreferrer">Shiv Saini</a></u> (Entrepreneurship in Big Tech)<br />
        20 minutes presentation + 10 minutes Q&amp;A
      </>
    ),
    image: 'pasted image 2.png',
  },
  {
    time: '11:55 AM - 12:15 PM',
    body: (
      <>
        Startup Founder Talk 2<br />20 minutes presentation + 5 minutes Q&amp;A<br />
        <span style={{ color: '#FF0000' }}>Come to find out who the speaker is!</span>
      </>
    ),
    image: 'pasted image 3.png',
  },
  {
    time: '12:15 PM - 12:45 PM',
    body: (
      <>
        <u><a href="https://www.linkedin.com/in/suhrid-wadekar-89086222/" target="_blank" rel="noopener noreferrer">Suhrid Wadekar</a></u> (Legal Speak for Startups), <u><a href="https://princelobel.com/" target="_blank" rel="noopener noreferrer">Prince Lobel Type LLP</a></u><br />
        22 minutes presentation + 8 minutes Q&amp;A
      </>
    ),
    image: 'pasted image 4.png',
  },
  { time: '12:45 PM - 2:15 PM', body: 'Lunch Break', image: 'pasted image 5.png' },
  {
    time: '2:15 PM - 3:00 PM',
    body: (
      <>
        <u><a href="https://www.linkedin.com/in/gaurav-vaid-product-thinker/" target="_blank" rel="noopener noreferrer">Gaurav Vaid</a></u> (<u><a href="https://www.venturisinc.com/About" target="_blank" rel="noopener noreferrer">Venturis Inc., Innovation, Business Transformation</a></u>)<br />
        35 minutes presentation + 10 minutes Q&amp;A<br />
        Title: From Idea to Reality: Navigating the Startup Journey
      </>
    ),
    image: 'pasted image 6.png',
  },
  {
    time: '3:05 PM - 3:30 PM',
    body: (
      <>
        <u><a href="https://www.linkedin.com/in/sruthi-kannan/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Sruthi Kannan</a></u> <u><a href="https://launchpad.cisco.com/c/start-ups.html" target="_blank" rel="noopener noreferrer">(Cisco for Startups)</a></u><br />
        15 minutes presentation + 10 minutes Q&amp;A
      </>
    ),
    image: 'pasted image 9.png',
  },
  { time: '3:30 PM - 4:00 PM', body: 'Coffee Break and Networking Session', image: 'pasted image 8.png' },
  {
    time: '4:00 PM - 4:35 PM',
    body: (
      <>
        <u><a href="https://www.linkedin.com/in/srujanakula" target="_blank" rel="noopener noreferrer">Srujan Akula</a></u>, CEO, <u><a href="https://themoderndatacompany.com/" target="_blank" rel="noopener noreferrer">Modern Data Company</a></u><br />
        15 minutes presentation + 10 minutes Q&amp;A
      </>
    ),
    image: 'pasted image 7.png',
  },
  {
    time: '4:45 PM - 5:15 PM',
    body: (
      <>
        AMA with Funders and Founders (moderated by <a href="https://www.endiya.com/team/sateesh-andra" target="_blank" rel="noopener noreferrer">Sateesh Andra (Endiya Partners)</a> and <a href="https://emergent.vc/team/" target="_blank" rel="noopener noreferrer">Anupam Rastogi (Emergent Ventures)</a>).<br />
        Interactive session: &quot;Ask Me Anything&quot; — direct, open Q&amp;A with experts on their work, experiences, and opinions.
      </>
    ),
    image: 'pasted image 10.png',
  },
  {
    time: '5:30 PM - 6:45 PM',
    body: (
      <>
        <strong>Entrepreneur Ignite Panel</strong><br />
        <span style={{ color: '#FF0000' }}>VC and founder Panel Discussion: DeepTech Dynamics — Navigating the Voyage from Vision to Venture.</span><br />
        Panelists: <a href="https://www.atheravp.com/team/samir-kumar/" target="_blank" rel="noopener noreferrer">Samir Kumar</a>, <a href="https://emergent.vc/team/" target="_blank" rel="noopener noreferrer">Anupam Rastogi</a>, <a href="https://ideaspringcap.com/team/" target="_blank" rel="noopener noreferrer">Naganand Doraswamy</a>, <a href="https://www.endiya.com/team/sateesh-andra" target="_blank" rel="noopener noreferrer">Sateesh Andra</a>, <a href="https://www.linkedin.com/in/rahulnarayan/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">Rahul Narayan</a>.<br />
        Moderator: <a href="https://schaterji.io/" target="_blank" rel="noopener noreferrer">Somali Chaterji</a> (Purdue University) &amp; CEO/co-founder <a href="https://keybyte.xyz/" target="_blank" rel="noopener noreferrer">KeyByte LLC</a>.
      </>
    ),
    image: 'pasted image 11.png',
  },
];

const chairs = [
  { name: 'Somali Chaterji', link: 'https://schaterji.io/', affiliation: 'Purdue University, USA', image: 'somali.jpg' },
  { name: 'Aloknath De', link: 'https://aloknathde.com/', affiliation: 'Samsung R&D Institute, India', image: 'Aloknath.jpg' },
  { name: 'Anupam Rastogi', link: 'https://medium.com/@anupamr', affiliation: 'Early-stage VC, USA', image: 'anupam.jpg' },
  { name: 'Amit Saha', link: 'https://www.linkedin.com/in/amsaha/', affiliation: 'Cisco Meraki, Bengaluru', image: 'amitsaha.jpg' },
  { name: 'Gaurav Vaid', link: 'https://www.linkedin.com/in/gaurav-vaid-product-thinker/', affiliation: 'Founding Partner, Venturis Group Inc', image: 'gaurav.jpg' },
];

export default function IgniteBetaPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneur Ignite Summit</h1>

              {/* TODO: refresh agenda, speakers, panel, chairs and posters for COMSNETS 2027 */}
              <p className="text-justify">
                The COMSNETS Ignite Bundle at COMSNETS 2025 was a pivotal gathering for anyone involved in the broad fields of computer systems, networking, and machine learning. Whether participants are just starting out or seeking to expand their professional horizons, the bundle offers valuable opportunities to learn, share, and connect across these dynamic and critical areas of technology.
              </p>
              <p>
                <b>New Initiatives</b><br />
                <em>Undergraduate Ignite:</em> targeted at undergraduate students and select high schoolers — an introduction to the latest trends and technologies in computer systems and networks plus a platform for educational advancement and early professional networking.<br />
                <em>COMSNETS 5K:</em> promotes well-being and informal networking through a fun and engaging run in Bangalore&apos;s Cubbon Park.
              </p>
              <p>
                <b>Sort of New</b><br />
                <em>Entrepreneur Ignite Summit (EIS):</em> connects budding entrepreneurs with potential investors and seasoned mentors in computer systems, networking, and machine learning, facilitating exchanges of ideas and innovative ventures.
              </p>
              <p>
                <b>Revamped Features</b><br />
                <em>Graduate Forum:</em> deeper interaction between graduate students and industry leaders for presenting and discussing innovative research.<br />
                <em>Mentoring Sessions for Students and Postdocs:</em> targeted, practical career advice, research guidance, and professional development insights.
              </p>

              <hr />
              <b>UNDERGRADUATE IGNITE SUMMIT</b>
              <p className="text-justify">
                The Inaugural Undergraduate Ignite Summit at COMSNETS 2025 — a unique event welcoming high schoolers and undergrads to share their technical prowess and innovative solutions at the intersection of networking, ML, and computer systems.
              </p>
              <p>
                <b>What to Expect:</b> insider knowledge from a junior panel; technical deep dives in networking, ML and computer systems; an innovation showcase with 5-minute pitches and a poolside poster session.
              </p>

              <hr />
              <h4>Venue</h4>
              <p style={{ padding: '8px' }}>Esquire Hall, Basement Floor, Chancery</p>

              <h4>Schedule</h4>
              {schedule.map((s, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '1rem' }}>
                  {s.image && (
                    <div style={{ padding: 20 }}>
                      <img src={`/assets/images/ignite2024/${s.image}`} alt={s.time} style={{ width: 200, height: 200 }} />
                    </div>
                  )}
                  <div style={{ textAlign: 'left' }}>
                    <p><strong>{s.time}</strong></p>
                    <div>{s.body}</div>
                  </div>
                </div>
              ))}

              <hr />
              <div style={{ textAlign: 'center', color: '#38761d' }}>
                <h5><strong>6:45 – 7:00: Concluding Remarks</strong></h5>
                <h5><strong>COMSNETS 2024 BANQUET — Banquet Talk 7:15 PM – 8:00 PM</strong></h5>
                <h5><strong>COMSNETS 2024 Award Ceremony — Best Papers, Best Posters, Best Demos, Best Graduate Forum, Travel Awards</strong></h5>
                <h5><strong>Cocktails and Dinner — 8:00 PM – 11:00 PM</strong></h5>
              </div>

              <a id="registration"></a>
              <h4>How to Register</h4>
              <p>You can know more about the Registration Details for the Entrepreneur Ignite Summit on our online registration portal by clicking the button below.</p>
              <a href="https://www.comsnets.org/registration_fee_details.html" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-block">Click here to know Registration Fee</a>
              <br />
              <p>You can register for the Entrepreneur Ignite Summit on our online registration portal by clicking the button below.</p>
              <a href="https://www.comsnets.org/registration.html" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-block">Click here to register</a>

              <hr />
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <h3 className="text-center">Entrepreneur Ignite Summit Chairs</h3>
                  <div className="organizing-committee-page center-block">
                    <div className="row">
                      {chairs.map((c) => (
                        <div className="col-sm-2 col-md-2 text-center" key={c.name}>
                          <img src={`/assets/images/Committee_2024/${c.image}`} className="thumbnail" alt={c.name} style={{ height: 170, width: 140 }} />
                          <div className="caption">
                            <h4><u><a href={c.link} target="_blank" rel="noopener noreferrer">{c.name}</a></u></h4>
                            <p>{c.affiliation}</p>
                          </div>
                        </div>
                      ))}
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

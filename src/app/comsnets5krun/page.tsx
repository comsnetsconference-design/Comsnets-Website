export const metadata = { title: 'COMSNETS 5K Run & Walk | COMSNETS 2027' };

interface Organizer {
  name: string;
  link: string;
  role: string;
  image: string;
}

const organizers: Organizer[] = [
  { name: 'Gaurav Vaid', link: 'https://www.linkedin.com/in/gaurav-vaid-product-thinker/', role: 'Chairperson, CEEDS', image: '/assets/images/Committee_2026/EIS/GauravVaid.png' },
  { name: 'Vinay Dora', link: 'https://www.linkedin.com/in/vinaydora/', role: 'Director, Community Engagement and Digital Media, CEEDS', image: '/assets/images/Committee_2026/Vinay Dora.jpeg' },
  { name: 'Dr. Madanmohan Rao', link: 'https://www.linkedin.com/in/madanmohanrao/', role: 'Director, Knowledge Services and Innovation Training, CEEDS', image: '/assets/images/Committee_2025/EIS/Madan1.png' },
  { name: 'Ayushi Vaid', link: 'https://www.linkedin.com/in/ayushi-vaid-6449ba10b/', role: 'Lead, Strategy and Operations, CEEDS', image: '/assets/images/Committee_2026/Ayushi Vaid.jpg' },
  { name: 'Dr. Rajeev Shorey', link: 'https://in.linkedin.com/pub/rajeev-shorey/6/390/894', role: 'Steering Committee Member, COMSNETS', image: '/assets/images/committee_2018/rajeev_shorey.jpg' },
];

export default function Comsnets5kRunPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                COMSNETS 5K Run &amp; Walk &mdash; Move. Connect. Reflect.
              </h1>

              <div className="alert alert-info" style={{ borderLeft: '5px solid #1b4f72', background: '#d9edf7', color: '#31708f', borderRadius: '4px', padding: '15px' }}>
                <h4 style={{ marginTop: 0 }}><i className="fa fa-calendar"></i> Event Logistics</h4>
                <p><strong>Location:</strong> Cubbon Park, Bangalore</p>
                <p><strong>Race Start:</strong> 7:10 AM Sharp (Route closes at 8:00 AM)</p>
                <p><strong>Bus Timing:</strong> Jan 8, 2026 7.10 AM IST (It will be a roundtrip to and from Cubbon Park)</p>
              </div>

              <p className="text-justify">Part of the CEEDS Ignite Series at COMSNETS 2026 (Alongside the Entrepreneur Ignite Summit and DecarbX Workshop)</p>

              <h4>About the COMSNETS 5K Run &amp; Walk</h4>
              <p className="text-justify">The COMSNETS 5K Run &amp; Walk is a relaxed, community-driven morning experience designed to bring together participants from across the COMSNETS ecosystem&mdash;researchers, founders, students, industry leaders, investors, and policymakers&mdash;outside the conference halls and into nature.</p>

              <h4>What Makes This Year Special</h4>
              <p className="text-justify">For COMSNETS 2026, the 5K is curated as a Run / Walk + Conversation experience, aligned with the broader CEEDS programming. Participants can choose different paces and join CEEDS-led groups for informal conversation while moving through the calm, green setting of Cubbon Park.</p>

              <h4>Why We&rsquo;re Doing This</h4>
              <p className="text-justify">The run/walk creates space for wellbeing, connection with nature, human connection, and early dialogue, setting the tone for the Entrepreneur Ignite Summit (EIS) and the DecarbX Workshop.</p>

              <h4>Who Should Join</h4>
              <p className="text-justify">The COMSNETS 5K Run &amp; Walk is open to all COMSNETS participants, including conference attendees, EIS and DecarbX participants, students, researchers, founders, and professionals. No prior running experience is required.</p>

              <h4>Format at a Glance</h4>
              <div className="alert alert-info" style={{ borderLeft: '5px solid #1b4f72', background: '#d9edf7', color: '#31708f', borderRadius: '4px', padding: '15px' }}>
                <p>7:10 AM &ndash; Assemble at Cubbon Park</p>
                <p>Group formation by pace (walkers and runners)</p>
                <p>5K Run / Walk (standard route)</p>
                <p>Post-walk cool-down and informal conversations</p>
              </div>

              <h4 style={{ marginTop: '30px' }}>Route Map</h4>
              <p>Please find the official course map below.</p>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <a href="/assets/images/map_5k.jpeg" target="_blank" rel="noopener noreferrer" className="thumbnail">
                  <img src="/assets/images/map_5k.jpeg" className="img-responsive" alt="5k Run Route Map" style={{ maxWidth: '80%', margin: '0 auto' }} />
                </a>
              </div>

              <hr />

              <h3 style={{ color: '#2A4D75', fontWeight: 700, borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>The Team Behind the Run</h3>
              <p className="text-justify">The COMSNETS 5K Run &amp; Walk is jointly brought to you by the CEEDS and COMSNETS leadership team, who will also be present on the ground to help facilitate pace-based groups and conversations:</p>

              <div className="row">
                {organizers.map((o) => (
                  <div key={o.name} className="col-sm-4 col-md-4" style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <img
                      src={o.image}
                      className="thumbnail"
                      alt={o.name}
                      style={{ boxShadow: '10px 10px 5px #BDBDBD', height: '200px', width: '170px', objectFit: 'cover' }}
                    />
                    <div className="caption">
                      <h4><a href={o.link} target="_blank" rel="noopener noreferrer">{o.name}</a></h4>
                      <p>{o.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <h4>Part of the CEEDS Ignite Line-Up</h4>
              <p className="text-justify">DecarbX Workshop</p>
              <p className="text-justify">Entrepreneur Ignite Summit (EIS)</p>

              <h4>Join Us</h4>
              <p className="text-justify">We invite you to start COMSNETS 2026 by moving together&mdash;in nature, in conversation, and in community.</p>

              {/* TODO: fill content for 2027 -- this page is currently archived 2026 content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

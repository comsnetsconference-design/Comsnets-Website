export const metadata = { title: 'Nexus Panel | COMSNETS 2027' };

interface Panelist {
  name: string;
  affiliation: string;
  email?: string;
  emailExtra?: { addr: string; sep?: string };
  img: string;
  bio: string;
}

const panelists: Panelist[] = [
  {
    name: 'Parimal Parag',
    affiliation: 'Professor, IISc',
    email: 'parimal@iisc.ac.in',
    img: '/assets/images/speakers_2024/invited/parimalparag.jpeg',
    bio: 'Parimal Parag is currently an associate professor in the department of electrical communication engineering at Indian Institute of Science at Bangalore. He was working as senior systems engineer in R&D at ASSIA Inc. from October 2011 to November 2014. He received his B. Tech. and M. Tech. degrees from Indian Institute of Technology Madras in fall 2004; and the PhD degree from Texas A&M University in fall 2011. He was at Stanford University and Los Alamos National Laboratory, in autumn of 2010 and summer of 2007, respectively. His research interests include the design and analysis of large scale networked systems. He was a co-author of the 2018 IEEE ISIT Student Best Paper, and a recipient of the 2017 Early Career Award from the Science and Engineering Research Board.',
  },
  {
    name: 'Amit Bakshi',
    affiliation: 'Intel',
    email: 'amit.s.baxi@intel.com',
    img: '/assets/images/speakers_2024/invited/amit.jpg',
    bio: 'Amit is a Research Scientist and Manager, leading the Signals, Algorithms & Systems Lab in Intel Labs, India. Prior to Intel, he worked for about 10 years in the medical device research and development. After joining Intel Labs in 2005, he focused on ultra-low-power sensing systems, flexible wearable electronics platforms, embedded/IoT/wireless sensor networks, signal processing & analytics. His research led to digital/wearable health systems such as Lifephone+ and Flexible Bio-patch. Since last 5 years, he has been driving research in time-critical Edge Robotics and Automation Control Systems. He has filed 30+ patents and has 10+ peer-reviewed publications. He holds a Masters in Digital Design and Embedded Systems (Manipal University) with a Bachelors in Biomedical Engineering (Mumbai University).',
  },
  {
    name: 'Chetan Kumar',
    affiliation: 'Mavenir System',
    email: 'chetansk@aikaan.io',
    img: '/assets/images/speakers_2024/invited/chetankumar.jpeg',
    bio: 'Chetan Kumar S is Sr. Director of Engineering Mavenir System, building products for 5G technology. Before Mavenir, Chetan was Co-Founder and CEO at AiKaan Labs, which Ather Energy acquired. Chetan has over 20 years of experience working at networking giants like Cisco Systems, Juniper Networks, Alcatel-Lucent, and startups. Chetan obtained a master\u2019s degree in engineering from the Indian Institute of Science. Areas of interest include 5G communications, Edge & Cloud Computing networks, IoT, and data analytics & machine learning in systems & networks.',
  },
  {
    name: 'Mr Pathak',
    affiliation: 'Bharat 6G Alliance',
    email: 'DG@bharat6galliance.com',
    emailExtra: { addr: 'rkpathak@gmail.com', sep: '; ' },
    img: '/assets/images/speakers_2024/invited/pathak.jpg',
    bio: 'Rajesh Kumar Pathak has done Masters in Technology and has more than 37 years of experience in senior position at Government of India. Mr Pathak is recognized for his exceptional contributions to indigenous manufacturing, technological innovation, and global collaboration. Instrumental in setting up of the Telecommunications Standards Development Society, India (TSDSI). Prior to Director General position in Bharat 6G Alliance, he was Bharat 6G Mission Head in the Government and instrumental in framing Bharat 6G Vision statement.',
  },
  {
    name: 'N. KISHOR NARANG',
    affiliation: 'Technology Philanthropist, Design Strategist & Architect, Innovation, Standardization & Sustainability Evangelist',
    img: '/assets/images/speakers_2024/invited/kishor.jpg',
    bio: 'Kishor is Technology Advisor, Mentor, Design Strategist & Architect in Electrical, Electronics & ICT with over 46 years of professional experience in education, research, design and consulting running an Independent Design House \u2013 NARNIX since 1981. Currently, mentoring many Deep Tech & Disruptive Tech Start-ups. For the last 15 years, deeply involved in standardization in the Smart Grid, Smart Cities, Digital Infrastructure and Cyber Security domains. He is Chair IEEE P2784, Vice Chair Strategy, IEC SyC Smart Cities. Founding Chair, LITD 28, Smart Infrastructure Sectional Committee in Bureau of Indian Standards (BIS).',
  },
];

export default function NexusPanelPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Fueling innovation in networking at the nexus of universities, industry, government, and startups
              </h1>

              <div style={{ padding: '20px' }}>
                <h4><strong>Schedule: 5:00 to 6:30 on 6th January</strong></h4>
              </div>

              <hr/>
              <h3 className="text-center">Panelists</h3>
              <hr/>

              {panelists.map((p) => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ padding: '20px' }}>
                    <img src={p.img} alt={p.name} style={{ width: '150px', height: '150px' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <h4>{p.name}</h4>
                    <p>{p.affiliation}</p>
                    {p.email && (
                      <>
                        <a href={`mailto:${p.email}`}>{p.email}</a>
                        {p.emailExtra && (
                          <>
                            {p.emailExtra.sep ?? '; '}
                            <a href={`mailto:${p.emailExtra.addr}`}>{p.emailExtra.addr}</a>
                          </>
                        )}
                        <br/>
                      </>
                    )}
                    <details style={{ marginTop: '10px' }}>
                      <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>Bio</summary>
                      <div style={{ padding: '20px', backgroundColor: 'lightgrey', borderRadius: '10px' }}>
                        <p>{p.bio}</p>
                      </div>
                    </details>
                  </div>
                </div>
              ))}

              <hr/>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Moderator</h4>
                </div>
                <div style={{ paddingLeft: '.9%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <div style={{ padding: '20px' }}>
                      <img src="/assets/images/Committee_2024/Laxmi.jpg" alt="Laxmi Mukund" style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h4><a href="https://ece.iisc.ac.in/laxmi-mukund/" target="_blank" rel="noopener noreferrer">Laxmi Mukund</a></h4>
                      <p>Cisco<br/>India</p>
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

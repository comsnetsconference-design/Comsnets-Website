export const metadata = { title: 'The Future of Intelligent Networking: Mobile Computing and Cyber-Physical Systems | COMSNETS 2027' };

interface Panelist {
  name: string;
  affiliation: string;
  image: string;
  homepage: string;
  bio: string;
}

const panelists: Panelist[] = [
  {
    name: 'Hari Balakrishnan',
    affiliation: 'MIT, USA',
    image: '/assets/images/speakers_2024/keynote/Hari.jpg',
    homepage: 'http://nms.csail.mit.edu/~hari/',
    bio: "Hari Balakrishnan is the Fujitsu Professor of Computer Science at MIT. His research is in networked computer systems, with current interests in networking, sensing, and perception for sensor-equipped mobile devices connected to cloud or edge services. He has made many contributions to mobile and sensor computing, overlay and peer-to-peer networks, congestion control, Internet routing, and data management systems. In 2010, based on the CarTel project, Balakrishnan co-founded Cambridge Mobile Telematics (CMT). Balakrishnan received his PhD in 1998 from the EECS Department at UC Berkeley and a BTech in Computer Science in 1993 from IIT Madras. He was elected to the National Academy of Engineering (2015) and to the American Academy of Arts and Sciences (2017). His honors include the ACM SIGCOMM Award (2021), the IEEE Kobayashi Computers and Communications Award (2021), Fellow of the IEEE (2020), Fellow of the ACM (2008), and the ACM doctoral dissertation award for Computer Science (1998).",
  },
  {
    name: 'Aruna Balasubramanian',
    affiliation: 'Stony Brook University, USA',
    image: '/assets/images/speakers_2024/invited/Aruna.jpg',
    homepage: 'https://www.cs.stonybrook.edu/people/faculty/ArunaBalasubramanian',
    bio: 'Aruna Balasubramanian is an Associate Professor at Stony Brook University. She received her Ph.D from the University of Massachusetts Amherst, where her dissertation won the UMass outstanding dissertation award and was the Sigcomm dissertation award runner up. She works in the area of networked systems. Her current work consists of: (1) making AI efficient and sustainable, (2) improving usability, accessibility, and privacy of mobile applications, and (3) designing measurement-driven approaches to improve performance of next generation networks. She is the recipient of the SIGMobile Rockstar award, a Ubicomp best paper award, a Computing Innovation Fellowship, a VMWare Early Career award, several Google research awards, and the Applied Networking Research Prize.',
  },
  {
    name: 'Praveen Jayachandran',
    affiliation: 'IBM Research, India',
    image: '/assets/images/speakers_2024/invited/Praveen-jayachandran.jpeg',
    homepage: 'https://research.ibm.com/people/praveen-jayachandran',
    bio: 'Praveen Jayachandran is a senior technical staff member and senior manager of the Hybrid Cloud operations department at IBM Research, India. His work spans network management, observability, and managing systems and data at scale, specifically for multi-cloud and Edge environments. He is an IBM Master Inventor, a member of the IBM Academy of Technology, and a senior member of IEEE. He holds a PhD from the University of Illinois at Urbana-Champaign, USA.',
  },
  {
    name: 'Praveen Tammana',
    affiliation: 'Assistant Professor, IIT Hyderabad',
    image: '/assets/images/speakers_2024/invited/praveen-tamanna.jpeg',
    homepage: 'https://www.iith.ac.in/cse/praveent/',
    bio: 'Praveen is an Assistant Professor in the Computer Science Department, at IIT-Hyderabad. Before IITH, he was a postdoctoral researcher at Princeton University, USA. He received his PhD from the University of Edinburgh in 2018. He broadly works at the intersection of Systems, Networks, and Security. His current focus is on designing and building networked systems that make networks easy to manage, secure, and robust, by using emerging technologies such as Software-Defined Networking and Programmable Data Planes. Praveen has received the best paper award at ACM SIGCOMM SOSR, IBM academic award, TiHAN faculty fellowship award, and IITH teaching excellence award.',
  },
  {
    name: 'Sushmita Ruj',
    affiliation: 'UNSW, Sydney, Australia',
    image: '/assets/images/speakers_2024/invited/sushmitaruj.jpeg',
    homepage: 'https://www.unsw.edu.au/staff/sushmita-ruj',
    bio: "Sushmita Ruj is Faculty of Engineering Lead of UNSW Institute for Cybersecurity, IFCYBER and Senior Lecturer in the School of Computer Science and Engineering at UNSW, Sydney. Her research interests are in applied cryptography, post quantum cryptography, blockchains and privacy enhancing technologies. She has won several competitive grants like Samsung GRO Award, NetApp Faculty Fellowship, Cisco Academic Grant. She is an Associate Editor of the Transactions on Information Forensics and Security. Before joining UNSW, she was a Senior Research Scientist at CSIRO's Data61, an Associate Professor at Indian Statistical Institute and an Assistant Professor at IIT Indore. Sushmita is a senior member of both ACM and IEEE.",
  },
  {
    name: 'Gaurav Vaid',
    affiliation: 'Founding Partner, Venturis Group Inc',
    image: '/assets/images/Committee_2024/gaurav.jpg',
    homepage: 'https://www.linkedin.com/in/gaurav-vaid-product-thinker/',
    bio: 'Gaurav is a motivational team leader with an ability to energize teams to highest performance levels and is a firm believer in establishing a culture based on mutual trust and individual empowerment, through the organization. Gaurav is a technologist who believes in market-in approach to use technology to solve market/customer problems. Gaurav brings a wealth of real-world experience in driving innovation and business transformation in both startups and large mature corporations and is a master in the "Art of Prioritization" and passionate about sharing his experience based knowledge with other business leaders.',
  },
  {
    name: 'Mythili Vutukuru',
    affiliation: 'Indian Institute of Technology Bombay, India',
    image: '/assets/images/ignite2024/MythiliVutukuru.jpeg',
    homepage: 'https://www.cse.iitb.ac.in/~mythili/',
    bio: 'Mythili Vutukuru is an Associate Professor at the Department of Computer Science and Engineering at IIT Bombay. Before joining IITB in 2013, she obtained her Ph.D. and M.S. degrees in Computer Science from the Massachusetts Institute of Technology in 2010 and 2006 respectively. She was advised by Prof. Hari Balakrishnan. After her Ph.D., she worked at Movik Networks, a startup in the telecom space, for 3 years before joining IITB. Earlier, she obtained a Bachelors in Computer Science and Engineering from the Indian Institute of Technology, Madras in 2004.',
  },
];

const moderator: Panelist = {
  name: 'Somali Chaterji',
  affiliation: 'Assistant Professor, Purdue University',
  image: '/assets/images/Committee_2024/somali.jpg',
  homepage: 'https://schaterji.io/',
  bio: '',
};

export default function CPSPanelPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                The Future of Intelligent Networking: Mobile Computing and Cyber-Physical Systems
              </h1>
              {/* TODO: refresh panelists / venue / abstract for 2027. 2024 archive content shown below. */}

              <p className="text-justify">
                This panel discussion explores the profound impact of new networking technologies on mobile computing, IoT, automation, and cyber-physical systems (CPS). While 6G remains a significant contributor, our conversation extends to emerging networking technologies that are redefining the landscape. We delve into the enhanced role of intelligent networking technologies in advancing mobile computing and automation. These technologies are at the heart of the ongoing evolution in CPS, a field characterized by the seamless integration of digital and physical elements. Our exploration highlights how these cutting-edge networking solutions are optimizing efficiency and elevating the intelligence of interconnected systems and processes. The discussion also encompasses the multi-faceted nature of computing across cloud, edge, and on-premise infrastructures. We aim to dissect the innovative aspects and challenges of this tripartite model, underlining the influence of intelligent networking technologies in reshaping distributed computing.
              </p>

              <br/>

              <div style={{ textAlign: 'center', padding: '20px' }}>
                <img src="/assets/images/posters/cps poster.jpg" alt="Poster Image" style={{ maxWidth: '100%', height: 'auto' }}/>
              </div>

              <h4 style={{ padding: '8px' }}>Venue: SIGMA Hall</h4>

              <br/>
              <hr/>

              <h3 className="text-center">Panelists</h3>

              <hr/>

              {panelists.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                  <div style={{ padding: '20px' }}>
                    <img src={p.image} alt={p.name} style={{ width: '150px', height: '200px', objectFit: 'cover' }}/>
                  </div>
                  <div style={{ textAlign: 'left', flex: '1 1 300px' }}>
                    <h4>{p.name}</h4>
                    <p>{p.affiliation}</p>
                    <a href={p.homepage} target="_blank" rel="noopener noreferrer">Visit Homepage</a>
                    <p style={{ marginTop: '10px' }}>{p.bio}</p>
                  </div>
                </div>
              ))}

              <hr/>
              <br/><br/>

              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Moderator</h4>
                </div>
                <div style={{ paddingLeft: '0.9%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ padding: '20px' }}>
                      <img src={moderator.image} alt={moderator.name} style={{ width: '150px', height: '200px', objectFit: 'cover' }}/>
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h4>{moderator.name}</h4>
                      <p>{moderator.affiliation}</p>
                      <a href={moderator.homepage} target="_blank" rel="noopener noreferrer">Visit Homepage</a>
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

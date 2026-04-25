export const metadata = { title: 'COMSJOB 2027 | COMSNETS 2027' };

interface Company {
  name: string;
  logo: string;
  url: string;
}

const slot1: Company[] = [
  { name: 'Qualcomm', logo: '/assets/images/sponsors/qualcomm_new.png', url: 'https://www.qualcomm.com/home' },
  { name: 'ARTPARK', logo: '/assets/images/sponsors/ARTPARK+secondary.png', url: 'https://artpark.in/' },
  { name: 'Microsoft', logo: '/assets/images/sponsors/microsoft.png', url: 'https://www.microsoft.com/en-in/' },
  { name: 'Google', logo: '/assets/images/sponsors/Google2023.png', url: 'https://about.google/' },
  { name: 'IBM', logo: '/assets/images/sponsors/IBM_logo.png', url: 'https://www.ibm.com/about' },
  { name: 'OLA', logo: '/assets/images/sponsors/OLA.png', url: 'https://www.olacabs.com/' },
  { name: 'TCS Research', logo: '/assets/images/sponsors/TCS_Research.png', url: 'https://www.tcs.com/research-innovation' },
  { name: 'IIITB COMET Foundation', logo: '/assets/images/sponsors/IIITB-COMET.png', url: 'https://comet.iiitb.ac.in/careers/' },
  { name: 'AMD', logo: '/assets/images/sponsors/AMD.jpg', url: 'https://www.amd.com/en.html' },
];

interface Chair {
  name: string;
  url: string;
  affiliation: React.ReactNode;
  email?: string;
  img: string;
}

const chairs: Chair[] = [
  { name: 'Abhishek Appaji', url: 'https://www.linkedin.com/in/abhishek-appaji/', affiliation: 'B.M.S. College of Engineering, India', email: 'abhishek.ml@bmsce.ac.in', img: '/assets/images/Committee_2025/comsjobs/abhishek.jpg' },
  { name: 'Amit Kumar Saha', url: 'https://www.linkedin.com/in/amsaha/', affiliation: 'DocLens.ai, India', email: 'amsaha@gmail.com', img: '/assets/images/Committee_2025/comsjobs/amit_saha.jpg' },
  { name: 'P. V. Krishna', url: 'https://www.linkedin.com/in/pv-krishna/?trk=people-guest_people_search-card&originalSubdomain=in', affiliation: <>NVIDIA<br />Bangalore, India</>, img: '/assets/images/Committee_2025/PublicityCoChair/PVKrishna.JPG' },
];

export default function ComsjobPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>COMSJOB 2027</h1>

              <h5><b>Event Date:</b> 6th Jan 2027, 6:00 pm - 7:00 pm IST.</h5>
              <h5><b>Event Location:</b> To be announced.</h5>

              <div className="panel panel-default">
                <div className="panel-body">
                  <p className="text-justify">COMSJOB is a focused event that seeks to bring together top companies in the field with the best and brightest students (BTech, MTech, PhD) and post-docs from the COMSNETS community. COMSJOB aims to assist with both open full-time positions, and as well as fixed-duration internships.</p>
                </div>
              </div>

              <hr />

              <div className="panel panel-default">
                <div className="panel-heading"><h3>Event Logistics</h3></div>
                <div className="panel-body">
                  <p className="text-justify">
                    The event will be done in an informal setup where companies present briefly about the job opportunities in their respective companies, the skill-sets they are looking for, and what is the best way to reach the company for job prospects.
                    <br /><br />
                    The company representatives and students can mingle with each other during the event and continue to do so at the conference welcome reception post the event on Jan 6, 2027.
                  </p>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h3>Participating Companies</h3></div>
                <div className="panel-body">
                  <p><em>Participating companies for COMSNETS 2027 will be confirmed closer to the event. The list below reflects past editions.</em></p>
                  {/* TODO: confirm participating companies for 2027 */}
                  <h3>Slot 1</h3>
                  {slot1.map((c) => (
                    <div className="panel panel-default" key={c.name}>
                      <div className="row">
                        <div className="col-md-4 col-xs-4">
                          <img src={c.logo} className="img-responsive" alt={c.name} style={{ height: 80, objectFit: 'contain', padding: '1em' }} />
                        </div>
                        <div className="col-xs-8">
                          <div className="row">
                            <h4><b>{c.name}</b></h4>
                            <p><a href={c.url} target="_blank" rel="noopener noreferrer">Go to homepage</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              <p>In case of any questions, please contact the COMSJOB chairs:</p>

              <div className="organizing-committee-page center-block">
                <h3 className="text-center">COMSJOB Chairs</h3>
                <div className="row">
                  {chairs.map((ch) => (
                    <div className="col-sm-4 col-md-4" key={ch.name}>
                      <img src={ch.img} className="thumbnail" alt={ch.name} style={{ WebkitBoxShadow: '10px 10px 5px #BDBDBD', height: 170, width: 140 }} />
                      <div className="caption">
                        <h4><a href={ch.url} target="_blank" rel="noopener noreferrer">{ch.name}</a></h4>
                        <p>{ch.affiliation}</p>
                        {ch.email && <p><a href={`mailto:${ch.email}`}>{ch.email}</a></p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

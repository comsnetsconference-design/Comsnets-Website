export const metadata = { title: 'Accepted papers for the Social Networking Workshop | COMSNETS 2027' };

export default function AcceptedSocialNetworkingWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px', textTransform: 'none' }}>Accepted papers for the Social Networking Workshop</h1>
              <p><em>The list below is from a previous edition of the Social Networking Workshop. Accepted papers for COMSNETS 2027 will be announced once finalized.</em></p>
              {/* TODO: fill content for 2027 once accepted papers are announced */}
              <ul>
                <li><strong>Modeling Opinion Dynamics in a Social Network Using Markov Random Field</strong><br />Kundan Kandhway (TCS Innovation Labs, Chennai, India)</li>
                <li><strong>Knowledge based Community Detection in Online Social Network</strong><br />Paramita Dey (GCECT Kolkata, India), Agneet Chatterjee (Jadavpur University, Kolkata, India), and Sarbani Roy (Jadavpur University, Kolkata, India)</li>
                <li><strong>Centralized and Epidemic Dissemination of Security Patches</strong><br />Kundan Kandhway (TCS Innovation Labs, Chennai, India)</li>
                <li><strong>Design and Implementation of Small Multiples Matrix-based Visualisation to Monitor and Compare Email Socio-organisational Relationships</strong><br />Mithileysh Sathiyanarayanan, Cagatay Turkay, and Odunayo Fadahunsi (City University of London, UK)</li>
                <li><strong>A Novel Overlapping Community Detection Using Parallel CFM and Sequential Nash Equilibrium</strong><br />Aparna Sarswat and Ram Mohana Reddy Guddeti (NIT Surathkal, India)</li>
                <li><strong>TRAFAN: Road Traffic Analysis By Using Social Media Web Pages</strong><br />Akilesh B, Nagendra Kumar, Bharath Reddy and Manish Singh (IIT Hyderabad, India)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

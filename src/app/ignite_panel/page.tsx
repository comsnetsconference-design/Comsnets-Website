export const metadata = { title: 'Entrepreneur Ignite Panel | COMSNETS 2027' };

interface Panelist {
  name: string;
  affiliation: string;
  link: string;
  image: string;
}

const panelists: Panelist[] = [
  { name: 'Samir Kumar', affiliation: 'Athera Venture Partners', link: 'https://www.atheravp.com/team/samir-kumar/', image: 'samir_kumar.jpg' },
  { name: 'Anupam Rastogi', affiliation: 'Emergent Ventures', link: 'https://emergent.vc/team/', image: 'anupam.jpg' },
  { name: 'Naganand Doraswamy', affiliation: 'Ideaspring Capital', link: 'https://ideaspringcap.com/team/', image: 'naganand.jpg' },
  { name: 'Sateesh Andra', affiliation: 'Endiya Partners', link: 'https://www.endiya.com/team/sateesh-andra', image: 'sateesh.jpg' },
  { name: 'Rahul Narayan', affiliation: 'Serial Entrepreneur', link: 'https://www.linkedin.com/in/rahulnarayan/?originalSubdomain=in', image: 'rahul_narayan.png' },
];

export default function IgnitePanelPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneur Ignite Panel</h1>
              {/* TODO: refresh panellists for 2027 */}
              <div className="organizing-committee-page">
                <div className="row">
                  {panelists.map((p) => (
                    <div className="col-md-4" key={p.name}>
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        <img src={`/assets/images/ignite2024/${p.image}`} className="thumbnail" alt={p.name} style={{ width: '150px', height: '150px' }} />
                      </a>
                      <div className="caption">
                        <h4>
                          <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                            <strong>{p.name}</strong>
                          </a>
                        </h4>
                        <p>{p.affiliation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a id="registration"></a>
              <h4>How to Register</h4>
              <p>You can know more about the Registration Details for the Entrepreneur Ignite Summit on our online registration portal by clicking the button below.</p>
              <a href="https://www.comsnets.org/registration_fee_details.html" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-block">Click here to know Registration Fee</a>
              <br />
              <p>You can register for the Entrepreneur Ignite Summit on our online registration portal by clicking the button below.</p>
              <a href="https://www.comsnets.org/registration.html" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-block">Click here to register</a>
              <hr />
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4>Moderator</h4>
                </div>
                <div style={{ paddingLeft: '0.9%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <div style={{ padding: '20px' }}>
                      <img src="/assets/images/Committee_2024/somali.jpg" alt="Somali Chaterji" style={{ width: '150px', height: '200px' }} />
                    </div>
                    <div style={{ textAlign: 'left' }}>
                      <h4>Somali Chaterji</h4>
                      <a href="https://schaterji.io/" target="_blank" rel="noopener noreferrer">(Assistant Professor, Purdue University)</a> and{' '}
                      <a href="https://keybyte.xyz/" target="_blank" rel="noopener noreferrer">CEO/co-founder KeyByte LLC</a>
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

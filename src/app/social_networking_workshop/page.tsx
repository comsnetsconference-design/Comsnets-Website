export const metadata = { title: 'Social Networking Workshop | COMSNETS 2027' };

// NOTE: The original PHP uses tpl/socialnetworkingworkshopheader.php (custom workshop header) and
// disable_page() is commented out. Content shown below is the live 2018 workshop content
// (stale dates preserved). TODO: refresh for 2027 once chairs/program are confirmed.

const programCommittee = [
  ['Srikantha Bedathur', 'IBM Research, India'],
  ['Sanjukta Bhowmick', 'University of Nebraska, USA'],
  ['Tanmoy Chakraborty', 'University of Maryland, USA'],
  ['Joydeep Chandra', 'IIT Patna, India'],
  ['Niyati Chhaya', 'Adobe Research, India'],
  ['Monojit Choudhury', 'Microsoft Research India'],
  ['Sourav Dandapat', 'IIT Patna, India'],
  ['Lipika Dey', 'TCS Innovation Labs, Kolkata'],
  ['Sourav Dutta', 'Bell Labs, Ireland'],
  ['Niloy Ganguly', 'IIT Kharagpur, India'],
  ['Saptarshi Ghosh', 'IIT Kharagpur, India'],
  ['Kripabandhu Ghosh', 'IIT Kanpur, India'],
  ['Pawan Goyal', 'IIT Kharagpur, India'],
  ['Paramita Mirza', 'MPI for Informatics, Germany'],
  ['Bivas Mitra', 'IIT Kharagpur, India'],
  ['Animesh Mukherjee', 'IIT Kharagpur, India'],
  ['Maya Ramanath', 'IIT Delhi, India'],
  ['Sudipta Saha', 'IIT Bhubaneswar, India'],
  ['Mithileysh Sathiyanarayanan', 'University of London, UK'],
  ['Ritwik Sinha', 'Adobe Research, India'],
  ['Jannik Stroetgen', 'MPI for Informatics, Germany'],
  ['Balaji Vasan Srinivasan', 'Adobe Research, India'],
  ['Andrew Yates', 'MPI for Informatics, Germany'],
];

const topics = [
  'Automatic discovery and analysis of Web based social networks',
  'Visualization of social networks',
  'Social networks and social intelligence',
  'Link topology and site hierarchy in social networks',
  'Security, privacy and trust computational analysis of social networks',
  'Web-based cooperative work',
  'Knowledge community formation and support',
  'Social network evolution and growth mechanisms',
  'Information diffusion and knowledge transfer in social networks',
  'Epidemics and rumours in social networks',
  'Community question-answering',
  'Anomaly and outlier detection in social network',
  'Multiplex and interdependent social networks',
  'Computational models and agent-based simulations of social networks',
  'High dimensional social network analytics',
  'Big data techniques for social networks',
  'Game-theoretic strategies for social networks',
  'Temporal and spatial social networks',
  'HCI for social media',
  'Credibility analysis of social media content',
];

export default function SocialNetworkingWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Social Networking Workshop</h1>

              <p className="text-center" style={{ padding: '20px', fontSize: '16px', color: '#64748b', background: '#f0f9ff', borderRadius: '12px', marginBottom: '20px' }}>
                Information for COMSNETS 2027 will be updated soon. Content below preserved from a previous edition.
              </p>

              <p>Social networking has changed the way people communicate. Online social networks (OSNs) support information and resource sharing, aid discovery of globally dispersed individuals, and even enable measurement of research impact. Several novel applications, diverse access interfaces, and a large economic system has developed around OSNs. Going past simple characterization of social media, the community has shown significant interest in addressing various research problems associated with the field. This workshop strives to bring together academia and industry to present developments on both research and engineering challenges associated with social networks.</p>

              <p>This year, we plan to have a special theme of <b>&quot;credibility analysis&quot;</b>. Social media content (or more generally, big data) has often been associated with the five V&apos;s: volume, velocity, variety, veracity and value. In recent years, there has been rising concern on the credibility, or the veracity aspect of the content spreading across social media. This is aggravated by the fact that recent publishing trends try to be the first source of information, leaving little time and resources for validating the truth or factuality of such content. Veracity directly affects the value of OSN content, while volume, velocity and variety make the problem even more challenging and necessitate the development of automated approaches for credibility assessment.</p>

              <h4>Topics of Interest:</h4>
              <p>The goal of this workshop is to facilitate cross-disciplinary discussions of relevance to social networking. Submissions should contain novel ideas and applications, and must be evaluated experimentally. We welcome contributions from researchers working on the following topics of interest, including, but not limited to:</p>
              <ul>
                {topics.map((t, i) => <li key={i}>{t}</li>)}
              </ul>

              <hr />

              <div className="bs-callout bs-callout-info">
                <div className="row">
                  <div className="col-md-3">
                    <a href="http://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer">
                      <img className="img-responsive" src="/assets/images/sponsors/technical/ieee_xplore.jpg" alt="IEEE Xplore" />
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>Accepted and presented papers will be published in the conference proceedings and <strong>submitted to IEEE Xplore</strong> as well as other Abstracting and Indexing (A&amp;I) databases.</p>
                  </div>
                </div>
              </div>

              <h3>Submission Guidelines</h3>
              <ul>
                <li>Submissions must not exceed <strong>6 pages</strong> (and not be less than 3 pages) in length including all figures, tables, and references.</li>
                <li>Submission must be in PDF format.</li>
                <li>Reviews will be single-blind: authors&apos; names and affiliations should be included in the submission.</li>
                <li>Submissions must follow the formatting guidelines as given on <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>.</li>
                <li>Submissions must be original work not under review at any other workshop, conference, or journal.</li>
              </ul>
              <p>At least one author of every accepted paper should attend the workshop to present the research.</p>
              <p>All deadlines are with respect to the <a href="https://www.timeanddate.com/time/zones/aoe" target="_blank" rel="noopener noreferrer">AoE (Anywhere on Earth)</a> time zone.</p>

              <h3>Submission Process</h3>
              <ul>
                <li>Create an account and login to <a href="https://www.edas.info/" target="_blank" rel="noopener noreferrer">EDAS</a>.</li>
                <li>Go to the EDAS new paper submission page for the workshop.</li>
                <li>Enter your paper&apos;s title and abstract, check the box to add yourself as an author, and click on submit.</li>
                <li>Add your co-authors and upload the paper pdf on the next screen.</li>
                <li>Papers not adhering to style and length guidelines, and not in US Letter Size PDF, will be rejected without review.</li>
              </ul>

              <h4>Important Deadlines</h4>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr><td><strong>Paper Submission</strong></td><td>TBD</td></tr>
                  <tr><td><strong>Notification of Acceptance</strong></td><td>TBD</td></tr>
                  <tr><td><strong>Camera-ready Submission</strong></td><td>TBD</td></tr>
                  <tr><td><strong>Workshop Date</strong></td><td>TBD</td></tr>
                </tbody>
              </table>

              <hr />

              <h4>Program Committee (Previous Edition):</h4>
              <ul className="text-left">
                {programCommittee.map(([name, aff], i) => (
                  <li key={i}><p><strong>{name}, </strong>{aff}</p></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

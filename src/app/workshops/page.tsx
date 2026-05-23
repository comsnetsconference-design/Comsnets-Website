import Link from 'next/link';

export const metadata = { title: 'Workshops | COMSNETS 2027' };

export default function WorkshopsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #2A4D75;
          letter-spacing: 1.2px;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #678DC2;
          display: inline-block;
          padding-bottom: 6px;
        }
        .workshop-card {
          background: #fff;
          border: 1px solid #e1e8f0;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .workshop-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
        }
        .workshop-card h3 {
          margin-top: 0;
          font-weight: 700;
        }
        .workshop-card h3 a {
          color: #1E4165;
          text-decoration: none;
        }
        .workshop-card h3 a:hover {
          color: #557AAB;
        }
      `}} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Workshops</h1>
              
              <p className="lead text-justify">COMSNETS 2027 features a series of co-located technical workshops. Focused workshops will be held on emerging topics to allow for a lively exchange of ideas. International business, academic, and government leaders will be invited to share their perspectives, complementing the main technical program.</p>
              
              <hr />
              
              <h3 className="section-title">Important Dates and Deadlines</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Paper Submission deadline</strong></td>
                    <td><span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance</strong></td>
                    <td><span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission</strong></td>
                    <td><span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Dates</strong></td>
                    <td><strong>January 2027</strong></td>
                  </tr>
                </tbody>
              </table>
              
              <hr />
              
              <h3 className="section-title">Active Workshops for 2027</h3>
              
              <div className="workshop-card">
                <h3><Link href="/minds_workshop">Machine Intelligence in Networked Data and Systems (MINDS)</Link></h3>
                <p className="text-justify">The adaptation of machine learning, artificial intelligence, and data analytics techniques in networked systems is set to transform and disrupt many areas of business and everyday human life. MINDS aims to bring together researchers and practitioners to explore and investigate this interworking of machine learning, big data analytics, and networked systems for various application domains.</p>
              </div>
              
              <div className="workshop-card">
                <h3><Link href="/cybersecurity_and_privacy_workshop">Cyber Security and Privacy Workshop (CSP)</Link></h3>
                <p className="text-justify">This workshop is intended to be a forum where researchers can meet and discuss the latest in cyber security and privacy topics as they apply to communications systems.</p>
              </div>
              
              <div className="workshop-card">
                <h3><Link href="/standards-driven_research">Standards-Driven Research (SDR)</Link></h3>
                <p className="text-justify">SDR Workshop is structured as an annual event for a multi-faceted global community organized around telecom standards (nominally oriented to 6G), facilitating interaction among academic, industry, and government participants.</p>
              </div>
              
              <div className="workshop-card">
                <h3><Link href="/ADVnet">Advances in Autonomous Driving and Vehicular Networks (ADVnet)</Link></h3>
                <p className="text-justify">This workshop focuses on intelligent transportation systems, connected and autonomous vehicles (CAVs), and multimodal sensing, control, safety, policy, and emerging paradigms in vehicular mobility.</p>
              </div>
              
              <div className="workshop-card">
                <h3><Link href="/SysAI">Systems for the Future of AI/ML (SysAI)</Link></h3>
                <p className="text-justify">SysAI focuses on the massive systems challenges of deploying, scaling, training, and serving modern AI/ML architectures and LLMs in an efficient, scalable, and responsible manner.</p>
              </div>
              
              <div className="workshop-card">
                <h3><Link href="/iart">Industry-Academia Research Track (I+ART)</Link></h3>
                <p className="text-justify">This track brings together top industry experts and researchers from academia to share their understanding of upcoming open problems and research-driven solutions in application-aware networks and next-generation communications systems.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

export const metadata = { title: 'Demos & Exhibits | COMSNETS 2027' };

const cfpStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.cfp-page {
    font-family: 'Inter', sans-serif;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0 60px;
    color: #1c2b33;
}

.cfp-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%);
    border-radius: 16px;
    padding: 48px 40px;
    margin-bottom: 36px;
    color: #fff;
    position: relative;
    overflow: hidden;
}

.cfp-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%);
    border-radius: 50%;
}

.cfp-hero h2 {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 800;
    margin: 0 0 12px;
    position: relative;
    color: #fff;
}

.cfp-hero .cfp-subtitle {
    font-size: 17px;
    opacity: 0.92;
    line-height: 1.7;
    max-width: 800px;
    position: relative;
}

.cfp-hero .cfp-subtitle strong {
    color: #7dd3fc;
}

.cfp-hero .cfp-travel-note {
    margin-top: 18px;
    padding: 14px 18px;
    background: rgba(255,255,255,0.1);
    border-left: 3px solid #7dd3fc;
    border-radius: 0 8px 8px 0;
    font-size: 14px;
    line-height: 1.6;
    position: relative;
}

.cfp-section {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 32px 36px;
    margin-bottom: 28px;
    transition: box-shadow 0.3s;
}

.cfp-section:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.cfp-section-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(18px, 2vw, 22px);
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid #e2e8f0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.cfp-section-title i {
    color: #0ea5e9;
    font-size: 20px;
}

.cfp-topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
}

.cfp-topic-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 22px 24px;
    transition: all 0.3s;
}

.cfp-topic-card:hover {
    border-color: #0ea5e9;
    background: #f0f9ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(14,165,233,0.1);
}

.cfp-topic-card h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0f172a;
    margin: 0 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cfp-topic-card h4 .topic-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border-radius: 6px;
    color: #fff;
    font-size: 13px;
    flex-shrink: 0;
}

.cfp-topic-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cfp-topic-card ul li {
    padding: 4px 0;
    padding-left: 16px;
    position: relative;
    font-size: 13.5px;
    color: #475569;
    line-height: 1.6;
}

.cfp-topic-card ul li::before {
    content: '\u203a';
    position: absolute;
    left: 0;
    color: #0ea5e9;
    font-weight: 700;
    font-size: 16px;
}

.cfp-dates-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid #e2e8f0;
}

.cfp-dates-table thead th {
    background: linear-gradient(135deg, #0f172a, #1e3a5f);
    color: #fff;
    padding: 14px 18px;
    font-family: 'Outfit', sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
}

.cfp-dates-table thead th:first-child {
    text-align: left;
}

.cfp-dates-table tbody td {
    padding: 13px 18px;
    font-size: 14px;
    color: #334155;
    border-bottom: 1px solid #f1f5f9;
    text-align: center;
    line-height: 1.5;
}

.cfp-dates-table tbody td:first-child {
    font-weight: 600;
    color: #0f172a;
    text-align: left;
    background: #f8fafc;
}

.cfp-dates-table tbody tr:hover td {
    background: #f0f9ff;
}

.cfp-dates-table tbody tr:last-child td {
    border-bottom: none;
}

.cfp-guidelines-list {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: guideline;
}

.cfp-guidelines-list li {
    padding: 14px 0 14px 44px;
    position: relative;
    font-size: 15px;
    color: #334155;
    line-height: 1.7;
    border-bottom: 1px solid #f1f5f9;
    counter-increment: guideline;
}

.cfp-guidelines-list li:last-child {
    border-bottom: none;
}

.cfp-guidelines-list li::before {
    content: counter(guideline);
    position: absolute;
    left: 0;
    top: 14px;
    width: 28px;
    height: 28px;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    font-weight: 700;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
}

.cfp-guidelines-list li strong {
    color: #0f172a;
}

.cfp-chair-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 18px 22px;
    margin-bottom: 12px;
}

.cfp-chair-card .chair-photo {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
    border: 2px solid #e2e8f0;
    background: #fff;
}

.cfp-chair-card .chair-info {
    flex: 1;
    min-width: 0;
}

.cfp-chair-card .chair-name {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    color: #0f172a;
    font-size: 16px;
    margin-bottom: 4px;
}

.cfp-chair-card .chair-affil {
    color: #475569;
    font-size: 14px;
    margin-bottom: 6px;
}

.cfp-chair-card .chair-email a {
    color: #0ea5e9;
    text-decoration: none;
    font-size: 14px;
}

.cfp-chair-card .chair-email a:hover {
    text-decoration: underline;
}

.cfp-callout {
    margin: 18px 0;
    padding: 16px 20px;
    background: #f0f9ff;
    border-left: 4px solid #0ea5e9;
    border-radius: 0 8px 8px 0;
    font-size: 14.5px;
    color: #0c4a6e;
    line-height: 1.7;
}

.cfp-submission-link {
    display: inline-block;
    padding: 12px 24px;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    color: #fff;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    font-size: 15px;
}

.cfp-submission-link.disabled {
    background: #94a3b8;
    cursor: not-allowed;
    pointer-events: none;
}
`;

const topicCategories = [
  {
    icon: 'fa-wifi',
    title: 'Wireless',
    items: [
      '5G/6G and wireless cellular networks',
      'Millimeter-Wave and Terahertz Technologies',
      'WLAN, RFID, and NFC',
      'Visible light/optical communications',
      'Heterogeneous networks (HetNets)',
      'Cognitive radio and white-space networking',
      'Localization and sensing',
      'Integrated Sensing and Communication',
      'AI for Wireless',
      'Energy harvesting',
    ],
  },
  {
    icon: 'fa-server',
    title: 'Data Center & Edge',
    items: [
      'Enterprise, data center, and storage-area networks',
      'Edge and cloud computing',
      'Edge intelligence and networking',
      'Distributed storage',
      'AI for/in Data Center and Edge',
    ],
  },
  {
    icon: 'fa-sitemap',
    title: 'Distributed Computing, Network Architecture & Management',
    items: [
      'AI for Network architecture, protocols, and science',
      'Traffic analysis and engineering',
      'Caching and content delivery systems',
      'Network management and operations',
      'SDN/NFV and network programmability',
      'Internet measurement and modeling',
      'Web applications and content distribution',
      'New advances in AI/Agentic AI for Distributed Computing',
      'Blockchain and Distributed Ledger',
    ],
  },
  {
    icon: 'fa-mobile',
    title: 'Mobility & IoE',
    items: [
      'Mobility Network Management',
      'Vehicular Networks',
      'Internet of Everything (IoE)',
      'Smart Grid communications',
      'CubeSats/Satellite networking',
    ],
  },
  {
    icon: 'fa-database',
    title: 'Dataset, Benchmarks & Testbeds',
    items: [
      'Studies on testbeds',
      'Large-scale experimental platforms',
      'Benchmarked datasets',
    ],
  },
  {
    icon: 'fa-shield',
    title: 'Security',
    items: [
      'Security in AI; AI for Security',
      'Network security and privacy',
      'Trusted computing',
      'Post Quantum Cryptography',
    ],
  },
];

export default function DemosExhibitsPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cfpStyles }} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="cfp-page">

          <div className="cfp-hero">
            <h2>Call for Demos &amp; Exhibits</h2>
            <p className="cfp-subtitle">
              The 19th International Conference on COMmunication Systems and NETworkS (<strong>COMSNETS</strong>) invites demos from industry, academia, and startups showcasing cutting-edge technologies and their applications. COMSNETS is a premier international conference dedicated to Networking and Communication Systems advances. <strong>COMSNETS 2027</strong> will be held in Bangalore, India, from <strong>January 5 - 9, 2027</strong>.
            </p>
            <div className="cfp-travel-note">
              <i className="fa fa-info-circle"></i>&nbsp; All accepted demos will be published in the conference proceedings. Please consult the Demos &amp; Exhibits co-chairs for any exceptions.
            </div>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-trophy"></i> Best Demo Awards</h3>
            <p>All accepted demos will be considered for the Best Demo Awards under different categories based on the quality of research and presentation, which a panel of experts will judge.</p>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-list-ul"></i> Topics of Interest</h3>
            <p style={{ color: '#475569', marginBottom: '18px' }}>The topics of interest include, but are not limited to, the following:</p>
            <div className="cfp-topics-grid">
              {topicCategories.map((cat) => (
                <div key={cat.title} className="cfp-topic-card">
                  <h4>
                    <span className="topic-icon"><i className={`fa ${cat.icon}`}></i></span> {cat.title}
                  </h4>
                  <ul>
                    {cat.items.map((it, i) => (<li key={i}>{it}</li>))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-edit"></i> Submission Guidelines</h3>
            <p>We invite the authors to submit their original work(s) in the following three categories:</p>
            <ol className="cfp-guidelines-list">
              <li><strong>Research Demos:</strong> The authors are requested to submit an extended abstract of up to <strong>four pages</strong>, including all figures and references, describing the demo and any special requirements. The formatting must adhere to the <a href="/call_for_papers">Main Conference Guidelines</a>. Submissions not adhering to the conference template will be rejected without review. Submissions must be in PDF format.</li>
              <li><strong>Product &amp; Startup Demos:</strong> The authors are requested to submit a proposal no longer than four pages that outlines the motivation, technologies, and use cases that will be demonstrated.</li>
              <li><strong>Exhibits:</strong> Sponsoring organizations looking to set up a booth at the conference will be required to submit the names of the organization and presenters for the complimentary registrations.</li>
            </ol>
            <div className="cfp-callout">
              At least one author of an accepted demo is expected to register for the conference and present the demo <em>in person</em>.
            </div>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-paper-plane"></i> Submission Link</h3>
            <p>Please submit the demos and exhibits via <strong>EDAS</strong>.</p>
            <span className="cfp-submission-link disabled">Submission Link Coming Soon</span>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-calendar"></i> Important Dates</h3>
            <table className="cfp-dates-table">
              <thead>
                <tr>
                  <th>Milestone</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Paper Submission deadline</td><td>10<sup>th</sup> November 2026, AoE</td></tr>
                <tr><td>Notification of Acceptance</td><td>5<sup>th</sup> December 2026, AoE</td></tr>
                <tr><td>Camera-ready Submission</td><td>15<sup>th</sup> December 2026, AoE</td></tr>
                <tr><td>Event Dates</td><td>TBD</td></tr>
              </tbody>
            </table>
          </div>

          <div className="cfp-section">
            <h3 className="cfp-section-title"><i className="fa fa-users"></i> Demos &amp; Exhibits Co-Chairs</h3>
            <div className="cfp-chair-card">
              <img className="chair-photo" src="/assets/images/committee_2023/alok_ranjan.jpg" alt="Alok Ranjan" />
              <div className="chair-info">
                <div className="chair-name">Alok Ranjan</div>
                <div className="chair-affil">Bosch, India</div>
                <div className="chair-email"><a href="mailto:alok_ranjan@ieee.org">alok_ranjan@ieee.org</a></div>
              </div>
            </div>
            <div className="cfp-chair-card">
              <img className="chair-photo" src="/assets/images/unnamed%20-%20Kaustubh%20Dhondge(1).png" alt="Kaustubh Dhondge" />
              <div className="chair-info">
                <div className="chair-name">Kaustubh Dhondge</div>
                <div className="chair-affil">IIIT Surat, India</div>
                <div className="chair-email"><a href="mailto:kaustubh.dhondge@iiitsurat.ac.in">kaustubh.dhondge@iiitsurat.ac.in</a></div>
              </div>
            </div>
          </div>

          <div className="cfp-section" style={{ textAlign: 'center', background: 'linear-gradient(135deg,#f0f9ff,#e0f2fe)', borderColor: '#bae6fd' }}>
            <p style={{ margin: 0, fontSize: '16px', color: '#0c4a6e', fontWeight: 600 }}>We look forward to your participation in the Demos &amp; Exhibits program at COMSNETS 2027!</p>
          </div>

        </div>
      </div>
    </>
  );
}

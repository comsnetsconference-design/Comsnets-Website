import React from 'react';

const cfpStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.cfp-page {
    font-family: 'Inter', sans-serif;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0 60px;
    color: #1c2b33;
}

/* Hero / Intro */
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

/* Download button */
.cfp-download-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    padding: 10px 22px;
    background: rgba(255,255,255,0.15);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius: 8px;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.3s;
    position: relative;
}

.cfp-download-btn:hover {
    background: rgba(255,255,255,0.25);
    color: #fff;
    text-decoration: none;
}

/* Section blocks */
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

/* Topics grid */
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
    content: '\\203A';
    position: absolute;
    left: 0;
    color: #0ea5e9;
    font-weight: 700;
    font-size: 16px;
}

/* Important dates table */
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

.date-highlight {
    color: #dc2626;
    font-weight: 600;
}

.date-strikethrough {
    text-decoration: line-through;
    color: #94a3b8;
    margin-right: 6px;
}

/* Submission guidelines */
.cfp-guidelines-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.cfp-guidelines-list li {
    padding: 12px 0;
    padding-left: 28px;
    position: relative;
    font-size: 15px;
    color: #334155;
    line-height: 1.7;
    border-bottom: 1px solid #f1f5f9;
}

.cfp-guidelines-list li:last-child {
    border-bottom: none;
}

.cfp-guidelines-list li::before {
    content: '\\f00c';
    font-family: FontAwesome;
    position: absolute;
    left: 0;
    top: 14px;
    color: #0ea5e9;
    font-size: 13px;
}

/* Conference highlights */
.cfp-highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 14px;
}

.cfp-highlight-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 16px;
    background: #f8fafc;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    font-size: 14px;
    font-weight: 500;
    color: #334155;
    transition: all 0.25s;
}

.cfp-highlight-item:hover {
    background: #f0f9ff;
    border-color: #0ea5e9;
}

.cfp-highlight-item i {
    color: #0ea5e9;
    font-size: 16px;
    width: 20px;
    text-align: center;
}

/* Workshops list */
.cfp-workshops-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 12px;
}

.cfp-workshop-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 18px;
    background: #f8fafc;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    font-size: 14px;
    color: #334155;
    transition: all 0.25s;
}

.cfp-workshop-item:hover {
    background: #f0f9ff;
    border-color: #0ea5e9;
}

.cfp-workshop-item .ws-abbr {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 50px;
    padding: 4px 8px;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    border-radius: 6px;
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.5px;
    flex-shrink: 0;
}

/* Double-blind notice */
.cfp-notice {
    background: #fffbeb;
    border: 1px solid #fde68a;
    border-radius: 10px;
    padding: 20px 24px;
    margin-top: 20px;
}

.cfp-notice h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #92400e;
    margin: 0 0 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cfp-notice p {
    font-size: 14px;
    color: #78350f;
    line-height: 1.7;
    margin: 0;
}

/* Experience papers note */
.cfp-experience-note {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-radius: 10px;
    padding: 20px 24px;
    margin-top: 20px;
}

.cfp-experience-note h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #166534;
    margin: 0 0 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.cfp-experience-note p {
    font-size: 14px;
    color: #14532d;
    line-height: 1.7;
    margin: 0;
}

/* EDAS link button */
.cfp-submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 32px;
    background: linear-gradient(135deg, #0ea5e9, #0284c7);
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    font-family: 'Outfit', sans-serif;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.3s;
    box-shadow: 0 4px 14px rgba(14,165,233,0.3);
    margin-top: 8px;
}

.cfp-submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(14,165,233,0.4);
    color: #fff;
    text-decoration: none;
}

/* Responsive */
@media (max-width: 768px) {
    .cfp-hero { padding: 32px 24px; }
    .cfp-section { padding: 24px 20px; }
    .cfp-topics-grid { grid-template-columns: 1fr; }
    .cfp-workshops-list { grid-template-columns: 1fr; }
    .cfp-dates-table { font-size: 12px; }
    .cfp-dates-table thead th,
    .cfp-dates-table tbody td { padding: 10px 8px; }
}
`;

export default function CallForPapersPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cfpStyles }} />

      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Call for Papers
              </h1>

              <div className="cfp-page">

                {/* Hero Section */}
                <div className="cfp-hero">
                  <h2><i className="fa fa-file-text-o"></i> &nbsp;Call for Papers &mdash; COMSNETS 2027</h2>
                  <div className="cfp-subtitle">
                    The <strong>19th International Conference on COMmunication Systems and NETworkS (COMSNETS)</strong>
                    {' '}will happen in <strong>Bengaluru, India</strong>, from <strong>January 5&ndash;9, 2027</strong>.
                    {' '}As a leading forum for the global Networking and Communication Systems community,
                    {' '}COMSNETS 2027 aims to foster groundbreaking research, facilitate the exchange of ideas
                    {' '}between academia, government, and industry, and promote advancements in the field.
                  </div>
                  <div className="cfp-travel-note">
                    <i className="fa fa-plane"></i> &nbsp;
                    COMSNETS provides generous travel grants to International student applicants who have an
                    accepted paper in the conference. Please see the <a href="/" style={{ color: '#7dd3fc', fontWeight: 600 }}>home page</a> for details.
                  </div>
                </div>

                {/* Topics of Interest */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-th-large"></i> Topics of Interest</h3>
                  <p style={{ fontSize: '15px', color: '#475569', marginBottom: '22px' }}>
                    The topics of interest include (but are not limited to) the following:
                  </p>
                  <div className="cfp-topics-grid">

                    {/* Wireless */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-wifi"></i></span> Wireless</h4>
                      <ul>
                        <li>5G/6G and wireless cellular networks</li>
                        <li>Millimeter-Wave and Terahertz Technologies</li>
                        <li>WLAN, RFID, and NFC</li>
                        <li>Visible light/optical communications</li>
                        <li>Heterogeneous networks (HetNets)</li>
                        <li>Cognitive radio and white-space networking</li>
                        <li>Localization and sensing</li>
                        <li>Integrated Sensing and Communication</li>
                        <li>AI for Wireless</li>
                        <li>Energy harvesting</li>
                      </ul>
                    </div>

                    {/* Data Center and Edge */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-server"></i></span> Data Center and Edge</h4>
                      <ul>
                        <li>Enterprise, data center, and storage-area networks</li>
                        <li>Edge and cloud computing</li>
                        <li>Edge intelligence and networking</li>
                        <li>Distributed storage</li>
                        <li>AI for/in Data Center and Edge</li>
                      </ul>
                    </div>

                    {/* Green Networking */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-leaf"></i></span> Green Networking</h4>
                      <ul>
                        <li>Economics of networks</li>
                        <li>Energy-efficient communications</li>
                        <li>Sustainable networking</li>
                        <li>AI for Green Networks</li>
                      </ul>
                    </div>

                    {/* Dataset, Benchmarks, and Testbeds */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-database"></i></span> Dataset, Benchmarks, and Testbeds</h4>
                      <ul>
                        <li>Studies on testbeds</li>
                        <li>Large-scale experimental platforms</li>
                        <li>Benchmarked datasets</li>
                      </ul>
                    </div>

                    {/* Distributed Computing, Network Architecture and Management */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-sitemap"></i></span> Distributed Computing, Network Architecture and Management</h4>
                      <ul>
                        <li>AI for Network architecture, protocols, and science</li>
                        <li>Traffic analysis and engineering</li>
                        <li>Caching and content delivery systems</li>
                        <li>Network management and operations</li>
                        <li>SDN/NFV and network programmability</li>
                        <li>Internet measurement and modeling</li>
                        <li>Web applications and content distribution</li>
                        <li>New advances in AI/Agentic AI for Distributed Computing</li>
                        <li>Blockchain and Distributed Ledger</li>
                      </ul>
                    </div>

                    {/* Mobility and IoE */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-car"></i></span> Mobility and IoE</h4>
                      <ul>
                        <li>Mobility Network Management</li>
                        <li>Vehicular Networks</li>
                        <li>Internet of Everything (IoE)</li>
                        <li>Smart Grid communications</li>
                        <li>CubeSats/Satellite networking</li>
                      </ul>
                    </div>

                    {/* Security */}
                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-shield"></i></span> Security</h4>
                      <ul>
                        <li>Security in AI; AI for Security</li>
                        <li>Network security and privacy</li>
                        <li>Trusted computing</li>
                        <li>Post Quantum Cryptography</li>
                      </ul>
                    </div>

                  </div>

                  {/* Experience Papers */}
                  <div className="cfp-experience-note">
                    <h4><i className="fa fa-flask"></i> Experience Papers</h4>
                    <p>
                      In addition to research papers, COMSNETS is also interested in <strong>Experience papers</strong>
                      {' '}that present the details and insights from real-life testbeds and/or large-scale experimental
                      {' '}platforms around the research topics mentioned above. Such papers should provide detailed
                      {' '}insights into (1) building the testbeds/platforms, (2) lessons learned and (3) implications
                      {' '}for further research in the relevant domain. Experience papers shall follow the same submission
                      {' '}process as the research papers with an <strong>&quot;Experience:&quot;</strong> prefix in the title.
                    </p>
                  </div>

                  {/* Double-Blind Review Policy */}
                  <div className="cfp-notice">
                    <h4><i className="fa fa-eye-slash"></i> Double-Blind Review Policy</h4>
                    <p>
                      The COMSNETS main conference and workshops will follow a <strong>double-blind review policy</strong>.
                      {' '}Information about the authors will not be shared with the reviewers during the review process.
                      {' '}The submitted paper should be anonymous and not have any reference to the authors&apos; names
                      {' '}and/or institution. Authors are welcome to release their paper in a non-peer-reviewed location
                      {' '}(such as a technical report by your institution or arXiv), but you should not broadcast information
                      {' '}about the publication widely. For example, do not post it to large mailing lists or social media
                      {' '}forums where PC members would easily encounter it, and do not do general press releases.
                      {' '}Authors are also welcome to talk about their work (as work-in-progress) at local institutions.
                      {' '}In either case, authors should be aware of PC members who might encounter the work and avoid
                      {' '}sharing the work in a way that a PC member would encounter it.
                    </p>
                  </div>
                </div>

                {/* Paper Submission */}
                <div className="cfp-section" style={{ textAlign: 'center' }}>
                  <h3 className="cfp-section-title" style={{ justifyContent: 'center' }}><i className="fa fa-upload"></i> Paper Submission</h3>
                  <p style={{ fontSize: '15px', color: '#475569', marginBottom: '18px' }}>
                    EDAS link for paper submission:
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>TBD</p>
                </div>

                {/* Conference Highlights */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-star"></i> Conference Highlights</h3>
                  <div className="cfp-highlights-grid">
                    <div className="cfp-highlight-item"><i className="fa fa-microphone"></i> Keynote, Invited, and Banquet Talks</div>
                    <div className="cfp-highlight-item"><i className="fa fa-comments"></i> Panel Discussions</div>
                    <div className="cfp-highlight-item"><i className="fa fa-desktop"></i> Demos and Exhibits</div>
                    <div className="cfp-highlight-item"><i className="fa fa-thumb-tack"></i> Poster Session</div>
                    <div className="cfp-highlight-item"><i className="fa fa-graduation-cap"></i> Graduate Forum</div>
                    <div className="cfp-highlight-item"><i className="fa fa-wrench"></i> Co-located Workshops</div>
                    <div className="cfp-highlight-item"><i className="fa fa-female"></i> Women in Engineering</div>
                  </div>
                </div>

                {/* Workshops */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-puzzle-piece"></i> Workshops</h3>
                  <div className="cfp-workshops-list">
                    <div className="cfp-workshop-item"><span className="ws-abbr">MINDS</span> Machine Intelligence in Networked Data and Systems</div>
                    <div className="cfp-workshop-item"><span className="ws-abbr">IIGW</span> Internet Intelligence and Governance</div>
                    <div className="cfp-workshop-item"><span className="ws-abbr">SDR</span> Standards-driven Research</div>
                    <div className="cfp-workshop-item"><span className="ws-abbr">SysAI</span> Systems for the Future of AI/ML</div>
                    <div className="cfp-workshop-item"><span className="ws-abbr">CSP</span> Cyber Security and Privacy</div>
                  </div>
                </div>

                {/* Important Dates */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-calendar"></i> Important Dates</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                    <em>Earlier submission is encouraged &mdash; All deadlines are firm.</em>
                  </p>
                  <table className="cfp-dates-table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Main Conference</th>
                        <th>Posters</th>
                        <th>Demos &amp; Exhibits</th>
                        <th>Workshops</th>
                        <th>Graduate Forum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Paper Submission</td>
                        <td className="date-highlight">31 Aug 2026</td>
                        <td>12 Nov 2026</td>
                        <td>10 Nov 2026</td>
                        <td>15 Oct 2026</td>
                        <td>8 Nov 2026</td>
                      </tr>
                      <tr>
                        <td>Notification of Acceptance</td>
                        <td>5 Nov 2026</td>
                        <td>5 Dec 2026</td>
                        <td>5 Dec 2026</td>
                        <td>15 Nov 2026</td>
                        <td>6 Dec 2026</td>
                      </tr>
                      <tr>
                        <td>Camera-Ready Submission</td>
                        <td>15 Nov 2026</td>
                        <td>15 Dec 2026</td>
                        <td>15 Dec 2026</td>
                        <td>30 Nov 2026</td>
                        <td>16 Dec 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Paper Submission Guidelines */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-list-alt"></i> Paper Submission Guidelines</h3>
                  <ul className="cfp-guidelines-list">
                    <li><strong>Font Embedding:</strong> The recommended format must be used. Please use the Word / LaTeX templates given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" style={{ color: '#0ea5e9', fontWeight: 600 }}>IEEE Website</a>.</li>
                    <li><strong>Abstract Registration:</strong> Timely registration of abstracts is mandatory, with insufficient abstracts leading to submission rejection.</li>
                    <li><strong>Full Paper Submission:</strong> Submissions must adhere to an <strong>8-page limit</strong>, single-spaced, which includes figures and tables. Additional space is permitted for references.</li>
                    <li><strong>Format:</strong> Submissions must be in <strong>PDF format</strong>, following the provided templates and guidelines. All papers should be submitted through the <strong>EDAS</strong> system. Non-compliant submissions will be outright rejected.</li>
                    <li><strong>Supplementary Material:</strong> While authors may include supplementary material with their submissions, it is not mandatory for PC members to review it. The main submission should be comprehensive on its own.</li>
                  </ul>
                </div>

                {/* Previous CFP */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px 26px', marginTop: '12px' }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>Previous Call for Papers</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                    View the Call for Papers from <a href="/archive/2026/call_for_papers.php" style={{ color: '#0ea5e9', fontWeight: 600 }}>COMSNETS 2026</a> and previous years.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

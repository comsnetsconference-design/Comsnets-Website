import React from 'react';

const gradStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.cfp-page { font-family: 'Inter', sans-serif; padding: 0 0 60px; color: #1c2b33; }

.cfp-hero { background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%); border-radius: 16px; padding: 48px 40px; margin-bottom: 36px; color: #fff; position: relative; overflow: hidden; }
.cfp-hero::before { content: ''; position: absolute; top: -50%; right: -20%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%); border-radius: 50%; }
.cfp-hero h2 { font-family: 'Outfit', sans-serif; font-size: clamp(24px, 3vw, 32px); font-weight: 800; margin: 0 0 12px; position: relative; color: #fff; }
.cfp-hero .cfp-subtitle { font-size: 17px; opacity: 0.92; line-height: 1.7; max-width: 800px; position: relative; }
.cfp-hero .cfp-subtitle strong { color: #7dd3fc; }
.cfp-hero .cfp-travel-note { margin-top: 18px; padding: 14px 18px; background: rgba(255,255,255,0.1); border-left: 3px solid #7dd3fc; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; position: relative; }

.cfp-section { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 32px 36px; margin-bottom: 28px; transition: box-shadow 0.3s; }
.cfp-section:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
.cfp-section-title { font-family: 'Outfit', sans-serif; font-size: clamp(18px, 2vw, 22px); font-weight: 700; color: #0f172a; margin: 0 0 20px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0; display: flex; align-items: center; gap: 10px; }
.cfp-section-title i { color: #0ea5e9; font-size: 20px; }

.cfp-topics-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.cfp-topic-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px 24px; transition: all 0.3s; }
.cfp-topic-card:hover { border-color: #0ea5e9; background: #f0f9ff; transform: translateY(-2px); box-shadow: 0 4px 16px rgba(14,165,233,0.1); }
.cfp-topic-card h4 { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 10px; display: flex; align-items: center; gap: 8px; }
.cfp-topic-card h4 .topic-icon { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: linear-gradient(135deg, #0ea5e9, #0284c7); border-radius: 6px; color: #fff; font-size: 13px; flex-shrink: 0; }
.cfp-topic-card ul { list-style: none; padding: 0; margin: 0; }
.cfp-topic-card ul li { padding: 4px 0; padding-left: 16px; position: relative; font-size: 13.5px; color: #475569; line-height: 1.6; }
.cfp-topic-card ul li::before { content: '\\203A'; position: absolute; left: 0; color: #0ea5e9; font-weight: 700; font-size: 16px; }

.cfp-dates-table { width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
.cfp-dates-table thead th { background: linear-gradient(135deg, #0f172a, #1e3a5f); color: #fff; padding: 14px 18px; font-family: 'Outfit', sans-serif; font-size: 13px; font-weight: 700; text-align: center; letter-spacing: 0.5px; text-transform: uppercase; }
.cfp-dates-table thead th:first-child { text-align: left; }
.cfp-dates-table tbody td { padding: 13px 18px; font-size: 14px; color: #334155; border-bottom: 1px solid #f1f5f9; text-align: center; line-height: 1.5; }
.cfp-dates-table tbody td:first-child { font-weight: 600; color: #0f172a; text-align: left; background: #f8fafc; }
.cfp-dates-table tbody tr:hover td { background: #f0f9ff; }
.cfp-dates-table tbody tr:last-child td { border-bottom: none; }
.date-highlight { color: #dc2626; font-weight: 600; }

.cfp-guidelines-list { list-style: none; padding: 0; margin: 0; }
.cfp-guidelines-list li { padding: 12px 0; padding-left: 28px; position: relative; font-size: 15px; color: #334155; line-height: 1.7; border-bottom: 1px solid #f1f5f9; }
.cfp-guidelines-list li:last-child { border-bottom: none; }
.cfp-guidelines-list li::before { content: '\\f00c'; font-family: FontAwesome; position: absolute; left: 0; top: 14px; color: #0ea5e9; font-size: 13px; }

.cfp-notice { background: #fffbeb; border: 1px solid #fde68a; border-radius: 10px; padding: 20px 24px; margin-top: 20px; }
.cfp-notice h4 { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; color: #92400e; margin: 0 0 8px; display: flex; align-items: center; gap: 8px; }
.cfp-notice p { font-size: 14px; color: #78350f; line-height: 1.7; margin: 0; }

.cfp-award-note { background: #fef3c7; border: 1px solid #fcd34d; border-radius: 10px; padding: 18px 22px; margin-top: 18px; }
.cfp-award-note h4 { font-family: 'Outfit', sans-serif; font-size: 15px; font-weight: 700; color: #92400e; margin: 0 0 6px; display: flex; align-items: center; gap: 8px; }
.cfp-award-note p { font-size: 14px; color: #78350f; line-height: 1.6; margin: 0; }

.cfp-chairs-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px; margin-top: 18px; }
.cfp-chair-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 22px; text-align: center; transition: all 0.25s; }
.cfp-chair-card:hover { border-color: #0ea5e9; background: #f0f9ff; }
.cfp-chair-card .chair-photo { width: 96px; height: 96px; margin: 0 auto 14px; border-radius: 50%; background: linear-gradient(135deg, #e0f2fe, #bae6fd); display: flex; align-items: center; justify-content: center; color: #0284c7; font-size: 44px; overflow: hidden; }
.cfp-chair-card .chair-photo img { width: 100%; height: 100%; object-fit: cover; }
.cfp-chair-card h4 { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 700; color: #0f172a; margin: 0 0 4px; }
.cfp-chair-card p { font-size: 13.5px; color: #64748b; margin: 0; line-height: 1.5; }

@media (max-width: 768px) {
    .cfp-hero { padding: 32px 24px; }
    .cfp-section { padding: 24px 20px; }
    .cfp-topics-grid { grid-template-columns: 1fr; }
    .cfp-dates-table { font-size: 12px; }
    .cfp-dates-table thead th, .cfp-dates-table tbody td { padding: 10px 8px; }
}
`;

export const metadata = { title: 'Graduate Forum | COMSNETS 2027' };

export default function GraduateForumPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradStyles }} />

      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                Graduate Forum
              </h1>

              <div className="cfp-page">

                {/* Hero Section */}
                <div className="cfp-hero">
                  <h2><i className="fa fa-graduation-cap"></i> &nbsp;COMSNETS 2027 Graduate Forum</h2>
                  <div className="cfp-subtitle">
                    The COMSNETS 2027 Graduate Forum presents a unique opportunity for open discussions and feedback from reviewers (and judges) for students enrolled in graduate programs (<strong>Undergraduate, Postgraduate, and Doctoral Researchers</strong>) on their research &mdash; including early-stage research works &mdash; in areas related to communications, systems, and networking. In addition to useful feedback on their current research and possible future research directions, it offers an opportunity to interact with eminent researchers from both academia and industry. All submissions will receive detailed reviews from the review committee.
                  </div>
                  <div className="cfp-travel-note">
                    <i className="fa fa-plane"></i> &nbsp;
                    A partial travel grant will be available for selected Graduate Forum participants. Applicants must apply for the travel grant separately &mdash; see the <a href="/travel_grants" style={{ color: '#7dd3fc', fontWeight: 600 }}>Travel Grants</a> page for details.
                  </div>
                </div>

                {/* Publication, Presentation & Best Paper Award */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-trophy"></i> Publication, Presentation &amp; Best Paper Award</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                    Accepted submissions will be published in the conference proceedings (unless the author requires otherwise). At least one of the authors of an accepted paper must register for the conference and present the paper at the dedicated Graduate Forum session through a formal presentation.
                  </p>
                  <div className="cfp-award-note">
                    <h4><i className="fa fa-star"></i> Best Graduate Forum Paper Award</h4>
                    <p>A &ldquo;Best Graduate Forum Paper Award&rdquo; will be given based on the presentations, judged by a panel.</p>
                  </div>
                </div>

                {/* Who can Submit */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-user"></i> Who can Submit</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '12px' }}>
                    To be eligible to submit your work to the Graduate Forum, you must be registered as a <strong>Ph.D., Master&apos;s, or Bachelor&apos;s</strong> student at the time of submission.
                  </p>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                    The topics of interest are in line with the main conference program. Submissions must include the author&apos;s name, affiliations, and email addresses. We will follow a <strong>single-blind</strong> review policy.
                  </p>
                </div>

                {/* Topics of Interest */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-th-large"></i> Topics of Interest</h3>
                  <p style={{ fontSize: '15px', color: '#475569', marginBottom: '22px' }}>
                    The topics of interest include (but are not limited to) the following:
                  </p>
                  <div className="cfp-topics-grid">

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-wifi"></i></span> Wireless</h4>
                      <ul>
                        <li>5G and wireless broadband networks</li>
                        <li>Technologies for 6&ndash;100 GHz spectrum</li>
                        <li>WLAN, RFID, and NFC</li>
                        <li>Visible light communications</li>
                        <li>Heterogeneous networks (HetNets)</li>
                        <li>Cognitive radio and white-space networking</li>
                        <li>CubeSats / satellite networking</li>
                        <li>Long-range / low-power wide-area networking</li>
                        <li>Connected unmanned aerial / terrestrial / underwater systems</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-server"></i></span> Data Center &amp; Edge</h4>
                      <ul>
                        <li>Enterprise, data center, and storage-area networks</li>
                        <li>Edge &amp; cloud computing/networking</li>
                        <li>Multimedia networking</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-leaf"></i></span> Green Networking</h4>
                      <ul>
                        <li>Economics of networks</li>
                        <li>Energy-efficient communications</li>
                        <li>Sustainable networking</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-flask"></i></span> Testbeds</h4>
                      <ul>
                        <li>Studies on testbeds and large-scale experimental platforms</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-sitemap"></i></span> Architecture</h4>
                      <ul>
                        <li>Network architecture, protocols &amp; science</li>
                        <li>Traffic analysis and engineering</li>
                        <li>Caching and content-delivery systems</li>
                        <li>Information / Content-centric networks (ICN)</li>
                        <li>Network management and operations</li>
                        <li>SDN/NFV and network programmability</li>
                        <li>Internet measurement and modeling</li>
                        <li>Big data and machine learning for networks</li>
                        <li>Web applications and content distribution</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-car"></i></span> Mobility &amp; IoT</h4>
                      <ul>
                        <li>Mobility and location management</li>
                        <li>Mobile sensing</li>
                        <li>Vehicular networks and intelligent transportation</li>
                        <li>Internet of Things (IoT)</li>
                        <li>Smart Grid communications and networking</li>
                        <li>Machine Learning and AI in Networking &amp; IoT</li>
                        <li>Crowdsourcing</li>
                      </ul>
                    </div>

                    <div className="cfp-topic-card">
                      <h4><span className="topic-icon"><i className="fa fa-shield"></i></span> Blockchain &amp; Security</h4>
                      <ul>
                        <li>Network security and privacy</li>
                        <li>Trusted computing</li>
                        <li>Blockchain and distributed ledger</li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* What to Submit */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-file-text-o"></i> What to Submit</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                    Authors should submit a <strong>single PDF file</strong> containing:
                  </p>
                  <ul className="cfp-guidelines-list">
                    <li><strong>One-page resume</strong> with current position, educational details, broad area of research, research experiences, and publications (if any).</li>
                    <li><strong>Four-page extended abstract</strong> clearly describing the problem statement, relevant state-of-the-art, proposed solution approach, preliminary results, and future work. Submissions must be in English, formatted using the IEEE two-column template (see the main conference page for details), and must comply with all COMSNETS submission guidelines.</li>
                  </ul>
                  <div className="cfp-notice">
                    <h4><i className="fa fa-exclamation-triangle"></i> Page Limit (strictly enforced)</h4>
                    <p>
                      Each submission must be <strong>exactly four (4) pages</strong> for the main content, plus one (1) additional page allowed for references only and one (1) page for the resume. Submissions with fewer or more pages will not be accepted. This <strong>4 + 1 + 1</strong> format is strictly enforced. Papers must be exactly 4 pages long, complying with IEEE policy &mdash; non-adherence to the page limit will disqualify the submission from the review process.
                    </p>
                  </div>
                </div>

                {/* Paper Submission */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-upload"></i> Paper Submission (For Review)</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: '0 0 16px' }}>
                    Merge the resume, four-page abstract, and one-page references into a single PDF and upload it to the submission portal. Submissions not formatted as described above will be rejected without review.
                  </p>
                  <p style={{ fontSize: '15px', color: '#475569', margin: 0 }}>
                    <strong>Submission Link:</strong> <span style={{ color: '#94a3b8', fontWeight: 700 }}>TBA</span>
                  </p>
                </div>

                {/* Camera-Ready */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-check-circle"></i> Camera-Ready Submission (Upon Acceptance)</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                    Upon acceptance, authors will be required to submit only the four-page extended abstract and the one-page bibliography/references for the final camera-ready version. Accepted papers must be presented at the conference. The presentation should consist of around 5&ndash;6 slides for a <strong>10-minute talk</strong>, including a Q&amp;A session with the audience.
                  </p>
                </div>

                {/* Important Dates */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-calendar"></i> Important Dates</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                    <em>All deadlines are AoE (Anywhere on Earth).</em>
                  </p>
                  <table className="cfp-dates-table">
                    <thead>
                      <tr>
                        <th>Milestone</th>
                        <th>Deadline</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Paper Submission (final)</td>
                        <td className="date-highlight">9 November 2026</td>
                      </tr>
                      <tr>
                        <td>Notification of Acceptance</td>
                        <td>7 December 2026</td>
                      </tr>
                      <tr>
                        <td>Camera-Ready Submission</td>
                        <td>14 December 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* TPC */}
                <div className="cfp-section" style={{ textAlign: 'center' }}>
                  <h3 className="cfp-section-title" style={{ justifyContent: 'center' }}><i className="fa fa-users"></i> Technical Program Committee</h3>
                  <p style={{ fontSize: '18px', fontWeight: 700, color: '#94a3b8', margin: 0 }}>TBA</p>
                </div>

                {/* Contact + Co-Chairs */}
                <div className="cfp-section">
                  <h3 className="cfp-section-title"><i className="fa fa-envelope"></i> Contact &amp; Graduate Forum Co-Chairs</h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7, marginBottom: '14px' }}>
                    For any queries, please contact us at <a href="mailto:comsnets.gradforum@gmail.com" style={{ color: '#0ea5e9', fontWeight: 600 }}>comsnets.gradforum@gmail.com</a>.
                  </p>
                  <div className="cfp-chairs-grid">
                    <div className="cfp-chair-card">
                      <div className="chair-photo"><img src="/assets/images/Committee_2027/Debasree.jpg" alt="Debasree Das" /></div>
                      <h4>Debasree Das</h4>
                      <p>University of Bamberg<br/>Germany</p>
                    </div>
                    <div className="cfp-chair-card">
                      <div className="chair-photo"><i className="fa fa-user-circle"></i></div>
                      <h4>Tanya Shreedhar</h4>
                      <p>TU Delft<br/>Netherlands</p>
                    </div>
                  </div>
                </div>

                {/* Previous Forums archive link */}
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px 26px', marginTop: '12px' }}>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>Previous Graduate Forums</h3>
                  <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>
                    View the Graduate Forum from <a href="/archive/2026/graduate_forum" style={{ color: '#0ea5e9', fontWeight: 600 }}>COMSNETS 2026</a> and previous years in the <a href="/previous_comsnets" style={{ color: '#0ea5e9', fontWeight: 600 }}>archive</a>.
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

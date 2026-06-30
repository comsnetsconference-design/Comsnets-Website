import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Symposium on Quantum Science and Technology (SQST) | COMSNETS 2027',
  description: 'International Year of Quantum Science & Technology (IYQ) 2025 - COMSNETS 2027 Symposium',
};

// Styles ported from /demos_exhibits with the prefix renamed (cfp-* -> sqst-*) so
// the two pages can't collide. Keep the palette and font imports in sync if either
// page is updated later.
const sqstStyles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Inter:wght@400;500;600&display=swap');

.sqst-page {
    font-family: 'Inter', sans-serif;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 0 60px;
    color: #1c2b33;
}

.sqst-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0ea5e9 100%);
    border-radius: 16px;
    padding: 48px 40px;
    margin-bottom: 36px;
    color: #fff;
    position: relative;
    overflow: hidden;
}

.sqst-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(14,165,233,0.25) 0%, transparent 70%);
    border-radius: 50%;
}

.sqst-hero h2 {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(24px, 3vw, 32px);
    font-weight: 800;
    margin: 0 0 12px;
    position: relative;
    color: #fff;
}

.sqst-hero .sqst-subtitle {
    font-size: 17px;
    opacity: 0.92;
    line-height: 1.7;
    max-width: 800px;
    position: relative;
}

.sqst-hero .sqst-subtitle strong {
    color: #7dd3fc;
}

.sqst-hero .sqst-travel-note {
    margin-top: 18px;
    padding: 14px 18px;
    background: rgba(255,255,255,0.1);
    border-left: 3px solid #7dd3fc;
    border-radius: 0 8px 8px 0;
    font-size: 14px;
    line-height: 1.6;
    position: relative;
}

.sqst-section {
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    padding: 32px 36px;
    margin-bottom: 28px;
    transition: box-shadow 0.3s;
}

.sqst-section:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.sqst-section p {
    color: #334155;
    line-height: 1.75;
    margin: 0 0 14px;
    font-size: 15px;
}

.sqst-section p:last-child {
    margin-bottom: 0;
}

.sqst-section-title {
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

.sqst-section-title i {
    color: #0ea5e9;
    font-size: 20px;
}

.sqst-section-subtitle {
    font-size: 13.5px;
    color: #64748b;
    font-style: italic;
    margin: -12px 0 18px;
}

.sqst-topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
}

.sqst-topic-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 18px 20px;
    transition: all 0.3s;
}

.sqst-topic-card:hover {
    border-color: #0ea5e9;
    background: #f0f9ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(14,165,233,0.1);
}

.sqst-topic-card h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #0f172a;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;
}

.sqst-topic-card h4 .topic-icon {
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

.sqst-callout {
    margin: 0;
    padding: 16px 20px;
    background: #f0f9ff;
    border-left: 4px solid #0ea5e9;
    border-radius: 0 8px 8px 0;
    font-size: 14.5px;
    color: #0c4a6e;
    line-height: 1.7;
}

.sqst-pills-row {
    list-style: none;
    padding: 0;
    margin: 6px 0 14px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.sqst-pill {
    background: #f0f9ff;
    border: 1px solid #bae6fd;
    border-radius: 9999px;
    padding: 6px 16px;
    font-size: 13.5px;
    font-weight: 600;
    color: #0284c7;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.sqst-pill i {
    color: #0ea5e9;
}

.sqst-callout strong {
    color: #075985;
}

.sqst-member-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-items: center;
    column-gap: 12px;
    row-gap: 24px;
    margin-top: 8px;
}

@media (min-width: 640px) {
    .sqst-member-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 768px) {
    .sqst-member-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}

.sqst-member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 180px;
}

.sqst-member-photo,
.sqst-member-placeholder {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #e2e8f0;
    margin-bottom: 10px;
}

.sqst-member-photo {
    object-fit: cover;
    object-position: top center;
    transition: box-shadow 0.2s, border-color 0.2s;
}

.sqst-member-card:hover .sqst-member-photo {
    border-color: #0ea5e9;
    box-shadow: 0 4px 14px rgba(14,165,233,0.18);
}

.sqst-member-placeholder {
    background: linear-gradient(135deg, #475569, #1e293b);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 17px;
    user-select: none;
}

.sqst-member-name {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    color: #0f172a;
    font-size: 14px;
    line-height: 1.3;
    margin: 0 0 4px;
}

.sqst-member-affil {
    color: #64748b;
    font-size: 12.5px;
    line-height: 1.45;
    margin: 0;
}
`;

type Member = { name: string; affiliation: string; image: string | null };

const PHOTO_DIR = '/images/SQST_2027';

const coChairs: Member[] = [
  { name: 'Sourav Chatterjee', affiliation: 'TCS Research, India', image: `${PHOTO_DIR}/sourav-chatterjee.webp` },
  { name: 'Raktim Halder', affiliation: 'IIT Bhubaneswar, India', image: `${PHOTO_DIR}/raktim-halder.webp` },
  { name: 'Rajiv Krishnakumar', affiliation: 'QuantumBasel, Switzerland', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2Frajiv.jpeg?alt=media&token=caa34a27-c7a7-4d2d-a1cb-5288f361bd55' },
  { name: 'Ritajit Majumdar', affiliation: 'IBM Research, India', image: `${PHOTO_DIR}/ritajit-majumdar.webp` },
  { name: 'Shashank Gupta', affiliation: 'IIT Indore, India', image: `${PHOTO_DIR}/shashank-gupta.webp` },
  { name: 'Aritra Sarkar', affiliation: 'Fujitsu Research, India', image: `${PHOTO_DIR}/aritra-sarkar.webp` },
  { name: 'Rahul Sawant', affiliation: 'IIT Madras, India', image: `${PHOTO_DIR}/rahul-sawant.webp` },
];

const localOC: Member[] = [
  { name: 'Prasant Misra', affiliation: 'TCS Research, India', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2Fprashant.png?alt=media&token=251e875c-1cee-4ba8-a42a-6cdfbcb7b2f8' },
];

const steering: Member[] = [
  { name: 'Kishore Bharti', affiliation: 'University of Maryland, USA', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2FKishore.jpeg?alt=media&token=19a7e1b4-64dd-44ce-9310-d574b4c2c16c' },
  { name: 'M Girish Chandra', affiliation: 'TCS Research, India', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2FM-Girish.jpeg?alt=media&token=b51dbbe0-cc3d-4ec8-a2a6-3fc669240abe' },
  { name: 'Nitin Jain', affiliation: 'Technical University of Denmark, Denmark', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2Fnitin.jpeg?alt=media&token=390fc3f4-c049-4e8b-9f35-e22bab92f01f' },
  { name: 'Chiranjib Mukhopadhyay', affiliation: 'University of Electronic Sciences and Technology of China, China', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2Fchiranjib.jpeg?alt=media&token=ddac9645-bc82-4dcd-a0a4-d2e19a08bd0f' },
  { name: 'Kaushik Seshadreesan', affiliation: 'University of Pittsburgh, USA', image: 'https://firebasestorage.googleapis.com/v0/b/comsnets-website.firebasestorage.app/o/committee%2FKaushik.jpg?alt=media&token=2c41e716-2c6d-4034-92c3-890c41e68035' },
];

const quantumDrivers = [
  { icon: 'fa-rss', label: 'Sensing' },
  { icon: 'fa-exchange', label: 'Communications' },
  { icon: 'fa-microchip', label: 'Computing' },
  { icon: 'fa-cubes', label: 'Materials' },
];

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
}

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="sqst-member-card">
      {m.image ? (
        <img src={m.image} alt={m.name} loading="lazy" className="sqst-member-photo" />
      ) : (
        <div aria-label={`${m.name} (photo pending)`} className="sqst-member-placeholder">
          {initials(m.name)}
        </div>
      )}
      <p className="sqst-member-name">{m.name}</p>
      <p className="sqst-member-affil">{m.affiliation}</p>
    </div>
  );
}

function MemberGrid({ members }: { members: Member[] }) {
  return (
    <div className="sqst-member-grid">
      {members.map((m) => (
        <MemberCard key={m.name} m={m} />
      ))}
    </div>
  );
}

export default function SQST() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: sqstStyles }} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="sqst-page">

          {/* Hero */}
          <div className="sqst-hero">
            <h2>Symposium on Quantum Science and Technology (SQST)</h2>
            <p className="sqst-subtitle">
              The year 2025, designated as the <strong>International Year of Quantum Science and Technology (IYQ)</strong>,
              underscores the growing importance of quantum technologies as transformative emerging fields.
            </p>
            <div className="sqst-travel-note">
              <i className="fa fa-calendar"></i>&nbsp; Co-located with <strong>COMSNETS 2027</strong> &bull; 9<sup>th</sup> &amp; 10<sup>th</sup> January 2027
            </div>
          </div>

          {/* About */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-info-circle"></i> About the Symposium</h3>
            <p>
              After a highly successful launch of QCom(P) and WQT, the two international quantum workshops at COMSNETS 2024 and 2025,
              respectively, and an international symposium celebrating the quantum century (SCQC) at AI-ML Systems&apos; 25 conference,
              we are now gearing up to create a bigger, better, and broader impact by organising an international 2-day symposium
              under the COMSNETS association.
            </p>
            <p>
              Hence, going forward, we have expanded our organizing team to present this special event, which will be co-located
              with COMSNETS 2027 and will encompass all four major drivers of quantum technology as of today:
            </p>
            <ul className="sqst-pills-row">
              {quantumDrivers.map((d) => (
                <li key={d.label} className="sqst-pill">
                  <i className={`fa ${d.icon}`}></i> {d.label}
                </li>
              ))}
            </ul>
            <p>&mdash; besides covering foundational and fundamental research directions.</p>
          </div>

          {/* NQM */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-flag"></i> National Quantum Mission (NQM)</h3>
            <div className="sqst-callout">
              Given the developments happening in India through the National Quantum Mission (NQM), this symposium aims to also
              present the vibrant atmosphere of the Indian Quantum Ecosystem to our audience, including the recent launch of
              NQM-supported <strong>Hubs</strong> and <strong>Startups</strong>.
            </div>
          </div>

          {/* Goal */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-users"></i> Goal &amp; Audience</h3>
            <p>
              The goal of this symposium is to bring together quantum researchers, scientists, engineers, entrepreneurs, developers,
              students, practitioners, educators, and programmers working in this field. In this context, the symposium also intends
              to include the topic of understanding what it takes to bring more of the technology from an academic setting to
              real-world applications based on the industry requirements and technology development roadmap.
            </p>
          </div>

          {/* Co-Chairs */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-id-badge"></i> Co-Chairs</h3>
            <MemberGrid members={coChairs} />
          </div>

          {/* Local Organizing Committee */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-map-marker"></i> Local Organizing Committee</h3>
            <MemberGrid members={localOC} />
          </div>

          {/* Steering / Advisory Committee */}
          <div className="sqst-section">
            <h3 className="sqst-section-title"><i className="fa fa-compass"></i> Steering / Advisory Committee</h3>
            <p className="sqst-section-subtitle">Previously the WQT co-chairs</p>
            <MemberGrid members={steering} />
          </div>

        </div>
      </div>
    </>
  );
}

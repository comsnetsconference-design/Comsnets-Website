const styles = `
/* --- Scoped Google Fonts --- */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;800;900&family=Inter:wght@400;500;600&display=swap');

/* --- Reset & Wrapper --- */
.hp-reg-wrapper {
    font-family: 'Inter', sans-serif;
    color: #0f172a;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px 60px;
    box-sizing: border-box;
}
.hp-reg-wrapper * {
    box-sizing: border-box;
}

/* --- Rounded Hero Banner --- */
.reg-banner {
    background: linear-gradient(135deg, #123456, #2a5298);
    border-radius: 16px;
    padding: 70px 20px 100px;
    text-align: center;
    margin-top: 20px;
    box-shadow: 0 10px 30px rgba(18, 52, 86, 0.15);
}
.reg-banner h1.reg-title {
    color: #ffffff !important;
    font-family: 'Outfit', sans-serif !important;
    font-size: clamp(32px, 4vw, 48px);
    font-weight: 800;
    margin: 0;
    text-transform: none;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

/* --- Action Grid (Overlapping Banner) --- */
.reg-content-container {
    max-width: 1060px;
    margin: 0 auto;
}
.action-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: -50px;
    margin-bottom: 40px;
    position: relative;
    z-index: 10;
}
.action-card {
    background: #ffffff;
    padding: 30px 20px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
    text-decoration: none !important;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #e1e8f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.action-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 35px rgba(0,0,0,0.12);
}
.action-card.disabled {
    cursor: default;
}
.action-card.disabled:hover {
    transform: none;
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
}
.action-card img {
    width: 56px;
    height: auto;
    margin-bottom: 16px;
    opacity: 0.9;
}
.action-card.disabled img {
    opacity: 0.5;
    filter: grayscale(100%);
}
.action-card strong {
    color: #123456 !important;
    font-family: 'Outfit', sans-serif;
    font-size: 18px;
    font-weight: 600;
}
.status-badge {
    display: inline-block;
    margin-top: 8px;
    padding: 4px 10px;
    background: #f6f8fb;
    color: #52657a;
    font-size: 13px;
    border-radius: 20px;
    font-weight: 500;
    border: 1px solid #e1e8f0;
}

/* --- Content Blocks --- */
.alert-modern {
    background: #e0f2fe;
    border-left: 5px solid #0284c7;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    font-weight: 500;
    color: #0c4a6e;
    font-size: 15px;
    line-height: 1.5;
}

.content-card {
    background: #ffffff;
    border: 1px solid #e1e8f0;
    border-radius: 12px;
    padding: 35px;
    margin-bottom: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
}
.content-card h4 {
    font-family: 'Outfit', sans-serif !important;
    font-weight: 800;
    color: #123456 !important;
    margin-top: 0;
    font-size: 22px;
    border-bottom: 2px solid #f6f8fb;
    padding-bottom: 15px;
    margin-bottom: 20px;
}

.info-list {
    padding-left: 20px;
    margin-bottom: 0;
}
.info-list li {
    margin-bottom: 12px;
    line-height: 1.6;
    color: #334155;
}
.info-list li:last-child {
    margin-bottom: 0;
}

.placeholder-section {
    text-align: center;
    padding: 40px 20px;
    background: #fafcff;
    border: 1px dashed #cbd5e1;
    border-radius: 12px;
}
.placeholder-section i {
    font-size: 40px;
    color: #94a3b8;
    margin-bottom: 15px;
}
.placeholder-section h3 {
    font-family: 'Outfit', sans-serif;
    color: #123456;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 10px;
}
.placeholder-section p {
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

@media(max-width: 768px) {
    .reg-banner { padding: 50px 15px 80px; }
    .reg-banner h1.reg-title { font-size: 28px; }
    .action-grid { margin-top: -30px; gap: 16px; }
    .content-card { padding: 25px; }
}
`;

export default function RegistrationPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="hp-reg-wrapper">
        <div className="reg-banner">
          <h1 className="reg-title">Conference Registration</h1>
        </div>

        <div className="reg-content-container">
          <div className="action-grid">
            <a href="javascript:void(0);" className="action-card disabled" aria-disabled="true">
              <img src="/assets/images/registration/form.png" alt="Form" />
              <strong>Register Now</strong>
              <span className="status-badge">Opening Soon</span>
            </a>
            <a href="javascript:void(0);" className="action-card disabled" aria-disabled="true">
              <img src="/assets/images/registration/registration_fees.png" alt="Fees" />
              <strong>Registration Fees</strong>
              <span className="status-badge">To be updated</span>
            </a>
            <a href="/contact" className="action-card">
              <img src="/assets/images/registration/contact.png" alt="Contact" />
              <strong>Contact Us</strong>
              <span className="status-badge" style={{ background: '#ecfdf5', color: '#065f46', borderColor: '#a7f3d0' }}>Available</span>
            </a>
          </div>

          <div className="alert-modern">
            <i className="fa fa-info-circle" style={{ marginRight: '8px' }}></i> <strong>Status Update:</strong> The registration portal for COMSNETS 2027 is currently being configured. Fee structures and payment links will be made available shortly.
          </div>

          <div className="placeholder-section" style={{ marginBottom: '30px' }}>
            <i className="fa fa-clock-o"></i>
            <h3>Registration Details Coming Soon</h3>
            <p>Detailed information regarding delegate fees, student rates, wire transfer details, and the online payment gateway will be published on this page as we move closer to the conference dates.</p>
          </div>

          <div className="content-card">
            <h4>Registration Policies</h4>
            <ol className="info-list">
              <li>Authors must register by the respective camera-ready deadline (Main Conference, Posters, Graduate Forum, Workshops, etc.).</li>
              <li><strong>Each and every accepted paper</strong> (main conference, poster, workshops or demo) must be registered at the full rate (regular IEEE/ACM member rate, or non-member rate) even if the author is a student. <strong>One registration covers ONLY TWO PAPERS.</strong></li>
              <li>In the case of accepted graduate forum papers (and no other accepted papers), authors can register at the IEEE/ACM student member or student non-member rate.</li>
              <li>The conference and the workshops are two different events and require separate registrations.</li>
              <li>Each workshop day (6th or 10th January) requires a separate registration. When registered, delegates can move around and attend any workshop on that specific day.</li>
              <li>All transfer of registrations should be done before <strong>1st January, 2027</strong>. Requests received after this date will not be entertained.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

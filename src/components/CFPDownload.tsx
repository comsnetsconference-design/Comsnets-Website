import React from 'react';

export default function CFPDownload() {
  return (
    <section className="hp-block" style={{ paddingBottom: '36px', marginBottom: '36px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #123456 0%, #2a5298 100%)',
          borderRadius: 'var(--radius, 10px)',
          padding: '32px 36px',
          textAlign: 'center',
          boxShadow: '0 6px 24px rgba(18, 52, 86, 0.25)'
        }}>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '2.5px',
              color: 'rgba(255, 255, 255, 0.7)',
              margin: '0 0 8px'
            }}>Now Available</p>
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontSize: 'clamp(22px, 2.8vw, 30px)',
              fontWeight: 900,
              color: '#fff',
              margin: '0 0 12px'
            }}>Call for Papers — COMSNETS 2027</h2>
            <p style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: '15px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0 0 22px',
              lineHeight: 1.6,
              maxWidth: '600px',
              display: 'inline-block'
            }}>Download the official Call for Papers for the 19<sup>th</sup> International Conference on COMmunication Systems &amp; NETworkS.</p>
            <br />
            <a 
              href="/assets/CALL FOR PAPERS COMSNETS.pdf" 
              download 
              className="btn-cfp-download"
            >
                <i className="fa fa-download"></i> Download CFP (PDF)
            </a>
        </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--col-bg, #fff)', borderTop: '1px solid var(--col-border, #e2e8f0)', padding: 0, marginTop: 0, transition: 'all 0.3s ease' }}>
      {/* Main Footer Content */}
      <div style={{ padding: '35px 0 20px 0' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap -mx-4">
                  <div className="w-full md:w-1/3 px-4" style={{ marginBottom: '25px' }}>
                      <h4 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, color: 'var(--col-text, #1e293b)', fontSize: '18px', marginBottom: '12px', transition: 'color 0.3s ease' }}>COMSNETS 2027</h4>
                      <p style={{ color: 'var(--col-muted, #64748b)', fontSize: '14px', lineHeight: 1.7, transition: 'color 0.3s ease' }}>
                          19th International Conference on<br/>
                          COMmunication Systems &amp; NETworkS<br/>
                          January 5–9, 2027 · Bengaluru, India
                      </p>
                  </div>
                  <div className="w-full md:w-1/3 px-4" style={{ marginBottom: '25px' }}>
                      <h4 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, color: 'var(--col-text, #1e293b)', fontSize: '18px', marginBottom: '12px', transition: 'color 0.3s ease' }}>Quick Links</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          <li style={{ marginBottom: '8px' }}><Link href="/call_for_papers" style={{ color: 'var(--col-muted, #64748b)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>→ Call for Papers</Link></li>
                          <li style={{ marginBottom: '8px' }}><Link href="/registration" style={{ color: 'var(--col-muted, #64748b)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>→ Registration</Link></li>
                          <li style={{ marginBottom: '8px' }}><Link href="/schedule" style={{ color: 'var(--col-muted, #64748b)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>→ Schedule</Link></li>
                          <li style={{ marginBottom: '8px' }}><Link href="/contact" style={{ color: 'var(--col-muted, #64748b)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>→ Contact Us</Link></li>
                          <li style={{ marginBottom: '8px' }}><Link href="/archive/2026/" style={{ color: 'var(--col-muted, #64748b)', textDecoration: 'none', fontSize: '14px', transition: 'color 0.2s' }}>→ COMSNETS 2026 Archive</Link></li>
                          <li style={{ marginBottom: '8px', marginTop: '15px' }}><Link href="/admin" style={{ color: 'var(--col-accent, #2a5298)', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', transition: 'color 0.2s' }}>→ Admin Portal</Link></li>
                      </ul>
                  </div>
                  <div className="w-full md:w-1/3 px-4" style={{ marginBottom: '25px' }}>
                      <h4 style={{ fontFamily: 'var(--font-inter), sans-serif', fontWeight: 800, color: 'var(--col-text, #1e293b)', fontSize: '18px', marginBottom: '12px', transition: 'color 0.3s ease' }}>Connect</h4>
                      <div style={{ display: 'flex', gap: '12px', marginBottom: '15px' }}>
                          <a href="https://twitter.com/comsnets" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'var(--col-bg-alt, #f1f5f9)', borderRadius: '10px', color: 'var(--col-muted, #64748b)', fontSize: '18px', textDecoration: 'none', transition: 'all 0.2s' }} aria-label="Twitter"><i className="fa fa-twitter"></i></a>
                          <a href="https://www.facebook.com/comsnets" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'var(--col-bg-alt, #f1f5f9)', borderRadius: '10px', color: 'var(--col-muted, #64748b)', fontSize: '18px', textDecoration: 'none', transition: 'all 0.2s' }} aria-label="Facebook"><i className="fa fa-facebook"></i></a>
                          <a href="https://www.youtube.com/comsnets" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', background: 'var(--col-bg-alt, #f1f5f9)', borderRadius: '10px', color: 'var(--col-muted, #64748b)', fontSize: '18px', textDecoration: 'none', transition: 'all 0.2s' }} aria-label="YouTube"><i className="fa fa-youtube-play"></i></a>
                      </div>
                      <p style={{ color: 'var(--col-muted, #64748b)', fontSize: '13px', transition: 'color 0.3s ease' }}>
                          An initiative by <a href="http://www.comsnets-association.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--col-accent, #2a5298)', textDecoration: 'none' }}>COMSNETS Association</a>
                      </p>
                  </div>
              </div>
              <div style={{ borderTop: '1px solid var(--col-border, #e2e8f0)', paddingTop: '18px', marginTop: '10px', textAlign: 'center' }}>
                  <p style={{ color: 'var(--col-muted, #94a3b8)', fontSize: '13px', margin: 0, transition: 'color 0.3s ease' }}>
                      &copy; 2027 COMSNETS Conference. All rights reserved.
                  </p>
              </div>
          </div>
      </div>
    </footer>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import '../app/keynote_speakers/speaker-styles.css';

interface PagePlaceholderProps {
  title: string;
  icon: string;
  message?: string;
  archiveLink: string;
  archiveLabel?: string;
}

export default function PagePlaceholder({ 
  title, 
  icon, 
  message, 
  archiveLink, 
  archiveLabel = "COMSNETS 2026" 
}: PagePlaceholderProps) {
  const defaultMessage = `Our ${title.toLowerCase()} for COMSNETS 2027 will be announced soon. Stay tuned for updates.`;

  return (
    <>
      {/* Subpage spacer */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>
                {title}
              </h1>

              <div className="tba-container">
                <div className="tba-icon">
                  <i className={`fa ${icon}`}></i>
                </div>
                <h2 className="tba-title">{title}</h2>
                <p className="tba-message">
                  {message || defaultMessage}
                </p>
              </div>

              <div className="prev-speakers-box">
                <h3>Previous {title}</h3>
                <p>
                  View details from <a href={archiveLink} style={{ color: '#3b82f6', fontWeight: 600 }}>{archiveLabel}</a> and previous years in the <Link href="/archive" style={{ color: '#3b82f6', fontWeight: 600 }}>archive</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

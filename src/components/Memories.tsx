import React from 'react';
import Link from 'next/link';

export default function Memories() {
    return (
        <section className="hp-block">
            <p className="h-eyebrow">Gallery</p>
            <h2 className="h-title">COMSNETS 2026 Memories</h2>
            <p className="h-lead">Highlights from the 18<sup>th</sup> edition — keynotes, workshops &amp; the vibrant COMSNETS community.</p>
            <div className="mem-wrap">
                <div className="mem-slider">
                    <div className="mem-slide">
                        <img src="/assets/images/2026_Photos/DSC09003.JPG" alt="COMSNETS 2026 Conference" />
                        <div className="mem-caption"><i className="fa fa-camera" style={{ marginRight: '6px', opacity: 0.85 }}></i>Conference Highlights</div>
                    </div>
                    <div className="mem-slide">
                        <img src="/assets/images/2026_Photos/0G0A2441.JPG" alt="COMSNETS 2026 Keynotes" />
                        <div className="mem-caption"><i className="fa fa-users" style={{ marginRight: '6px', opacity: 0.85 }}></i>Keynote Sessions &amp; Speakers</div>
                    </div>
                    <div className="mem-slide">
                        <img src="/assets/images/2026_Photos/DSC00651.JPG" alt="COMSNETS 2026 Networking" />
                        <div className="mem-caption"><i className="fa fa-comments" style={{ marginRight: '6px', opacity: 0.85 }}></i>Workshops &amp; Networking</div>
                    </div>
                </div>
            </div>
            <div className="mem-dots">
                <span className="mem-dot d1"></span>
                <span className="mem-dot d2"></span>
                <span className="mem-dot d3"></span>
            </div>
            <p style={{ marginTop: '16px' }}>
                <a href="https://www.comsnets.org/photos.html" target="_blank" rel="noopener noreferrer" className="btn-hp btn-soft" style={{ fontSize: '13px' }}>
                    <i className="fa fa-images"></i> View All Photos
                </a>
            </p>
        </section>
    );
}

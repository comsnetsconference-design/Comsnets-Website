import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-inner">
            <div>
                <div className="hero-logo-row">
                    <img className="hero-logo" src="/assets/images/comsnets_header.png" alt="COMSNETS Logo" />
                    <div className="hero-h1">COMSNETS&nbsp;2027</div>
                </div>
                <p className="hero-sub">19th International Conference on COMmunication Systems &amp; NETworkS</p>
                <p className="hero-date"><i className="fa fa-calendar-o"></i>&ensp;January 5–9, 2027</p>
                <Link href="/conference_venue" className="hero-venue">
                    <i className="fa fa-map-marker"></i>&ensp;Chancery Pavilion Hotel, Bengaluru, India
                </Link>
                <p className="hero-note">An initiative by <a href="http://www.comsnets-association.org/" target="_blank" rel="noopener noreferrer">COMSNETS Association</a></p>
                <div className="hero-ctas">
                    <Link href="/call_for_papers" className="btn-hp btn-primary">
                        <i className="fa fa-file-text-o"></i> Call for Papers
                    </Link>
                    <Link href="/registration" className="btn-hp btn-ghost">
                        <i className="fa fa-user-plus"></i> Register Now
                    </Link>
                </div>
            </div>
            <div className="hero-partners">
                <span>In-Cooperation With</span>
                <div className="hero-partners-logos">
                    <a href="https://www.acm.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/partners/acm.png" alt="ACM" />
                    </a>
                    <a href="http://www.sigmobile.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/partners/sigmobile_2026.jpg" alt="ACM SIGMOBILE" />
                    </a>
                    <a href="http://www.sigcomm.org/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/partners/sigcomm.png" alt="ACM SIGCOMM" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}


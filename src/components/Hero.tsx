import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero">
        <div className="hero-inner">
            <div className="hero-logo-row">
                {/* Fallback to standard img tag to preserve exact CSS sizing if Next Image is too restrictive, but Next Image with unoptimized or raw img is fine */}
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
    </div>
  );
}

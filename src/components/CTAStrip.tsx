import React from 'react';
import Link from 'next/link';

export default function CTAStrip() {
    return (
        <div className="cta-strip">
            <h2>Join COMSNETS 2027</h2>
            <p>Be part of the 19<sup>th</sup> edition — register early for the best rates.</p>
            <div className="cta-strip-btns">
                <Link href="/registration" className="btn-hp" style={{ background: '#fff', color: 'var(--col-primary,#123456)', fontSize: '15px', padding: '12px 28px' }}>
                    <i className="fa fa-user-plus"></i> Register Now
                </Link>
                <Link href="/travel_grants" className="btn-hp btn-ghost" style={{ fontSize: '15px', padding: '12px 28px' }}>
                    <i className="fa fa-graduation-cap"></i> Travel Grants
                </Link>
                <Link href="/contact" className="btn-hp btn-ghost" style={{ fontSize: '15px', padding: '12px 28px' }}>
                    <i className="fa fa-envelope"></i> Contact Us
                </Link>
            </div>
        </div>
    );
}

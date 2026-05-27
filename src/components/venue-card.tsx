import React from 'react';
import Link from 'next/link';

export default function VenueCard() {
    return (
        <section className="hp-block">
            <p className="h-eyebrow">Location</p>
            <h2 className="h-title">Conference Venue</h2>
            <p className="h-lead">COMSNETS 2027 will be held at the Chancery Pavilion Hotel, Bengaluru.</p>
            
            <div className="venue-card">
                <div className="venue-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0175024692837!2d77.59361931527368!3d12.970397290853507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sThe%20Chancery%20Pavilion!5e0!3m2!1sen!2sin!4v1660000000000!5m2!1sen!2sin" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Conference Venue Map"
                    ></iframe>
                </div>
                
                <div className="venue-info">
                    <h4>Chancery Pavilion Hotel</h4>
                    <p>Located on Residency Road in the heart of Bengaluru, the Chancery Pavilion offers world-class conference facilities and easy access to the city&apos;s tech hubs, restaurants, and cultural landmarks.</p>
                    <div className="venue-btns">
                        <Link href="/conference_venue" className="btn-hp btn-primary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                            <i className="fa fa-info-circle"></i> Venue Details
                        </Link>
                        <Link href="/accommodation" className="btn-hp btn-soft" style={{ fontSize: '12px', padding: '8px 16px' }}>
                            <i className="fa fa-bed"></i> Accommodation
                        </Link>
                        <Link href="/visa" className="btn-hp btn-soft" style={{ fontSize: '12px', padding: '8px 16px' }}>
                            <i className="fa fa-plane"></i> Visa Info
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

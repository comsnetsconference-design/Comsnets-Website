import React from 'react';
import Link from 'next/link';

export default function PhotosGrid() {
    // In actual usage, this should possibly fetch from an API or statically import.
    // For exact 1:1, we mock 7 placeholders pointing to the assets, or we could leave it
    // empty with the fallback message as logic dictates.
    const hasPhotos = false; // Set to true if photos exist in public/assets/...

    return (
        <section className="hp-block">
            <p className="h-eyebrow">Photos</p>
            <h2 className="h-title">COMSNETS 2026 Photo Highlights</h2>
            <p className="h-lead">A glimpse of last year&apos;s vibrant community — keynotes, workshops, and networking.</p>
            
            <div className="photo-grid">
                {hasPhotos ? (
                    <>
                        {/* Example photo cells */}
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample1.jpg" alt="COMSNETS 2026" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample2.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample3.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample4.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample5.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample6.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                        <div className="photo-cell"><Link href="/photos"><img src="/assets/images/2026_Photos/sample7.jpg" alt="COMSNETS 2026" loading="lazy" /></Link></div>
                    </>
                ) : (
                    <div style={{ gridColumn: 'span 4', padding: '50px', textAlign: 'center', color: 'var(--col-muted)' }}>
                        <i className="fa fa-camera" style={{ fontSize: '32px', opacity: 0.3, display: 'block', marginBottom: '10px' }}></i>
                        Photos available in the <Link href="/photos">gallery</Link>.
                    </div>
                )}
            </div>
            <p style={{ marginTop: '14px' }}>
                <Link href="/photos" className="btn-hp btn-soft" style={{ fontSize: '13px' }}>
                    <i className="fa fa-images"></i> View All Photos
                </Link>
            </p>
        </section>
    );
}

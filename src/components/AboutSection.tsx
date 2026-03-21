import React from 'react';

export default function AboutSection() {
    return (
        <section className="hp-block">
            <p className="h-eyebrow">About</p>
            <h2 className="h-title">About COMSNETS</h2>
            <p className="h-lead" style={{ maxWidth: 'none' }}>
                COMSNETS is a premier international conference dedicated to advances in Networking and Communications Systems. A yearly event for a world-class gathering of researchers from academia and industry, practitioners, and business leaders — providing a forum for discussing cutting-edge research and new innovative business and technology directions.
            </p>
            <p className="h-lead" style={{ maxWidth: 'none', marginBottom: 0 }}>
                The conference will include a highly selective technical program consisting of submitted papers, a small set of invited papers on important and timely topics from well-known leaders in the field, poster sessions, focused workshops, and panel discussions on emerging topics.
            </p>
        </section>
    );
}

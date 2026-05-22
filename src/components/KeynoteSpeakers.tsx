import React from 'react';

const speakersList = [
  {
    name: "Prof. Swarun S. Kumar",
    link: "https://swarunkumar.com/",
    image: "/assets/images/Speakers_2027/swarun.png",
    affiliation: "Carnegie Mellon University",
    location: "USA"
  },
  {
    name: "Prof. Archan Misra",
    link: "https://sites.google.com/view/archan-misra",
    image: "/assets/images/Speakers_2027/archan.jpg",
    affiliation: "Singapore Management University",
    location: "Singapore"
  },
  {
    name: "Dr. Amith Singhee",
    link: "https://research.ibm.com/people/amith-singhee",
    image: "/assets/images/Speakers_2027/amith singhee.webp",
    affiliation: "Director, IBM Research",
    location: "India"
  }
];

export default function KeynoteSpeakers() {
  return (
    <section className="hp-block" style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f0f4fa 0%, #e8eef6 100%)',
      padding: '36px 32px',
      borderRadius: 'var(--radius, 10px)',
      border: '1px solid #dce3ed'
    }}>
        <p className="h-eyebrow">Speakers</p>
        <h2 className="h-title" style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}>Keynote Speakers</h2>
        <hr style={{
          width: '80px',
          border: 'none',
          borderTop: '3px solid var(--col-primary, #123456)',
          margin: '16px auto 0',
          opacity: 0.7
        }} />
        <div style={{
          display: 'flex',
          gap: '48px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          marginTop: '32px'
        }}>
            {speakersList.map((speaker, index) => (
              <div key={index} style={{ textAlign: 'center', width: '170px' }}>
                  <a href={speaker.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="keynote-speaker-img"
                      />
                  </a>
                  <h3 style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--col-text, #0f172a)',
                    margin: '0 0 4px'
                  }}>
                      <a href={speaker.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                          {speaker.name}
                      </a>
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: 'var(--col-muted, #52657a)',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                      {speaker.affiliation}<br />{speaker.location}
                  </p>
              </div>
            ))}
        </div>
    </section>
  );
}

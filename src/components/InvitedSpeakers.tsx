"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../lib/firebase'; // Ensure this path matches your project structure
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

interface Speaker {
  id: string;
  name: string;
  link?: string;
  image?: string;
  affiliation: string;
  location?: string;
}

export default function InvitedSpeakers() {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpeakers() {
      if (!db) {
        setLoading(false);
        return;
      }

      try {
        // Fetching where type is 'invited'
        const q = query(
          collection(db, 'speakers'), 
          where('type', '==', 'invited'), 
          where('year', '==', 2027),
          orderBy('order', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Speaker));
        setSpeakers(data);
      } catch (err) {
        console.error("Error fetching invited speakers:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSpeakers();
  }, []);

  return (
    <section className="hp-block" style={{
      textAlign: 'center',
      background: 'linear-gradient(135deg, #f0f4fa 0%, #e8eef6 100%)',
      padding: '36px 32px',
      borderRadius: 'var(--radius, 10px)',
      border: '1px solid #dce3ed'
    }}>
        <p className="h-eyebrow">Our</p>
        <h2 className="h-title" style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}>Invited Speakers</h2>
        <hr style={{
          width: '80px',
          border: 'none',
          borderTop: '3px solid var(--col-primary, #123456)',
          margin: '16px auto 0',
          opacity: 0.7
        }} />

        {loading ? (
            <div style={{ marginTop: '32px', color: 'var(--col-muted, #52657a)' }}>
                Loading invited speakers...
            </div>
        ) : speakers.length > 0 ? (
            <div style={{
              display: 'flex',
              gap: '48px',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginTop: '32px'
            }}>
                {speakers.map((speaker) => (
                  <div key={speaker.id} style={{ textAlign: 'center', width: '170px' }}>
                      <a href={speaker.link || '#'} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                          <img 
                            src={speaker.image || '/assets/images/default-avatar.png'} // Fallback image
                            alt={speaker.name}
                            className="keynote-speaker-img"
                          />
                      </a>
                      <h3 style={{
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: '18px',
                        fontWeight: 800,
                        color: 'var(--col-text, #0f172a)',
                        margin: '12px 0 4px' // Added top margin to space out the name from the image
                      }}>
                          <a href={speaker.link || '#'} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
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
                          {speaker.affiliation}
                          {speaker.location && <><br />{speaker.location}</>}
                      </p>
                  </div>
                ))}
            </div>
        ) : (
            <div style={{ marginTop: '32px', color: 'var(--col-muted, #52657a)' }}>
                <p style={{ margin: 0 }}>
                    Our Invited speakers for COMSNETS 2027 will be announced soon.<br />
                    Stay tuned for updates.
                </p>
            </div>
        )}
    </section>
  );
}
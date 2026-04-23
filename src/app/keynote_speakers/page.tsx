"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import './speaker-styles.css';

export default function KeynoteSpeakers() {
  const [speakers, setSpeakers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpeakers() {
      if (!db) {
        setLoading(false);
        return;
      }

      try {
        const q = query(
          collection(db, 'speakers'), 
          where('type', '==', 'keynote'),
          where('year', '==', 2027),
          orderBy('order', 'asc')
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setSpeakers(data);
      } catch (err) {
        console.error("Error fetching keynote speakers:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchSpeakers();
  }, []);

  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Keynote Speakers</h1>

              {loading ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>Loading keynote speakers...</div>
              ) : speakers.length > 0 ? (
                speakers.map(speaker => (
                  <div className="speaker-card" key={speaker.id}>
                    <div className="row">
                      <div className="col-md-3 col-sm-4">
                        <div className="speaker-img-wrapper">
                          {speaker.image ? (
                            <img src={speaker.image} alt={speaker.name} />
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ccc' }}>
                              <i className="fa fa-user fa-5x"></i>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-9 col-sm-8">
                        <h2 className="speaker-name">
                          {speaker.link ? (
                            <a href={speaker.link} target="_blank" rel="noopener noreferrer">{speaker.name}</a>
                          ) : (
                            speaker.name
                          )}
                        </h2>
                        <div className="speaker-affiliation">{speaker.affiliation}</div>

                        {speaker.link && (
                          <div className="speaker-links-wrap" style={{ marginBottom: '15px' }}>
                            <a href={speaker.link} className="speaker-link" target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-globe"></i> Visit Homepage
                            </a>
                          </div>
                        )}

                        <div className="speaker-bio text-justify">{speaker.bio}</div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="tba-container">
                  <div className="tba-icon"><i className="fa fa-microphone-slash"></i></div>
                  <h2 className="tba-title">Keynote Speakers</h2>
                  <p className="tba-message">
                    Our keynote speakers for COMSNETS 2027 will be announced soon.<br />
                    Stay tuned for updates.
                  </p>
                </div>
              )}

              <div className="prev-speakers-box">
                <h3>Previous Keynote Speakers</h3>
                <p>
                  View our lineup of distinguished speakers from <Link href="/archive/2026/keynote_speakers.php">COMSNETS 2026</Link> and previous years in the <Link href="/archive">archive</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

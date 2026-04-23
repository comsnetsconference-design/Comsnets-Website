"use client";

import React, { useEffect, useState } from 'react';
import { db } from '../../lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import conferenceData from '../../../data/conference.json';
import './contact-styles.css';

interface ContactMember {
  name: string;
  email?: string;
}

export default function ContactPage() {
  const [webSupportMembers, setWebSupportMembers] = useState<ContactMember[]>([]);
  const [registrationMembers, setRegistrationMembers] = useState<ContactMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContactData() {
      // Try Firestore first
      if (db) {
        try {
          const q = query(collection(db, 'organizing_committee'), orderBy('order', 'asc'));
          const querySnapshot = await getDocs(q);
          const sections = querySnapshot.docs.map(doc => doc.data());

          const webSection = sections.find((s: any) => s.title === 'Web Co-Chairs');
          const regSection = sections.find((s: any) => s.title === 'Registration Co-Chairs');

          if (webSection?.members) {
            setWebSupportMembers(
              webSection.members
                .filter((m: any) => m.name)
                .map((m: any) => ({ name: m.name, email: m.email || '' }))
            );
          }

          if (regSection?.members) {
            setRegistrationMembers(
              regSection.members
                .filter((m: any) => m.name)
                .map((m: any) => ({ name: m.name, email: m.email || '' }))
            );
          }

          setLoading(false);
          return;
        } catch (err) {
          console.error("Error fetching contact data from Firestore:", err);
        }
      }

      // Fallback to local JSON data
      const webSection = conferenceData.committeeSections.find(s => s.title === 'Web Co-Chairs');
      const regSection = conferenceData.committeeSections.find(s => s.title === 'Registration Co-Chairs');

      if (webSection?.members) {
        setWebSupportMembers(
          webSection.members.map(m => ({ name: m.name, email: (m as any).email || '' }))
        );
      }

      if (regSection?.members) {
        setRegistrationMembers(
          regSection.members.map(m => ({ name: m.name, email: (m as any).email || '' }))
        );
      }

      setLoading(false);
    }

    fetchContactData();
  }, []);

  return (
    <>
      {/* Subpage spacer */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 itemProp="name" className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Contact</h1>

              <div className="contact-container">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">For any queries regarding COMSNETS, please reach out to the respective teams below.</p>

                {loading ? (
                  <div className="contact-loading">Loading contact information...</div>
                ) : (
                  <div className="contact-grid">

                    {/* General Queries — Hardcoded */}
                    <div className="contact-card">
                      <h4>General Queries</h4>
                      <div className="contact-item">
                        <span className="contact-name">Conference Secretariat</span>
                        <a className="contact-email" href="mailto:comsnets.conference@gmail.com">comsnets.conference@gmail.com</a>
                      </div>
                    </div>

                    {/* Website Support — Dynamic from OC */}
                    <div className="contact-card">
                      <h4>Website Support</h4>
                      <ul className="contact-list">
                        {webSupportMembers.map((member, idx) => (
                          <li className="contact-item" key={idx}>
                            <span className="contact-name">{member.name}</span>
                            {member.email && (
                              <a className="contact-email" href={`mailto:${member.email}`}>{member.email}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Registration & VISA — Dynamic from OC */}
                    <div className="contact-card">
                      <h4>Registration &amp; VISA</h4>
                      <ul className="contact-list">
                        {registrationMembers.map((member, idx) => (
                          <li className="contact-item" key={idx}>
                            <span className="contact-name">{member.name}</span>
                            {member.email && (
                              <a className="contact-email" href={`mailto:${member.email}`}>{member.email}</a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sponsorship & Local — Hardcoded */}
                    <div className="contact-card">
                      <h4>Sponsorship &amp; Local</h4>
                      <div className="contact-item">
                        <span className="contact-name">Local Arrangements Committee</span>
                        <a className="contact-email" href="mailto:comsnets.conference@gmail.com">comsnets.conference@gmail.com</a>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

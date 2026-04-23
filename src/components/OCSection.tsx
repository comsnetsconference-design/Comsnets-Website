import React from 'react';
import OCMemberCard, { OCMember } from './OCMemberCard';

export interface OCSectionProps {
  title: string;
  icon: string;
  members?: OCMember[];
  note?: string;
}

export default function OCSection({ section }: { section: OCSectionProps }) {
    return (
        <div className="oc-section">
            <div className="oc-section-header">
                <span className="oc-section-badge"><i className={`fa ${section.icon}`}></i></span>
                <h2 className="oc-section-title">{section.title}</h2>
            </div>
            {section.note ? (
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 600, color: '#546e7a', margin: '0 12px' }}>
                    {section.note}
                </p>
            ) : (
                <div className="oc-grid">
                    {section.members?.map((member, idx) => (
                        <OCMemberCard key={idx} member={member} />
                    ))}
                </div>
            )}
        </div>
    );
}

import React from 'react';

export interface OCMember {
  name: string;
  affiliation: string;
  image: string;
  link?: string;
}

export default function OCMemberCard({ member }: { member: OCMember }) {
    return (
        <div className="member-card">
            <div className="member-photo-wrap">
                <img src={member.image} className="member-photo" alt={member.name} loading="lazy" />
            </div>
            <p className="member-name">
                {member.link ? (
                    <a href={member.link} target="_blank" rel="noopener noreferrer">{member.name}</a>
                ) : (
                    member.name
                )}
            </p>
            <p className="member-org" dangerouslySetInnerHTML={{ __html: member.affiliation }} />
        </div>
    );
}

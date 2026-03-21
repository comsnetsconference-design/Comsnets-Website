import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
    return (
        <aside className="hp-sidebar">
            {/* Quick links */}
            <div className="scard">
                <div className="scard-head"><i className="fa fa-bolt"></i> Quick Links</div>
                <div className="scard-body">
                    <Link href="/call_for_papers" className="qlink accent">
                        <i className="fa fa-file-text-o"></i> Call for Papers
                    </Link>
                    <Link href="/registration" className="qlink">
                        <i className="fa fa-user-plus"></i> Registration
                    </Link>
                    <Link href="/schedule" className="qlink">
                        <i className="fa fa-calendar"></i> Schedule
                    </Link>
                    <Link href="/travel_grants" className="qlink">
                        <i className="fa fa-graduation-cap"></i> Travel Grants
                    </Link>
                    <Link href="/contact" className="qlink">
                        <i className="fa fa-envelope"></i> Contact Us
                    </Link>
                </div>
            </div>
        </aside>
    );
}

"use client";
import React from 'react';

export default function CybersecurityAndPrivacyWorkshopPage() {
    return (
        <>
            <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
            <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
                <div className="event-page">

                    <div className="event-hero">
                        <h1>Cyber Security and Privacy Workshop (CSP)</h1>
                        <div className="event-details">COMSNETS 2027</div>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Workshop Overview</h3>
                        <p className="text-justify">The Cybersecurity and Privacy (CSP) Workshop will be held in conjunction with the annual COMSNETS conference in January 2027. This workshop is intended to be a forum where researchers can meet and discuss the latest in cyber security and privacy topics as they apply to communications systems. Security and Privacy researchers and professionals from government, industry and academia are invited to propose and present original work in the following topics (or related areas):</p>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Topics of Interest</h3>
                        <div className="topic-grid"><div className="topic-cat">
                        <ul>
                            <li>Authentication, authorization, and accounting</li>
                            <li>Information Security protocols and architectures</li>
                            <li>Security in wired, mobile and wireless communications</li>
                            <li>Security in grid/cloud/pervasive computing</li>
                            <li>Network Intrusion Detection and Prevention, firewalls, packet filters</li>
                            <li>Public Key Infrastructures, key management, credential management</li>
                            <li>Network and internet forensics techniques</li>
                            <li>Secure routing and security management</li>
                            <li>Malware, botnets, and similar topics</li>
                            <li>Embedded system security</li>
                            <li>Zero Trust Architecture</li>
                            <li>Access control security</li>
                            <li>Security in parallel and distributed systems</li>
                            <li>Blockchain and distributed ledger technologies</li>
                            <li>Security and privacy policies</li>
                            <li>Privacy-preserving data collection and analytics</li>
                            <li>Anonymous communication and censorship resistance</li>
                            <li>Critical infrastructure security and privacy</li>
                            <li>Security and privacy for cyber physical systems</li>
                            <li>Security and privacy for e-commerce/m-commerce</li>
                            <li>Security and privacy in social networks</li>
                            <li>AI and ML security and privacy</li>
                            <li>Internet of Things (IoT) security and privacy</li>
                            <li>Mobile devices security and privacy</li>
                            <li>Security and privacy for digital identity</li>
                            <li>Edge based security and privacy</li>
                            <li>Security and privacy in the Metaverse</li>
                            <li>Web security and privacy</li>
                        </ul>
                        </div></div>
                        <p className="text-justify">Researchers are invited to submit papers based on original work written in English in these and other topics related to cyber security and privacy. </p>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Important Dates</h3>
                        <div className="dates-timeline">
                            <div className="date-step"><div className="dot">1</div><div className="lab">Paper Submission deadline</div><div className="val">To be announced</div></div>
                            <div className="date-step"><div className="dot">2</div><div className="lab">Notification of Acceptance</div><div className="val">To be announced</div></div>
                            <div className="date-step"><div className="dot">3</div><div className="lab">Camera-ready Submission</div><div className="val">To be announced</div></div>
                            <div className="date-step is-event"><div className="dot"><i className="fa fa-star" aria-hidden="true"></i></div><div className="lab">Workshop Date</div><div className="val">January 2027</div></div>
                        </div>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Submission Guidelines</h3>
                        <ul>
                            <li>The Cyber Security and Privacy Workshop invites submission of original work, not previously published, or under review at another conference or journal.</li>
                            <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length. A minimum number of 4 pages are required.</li>
                            <li>Reviews will be <b>double-blind:</b> authors' names and affiliations must not be included in the submission.</li>
                            <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                            <li>All papers must be in Adobe Portable Document Format (PDF) and submitted on EDAS.</li>
                            <li>One of the authors must register for the workshop with the designated registration rate and present the paper in person.</li>
                            <li>All workshop papers (both regular and invited) will appear in conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</li>
                        </ul>
                        <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Workshop Co-Chairs</h3>
                        <div className="member-grid">
                            <div className="member-card">
                                <img src="/assets/images/placeholder.jpg" alt="Shantanu Pal" className="member-photo" />
                                <div className="member-name"><a href="https://www.deakin.edu.au/about-deakin/people/shantanu-pal" target="_blank" rel="noopener noreferrer">Shantanu Pal</a></div>
                                <p className="member-affil">Deakin University<br />Australia</p>
                            </div>
                            <div className="member-card">
                                <img src="/assets/images/placeholder.jpg" alt="Robin Doss" className="member-photo" />
                                <div className="member-name"><a href="https://www.deakin.edu.au/about-deakin/people/robin-doss" target="_blank" rel="noopener noreferrer">Robin Doss</a></div>
                                <p className="member-affil">Deakin University<br />Australia</p>
                            </div>
                            <div className="member-card">
                                <img src="/assets/images/placeholder.jpg" alt="Sandeep Shukla" className="member-photo" />
                                <div className="member-name"><a href="https://sites.google.com/view/skshukla/" target="_blank" rel="noopener noreferrer">Sandeep Shukla</a></div>
                                <p className="member-affil">IIIT Hyderabad<br />India</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

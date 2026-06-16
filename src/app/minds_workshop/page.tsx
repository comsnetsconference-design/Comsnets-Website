"use client";
import React from 'react';

export default function MindsWorkshopPage() {
    return (
        <>
            <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
            <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
                <div className="event-page">

                    <div className="event-hero">
                        <h1>Workshop on Machine Intelligence in Networked Data and Systems (MINDS)</h1>
                        <div className="event-details">COMSNETS 2027</div>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Workshop Overview</h3>
                        <p className="text-justify">As connectivity, computing, and storage are getting cheaper, we are seeing more opportunities for data-driven approaches for networked data and systems. The adaptation of machine learning, artificial intelligence, and data analytics techniques in these networked systems is set to transform and disrupt many areas of business and everyday human life. The Workshop on Machine Intelligence in Networked Data and Systems (MINDS) is co-located with COMSNETS 2027 and aims to bring together researchers and practitioners to explore and investigate this interworking of machine learning, big data analytics, and networked systems for various application domains.</p>
                        <p className="text-justify">MINDS welcomes original research submissions that define challenges, report experiences, or discuss progress toward design and solutions that integrate machine learning, artificial intelligence, data analytics, deep learning, mobile systems, and networked systems in various application areas. These application areas include but are not limited to healthcare, environment, retail, transportation, life sciences, e-commerce and cloud services. Contributions describing techniques applied to real-world problems and interdisciplinary research involving novel networking architectures, system designs, IoT systems, big data systems that use techniques from machine learning, artificial intelligence, deep learning, and data analytics as the core component are especially encouraged.</p>
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
                        <h3 className="section-title">Topics of Interest</h3>
                        <p className="text-justify">The topics of interest include, but are not limited to:</p>
                        <div className="topic-grid">

                            <div className="topic-cat">
                                <h4><i className="fa fa-sitemap" aria-hidden="true"></i>Networks</h4>
                                <ul>
                                    <li>ML for network management, orchestration, and control</li>
                                    <li>ML for network security and privacy</li>
                                    <li>Mining of large-scale network measurements</li>
                                    <li>Networks for AI through programmability and hardware acceleration on the data plane (in-network computing and in-network ML)</li>
                                    <li>LLMs for intent-based networking (IBN) and network configuration</li>
                                    <li>AI-based assurance for self-managed networks (self-healing, self-configuration, self-optimization, self-protection)</li>
                                    <li>ML for transport and transport for ML applications</li>
                                    <li>ML for IoT, smart cities, and vehicular networks</li>
                                    <li>AI/ML for JSAC and digital twinning</li>
                                    <li>LLMs for goal/task oriented and semantic communications (SemCom)</li>
                                </ul>
                            </div>

                            <div className="topic-cat">
                                <h4><i className="fa fa-server" aria-hidden="true"></i>Systems</h4>
                                <ul>
                                    <li>ML for systems management, performance modelling, and optimizations</li>
                                    <li>ML-driven resource provisioning, scheduling, and scaling techniques</li>
                                    <li>ML for sustainable resource management in cloud and edge systems</li>
                                    <li>ML-driven systems using mobile phones, embedded devices, and sensor networks</li>
                                    <li>Workflow management in edge-cloud compute continuum</li>
                                </ul>
                            </div>

                            <div className="topic-cat">
                                <h4><i className="fa fa-cubes" aria-hidden="true"></i>Applications</h4>
                                <ul>
                                    <li>Design and implementation of intelligent systems for applications such as home automation, self-driving vehicles, driver assistance systems, supply chain, and logistics</li>
                                    <li>Cloud-based machine and deep learning applications in retail and e-commerce</li>
                                    <li>Machine learning systems for healthcare, weather modeling, financial services, life sciences, and environmental monitoring</li>
                                    <li>Applications of machine learning in IoT, IIoT, manufacturing, and supply chain optimisation</li>
                                    <li>Experiences in managing wearable devices, smart-home systems and mobile sensor networks</li>
                                    <li>Anomaly and outlier detection in social networks</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Submission Guidelines</h3>
                        <ul>
                            <li>MINDS invites submission of original work not previously published, or under review at another conference or journal.</li>
                            <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length.</li>
                            <li>Reviews will be <b>double-blind:</b> Information about the authors will not be shared with the reviewers during the review process. The submitted paper should be anonymous and not have any reference to the authors' names or institutions.</li>
                            <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                            <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the MINDS Workshop submission site on EDAS.</li>
                            <li>All workshop papers will appear in the conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</li>
                        </ul>
                        <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
                    </div>

                    <div className="event-section">
                        <h3 className="section-title">Workshop Co-Chairs</h3>
                        <div className="member-grid">
                            <div className="member-card">
                                <img src="/assets/images/placeholder.jpg" alt="Marios Avgeris" className="member-photo" />
                                <div className="member-name"><a href="https://www.linkedin.com/in/mavgeris/" target="_blank" rel="noopener noreferrer">Marios Avgeris</a></div>
                                <p className="member-affil">University of Amsterdam<br />Netherlands</p>
                            </div>
                            <div className="member-card">
                                <img src="/assets/images/placeholder.jpg" alt="Shashikant Ilager" className="member-photo" />
                                <div className="member-name"><a href="https://shashikantilager.com/" target="_blank" rel="noopener noreferrer">Shashikant Ilager</a></div>
                                <p className="member-affil">University of Amsterdam<br />Netherlands</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

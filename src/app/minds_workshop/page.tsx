"use client";
import React from 'react';

export default function MindsWorkshopPage() {
    return (
        <>
            <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
            <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
                <div className="row">
                    <div className="col-md-9 page-content">
                        <div className="well well-white">
                            <div style={{ background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', color: 'white', borderRadius: '16px', padding: '2rem 2rem', boxShadow: '0 8px 32px rgba(124, 58, 237, 0.35)', marginBottom: '2rem', textAlign: 'center' }}>
                                <h1 style={{ fontSize: '2.5rem', fontWeight: 900, margin: 0 }}>Workshop on Machine Intelligence in Networked Data and Systems (MINDS)</h1>
                                <div style={{ fontSize: '1.1rem', fontWeight: 500, background: 'rgba(255, 255, 255, 0.2)', padding: '0.75rem 1.5rem', marginTop: '1rem', display: 'inline-block', borderRadius: '9999px' }}>
                                    COMSNETS 2027
                                </div>
                            </div>
                            <hr />

                            <h3 style={{ fontWeight: 700, color: '#2A4D75', letterSpacing: '1.2px', marginBottom: '1.5rem', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Workshop Overview</h3>

                            <p className="text-justify">As connectivity, computing, and storage are getting cheaper, we are seeing more opportunities for data-driven approaches for networked data and systems. The adaptation of machine learning, artificial intelligence, and data analytics techniques in these networked systems is set to transform and disrupt many areas of business and everyday human life. The Workshop on Machine Intelligence in Networked Data and Systems (MINDS) is co-located with COMSNETS 2027 and aims to bring together researchers and practitioners to explore and investigate this interworking of machine learning, big data analytics, and networked systems for various application domains.</p>

                            <p className="text-justify">MINDS welcomes original research submissions that define challenges, report experiences, or discuss progress toward design and solutions that integrate machine learning, artificial intelligence, data analytics, deep learning, mobile systems, and networked systems in various application areas. These application areas include but are not limited to healthcare, environment, retail, transportation, life sciences, e-commerce and cloud services. Contributions describing techniques applied to real-world problems and interdisciplinary research involving novel networking architectures, system designs, IoT systems, big data systems that use techniques from machine learning, artificial intelligence, deep learning, and data analytics as the core component are especially encouraged.</p>
                            <hr />

                            <h3 style={{ fontWeight: 700, color: '#2A4D75', letterSpacing: '1.2px', marginBottom: '1.5rem', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Important Dates</h3>
                            <table className="table table-striped table-hover">
                                <tbody>
                                    <tr>
                                        <td><strong>Paper Submission deadline: <span style={{ color: 'black' }}>To be announced</span></strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Notification of Acceptance: <span style={{ color: 'black' }}>To be announced</span></strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Camera-ready Submission: <span style={{ color: 'black' }}>To be announced</span></strong></td>
                                    </tr>
                                    <tr>
                                        <td><strong>Workshop Date: <span style={{ color: 'black' }}>January 2027</span></strong></td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr />

                            <h4 style={{ fontWeight: 700, color: '#2A4D75', letterSpacing: '1.2px', marginBottom: '1.5rem', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>The topics of interest include, but are not limited to:</h4>
                            <ul>
                                <li><b>Networks</b>
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
                                </li>
                                <li><b>Systems</b>
                                    <ul>
                                        <li>ML for systems management, performance modelling, and optimizations</li>
                                        <li>ML-driven resource provisioning, scheduling, and scaling techniques</li>
                                        <li>ML for sustainable resource management in cloud and edge systems</li>
                                        <li>ML-driven systems using mobile phones, embedded devices, and sensor networks</li>
                                        <li>Workflow management in edge-cloud compute continuum</li>
                                    </ul>
                                </li>
                                <li><b>Applications</b>
                                    <ul>
                                        <li>Design and implementation of intelligent systems for applications such as home automation, self-driving vehicles, driver assistance systems, supply chain, and logistics</li>
                                        <li>Cloud-based machine and deep learning applications in retail and e-commerce</li>
                                        <li>Machine learning systems for healthcare, weather modeling, financial services, life sciences, and environmental monitoring</li>
                                        <li>Applications of machine learning in IoT, IIoT, manufacturing, and supply chain optimisation</li>
                                        <li>Experiences in managing wearable devices, smart-home systems and mobile sensor networks</li>
                                        <li>Anomaly and outlier detection in social networks</li>
                                    </ul>
                                </li>
                            </ul>
                            <hr />

                            <h4 style={{ fontWeight: 700, color: '#2A4D75', letterSpacing: '1.2px', marginBottom: '1.5rem', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Submission Guidelines</h4>
                            <ul>
                                <li>MINDS invites submission of original work not previously published, or under review at another conference or journal.</li>
                                <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length.</li>
                                <li>Reviews will be <b>double-blind:</b> Information about the authors will not be shared with the reviewers during the review process. The submitted paper should be anonymous and not have any reference to the authors' names or institutions.</li>
                                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the MINDS Workshop submission site on EDAS.</li>
                                <li>All workshop papers will appear in the conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</li>
                            </ul>

                            <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
                            <hr />

                            <div className="organizing-committee-page center-block">
                                <h3 className="text-center" style={{ fontWeight: 700, color: '#2A4D75', letterSpacing: '1.2px', marginBottom: '1.5rem', borderBottom: '3px solid #678DC2', display: 'inline-block', paddingBottom: '6px' }}>Workshop Co-Chairs</h3>
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <div className="thumbnail" style={{ border: 'none', textAlign: 'center' }}>
                                            <img src="/assets/images/placeholder.jpg" className="img-responsive" alt="Marios Avgeris" style={{ height: '200px', width: '170px', boxShadow: '10px 10px 5px #BDBDBD' }} />
                                            <div className="caption">
                                                <h4><a href="https://www.linkedin.com/in/mavgeris/" target="_blank" rel="noopener noreferrer">Marios Avgeris</a></h4>
                                                <p>University of Amsterdam<br />Netherlands</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <div className="thumbnail" style={{ border: 'none', textAlign: 'center' }}>
                                            <img src="/assets/images/placeholder.jpg" className="img-responsive" alt="Shashikant Ilager" style={{ height: '200px', width: '170px', boxShadow: '10px 10px 5px #BDBDBD' }} />
                                            <div className="caption">
                                                <h4><a href="https://shashikantilager.com/" target="_blank" rel="noopener noreferrer">Shashikant Ilager</a></h4>
                                                <p>University of Amsterdam<br />Netherlands</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        {/* Sidebar space if needed, otherwise could use col-md-12 above */}
                    </div>
                </div>
            </div>
        </>
    );
}

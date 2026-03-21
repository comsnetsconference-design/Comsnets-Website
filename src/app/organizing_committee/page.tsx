import React from 'react';
import Link from 'next/link';

export default function OrganizingCommittee() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .oc-page {
            font-family: 'Inter', sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 24px 60px;
            color: var(--text, #1c2b33);
        }

        .oc-section {
            margin-bottom: 52px;
        }

        .oc-section-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 2px solid var(--border, #cfd8dc);
        }

        .oc-section-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 32px; height: 32px;
            background: var(--accent-gradient, linear-gradient(135deg, #455a64, #607d8b));
            border-radius: 50%;
            flex-shrink: 0;
        }

        .oc-section-badge i {
            color: #fff;
            font-size: 13px;
        }

        .oc-section-title {
            font-family: 'Outfit', sans-serif;
            font-size: clamp(17px, 1.8vw, 21px);
            font-weight: 700;
            color: var(--text, #1c2b33);
            margin: 0;
        }

        /* Grid */
        .oc-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 28px 20px;
        }

        /* Card — no box, just breathing room */
        .member-card {
            background: transparent;
            border: none;
            padding: 8px 12px 16px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 0 0 calc(33.333% - 14px);
            min-width: 180px;
            box-sizing: border-box;
            cursor: default;
        }

        /* Photo circle — overflow hidden lets zoom stay clipped */
        .member-photo-wrap {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 14px;
            border: 3px solid var(--border, #cfd8dc);
            flex-shrink: 0;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .member-card:hover .member-photo-wrap {
            border-color: var(--accent, #607d8b);
            box-shadow: 0 6px 22px rgba(69,90,100,0.18);
        }

        .member-photo {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
            background: var(--bg, #f5f6f7);
            transition: transform 0.42s cubic-bezier(0.25,0.46,0.45,0.94),
                        filter 0.42s ease;
            transform-origin: center top;
        }

        /* Zoom + brighten on hover to reveal full photo */
        .member-card:hover .member-photo {
            transform: scale(1.15);
            filter: brightness(1.05);
        }

        .member-name {
            font-family: 'Outfit', sans-serif;
            font-size: 15px;
            font-weight: 700;
            margin: 0 0 5px;
            color: var(--text, #1c2b33);
            line-height: 1.3;
            transition: color 0.2s;
        }

        .member-card:hover .member-name {
            color: var(--accent, #607d8b);
        }

        .member-name a {
            color: inherit;
            text-decoration: none;
        }

        .member-org {
            font-size: 13px;
            color: var(--text-muted, #546e7a);
            line-height: 1.55;
            margin: 0;
        }

        /* Previous section */
        .oc-prev {
            background: var(--bg-card, #fff);
            border: 1px solid var(--border, #cfd8dc);
            border-radius: 12px;
            padding: 22px 26px;
            margin-top: 12px;
        }

        .oc-prev h3 {
            font-family: 'Outfit', sans-serif;
            font-size: 16px;
            font-weight: 700;
            color: var(--text, #1c2b33);
            margin: 0 0 6px;
        }

        .oc-prev p { color: var(--text-muted, #546e7a); font-size: 14px; margin: 0; }
        .oc-prev a { color: var(--accent, #607d8b); font-weight: 600; }

        @media (max-width: 900px) { .member-card { flex: 0 0 calc(50% - 10px); } }
        @media (max-width: 560px)  { .member-card { flex: 0 0 100%; } }
      `}} />

      {/* Subpage spacer as defined in legacy header.php */}
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 itemProp="name" className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Organizing Committee</h1>
              
              <div className="oc-page">

                {/* General Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-users"></i></span>
                        <h2 className="oc-section-title">General Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/somali.jpg" className="member-photo" alt="Somali Chaterji" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://schaterji.io/" target="_blank" rel="noopener noreferrer">Somali Chaterji</a></p>
                            <p className="member-org">Purdue University<br/>USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2026/TPC/abhinavkumar.jpg" className="member-photo" alt="Abhinav Kumar" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://people.iith.ac.in/abhinavkumar/" target="_blank" rel="noopener noreferrer">Abhinav Kumar</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Hyderabad, India</p>
                        </div>
                    </div>
                </div>

                {/* Technical Program Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-code"></i></span>
                        <h2 className="oc-section-title">Technical Program Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/baek.jpg" className="member-photo" alt="Baek-Young Choi" loading="lazy" />
                            </div>
                            <p className="member-name">Baek-Young Choi</p>
                            <p className="member-org">Missouri University of Science<br/>and Technology, USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Manjesh.jpg" className="member-photo" alt="Manjesh Kumar Hanawal" loading="lazy" />
                            </div>
                            <p className="member-name">Manjesh Kumar Hanawal</p>
                            <p className="member-org">IEOR, IIT Bombay<br/>India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/ORI.jpg" className="member-photo" alt="Ori Rottenstreich" loading="lazy" />
                            </div>
                            <p className="member-name">Ori Rottenstreich</p>
                            <p className="member-org">Technion<br/>Israel</p>
                        </div>
                    </div>
                </div>

                {/* EDAS / Systems Chair */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-database"></i></span>
                        <h2 className="oc-section-title">EDAS / Systems Chair</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/PosterCoChairs/dheryta.png" className="member-photo" alt="Dheryta Jaisinghani" loading="lazy" />
                            </div>
                            <p className="member-name">Dheryta Jaisinghani</p>
                            <p className="member-org">University of Northern Iowa<br/>USA</p>
                        </div>
                    </div>
                </div>

                {/* Poster Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-image"></i></span>
                        <h2 className="oc-section-title">Poster Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/nakul_headshot%20-%20Nakul%20Garg.jpeg" className="member-photo" alt="Nakul Garg" loading="lazy" />
                            </div>
                            <p className="member-name">Nakul Garg</p>
                            <p className="member-org">Rice University<br/>USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/IMG_1084%20-%20Rohit%20Verma.png" className="member-photo" alt="Rohit Verma" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.cl.cam.ac.uk/~rv355/" target="_blank" rel="noopener noreferrer">Rohit Verma</a></p>
                            <p className="member-org">Intel Labs<br/>India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Shantanu%20Pal_Photo%20-%20Shantanu%20Pal(1).png" className="member-photo" alt="Shantanu Pal" loading="lazy" />
                            </div>
                            <p className="member-name">Shantanu Pal</p>
                            <p className="member-org">Deakin University<br/>Australia</p>
                        </div>
                    </div>
                </div>

                {/* Demos & Exhibits Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-desktop"></i></span>
                        <h2 className="oc-section-title">Demos &amp; Exhibits Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/unnamed%20-%20Kaustubh%20Dhondge(1).png" className="member-photo" alt="Kaustubh Dhondge" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.kaustubhdhondge.com/" target="_blank" rel="noopener noreferrer">Kaustubh Dhondge</a></p>
                            <p className="member-org">Indian Institute of Information Technology<br/>Surat, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2023/alok_ranjan.jpg" className="member-photo" alt="Alok Ranjan" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="http://linkedin.com/in/alok-ranjan" target="_blank" rel="noopener noreferrer">Alok Ranjan</a></p>
                            <p className="member-org">Bosch<br/>India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/DemosExhibitCoChairs/meera.jpeg" className="member-photo" alt="Meera Radhakrishnan" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://sites.google.com/site/meeralakshmir/home" target="_blank" rel="noopener noreferrer">Meera Radhakrishnan</a></p>
                            <p className="member-org">Data Science Institute<br/>(UTS), Australia</p>
                        </div>
                    </div>
                </div>

                {/* Panel Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-comments"></i></span>
                        <h2 className="oc-section-title">Panel Co-Chairs</h2>
                    </div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: '16px', fontWeight: 600, color: '#546e7a', margin: '0 12px' }}>TBD</p>
                </div>

                {/* Web Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-globe"></i></span>
                        <h2 className="oc-section-title">Web Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/Kaushik.jpg" className="member-photo" alt="Kaushik Chowhan" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/kaushik-chowhan-b59aa0264/" target="_blank" rel="noopener noreferrer">Kaushik Chowhan</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Gandhinagar, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/1686743139746-2%20-%20Indrajeet%20Ghosh.jpeg" className="member-photo" alt="Indrajeet Ghosh" loading="lazy" />
                            </div>
                            <p className="member-name">Indrajeet Ghosh</p>
                            <p className="member-org">University of Virginia<br/>USA</p>
                        </div>
                    </div>
                </div>

                {/* App Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-laptop"></i></span>
                        <h2 className="oc-section-title">App Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2026/ojaswa.jpg" className="member-photo" alt="Ojaswa Varshney" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/ojaswavarshney/" target="_blank" rel="noopener noreferrer">Ojaswa Varshney</a></p>
                            <p className="member-org">Indian Institute of Information Technology<br/>Surat, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/SNEHAL.png" className="member-photo" alt="Snehalraj Chugh" loading="lazy" />
                            </div>
                            <p className="member-name">Snehalraj Chugh</p>
                            <p className="member-org">AI Sense LLC<br/>USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Roshan.jpg" className="member-photo" alt="Roshan Shorey" loading="lazy" />
                            </div>
                            <p className="member-name">Roshan Shorey</p>
                            <p className="member-org">SVNIT Surat<br/>India</p>
                        </div>
                    </div>
                </div>

                {/* Undergraduate Forum Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-graduation-cap"></i></span>
                        <h2 className="oc-section-title">Undergraduate Forum Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/Kaushik.jpg" className="member-photo" alt="Kaushik Chowhan" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/kaushik-chowhan-b59aa0264/" target="_blank" rel="noopener noreferrer">Kaushik Chowhan</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Gandhinagar, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2026/ojaswa.jpg" className="member-photo" alt="Ojaswa Varshney" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/ojaswavarshney/" target="_blank" rel="noopener noreferrer">Ojaswa Varshney</a></p>
                            <p className="member-org">Indian Institute of Information Technology<br/>Surat, India</p>
                        </div>
                    </div>
                </div>

                {/* Publicity Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-bullhorn"></i></span>
                        <h2 className="oc-section-title">Publicity Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2026/GauravShinde.jpg" className="member-photo" alt="Gaurav Shinde" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://gauravys.github.io/" target="_blank" rel="noopener noreferrer">Gaurav Shinde</a></p>
                            <p className="member-org">University of Maryland Baltimore County<br/>Baltimore, USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2026/PranayAgarwal.jpg" className="member-photo" alt="Pranay Agarwal" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://sites.google.com/view/pranay-agarwal/home" target="_blank" rel="noopener noreferrer">Pranay Agarwal</a></p>
                            <p className="member-org">BITS Pilani<br/>Hyderabad Campus, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="https://www.kochi-tech.ac.jp/profile/en/img/shikhar-1.jpg" className="member-photo" alt="Shikhar Verma" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.kochi-tech.ac.jp/profile/en/shikhar.html" target="_blank" rel="noopener noreferrer">Shikhar Verma</a></p>
                            <p className="member-org">Kochi University<br/>Japan</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=CmYwiOUAAAAJ&citpid=2" className="member-photo" alt="Farheen Fauziya" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://people.njit.edu/profile/ff233" target="_blank" rel="noopener noreferrer">Farheen Fauziya</a></p>
                            <p className="member-org">New Jersey Institute of Technology<br/>USA</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-share-alt"></i></span>
                        <h2 className="oc-section-title">Social Media Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/IMG_8225%20-%20Garvit%20Chugh%20(D20CS051).png" className="member-photo" alt="Garvit Chugh" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/garvitchugh98/" target="_blank" rel="noopener noreferrer">Garvit Chugh</a></p>
                            <p className="member-org">IIT Jodhpur<br/>India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Meenu%20-%20Meenu%20Dey.jpg" className="member-photo" alt="Meenu Dey" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/meenu-dey-691653b1/" target="_blank" rel="noopener noreferrer">Meenu Dey</a></p>
                            <p className="member-org">IIIT Bhubaneswar<br/>India</p>
                        </div>
                    </div>
                </div>

                {/* Publication Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-book"></i></span>
                        <h2 className="oc-section-title">Publication Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/PublicationCoChair/Amitalok.JPG" className="member-photo" alt="Amitalok J. Budkuley" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://cse.iitkgp.ac.in/~amitalok/" target="_blank" rel="noopener noreferrer">Amitalok J. Budkuley</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Kharagpur, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/PublicationCoChair/Mainack.JPG" className="member-photo" alt="Mainack Mondal" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://cse.iitkgp.ac.in/~mainack/" target="_blank" rel="noopener noreferrer">Mainack Mondal</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Kharagpur, India</p>
                        </div>
                    </div>
                </div>

                {/* Sponsorship Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-handshake-o"></i></span>
                        <h2 className="oc-section-title">Sponsorship Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2018/giridhar_mandyam.jpg" className="member-photo" alt="Giridhar Mandyam" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/giridharmandyam/" target="_blank" rel="noopener noreferrer">Giridhar Mandyam</a></p>
                            <p className="member-org">Advanced Micro Devices<br/>USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2018/rajeev_shorey.jpg" className="member-photo" alt="Rajeev Shorey" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://in.linkedin.com/pub/rajeev-shorey/6/390/894" target="_blank" rel="noopener noreferrer">Rajeev Shorey</a></p>
                            <p className="member-org">Indian Institute of Information Technology (IIIT)<br/>Surat, India</p>
                        </div>
                    </div>
                </div>

                {/* Registration Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-id-card"></i></span>
                        <h2 className="oc-section-title">Registration Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/chandrika.jpg" className="member-photo" alt="Chandrika Sridhar" loading="lazy" />
                            </div>
                            <p className="member-name">Chandrika Sridhar</p>
                            <p className="member-org">Indian Institute of Science<br/>Bangalore, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2023/sushma.jpg" className="member-photo" alt="Sushma Srinivasan" loading="lazy" />
                            </div>
                            <p className="member-name">Sushma Srinivasan</p>
                            <p className="member-org">Indian Institute of Science<br/>Bangalore, India</p>
                        </div>
                    </div>
                </div>

                {/* Finance Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-money"></i></span>
                        <h2 className="oc-section-title">Finance Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/chandrika.jpg" className="member-photo" alt="Chandrika Sridhar" loading="lazy" />
                            </div>
                            <p className="member-name">Chandrika Sridhar</p>
                            <p className="member-org">Indian Institute of Science<br/>Bangalore, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2022/raj_sharma.jpg" className="member-photo" alt="Raj Sharma" loading="lazy" />
                            </div>
                            <p className="member-name">Raj Sharma</p>
                            <p className="member-org">Walmart Global Tech<br/>India</p>
                        </div>
                    </div>
                </div>

                {/* Local Arrangements Co-Chair */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-map-marker"></i></span>
                        <h2 className="oc-section-title">Local Arrangements Co-Chair</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2022/raj_sharma.jpg" className="member-photo" alt="Raj Sharma" loading="lazy" />
                            </div>
                            <p className="member-name">Raj Sharma</p>
                            <p className="member-org">Walmart Global Tech<br/>India</p>
                        </div>
                    </div>
                </div>

                {/* Overall Workshop Chair */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-wrench"></i></span>
                        <h2 className="oc-section-title">Overall Workshop Chair</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Committee_2025/WorkshopCoChair/Anuradha.JPG" className="member-photo" alt="Anuradha Ravi" loading="lazy" />
                            </div>
                            <p className="member-name">Anuradha Ravi</p>
                            <p className="member-org">University of Maryland Baltimore County<br/>USA</p>
                        </div>
                    </div>
                </div>

                {/* Steering Committee Co-Chairs */}
                <div className="oc-section">
                    <div className="oc-section-header">
                        <span className="oc-section-badge"><i className="fa fa-star"></i></span>
                        <h2 className="oc-section-title">Steering Committee Co-Chairs</h2>
                    </div>
                    <div className="oc-grid">
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/Udaydesai.jpg" className="member-photo" alt="Uday Desai" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="http://www.iith.ac.in/~ubdesai/" target="_blank" rel="noopener noreferrer">Uday Desai</a></p>
                            <p className="member-org">Indian Institute of Technology<br/>Hyderabad, India</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2018/giridhar_mandyam.jpg" className="member-photo" alt="Giridhar Mandyam" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://www.linkedin.com/in/giridharmandyam/" target="_blank" rel="noopener noreferrer">Giridhar Mandyam</a></p>
                            <p className="member-org">Advanced Micro Devices<br/>USA</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-wrap">
                                <img src="/assets/images/committee_2018/rajeev_shorey.jpg" className="member-photo" alt="Rajeev Shorey" loading="lazy" />
                            </div>
                            <p className="member-name"><a href="https://in.linkedin.com/pub/rajeev-shorey/6/390/894" target="_blank" rel="noopener noreferrer">Rajeev Shorey</a></p>
                            <p className="member-org">Indian Institute of Information Technology (IIIT)<br/>Surat, India</p>
                        </div>
                    </div>
                </div>

                {/* Previous Committees */}
                <div className="oc-prev">
                    <h3>Previous Committees</h3>
                    <p>View the organizing committee from <Link href="/archive/2026/organizing_committee.php">COMSNETS 2026</Link> and previous years.</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

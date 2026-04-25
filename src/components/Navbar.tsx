"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (name: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === name ? null : name);
    };

    const isActive = (path: string) => pathname === path ? 'active' : '';

    return (
        <>
            <style dangerouslySetInnerHTML={{__html: `
                /* === MODERN CENTERED NAVBAR — COMSNETS 2027 === */
                #main-menu-container {
                    position: fixed !important;
                    top: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                    max-width: none;
                    margin: 0;
                    z-index: 2147483647 !important;
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                }
                #navbar-primary .navbar {
                    border-radius: 0;
                    border: none;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    background: var(--nav-bg, #0a1628) !important;
                    min-height: 70px;
                    padding: 15px 20px;
                    font-family: 'Inter', 'Outfit', 'Segoe UI', sans-serif;
                    transition: background-color 0.3s ease;
                }
                .navbar-inverse {
                    background-color: transparent;
                    border-color: transparent;
                }
                #navbar-primary .navbar-collapse {
                    text-align: center;
                    width: 100% !important;
                }
                #navbar-primary .navbar-nav {
                    display: inline-flex !important;
                    align-items: center !important;
                    float: none !important;
                    margin: 0 auto !important;
                    padding: 0 !important;
                    list-style: none !important;
                }
                @media (min-width: 768px) {
                    #navbar-primary .navbar-collapse.collapse {
                        display: block !important;
                        height: auto !important;
                        visibility: visible !important;
                        opacity: 1 !important;
                    }
                    .navbar-toggle {
                        display: none !important;
                    }
                }
                #navbar-primary .navbar-nav > li > a {
                    padding: 12px 18px;
                    font-family: 'Inter', 'Segoe UI', sans-serif;
                    font-size: 14px;
                    font-weight: bold;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    color: rgba(255,255,255,0.95) !important;
                    border-radius: 4px;
                    transition: all 0.25s ease;
                    margin: 0 2px;
                    line-height: 1.4;
                    display: block !important;
                    text-decoration: none !important;
                }
                #navbar-primary .navbar-nav > li {
                    display: inline-block !important;
                    float: none !important;
                }
                #navbar-primary .navbar-nav > li > a:hover,
                #navbar-primary .navbar-nav > .open > a {
                    background: rgba(255, 255, 255, 0.12);
                    color: #ffffff !important;
                }
                #navbar-primary .navbar-nav > .active > a,
                #navbar-primary .navbar-nav > .active > a:hover,
                #navbar-primary .navbar-nav > .active > a:focus {
                    background: #ffffff !important;
                    color: #0a1628 !important;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
                }
                .dropdown-menu {
                    border-radius: 16px;
                    border: 1px solid var(--border, rgba(0,0,0,0.08));
                    box-shadow: 0 12px 40px rgba(0,0,0,0.15);
                    margin-top: 8px;
                    padding: 8px 0;
                    font-size: 14px;
                    min-width: 220px;
                    background: var(--dropdown-bg, #fff);
                    transition: background-color 0.3s ease;
                    overflow: hidden;
                    display: none;
                    position: absolute;
                    text-align: left;
                }
                .open > .dropdown-menu {
                    display: block;
                }
                .dropdown-menu > li > a {
                    padding: 9px 20px;
                    color: var(--dropdown-text, #333) !important;
                    font-weight: 500;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    display: block;
                }
                .dropdown-menu > li > a:hover {
                    background: var(--dropdown-hover, #f5f5f5) !important;
                    padding-left: 24px;
                }
                .dropdown-header {
                    font-weight: bold;
                    color: var(--primary, #123456);
                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    padding: 10px 20px 5px;
                    font-family: 'Outfit', 'Inter', sans-serif;
                }
                .caret {
                    display: inline-block;
                    width: 0;
                    height: 0;
                    margin-left: 2px;
                    vertical-align: middle;
                    border-top: 4px dashed;
                    border-right: 4px solid transparent;
                    border-left: 4px solid transparent;
                }
                .divider {
                    height: 1px;
                    margin: 9px 0;
                    overflow: hidden;
                    background-color: #e5e5e5;
                }
            `}} />

            <div className="navbar-sm" id="main-menu-container">
                <div className="navbar-primary" id="navbar-primary">
                    <nav className="navbar navbar-inverse" role="navigation" aria-label="Main Navigation">
                        <div className="container-fluid" style={{ padding: '0 10px' }}>
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation menu">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                                    <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                                    <span className="icon-bar" style={{ display: 'block', width: '22px', height: '2px', backgroundColor: '#fff', borderRadius: '1px', marginTop: '4px' }}></span>
                                </button>
                            </div>

                            <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'in' : ''}`} id="bs-example-navbar-collapse-2">
                                <ul className="nav navbar-nav">
                                    <li className={pathname === '/' ? 'active' : ''}>
                                        <Link href="/">Home</Link>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('about', e)}>About<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className={isActive('/organizing_committee')}><Link href="/organizing_committee#head">Organizing Committee</Link></li>
                                            <li className={isActive('/technical_program_committee')}><Link href="/technical_program_committee#head">Program Committee</Link></li>
                                            <li role="separator" className="divider"></li>
                                            <li><a href="http://www.comsnets-association.org/" target="_blank" rel="noopener noreferrer">COMSNETS Association</a></li>
                                            <li className={isActive('/contact')}><Link href="/contact#head">Contact Us</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'conference' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('conference', e)}>Conference<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className="dropdown-header">Speakers</li>
                                            <li className={isActive('/keynote_speakers')}><Link href="/keynote_speakers#head">Keynote Speakers</Link></li>
                                            <li className={isActive('/invited_speakers')}><Link href="/invited_speakers#head">Invited Speakers</Link></li>
                                            <li role="separator" className="divider"></li>
                                            <li className="dropdown-header">Tracks</li>
                                            <li className={isActive('/panel_discussions')}><Link href="/panel_discussions#head">Panel Discussions</Link></li>
                                            <li className={isActive('/demos_exhibits')}><Link href="/demos_exhibits#head">Demos &amp; Exhibits</Link></li>
                                            <li className={isActive('/poster_session')}><Link href="/poster_session#head">Poster Session</Link></li>
                                            <li className={isActive('/graduate_forum')}><Link href="/graduate_forum#head">Graduate Forum</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'calls' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('calls', e)}>Calls<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className={isActive('/call_for_papers')}><Link href="/call_for_papers#head">Call for Papers</Link></li>
                                            <li className={isActive('/call_for_participation')}><Link href="/call_for_participation#head">Call for Participation</Link></li>
                                            <li className={isActive('/call_for_workshop_proposal')}><Link href="/call_for_workshop_proposal#head">Workshop Proposals</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'sponsors' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('sponsors', e)}>Sponsors<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className={isActive('/sponsorship_opportunities')}><Link href="/sponsorship_opportunities#head">Become a Sponsor</Link></li>
                                            <li className={isActive('/sponsored_events')}><Link href="/sponsored_events#head">Events we Support</Link></li>
                                            <li className={isActive('/trees_14')}><Link href="/trees_14#head">14 Trees Foundation</Link></li>
                                        </ul>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'attending' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('attending', e)}>Attending<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li className={isActive('/registration')}><Link href="/registration#head"><strong>Registration</strong></Link></li>
                                            <li className={isActive('/schedule')}><Link href="/schedule#head">Schedule</Link></li>
                                            <li role="separator" className="divider"></li>
                                            <li className={isActive('/conference_venue')}><Link href="/conference_venue#head">Conference Venue</Link></li>
                                            <li className={isActive('/accommodation')}><Link href="/accommodation#head">Accommodation</Link></li>
                                            <li className={isActive('/visa')}><Link href="/visa#head">Visa Request</Link></li>
                                            <li className={isActive('/travel_grants')}><Link href="/travel_grants#head">Travel Grants</Link></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a href="https://www.comsnets.org/photos.html" target="_blank" rel="noopener noreferrer">Photos</a>
                                    </li>

                                    <li className={`dropdown ${openDropdown === 'archive' ? 'open' : ''}`}>
                                        <a href="#" className="dropdown-toggle" onClick={(e) => toggleDropdown('archive', e)}>Archive<span className="caret"></span></a>
                                        <ul className="dropdown-menu" role="menu" style={{ minWidth: '150px', maxHeight: '300px', overflowY: 'auto' }}>
                                            <li><a href="https://www.comsnets.org/archive/2026/" target="_blank" rel="noopener noreferrer">2026</a></li>
                                            {Array.from({length: 2021 - 2009 + 1}, (_, i) => 2021 - i).map(year => (
                                                <li key={year}><a href={`https://www.comsnets.org/archive/${year}`} target="_blank" rel="noopener noreferrer">{year}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

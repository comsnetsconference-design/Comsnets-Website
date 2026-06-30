import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface MenuItem {
    id: string;
    label: string;
    path: string;
    isExternal?: boolean;
    children?: MenuItem[];
    isSectionHeader?: boolean;
}

export const NAVBAR_COLLECTION = 'settings';
export const NAVBAR_DOC = 'navbar';

export const getNavbarConfig = async (): Promise<MenuItem[] | null> => {
    try {
        if (!db) return null;
        const docRef = doc(db, NAVBAR_COLLECTION, NAVBAR_DOC);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            return docSnap.data().items as MenuItem[];
        }
        return null;
    } catch (error) {
        console.error("Error fetching navbar config:", error);
        return null;
    }
};

export const saveNavbarConfig = async (items: MenuItem[]): Promise<boolean> => {
    try {
        if (!db) return false;
        const docRef = doc(db, NAVBAR_COLLECTION, NAVBAR_DOC);
        await setDoc(docRef, { items, updatedAt: new Date().toISOString() });
        return true;
    } catch (error) {
        console.error("Error saving navbar config:", error);
        return false;
    }
};

// Default structure as fallback (kept in sync with the live Firestore menu
// so the first paint matches the loaded menu -- no swap/flash on load).
export const DEFAULT_NAVBAR: MenuItem[] = [
    { id: 'home', label: 'Home', path: '/' },
    {
        id: 'about', label: 'About', path: '#', children: [
            { id: 'oc', label: 'Organizing Committee', path: '/organizing_committee' },
            { id: 'tpc', label: 'Program Committee', path: '/technical_program_committee' },
            { id: 'assoc', label: 'COMSNETS Association', path: 'http://www.comsnets-association.org/', isExternal: true },
            { id: 'contact', label: 'Contact Us', path: '/contact' }
        ]
    },
    {
        id: 'conference', label: 'Conference', path: '#', children: [
            { id: 'sp-header', label: 'Speakers', path: '#', isSectionHeader: true },
            { id: 'keynote', label: 'Keynote Speakers', path: '/keynote_speakers' },
            { id: 'invited', label: 'Invited Speakers', path: '/invited_speakers' },
            { id: 'tr-header', label: 'Tracks', path: '#', isSectionHeader: true },
            { id: 'plenary', label: 'Plenary Debate', path: '/plenary_debate' },
            { id: 'eis', label: 'Entrepreneur Ignite Summit (EIS)', path: '/eis' },
            { id: 'demos', label: 'Demos & Exhibits', path: '/demos_exhibits' },
            { id: 'poster', label: 'Poster Session', path: '/poster_session' },
            { id: 'graduate', label: 'Graduate Forum', path: '/graduate_forum' },
            { id: 'sqst', label: 'SQST', path: '/sqst' }
        ]
    },
    {
        id: 'workshops', label: 'Workshops', path: '#', children: [
            { id: 'ws-all', label: 'All Workshop Overview', path: '/workshops' },
            { id: 'ws-sep', label: '_____________________________', path: '#' },
            { id: 'ws-minds', label: 'MINDS', path: '/minds_workshop' },
            { id: 'ws-csp', label: 'CSP', path: '/cybersecurity_and_privacy_workshop' },
            { id: 'ws-sdr', label: 'SDR', path: '/standards-driven_research' },
            { id: 'ws-advnet', label: 'ADVnet', path: '/ADVnet' },
            { id: 'ws-sysai', label: 'SysAI', path: '/SysAI' },
            { id: 'ws-iart', label: 'I+ART', path: '/iart' }
        ]
    },
    {
        id: 'calls', label: 'Calls', path: '#', children: [
            { id: 'cfp', label: 'Call for Papers', path: '/call_for_papers' },
            { id: 'cfpar', label: 'Call for Participation', path: '/call_for_participation' },
            { id: 'cfw', label: 'Workshop Proposals', path: '/call_for_workshop_proposal' }
        ]
    },
    {
        id: 'sponsors', label: 'Sponsors', path: '#', children: [
            { id: 'become', label: 'Become a Sponsor', path: '/sponsorship_opportunities' },
            { id: 'sup', label: 'Events we Support', path: '/sponsored_events' },
            { id: 'trees', label: '14 Trees Foundation', path: '/trees_14' }
        ]
    },
    {
        id: 'attending', label: 'Attending', path: '#', children: [
            { id: 'reg', label: 'Registration', path: '/registration' },
            { id: 'sch', label: 'Schedule', path: '/schedule' },
            { id: 'venue', label: 'Conference Venue', path: '/conference_venue' },
            { id: 'acc', label: 'Accommodation', path: '/accommodation' },
            { id: 'visa', label: 'Visa Request', path: '/visa' },
            { id: 'grants', label: 'Travel Grants', path: '/travel_grants' }
        ]
    },
    { id: 'keynotes', label: 'Keynotes', path: '/keynote_speakers' },
    { id: 'photos', label: '2026 Photos', path: 'http://archive.comsnets.org/photos.html', isExternal: true },
    {
        id: 'archive', label: 'Archive', path: '#', children: [
            { id: '2026', label: '2026', path: 'http://archive.comsnets.org/archive/2026/', isExternal: true },
            { id: '2025', label: '2025', path: 'http://archive.comsnets.org/archive/2025/', isExternal: true },
            { id: '2024', label: '2024', path: 'http://archive.comsnets.org/archive/2024/', isExternal: true },
            { id: '2023', label: '2023', path: 'http://archive.comsnets.org/archive/2023/', isExternal: true },
            { id: '2022', label: '2022', path: 'http://archive.comsnets.org/archive/2022/', isExternal: true },
            { id: '2021', label: '2021', path: 'http://archive.comsnets.org/archive/2021/', isExternal: true },
            { id: '2020', label: '2020', path: 'http://archive.comsnets.org/archive/2020/', isExternal: true },
            { id: '2019', label: '2019', path: 'http://archive.comsnets.org/archive/2019/', isExternal: true },
            { id: '2018', label: '2018', path: 'http://archive.comsnets.org/archive/2018/', isExternal: true },
            { id: '2017', label: '2017', path: 'http://archive.comsnets.org/archive/2017/', isExternal: true },
            { id: '2016', label: '2016', path: 'http://archive.comsnets.org/archive/2016/', isExternal: true },
            { id: '2015', label: '2015', path: 'http://archive.comsnets.org/archive/2015/', isExternal: true },
            { id: '2014', label: '2014', path: 'http://archive.comsnets.org/archive/2014/', isExternal: true },
            { id: '2013', label: '2013', path: 'http://archive.comsnets.org/archive/2013/', isExternal: true },
            { id: '2012', label: '2012', path: 'http://archive.comsnets.org/archive/2012/', isExternal: true },
            { id: '2011', label: '2011', path: 'http://archive.comsnets.org/archive/2011/', isExternal: true },
            { id: '2010', label: '2010', path: 'http://archive.comsnets.org/archive/2010/', isExternal: true },
            { id: '2009', label: '2009', path: 'http://archive.comsnets.org/archive/2009/', isExternal: true }
        ]
    }
];

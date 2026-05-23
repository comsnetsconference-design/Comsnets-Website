import { db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export interface MenuItem {
    id: string;
    label: string;
    path: string;
    isExternal?: boolean;
    children?: MenuItem[];
    isSectionHeader?: boolean;
    isArchive?: boolean;
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

// Default structure as fallback. Mirrors the live Firestore `settings/navbar` doc
// so SSR's first paint matches what the client fetches -> no flash, both pages identical.
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
            { id: 'plenary', label: 'Planetary Debate', path: '/plenary_debate' },
            { id: 'panel', label: 'Panel Discussions', path: '/panel_discussions' },
            { id: 'demos', label: 'Demos & Exhibits', path: '/demos_exhibits' },
            { id: 'poster', label: 'Poster Session', path: '/poster_session' },
            { id: 'graduate', label: 'Graduate Forum', path: '/graduate_forum' }
        ]
    },
    {
        id: 'workshops', label: 'Workshops', path: '/', children: [
            { id: 'ws-overview', label: 'All Workshops Overview', path: '/workshops' },
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
            { id: 'cfd', label: 'Call for Demos & Exhibits', path: '/demos_exhibits' },
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
    { id: 'photos', label: 'Photos', path: 'https://www.comsnets.org/photos.html', isExternal: true },
    { id: 'archive', label: 'Archive', path: '#', isArchive: true, children: [] } as any
];

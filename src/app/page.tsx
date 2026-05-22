import Hero from '@/components/Hero';
import Memories from '@/components/Memories';
import AboutSection from '@/components/AboutSection';
import PhotosGrid from '@/components/PhotosGrid';
import VenueCard from '@/components/VenueCard';
import Sidebar from '@/components/Sidebar';
import CTAStrip from '@/components/CTAStrip';
import CFPDownload from '@/components/CFPDownload';
import KeynoteSpeakers from '@/components/KeynoteSpeakers';

export default function Home() {
  return (
    <>
      {/* ══ HERO ══ */}
      <Hero />

      {/* ══ BODY ══ */}
      <div className="hp-body">
        <div className="hp-body-inner">
          
          {/* ▌ MAIN */}
          <main className="hp-main">
            <CFPDownload />
            <Memories />
            <KeynoteSpeakers />
            <AboutSection />
            <PhotosGrid />
            <VenueCard />
          </main>

          {/* ▌ SIDEBAR */}
          <Sidebar />

        </div>{/* /hp-body-inner */}
      </div>{/* /hp-body */}

      {/* ══ CTA STRIP ══ */}
      <CTAStrip />
    </>
  );
}


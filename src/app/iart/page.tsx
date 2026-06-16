export const metadata = { title: 'I+ART: Industry-Academia Research Track | COMSNETS 2027' };

export default function IartPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="event-page">

          <div className="event-hero">
            <h1>I+ART: Industry-Academia Research Track</h1>
            <div className="event-details">COMSNETS 2027</div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Track Overview</h3>
            <p className="text-justify">We live in exciting times, witnessing an extremely rapid pace of growth of demanding applications such as networked robotics, industrial wireless networking, connected and intelligent devices, AR/VR/XR-based games and applications. Increasingly, it is the industry that is first confronted with the need to deliver the advances required in current technology, and the requirements for next generation technology. On the other hand, academia, with their years of study, teaching, and research are superbly positioned to explore and enable fundamental and generalized solutions to these problems, and thereby also drive their own research agendas. Successful R&D ecosystems around the world have understood the importance of the academia-industry interface. It is with this in mind that I+ART will bring together top industry experts and researchers from academia to share their understanding of upcoming open problems and research-driven solutions.</p>
            <p className="text-justify">High-speed wireless networks rely fundamentally on efficient and reliable wireless PHY layer mechanisms, which have evolved today to be able to support tens of gigabits per second in both cellular and Wi-Fi systems. On the other hand, support of demanding applications, such as AR/XR, edge-controlled robot swarms, etc., will require efficient application-aware networking, that should adopt more and more techniques from reinforcement learning and AI/ML.</p>
            <p className="text-justify">I+ART in COMSNETS 2027 will focus on the evolution of next-generation communications systems and application-aware networks, bringing together researchers from academia and industry to bridge the gap between basic theory and real-world deployment.</p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Important Dates</h3>
            <div className="dates-timeline">
              <div className="date-step"><div className="dot">1</div><div className="lab">Event Date</div><div className="val">January 2027</div></div>
              <div className="date-step"><div className="dot">2</div><div className="lab">Call for Papers / Contributions</div><div className="val">To be announced</div></div>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">I+ART: Industry-Academia Research Track Co-Chairs</h3>
            <div className="member-grid">
              <div className="member-card">
                <img src="/assets/images/Committee_2025/IART/Anurag.jpg" alt="Anurag Kumar" className="member-photo" />
                <div className="member-name"><a href="https://ece.iisc.ac.in/anurag/" target="_blank" rel="noopener noreferrer">Anurag Kumar</a></div>
                <p className="member-affil">Indian Institute of Science<br />Bangalore, India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

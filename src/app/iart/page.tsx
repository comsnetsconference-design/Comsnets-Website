export const metadata = { title: 'I+ART: Industry-Academia Research Track | COMSNETS 2027' };

export default function IartPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .event-hero {
          background: linear-gradient(135deg, #557AAB 0%, #1E4165 100%);
          color: white;
          border-radius: 16px;
          padding: 2rem 2rem;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
          margin-bottom: 2rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }
        .event-hero h1 {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(90deg, #fff 30%, #d1c4e9 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.5rem;
          margin-bottom: 0.3rem;
        }
        .event-hero p.lead {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          color: #d8ccff;
        }
        .event-hero .event-details {
          font-size: 1.1rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          margin-top: 0.5rem;
          display: inline-block;
          border-radius: 9999px;
        }
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #2A4D75;
          letter-spacing: 1.2px;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #678DC2;
          display: inline-block;
          padding-bottom: 6px;
        }
      `}} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              
              <div className="event-hero">
                <h1>I+ART: Industry-Academia Research Track</h1>
                <div className="event-details">
                  COMSNETS 2027
                </div>
              </div>
              
              <hr />

              <h3 className="section-title">Track Overview</h3>
              
              <p className="text-justify">We live in exciting times, witnessing an extremely rapid pace of growth of demanding applications such as networked robotics, industrial wireless networking, connected and intelligent devices, AR/VR/XR-based games and applications. Increasingly, it is the industry that is first confronted with the need to deliver the advances required in current technology, and the requirements for next generation technology. On the other hand, academia, with their years of study, teaching, and research are superbly positioned to explore and enable fundamental and generalized solutions to these problems, and thereby also drive their own research agendas. Successful R&D ecosystems around the world have understood the importance of the academia-industry interface. It is with this in mind that I+ART will bring together top industry experts and researchers from academia to share their understanding of upcoming open problems and research-driven solutions.</p>
              
              <p className="text-justify">High-speed wireless networks rely fundamentally on efficient and reliable wireless PHY layer mechanisms, which have evolved today to be able to support tens of gigabits per second in both cellular and Wi-Fi systems. On the other hand, support of demanding applications, such as AR/XR, edge-controlled robot swarms, etc., will require efficient application-aware networking, that should adopt more and more techniques from reinforcement learning and AI/ML.</p>
              
              <p className="text-justify">I+ART in COMSNETS 2027 will focus on the evolution of next-generation communications systems and application-aware networks, bringing together researchers from academia and industry to bridge the gap between basic theory and real-world deployment.</p>
              
              <hr />

              <h3 className="section-title">Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Event Date:</strong> <span style={{ color: 'black' }}>January 2027</span></td>
                  </tr>
                  <tr>
                    <td><strong>Call for Papers / Contributions:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                </tbody>
              </table>
              
              <hr />

              <div className="organizing-committee-page center-block"> 
                <h3 className="text-center section-title" style={{ display: 'block', borderBottom: 'none', margin: '0 auto 20px' }}>I+ART: Industry-Academia Research Track Co-Chairs</h3>             
                <div className="row">
                  <div className="col-lg-12 col-md-12 text-center">
                    <div style={{ display: 'inline-block', margin: '0 auto' }}>
                      <img 
                        src="/assets/images/Committee_2025/IART/Anurag.jpg" 
                        className="thumbnail" 
                        alt="Anurag Kumar" 
                        style={{ 
                          WebkitBoxShadow: '10px 10px 5px #BDBDBD', 
                          boxShadow: '10px 10px 5px #BDBDBD',
                          height: '200px', 
                          width: '170px', 
                          margin: '0 auto 10px' 
                        }} 
                      />
                      <div className="caption text-center">
                        <h4>
                          <a href="https://ece.iisc.ac.in/anurag/" target="_blank" rel="noopener noreferrer">Anurag Kumar</a>
                        </h4>
                        <p>Indian Institute of Science<br />Bangalore, India</p>
                      </div>
                    </div>
                  </div> 
                </div>
              </div> 
              
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

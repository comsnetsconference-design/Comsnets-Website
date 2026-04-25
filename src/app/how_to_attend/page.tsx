export const metadata = { title: 'How to Attend | COMSNETS 2027' };

// DISABLED in source PHP via disable_page(). Original content was virtual conference instructions
// for COMSNETS 2021 (Airmeet platform). Preserved here as a JSX comment block for future reference.
// TODO: fill content for 2027 — likely covers in-person + virtual attendee instructions.

export default function HowToAttendPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>How to Attend</h1>
              <p className="text-center" style={{ padding: '40px 20px', fontSize: '18px', color: '#64748b' }}>
                Information on how to attend COMSNETS 2027 will be announced soon. Stay tuned for updates.
              </p>
              {/* DISABLED: Original 2021 content (Airmeet virtual conference instructions)

                Sections covered in source PHP:
                - PDF download link to instructions
                - Access links for main conference (Jan 6-8), tutorials (Jan 4 & 11), and workshops (MINDS, LastMileS, CyberSecurity & Blockchain, ITS, NetHealth)
                - Instructions for registered participants (pre-authorization, gmail Forum check, contact comsnets.conference@gmail.com for help)
                - Tips for Airmeet attendees: laptop preferred, Chrome browser, stable broadband, disable VPN/Firewall, mic/camera permissions
                - FAQ images at /assets/images/faq/image.png and Image 1-6.jpg
                - Navigating the Conference: reception, sessions, Q&A panel, lounge, arena (demos & posters)
                - Navigating Workshops & Tutorials: single track events with social tables
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

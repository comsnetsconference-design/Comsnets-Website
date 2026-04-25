export const metadata = { title: 'LastMileS Workshop | COMSNETS 2027' };

// DISABLED in source PHP via disable_page(). Original was the Workshop on "Last-mile" Challenges
// and Standardization Opportunities in Smart Infrastructure (last edition: 4 January 2022).
// Preserved as JSX comment. TODO: fill content for 2027 once chairs/dates/papers are confirmed.

export default function LastmilesWorkshopPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Workshop on &quot;Last-mile&quot; Challenges and Standardization Opportunities in Smart Infrastructure</h1>
              <p className="text-center" style={{ padding: '40px 20px', fontSize: '18px', color: '#64748b' }}>
                The LastMileS Workshop at COMSNETS 2027 will be announced soon. Stay tuned for updates.
              </p>
              {/* DISABLED: Original 2022 LastMileS Workshop content

                Held 4 January 2022 at Sigma Hall 3. Sections in source PHP:
                - Schedule with invited talks (Dr. Aaditeshwar Seth; Jatin Parekh on IEEE 802.11 vs 3GPP; Dr. Rohit Verma on Smart Cities Digital Infrastructure; Dr. Rabin Patra on Fixed Wireless for Broadband)
                - Keynote: Dr. Iqbal Mohomed on Building AI Applications in the Home
                - Papers: Orchestrating Resilient Communication Topology for Smart Connected Cities; Efficient Last-Mile Link Adaptation in Next-Gen Wireless Heterogeneous Networks; What Slowed Down My App (Smartphone Apps Response Times in India); PIM2R: Packet Interactive Multi-Media Response; VISTA: Video Tile Sampling for Traffic Surveillance
                - Keynote speakers section (rendered from $lastmiles_keynote_speakers via speakers_data.php)
                - Accepted papers (rendered from accepted_paper_data.php)
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

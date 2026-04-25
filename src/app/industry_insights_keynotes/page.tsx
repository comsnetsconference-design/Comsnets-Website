export const metadata = { title: 'Industry Insights Keynotes | COMSNETS 2027' };

export default function IndustryInsightsKeynotesPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Industry Insights Keynotes</h1>
              {/* TODO: speaker list is dynamic from speakers_data.php in PHP source — populate industry_invited_speakers for 2027 */}
              <p>The Industry Insights Keynotes for COMSNETS 2027 will be announced soon. Please check back later for speaker bios, talk titles, and abstracts.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

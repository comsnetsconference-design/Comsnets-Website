export const metadata = { title: 'Publication Files | COMSNETS 2027' };

export default function PublicationsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Publication Files</h1>
              {/* TODO: fill content for 2027 -- original PHP page was a password-protected stub
                  that included tpl/panel_discussions.php with toggle JS. Public-facing content
                  was a single placeholder paragraph. Re-implement once content is finalized. */}
              <p><strong>Page will be updated shortly!</strong></p>
              <p>This section will host publication files and protected content for COMSNETS 2027 attendees. Please check back soon.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

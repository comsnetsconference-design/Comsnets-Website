export const metadata = { title: 'Volunteers | COMSNETS 2027' };

// TODO: fill content for 2027 — original PHP iterated $volunteers array from volunteer_data.php
// to render thumbnail cards (image, name, affiliation) in a 3-column grid.

export default function VolunteersPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Volunteers</h1>
              <p className="text-center" style={{ padding: '40px 20px', fontSize: '18px', color: '#64748b' }}>
                The list of volunteers for COMSNETS 2027 will be announced soon. Stay tuned for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

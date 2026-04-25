export const metadata = { title: 'Photos | COMSNETS 2027' };

interface Album {
  id: string;
  title: string;
  date: string;
  type: string;
  link: string;
}

const albums: Album[] = [
  {
    id: 'day1',
    title: 'Day 1',
    date: 'Jan 6',
    type: 'Workshops',
    link: 'https://photos.google.com/share/AF1QipOIBNCAHSUhHt_okA8OZXUc-z-24zbMzjuAmMGYCoKXMb0vbSx_b8_jUQN-bFZqVg?key=b1Z1bFlzSkoyWUlaN3lIQnhEajhDOXRyeXVFSHJR',
  },
  { id: 'day2', title: 'Day 2', date: 'Jan 7', type: 'Main Conference', link: 'https://photos.app.goo.gl/KtHtgg9aHxPQYdKTA' },
  { id: 'day3', title: 'Day 3', date: 'Jan 8', type: 'Main Conference', link: 'https://photos.app.goo.gl/nkQRzVpES2ZCH6NQ9' },
  { id: 'day4', title: 'Day 4', date: 'Jan 9', type: 'Main Conference', link: 'https://photos.app.goo.gl/A7ph3dYP6fJn3JTE6' },
  { id: 'day5', title: 'Day 5', date: 'Jan 10', type: 'Workshops', link: 'https://photos.app.goo.gl/pwWoBAHcNqSFJ2qM8' },
];

export default function PhotosPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <div style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '1px solid #e1e4e8', paddingBottom: '20px' }}>
                <div style={{ color: '#123456', fontWeight: 800, fontSize: '28px', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }}>
                  COMSNETS 2026 Gallery
                </div>
                <div style={{ color: '#666', fontSize: '16px' }}>Capturing moments from the 18th International Conference</div>
              </div>

              <div className="alert alert-info" style={{ marginBottom: '20px' }}>
                Photos from COMSNETS 2027 will appear here after the conference. Below are the archived galleries from COMSNETS 2026.
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
                {albums.map((album) => (
                  <div
                    key={album.id}
                    style={{
                      background: '#fff',
                      border: '2px solid #e1e4e8',
                      borderRadius: '20px',
                      padding: '25px',
                      textAlign: 'center',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    }}
                  >
                    <h4 style={{ color: '#123456', marginTop: 0 }}>
                      {album.title} &mdash; {album.date}
                    </h4>
                    <p style={{ color: '#666', marginBottom: '20px' }}>{album.type}</p>
                    <a
                      href={album.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '10px 25px',
                        background: '#123456',
                        color: '#fff',
                        borderRadius: '30px',
                        fontWeight: 700,
                        fontSize: '13px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        textDecoration: 'none',
                      }}
                    >
                      View Full Gallery <i className="fa fa-external-link" style={{ marginLeft: '8px' }}></i>
                    </a>
                  </div>
                ))}
              </div>
              {/* TODO: fill content for 2027 -- original 2026 gallery used PHP-generated thumbnail grids per album */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

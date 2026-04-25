export const metadata = { title: 'COMSNETS History | COMSNETS 2027' };

const years = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2012', '2009'];

export default function HistoryPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>COMSNETS History</h1>

              <p>Selected pictures depicting the journey of COMSNETS.</p>

              {/* TODO: image listings were generated dynamically from /assets/images/{year}/ folders by PHP opendir/readdir.
                  In Next.js this should either be: (1) a build-time glob via fs.readdirSync in a server component, or
                  (2) a static manifest. For now, we render the year section headers; populate gallery images for 2027. */}

              {years.map((year) => (
                <div key={year} style={{ width: '100%', margin: 'auto' }}>
                  <br />
                  <br />
                  <h4 style={{ textAlign: 'center', background: 'lightgrey', color: 'black' }}>
                    {year === '2012' || year === '2009' ? 'Previous Years' : `COMSNETS ${year}`}
                  </h4>
                  <div className="gallery" style={{ textAlign: 'center', padding: '10px 0' }}>
                    {/* Gallery images for /assets/images/{year}/ -- to be populated */}
                    <p style={{ color: '#888', fontStyle: 'italic' }}>Photos from COMSNETS {year} will appear here.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

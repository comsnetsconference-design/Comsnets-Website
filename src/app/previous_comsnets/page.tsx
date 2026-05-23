export const metadata = { title: 'Previous COMSNETS | COMSNETS 2027' };

const years = [
  '2023', '2022', '2021', '2020', '2019', '2018', '2017',
  '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',
];

export default function PreviousComsnetsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Previous COMSNETS</h1>
              <p>Browse archives from previous editions of the COMSNETS conference.</p>
              <div className="row">
                {years.map((y) => (
                  <div key={y} className="col-xs-6 col-sm-4 col-md-3" style={{ marginBottom: '10px' }}>
                    <a
                      href={`http://www.comsnets.org/archive/${y}/${y === '2023' ? 'index.html' : ''}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-default btn-block"
                    >
                      COMSNETS {y}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

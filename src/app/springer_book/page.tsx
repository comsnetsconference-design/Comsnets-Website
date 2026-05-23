export const metadata = { title: 'Springer Book | COMSNETS 2027' };

export default function SpringerBookPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Springer Book</h1>
              <div className="alert alert-info alert-compact" id="springer_pub">
                <a target="_blank" rel="noopener noreferrer" href="https://link.springer.com/book/10.1007/978-3-319-67235-9">The COMSNETS 2017 proceedings volume is now available on SpringerLink</a>
              </div>
              <p>
                The book <a target="_blank" rel="noopener noreferrer" href="https://link.springer.com/book/10.1007/978-3-319-67235-9">Communication Systems and Networks</a> constitutes the refereed post-conference proceedings of the 9th International Conference on Communication Systems and Networks, COMSNETS 2017, held in Bengaluru, India, in January 2017. The 9 invited and 10 selected best papers have been carefully reviewed and selected from 192 submissions. They cover various topics in networking and communications systems.
              </p>
              <p>
                Conference participants would get 4 weeks free access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

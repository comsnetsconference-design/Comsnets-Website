export const metadata = { title: 'Entrepreneurship in Big Tech | COMSNETS 2027' };

export default function IgniteBigTalkPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneurship in Big Tech</h1>
              <div className="alert alert-info">
                <strong>Coming Soon</strong> &mdash; Details of the Ignite Big Tech Talk for COMSNETS 2027 will be posted here.
              </div>
              {/* TODO: fill content for 2027 -- archived 2024 speaker preserved below */}
              {/*
                <div className="container">
                  <div className="image-section">
                    <img src="/assets/images/ignite2024/shiv_saini.jpg" alt="Shiv Soni" style={{ width: '200px', height: '200px' }} />
                  </div>
                  <div className="details-section">
                    <p>
                      <u><a href="https://research.adobe.com/person/shiv-kumar-saini/" target="_blank" rel="noopener noreferrer">Shiv Soni</a></u>, Adobe Research
                    </p>
                    <p>Title: Navigating the Research-Product Divide in Innovation</p>
                    <p>25 minutes presentation + 10 minutes Q&A</p>
                    <p>Being a researcher means facing many hurdles when trying to create innovations that truly impact products. This talk will break down the tough parts of making impactful products in a research lab. The talk highlights first-hand lessons and solutions learned from the vantage point of a researcher. These lessons include the importance of timing, how to improve communication between researchers and product leaders, and why failing fast is sometimes the best move and how to plan for it.</p>
                  </div>
                </div>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

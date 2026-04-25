export const metadata = { title: 'Entrepreneurship Talk | COMSNETS 2027' };

export default function EntrepreneurshipTalkPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Entrepreneurship Talk</h1>
              {/* TODO: refresh entrepreneurship talk speaker for 2027 */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: "'Comic Neue', cursive", fontWeight: 'bold' }}>
                <div style={{ padding: '20px' }}>
                  <img src="/assets/images/ignite2024/shiv_saini.png" alt="Shiv Saini" style={{ width: '200px', height: '200px' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ margin: 0 }}>
                    <a href="https://research.adobe.com/person/shiv-kumar-saini/" target="_blank" rel="noopener noreferrer">Shiv Soni</a>, Adobe Research
                  </h3>
                  <div style={{ textAlign: 'left' }}>
                    <p>Title: Navigating the Research-Product Divide in Innovation</p>
                    <p>25 minutes presentation + 10 minutes Q&amp;A</p>
                    <p>Being a researcher means facing many hurdles when trying to create innovations that truly impact products. This talk will break down the tough parts of making impactful products in a research lab. The talk highlights first-hand lessons and solutions learned from the vantage point of a researcher. These lessons include the importance of timing, how to improve communication between researchers and product leaders, and why failing fast is sometimes the best move and how to plan for it. By navigating these important aspects, this talk aims to empower innovators in their quest to bridge the gap between theoretical exploration and tangible product innovation.</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

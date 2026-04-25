export const metadata = { title: 'Ignite CEO Talk | COMSNETS 2027' };

export default function IgniteCeoTalkPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Ignite CEO Talk</h1>
              <div className="alert alert-info">
                <strong>Coming Soon</strong> &mdash; Details of the Ignite CEO Talk for COMSNETS 2027 will be posted here.
              </div>
              {/* TODO: fill content for 2027 -- archived 2024 speaker preserved below */}
              {/*
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', fontFamily: "'Comic Neue', cursive", fontWeight: 'bold' }}>
                  <div style={{ padding: '20px' }}>
                    <img src="/assets/images/ignite2024/srujan.png" alt="Srujan" style={{ width: '200px', height: '200px' }} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p>
                      <u><a href="https://www.linkedin.com/in/srujanakula" target="_blank" rel="noopener noreferrer">Srujan Akula</a></u>, CEO,
                      <u><a href="https://themoderndatacompany.com/" target="_blank" rel="noopener noreferrer">Modern Data Company</a></u><br />
                      15 minutes presentation + 10 minutes Q&A
                    </p>
                  </div>
                </div>
                <p>
                  Title: Data OS: Entrepreneurial Journey to Creating a new Category of "The Data Product Platform."
                  The future of any business is hiding in its data. Data organization and Data Integration has come a long way from the early days. There are several Data Products and unlocking the trapped value will require organizations to keep developing applications on top of these data products. Modern Data Company envisions a future where any organization can effortlessly build, manage, and share data products, accelerating their time to value.
                  In this talk Srujan Akula, the CEO of Modern Data Company will share our journey and the customer traction, and the lessons learnt along the way and the path forward.
                </p>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

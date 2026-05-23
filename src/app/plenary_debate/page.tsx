export const metadata = { title: 'Plenary Debate | COMSNETS 2027' };

export default function PlenaryDebatePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Plenary Debate</h1>
              <div style={{ background: '#fff', border: '1px solid #e1e1e1', borderRadius: '8px', padding: '30px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                <h2 style={{ color: '#2c3e50', fontWeight: 700, marginTop: 0, marginBottom: '10px' }}>From Algorithms to Agents: What Should the Next Great Computer Scientists Build?</h2>
                <div style={{ color: '#337ab7', fontSize: '18px', fontWeight: 500, marginBottom: '20px' }}>Foundations, Frontiers, and the Networks That Will Carry the Agent Era</div>

                <div style={{ background: '#f8f9fa', borderLeft: '4px solid #337ab7', padding: '15px', margin: '20px 0', fontStyle: 'italic', color: '#555' }}>
                  <strong>The Motion:</strong> This house believes that, in the age of AI agents, the next generation of computer scientists must tear down more than they preserve.
                </div>

                <div className="text-justify" style={{ color: '#444', lineHeight: 1.7, fontSize: '16px' }}>
                  <p>AI agents are forcing computer science to examine itself. The discipline that gave us sorting algorithms, operating systems, and the internet is now confronting systems that write their own code, coordinate with other agents, and reshape the traffic patterns our networks were designed to serve. So, what should the next generation of computer scientists build? Which foundations &mdash; algorithms, protocols, distributed systems, theory &mdash; remain essential as workloads shift from human clicks to agent-to-agent coordination? As inference economics redraw where compute lives? As data centers and networks strain under AI-scale demand? And where does the field need genuinely new ideas, new training, and new ways of thinking about problems that barely existed a few years ago?</p>

                  <div style={{ background: '#e74c3c', color: 'white', padding: '30px', textAlign: 'center', fontSize: '26px', fontWeight: 'bold', borderRadius: '8px', margin: '40px 0', boxShadow: '0 5px 15px rgba(231, 76, 60, 0.4)', lineHeight: 1.4 }}>
                    COMSNETS 2027 will not settle these questions with a panel. We will settle them with a debate!
                  </div>

                  <p>Two teams of academic, industry, and policy leaders will take opposing sides of a single motion. The house will vote before they speak &mdash; and again after. The side that moves the room wins.</p>
                </div>

                <div style={{ marginTop: '40px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
                  <h3 style={{ color: '#2c3e50', fontWeight: 600, marginTop: 0, marginBottom: '15px', fontSize: '22px' }}>Organizer</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '20px', background: '#fdfdfd', padding: '20px', border: '1px solid #eaeaea', borderRadius: '8px', marginBottom: '20px' }}>
                    <img src="/assets/images/somali.jpg" alt="Prof. Somali Chaterji" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #337ab7' }} />
                    <div>
                      <h3 style={{ marginTop: 0, marginBottom: '5px', color: '#2c3e50' }}>Prof. Somali Chaterji</h3>
                    </div>
                  </div>

                  <h3 style={{ color: '#2c3e50', fontWeight: 600, marginTop: 0, marginBottom: '15px', fontSize: '22px' }}>Panelists</h3>
                  <div style={{ paddingLeft: '5px', color: '#444', lineHeight: 1.7, fontSize: '16px' }}>
                    <p><strong>TBD</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

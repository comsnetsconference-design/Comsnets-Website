export const metadata = { title: 'Mentoring Sessions | COMSNETS 2027' };

export default function MentoringSessionsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Mentoring Sessions</h1>

              <div style={{ textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '16px', margin: '20px 0' }}>
                <div style={{ fontSize: '64px', color: '#3b82f6', opacity: 0.3, marginBottom: '20px' }}>
                  <i className="fa fa-users"></i>
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#1e293b', marginBottom: '15px' }}>Coming Soon</h2>
                <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '640px', margin: '0 auto' }}>
                  Content to be enabled for COMSNETS 2027. Mentoring Sessions for the 2024 edition are preserved as a JSX comment below and can be uncommented once the 2027 program is finalized.
                </p>
              </div>

              {/* DISABLED: PHP source had `disable_page();` (not commented). Original 2024 content preserved below. */}
              {/*
              <p>Leveraging on the success of past years, we are again hosting the Mentoring session in COMSNETS 2024 as well. The goal of the mentoring session is to facilitate formalized and structured interactions between undergraduate and graduate students (Mentees) and Mentors from around the world attending COMSNETS 2024. This is a unique opportunity for Mentees to meet, network, and seek mentorship from renowned Mentors.</p>

              <div className="panel panel-default">
                <div className="panel-heading"><h3>Call for Mentors</h3></div>
                <div className="panel-body">
                  <p>We seek eminent researchers in communication systems and networks to participate in these sessions. Students and startups get to interact one-on-one with Keynote speakers, Invited Speakers, Organizing Committee members, IEEE Senior members, etc.</p>
                  <p>Request the mentors to sign up <a href="https://forms.gle/8kRsBx5vzv3KY3PP6" target="_blank" rel="noopener noreferrer">here</a> to help the student or startup community.</p>
                </div>
              </div>

              <div className="panel panel-default">
                <div className="panel-heading"><h3>Mentees Sign Up Form</h3></div>
                <div className="panel-body">
                  <p>If you have a startup or are an undergrad or graduate student, Please register as early as possible, and we would be happy to connect you to the right mentor. Submit your entry through the following <a href="https://forms.gle/6QcFaPkNC3yjQNnG6" target="_blank" rel="noopener noreferrer">form</a>.</p>
                </div>
              </div>

              [Full mentor/mentee directory and historical assignment tables from PHP source preserved in /tmp/prodaudit/mentoring_sessions.php — too long to inline here. Restore from PHP when re-enabling for 2027.]
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'Frequently Asked Questions | COMSNETS 2027' };

interface QA { q: string; a: React.ReactNode; }
interface Section { title: string; items: QA[]; }

const sections: Section[] = [
  {
    title: 'General',
    items: [
      {
        q: 'Is it necessary to have a paper for attending COMSNETS?',
        a: <>No! It is not necessary to have an accepted paper at COMSNETS. You can simply attend the conference by <a href="/registration">registering online</a>.</>,
      },
      {
        q: 'Can I get a Certificate of Participation?',
        a: <>Definitely. Please request Ms. Chandrika at the Registration Desk for the certificate. Note that the certificates will only be given to people who have requested for it.</>,
      },
    ],
  },
  {
    title: 'Registration',
    items: [
      {
        q: 'I have an accepted paper at the conference. What registration do I have to do?',
        a: (
          <>
            <p>For every accepted paper, a FULL registration has to be made.</p>
            <ul>
              <li>The paper authors must register by the camera ready deadline, and at least one author paper must register at the FULL rate (even if that author is a student).</li>
              <li>Every paper (including poster papers and workshop papers) must have a FULL registration (not a student registration).</li>
              <li>We can allow one registration for upto two papers (by the same set of authors). The third paper (whatever be the category) by the same author/s must be registered (therefore, this would be the second registration).</li>
            </ul>
          </>
        ),
      },
      {
        q: "While Registering money got deducted from my account but I didn't get any confirmation email.",
        a: <>Please contact the Registration Desk for assistance. Provide the transaction details (date, amount, transaction ID); the team will verify and confirm your registration manually if needed.</>,
      },
    ],
  },
];

export default function FrequentlyAskedQuestionsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Frequently Asked Questions</h1>
              {sections.map((sec) => (
                <div key={sec.title} style={{ marginBottom: '24px' }}>
                  <h4 style={{ marginTop: '24px' }}>{sec.title}</h4>
                  {sec.items.map((qa, i) => (
                    <div key={i} className="panel panel-default" style={{ marginBottom: '12px' }}>
                      <div className="panel-heading">
                        <h4 className="panel-title">Q. {qa.q}</h4>
                      </div>
                      <div className="panel-body">{qa.a}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

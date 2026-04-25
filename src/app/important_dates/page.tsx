export const metadata = { title: 'Important Dates | COMSNETS 2027' };

interface DateRow {
  label: string;
  date: React.ReactNode;
}

interface DateGroup {
  title: string;
  rows: DateRow[];
}

const groups: DateGroup[] = [
  {
    title: 'Main Conference',
    rows: [
      { label: 'Paper submission deadline', date: <><s>31<sup>st</sup> August, 2025</s>&nbsp;15<sup>th</sup> September, 2025</> },
      { label: 'Notification of Acceptance', date: <>5<sup>th</sup> November, 2025</> },
      { label: 'Camera-ready Submission', date: <>15<sup>th</sup> November, 2025</> },
    ],
  },
  {
    title: 'Posters',
    rows: [
      { label: 'Paper submission deadline', date: <>12<sup>th</sup> November, 2025</> },
      { label: 'Notification of Acceptance', date: <>5<sup>th</sup> December, 2025</> },
      { label: 'Camera-ready Submission', date: <>15<sup>th</sup> December, 2025</> },
    ],
  },
  {
    title: 'Demos & Exhibits',
    rows: [
      { label: 'Paper submission deadline', date: <>10<sup>th</sup> November, 2025</> },
      { label: 'Notification of Acceptance', date: <>5<sup>th</sup> December, 2025</> },
      { label: 'Camera-ready Submission', date: <>15<sup>th</sup> December, 2025</> },
    ],
  },
  {
    title: 'Workshops',
    rows: [
      { label: 'Paper submission deadline', date: <>15<sup>th</sup> October, 2025</> },
      { label: 'Notification of Acceptance', date: <>15<sup>th</sup> November, 2025</> },
      { label: 'Camera-ready Submission', date: <>30<sup>th</sup> November, 2025</> },
    ],
  },
  {
    title: 'Graduate Forum',
    rows: [
      { label: 'Paper submission deadline', date: <>8<sup>th</sup> November, 2025</> },
      { label: 'Notification of Acceptance', date: <>6<sup>th</sup> December, 2025</> },
      { label: 'Camera-ready Submission', date: <>16<sup>th</sup> December, 2025</> },
    ],
  },
];

export default function ImportantDatesPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Important Dates</h1>
              {groups.map((g, i) => (
                <div key={g.title}>
                  <h5><b>{g.title}:</b></h5>
                  <table className="table table-striped table-hover">
                    <tbody>
                      {g.rows.map((r, j) => (
                        <tr key={j}>
                          <td>{r.label}</td>
                          <td>{r.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {i < groups.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'Accepted Proposals | COMSNETS 2027' };

interface AcceptedProposal {
  title: string;
  authors: string;
}

const accepted: AcceptedProposal[] = [
  { title: "Assessing Driver's Behavior considering Surrounding Vehicles' Action", authors: 'Debasree Das and Sugandh Pargal (Indian Institute of Technology Kharagpur, India)' },
  { title: 'A Cognitive IoT Smart Surveillance Framework for Crowd Behavior Analysis', authors: 'Elizabeth B Varghese (Indian Institute of Information Technology and Management - Kerala (IIITM-K), India)' },
  { title: 'Optimization of Polar code designs for industrial wireless communications', authors: 'Yasantha Chamara Samarawickrama (Cork Institute of Technology, Ireland); Victor Cionca (Cork Institute of Technology & Nimbus Centre, Ireland); Susan Rea (Cork Institute of Technology, Ireland); Alan McGibney (Nimbus Centre for Embedded Systems Research & Cork Institute of Technology, Ireland)' },
  { title: 'Towards a blockchain powered IoT data marketplace', authors: 'Pooja Gupta (University of New South Wales, Australia); Volkan Dedeoglu (CSIRO, Australia); Salil S Kanhere (UNSW Sydney, Australia); Raja Jurdak (Queensland University of Technology & CSIRO, Australia)' },
  { title: 'Security Issues in Narrowband-IoT: Towards Green Communication', authors: 'Vinod Kumar (Shri mata Vaishno devi University, India); Rakesh Kumar Jha (School of Electronics and Communication Kakryal & Shri Mata Vaishno Devi University, India); Sanjeev Jain (Shri Mata Vasihno Devi University, India)' },
  { title: 'Indoor RSSI Prediction using Machine Learning for Wireless Networks', authors: 'Nibin Raj (Indian Institute of Space Science and Technology, India)' },
  { title: 'Web Page Classification base on Unsupervised Learning using MIME type Analysis', authors: 'Luis Roberto Jimenez (University of Malaga, Spain)' },
  { title: 'Deep Analysis of Dementia Disorder Using Artificial Intelligence to Improve Healthcare Services', authors: 'D Kavitha (SRM Institute of Science and Technology, India); Mithileysh Sathiyanarayanan (MIT Square, United Kingdom (Great Britain))' },
  { title: 'Unseen Locomotion Mode Detection Problems using Inertial Sensors', authors: 'Rahul Mishra (IIT (BHU) Varanasi, India); Hari Prabhat Gupta (Indian Institute of Technology (BHU) Varanasi, INDIA, India); Tanima Dutta (IIT (BHU) Varanasi, India)' },
  { title: 'Sub-GHz Cooperative Container Stack Estimation', authors: 'Abdil Kaya (University of Antwerp & Fonds Wetenschappelijk Onderzoek - Vlaanderen, Belgium); Maarten Weyn and Rafael Berkvens (University of Antwerp - imec, Belgium)' },
];

export default function AcceptedProposalsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Accepted proposals for the Graduate Student Forum</h1>
              {accepted.length > 0 ? (
                <ol>
                  {accepted.map((a, i) => (
                    <li key={i}>
                      <strong>{a.title}</strong>
                      <p>{a.authors}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p>Page will be updated once the accepted papers have been announced.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

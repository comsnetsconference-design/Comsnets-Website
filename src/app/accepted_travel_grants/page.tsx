export const metadata = { title: 'Accepted Travel Grants | COMSNETS 2027' };

const acceptedInt: [string, string][] = [
  ['Aakanksha Saha', 'MICROSOFT CORPORATION'],
  ['Nour Smaoui', 'University of Houston'],
  ['Ritesh Kumar Singh', 'North South University'],
  ['Saurabh Kumar', 'University of Antwerp - imec IDLab, Antwerp Belgium'],
  ['Bharat S Rawal', 'Chungbuk National University, Korea'],
  ['Shuvam Chakraborty', 'University at Albany'],
  ['Vinay Venkataramanachary', 'Carleton University'],
];

const accepted: [string, string][] = [
  ['Aditya Narayan Ravi', 'Indian Institute of Technology, Bombay'],
  ['Akhil Singh', 'International Institute of Information Technology, Hyderabad, India'],
  ['Anirban Das', 'IIIT Guwahati'],
  ['Anirban Lekharu', 'Indian Institute of Technology Guwahati'],
  ['Anmol Kagrecha', 'IIT Bombay'],
  ['Annapurna Pradhan', 'National Institute of Technology, Rourkela'],
  ['Anupama Rajoriya', 'Indian institute of technology, Kanpur'],
  ['Anurag Satpathy', 'NIT-Rourkela'],
  ['Asit Sahoo', 'National Institute of Technology, Rourkela'],
  ['Avik Banerjee', 'Indian Institute of Engineering Science and Technology, Shibpur'],
  ['B.SOMBABU', 'IIT BOMBAY'],
  ['BISWAJIT MAITY', 'National Institute of Technology, Durgapur, India'],
  ['Dhanesh Raj', 'Amrita Vishwa Vidyapeetham'],
  ['Dr. Sourav Kanti Addya', 'Dept of CSE, National Institute of Technology Karnataka, Surathkal'],
  ['Fehmina Malik', 'IEOR, IIT Bombay'],
  ['Gowri Muraleedharan', 'IIITDM, Kancheepuram'],
  ['Haneet Kour', 'Shri Mata Vaishno Devi University (University Grants Commision)'],
  ['Hardik Gajera', 'DA-IICT'],
  ['Harsh Deshpande', 'Indian Institute of Technology, Bombay'],
  ['HEMA KUMAR YARNAGULA', 'Indian Institute of Technology Guwahati (IIT Guwahati)'],
  ['Ishank Juneja', 'IIT Bombay'],
  ['Jayavignesh Thyagarajan', 'Vellore Institute of Technology, Chennai Campus, India'],
  ['Megha Sahu', 'Indian Institute of Technology Bhilai'],
  ['Misbah shafi', 'Shri Mata Vaishno Devi University, Katra'],
  ['Moustafa Najm', 'Indian Institute of Technology Guwahati'],
  ['Muskan', 'Panjab University'],
  ['Neminath Hubballi', 'IIT Indore'],
  ['Pavan Kumar Reddy Manne', 'Indian Institute of Technology Hyderabad'],
  ['Pratibha Khandait', 'IIT Indore'],
  ['RAKESH KUMAR JHA', 'Shri Mata Vaishno Devi University'],
  ['Ramesh Guntha', 'Amrita Vishwa Vidyapeetham University'],
  ['SANTHOSHKUMAR M', 'IIITDM Kancheepuram'],
  ['Shreyansh Prajapati', 'Qualcomm India Private Limited'],
  ['Siddharth Singhal', 'Delhi Technological University'],
  ['Soumyadeep Datta', 'IIT Kanpur'],
  ['Sourish Gunesh Dhekane', 'Indian Institute of Information Technology Guwahati'],
  ['Swarajya Madhuri Rayavarapu', 'IIT Hyderabad'],
  ['Tanvi Kaple', 'Visvesvaraya National Institute of Technology, Nagpur'],
  ['Tentu Venkatesh', 'IIT Kanpur'],
  ['Utkarsh Chawla', 'Delhi Technological University'],
  ['Vishal Jain', 'IIT BOMBAY'],
  ['YASIN KHAN', 'IIT PATNA'],
  ['Yogesh Dasgaonkar', 'Birla Institute of Technology, Pilani - Goa campus'],
  ['Yoghitha Ramamoorthi', 'IIT Hyderabad'],
  ['Bhavye Sharma', 'Maharja Agarsen Institute of technology'],
];

function GrantTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>SNo.</th>
          <th style={{ width: '35%' }}>Name</th>
          <th>Affiliation</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td><strong>{r[0]}</strong></td>
            <td>{r[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AcceptedTravelGrantsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Accepted Travel Grants</h1>

              <h3>International Travel Grants</h3>
              <GrantTable rows={acceptedInt} />

              <h3>Domestic Travel Grants</h3>
              <GrantTable rows={accepted} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

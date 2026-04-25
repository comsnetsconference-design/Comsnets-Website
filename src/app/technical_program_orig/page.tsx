export const metadata = { title: 'Technical Program (Original) | COMSNETS 2027' };

interface Paper {
  title: string;
  authors: React.ReactNode;
  invited?: boolean;
}

interface Session {
  id: string;
  title: string;
  chair: React.ReactNode;
  room: string;
  papers: Paper[];
}

interface Slot {
  date?: string;
  time?: string;
  sessions: Session[];
}

const slots: Slot[] = [
  {
    date: 'Wednesday, January 8',
    time: '11:45 AM - 1:15 PM',
    sessions: [
      {
        id: 't1-1',
        title: 'T1-1: Network Applications',
        chair: <strong>Nabanita Das; ISI Kolkata</strong>,
        room: 'Room: GBR',
        papers: [
          { title: 'A Distributed V2V-based Virtual Traffic Light System', authors: <>Marco Rapelli, <span>Claudio E. Casetti</span>, and Marcello Sgarbi (Politecnico di Torino, Italy)</>, invited: true },
          { title: 'PHY-Based Key Agreement Scheme Using Audio Networking', authors: 'Dania Qara Bala (Indian Institute of Technology Bombay, India); Bhaskaran Raman (Indian Institute of Technology, Bombay, India)' },
          { title: 'DA-TV: Dynamic Adaptive Television Broadcast for Mobile users', authors: 'Monalisa Ghosh (Indian Institute of Technology, India); Anubhav Choudhary (IIT Kharagpur, India); Chetna Singhal (Indian Institute of Technology Kharagpur, India)' },
          { title: 'PanOpticon: A Comprehensive Benchmarking Tool for Serverless Applications', authors: 'Nikhila Somu (Indian Institute of Technology, Bombay); Nilanjan Daw (Indian Institute of Technology, Bombay, India); Umesh Bellur (Indian Institute of Technology Bombay, India); Purushottam Kulkarni (Indian Institute of Technology, Bombay, India)' },
        ],
      },
      {
        id: 't2-1',
        title: 'T2-1: Machine Learning for Networks',
        chair: <strong>Venkatesh Tamarapalli; IIT Guwahati</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'Deep Learning based Prediction Model for Adaptive Video Streaming', authors: 'Anirban Lekharu (IIT Guwahati, India); K Mouli and Arijit Sur (Indian Institute of Technology Guwahati, India); Arnab Sarkar (Indian Institute of Technology, Guwahati, India)' },
          { title: 'A Distributed Learning Simulation Platform for Edge Hierarchies', authors: 'Alka Bhushan, Aniket Shirke, Govind Lahoti and Umesh Bellur (Indian Institute of Technology Bombay, India)' },
          { title: 'Secrets in Source Code: Reducing False Positives Using Machine Learning', authors: 'Aakanksha Saha, Sneha Kumar Kasera, Vivek Srikumar and Tamara Denning (University of Utah, USA)' },
          { title: 'Unsupervised Anomaly Detection and Root Cause Analysis in Mobile Networks', authors: <>Cheolmin Kim (Northwestern University, USA); <span>Veena B. Mendiratta</span> (NOKIA Bell Labs, USA); Marina Thottan (Bell Labs, USA)</>, invited: true },
        ],
      },
    ],
  },
  {
    date: 'Wednesday, January 8',
    time: '4:00 PM - 5:30 PM',
    sessions: [
      {
        id: 't2-2',
        title: 'T2-2: Pervasive Sensing and Socio-Technical Networks',
        chair: <strong>Amit Kumar Saha; Cisco</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'A Cross-Domain Machine Learning Framework for Scalable Human Activity and Behavior Recognition', authors: <><span>Nirmalya Roy</span>, University of Maryland Baltimore County, USA</>, invited: true },
          { title: 'Semi-supervised Subject Recognition through Pseudo Label Generation in Ubiquitous Sensor Data', authors: 'Sourish Dhekane, Krishnam Vajra and Dip Sankar Banerjee (Indian Institute of Information Technology Guwahati, India)' },
          { title: 'Practical Server-side Indoor Localization: Tackling Cardinality & Outlier Challenges', authors: 'Anuradha Ravi and Archan Misra (Singapore Management University, Singapore)' },
          { title: 'Finding summaries to obtain event phrases from streaming Microblogs using Word Co-occurrence Network', authors: 'Muskan Garg (UIET, India); Mukesh Kumar (Panjab University, India)' },
        ],
      },
    ],
  },
  {
    date: 'Thursday, January 9',
    time: '11:00 AM - 1:00 PM',
    sessions: [
      {
        id: 't1-3',
        title: 'T1-3: 5G Communication',
        chair: <strong>Dola Saha; SUNY Albany</strong>,
        room: 'Room: GBR',
        papers: [
          { title: '5G WIFi - Overview of New Features and Research Prospects', authors: <><span>Sumit Roy</span>, University of Washington, USA</>, invited: true },
          { title: 'Low PAPR DMRS sequence Design for 5G-NR Uplink', authors: 'Sibgath Khan and Koteswara rao Gudimitla (Indian Institute of Technology Hyderabad, India); SaiDhiraj Amuru and Kiran Kuchi (IIT Hyderabad, India)' },
          { title: 'Resource Allocation with Admission Control for GBR and Delay QoS in 5G Network Slices', authors: 'Tulja Vamshi Kiran Buyakar and Harsh Agarwal (Indian Institute of Technology Hyderabad, India); Bheemarjuna Reddy Tamma (IIT Hyderabad, India); Antony Franklin A (Indian Institute of Technology Hyderabad, India)' },
          { title: 'End-to-End Delay Jitter in LTE Uplink: Simple Models, Empirical Validation & Applications', authors: 'Megha Sahu (Indian Institute of Technology Bhilai, India); Arzad Kherani (Indian Institute of Technology, Bhilai, India)' },
          { title: 'Scalable and Fair Resource Sharing Among 5G D2D Users and Legacy 4G Users: A Game Theoretic Approach', authors: 'Sreetama Mukherjee (Jadavpur University, India); Sasthi C. Ghosh (Indian Statistical Institute, India)' },
          { title: 'Removing the PDCCH Bottleneck and Enhancing the Capacity of 4G Massive MIMO Systems', authors: 'Pavan Reddy M. (Indian Institute of Technology Hyderabad, India); Harish Kumar D (IITH, India); SaiDhiraj Amuru and Kiran Kuchi (IIT Hyderabad, India)' },
        ],
      },
      {
        id: 't2-3',
        title: 'T2-3: Cyber Physical Systems',
        chair: <strong>Archan Misra; Singapore Management University</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'CORNET: A Co-Simulation Middleware for Robot Networks', authors: 'Srikrishna Acharya (Robert Bosch Center for Cyberphysical Systems, India); Bharadwaj Amrutur, Yogesh Simmhan, Aditya Gopalan, Parimal Parag and Himanshu Tyagi (Indian Institute of Science, India)' },
          { title: 'PSO-based Rendezvous Point Selection for Delay Efficient Trajectory Formation for Mobile Sink in Wireless Sensor Networks', authors: 'Anjula Mehto (Atal Bihari Vajpayee-Indian Institute of Information Technology and Management, Gwalior, India); Shashikala Tapaswi and K K Pattanaik (Indian Institute of Information Technology and Management, India)' },
          { title: 'Improving Access to Network Resources in IoT Networks', authors: 'Kaumudi Singh (Indian Institute of Science, India); T Venkata Prabhakar (IISc, India); Joy Kuri (Indian Institute of Science, India)' },
          { title: 'Behavior Analysis through Routine Cluster Discovery in Ubiquitous Sensor Data', authors: 'Shivam Tiwari, Manan Sharma, Suchetana Chakraborty and Dip Sankar Banerjee (Indian Institute of Information Technology Guwahati, India)' },
          { title: 'Machine Learning in the Wild: The Case of User-Centered Learning in Cyber Physical Systems', authors: <>Atieh R. Khamesi, Eura Shin and <span>Simone Silvestri</span>, (University of Kentucky, USA)</>, invited: true },
        ],
      },
    ],
  },
  {
    date: 'Thursday, January 9',
    time: '4:00 PM - 5:10 PM',
    sessions: [
      {
        id: 't1-4',
        title: 'T1-4: Network and System Security',
        chair: <strong>Mainack Mondal; IIT Kharagpur</strong>,
        room: 'Room: GBR',
        papers: [
          { title: 'ProxiCar: Proximity-based Secure Digital Key Solution for Cars', authors: <>Girish Revadigar (Huawei Research, Singapore); Chitra Javali (Institute for Infocomm Research (I2R), A*STAR, Singapore); <span>Sanjay Jha</span>, University of NSW, Australia</>, invited: true },
          { title: 'Rand-OFDM: A secured Wireless Signal', authors: 'Hesham Mohammed (University At Albany SUNY, USA); Dola Saha (University at Albany, SUNY, USA)' },
          { title: 'PriVC: Privacy Preserving Verifiable Computation', authors: 'Hardik Gajera (DA-IICT, India); Manik Lal Das (DAIICT, India)' },
        ],
      },
      {
        id: 't2-4',
        title: 'T2-4: Networked Systems',
        chair: <strong>Subhasish Dhal; IIIT Guwhati</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'Opinion Control Competition in a Social Network', authors: 'Mohak Goyal (Qualcomm India Private Limited, India); D. Manjunath (IIT Bombay, India)' },
          { title: '"Please come back later": Benefiting from deferrals in service systems', authors: 'Anmol Kagrecha and Jayakrishnan Nair (IIT Bombay, India)' },
          { title: 'Context-Aware Design of Cyber-Physical Human Systems (CPHS)', authors: <><span>Supratik Mukhopadhyay</span>, Qun Liu, Edward Collier, Yimin Zhu, Ravindra Gudishala and Chanachok Chokwitthaya (Louisiana State University, USA); Robert DiBiano (Ailectric, USA); Alimire Nabijiang and Sanaz Saeidi (Louisiana State University, USA); Subhajit Sidhanta (Indian Institute of Technology Bhilai, India); Arnab Ganguly (Louisiana State University, USA)</>, invited: true },
        ],
      },
    ],
  },
  {
    date: 'Friday, January 10',
    time: '11:30 AM - 1:00 PM',
    sessions: [
      {
        id: 't1-5',
        title: 'T1-5: Network Core',
        chair: <strong>Alok Ranjan; Virginia Commonwealth University, USA</strong>,
        room: 'Room: GBR',
        papers: [
          { title: 'Design and analysis of fast IP address-lookup schemes based on cooperation among routers', authors: <>Ganesh Chennimalai Sankaran (IIT Madras, India); <span>Krishna M. Sivalingam</span> (Indian Institute of Technology Madras, India)</>, invited: true },
          { title: 'SBL-Based Interference Cancellation And Data Recovery For Uplink C-RAN', authors: 'Anupama Rajoriya and Vidushi Katiyar (Indian Institute of Technology, Kanpur, India); Rohit Budhiraja (IIT Kanpur, India)' },
          { title: 'Study and Mitigation of Platform Related UWB Ranging Errors', authors: 'Nour Smaoui, Kyungki Kim and Omprakash Gnawali (University of Houston, USA)' },
          { title: 'Effects of Sensing & Control Errors on Quality of Adaptation in Networked Systems', authors: 'Kaliappa Ravindran (City University of New York, USA); Arun Adiththan (General Motors, USA)' },
        ],
      },
      {
        id: 't2-5',
        title: 'T2-5: Internet of Anythings',
        chair: <strong>Prasant Misra; TCS Research and Innovation, Bangalore, India</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'BH-MAC: An efficient Hybrid MAC Protocol for Vehicular Communication', authors: 'Saurabh Kumar (Chungbuk National University, South Korea); HyungWon Kim (Chungbuk National University & College of Electrical and Computer Engineering, South Korea)' },
          { title: 'ROSE: Random Opportunistic and Selective Exploration for Cooperative Edge Swarm of UAVs', authors: 'Sudip Misra (Indian Institute of Technology-Kharagpur, India); Anandarup Mukherjee (Indian Institute of Technology, Kharagpur, India); Aniq Ur Rahman (National Institute of Technology Durgapur, India); Narendra Singh Raghuwanshi (Indian Institute of Technology Kharagpur, India)' },
          { title: 'Charge Scheduling in Wireless Rechargeable Sensor Networks Using Mobile Charging Vehicles', authors: 'Rohit Kumar and Joy Chandra Mukherjee (Indian Institute of Technology Bhubaneswar, India)' },
          { title: 'A journey in applying blockchain for cyberphysical systems', authors: <>Volkan Dedeoglu (CSIRO, Australia); Ali Dorri (Queensland University of Technology); Raja Jurdak (Queensland University of Technology & University of Queensland, Australia); Regio Michelin (University of New South Wales, Australia); Roben Castagna Lunardi (PUCRS & IFRS, Brazil); <span>Salil S Kanhere</span> (UNSW Sydney, Australia); Avelino Zorzo (PUCRS, Brazil)</>, invited: true },
        ],
      },
    ],
  },
  {
    date: 'Friday, January 10',
    time: '2:00 PM - 3:30 PM',
    sessions: [
      {
        id: 't1-6',
        title: 'T1-6: Algorithms for Networking Systems',
        chair: <strong>Dip Sankar Banerjee; IIIT Guwahati</strong>,
        room: 'Room: GBR',
        papers: [
          { title: 'From Spanning Trees to Meshed Trees', authors: <><span>Hrishikesh B Acharya</span> and John Hamilton (Rochester Institute of Technology, USA); Nirmala Shenoy (Rochester Institute of Technology & Rochester Institute of Technology, USA)</>, invited: true },
          { title: 'ARoM: An Adaptive Resource Optimization Model for Mobile IoT Edge', authors: 'Ramesh Guntha (Amrita Center for Wireless Networks and Applications, Amrita Vishwa Vidyapeetham University, India); Sethuraman N Rao (Amrita Vishwa Vidyapeetham, India); Maneesha Ramesh (Amrita University, India); Maik Benndorf and Thomas Haenselmann (University of Applied Sciences Mittweida, Germany)' },
          { title: 'On Some Universally Good Fractional Repetition Codes', authors: 'Shreyansh Prajapati, Sourav Deb and Manish Kumar Gupta (Dhirubhai Ambani Institute of Information and Communication Technology, India)' },
          { title: 'The Watermark-Securable Subspace of a Linear System Containing a Single Malicious Actuator', authors: 'Bharadwaj Satchidanandan (Massachusetts Institute of Technology, USA); P R Kumar (Texas A&M University, USA)' },
        ],
      },
      {
        id: 't2-6',
        title: 'T2-6: Emerging Network Applications',
        chair: <strong>Neminath Hubbali; IIT Indore</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'An Interoperable ECC based Authentication and Key agreement Scheme for IoT Environment', authors: 'Asit Sahoo (NIT, Rourkela, India); Shreeya Swagatika Sahoo (Nit, Rourkela, India); Sampa Sahoo (National Institute of Technology Rourkela, India); Bibhudatta Sahoo and Ashok Turuk (National Institute of Technology, Rourkela, India)' },
          { title: 'VRMap: A Cost and Time aware Remapping of Virtual Data Centres over a Geo-distributed Infrastructure', authors: 'Anurag Satpathy (National Institute of Technology, Rourkela, India); Manmath Narayan Sahoo, Lipsa Chhotray, Banshidhar Majhi and Ashutosh Mishra (National Institute of Technology Rourkela, India); Sambit Bakshi (National Institute of Technology, Rourkela, India)' },
          { title: 'BER Performance of Full-duplex Two-way Relay System With User Mobility', authors: 'Tanvi Kaple (VNIT Nagpur, India); Prasanna Raut and Prabhat Kumar Sharma (Visvesvaraya National Institute of Technology, India)' },
          { title: 'Simplifying Online Education with Advanced Computer Vision and Language Understanding', authors: <><span>Vishnu Navda</span> Microsoft Research, India</>, invited: true },
        ],
      },
    ],
  },
  {
    date: 'Friday, January 10',
    time: '4:00 PM - 5:00 PM',
    sessions: [
      {
        id: 't1-7',
        title: 'T1-7: Physical Layer Communication',
        chair: <strong>Ranjan K. Mallik, IIT Delhi</strong>,
        room: 'Room: GBR',
        papers: [
          { title: 'Energy Efficient Multi-Pair Massive MIMO Two-Way AF Relaying: A Deep Learning Approach', authors: 'Venkatesh Tentu, Dheeraj Naidu Amudala, Anupama Rajoriya and Ekant Sharma (Indian Institute of Technology, Kanpur, India); Rohit Budhiraja (IIT Kanpur, India)' },
          { title: 'Copula-Based Cooperative Sensing of OFDM Signals in Cognitive Radios', authors: 'Akhil Singh (International Institute of Information Technology, Hyderabad, India); Sai Praneeth Chokkarapu (International Institute of Information Technology-Hyderabad, India); Sachin Chaudhari (International Institute of Information Technology, India); Pramod Varshney (Syracuse University, USA)' },
          { title: 'Cache-Aided Non-Orthogonal Multiple Access Over Fading Channels in Downlink Cellular Networks', authors: 'Shreshta Mohan, Shreya Morgansgate, Priyadarshini Basker and Sanjeev Gurugopinath (PES University, India); Sami Muhaidat (Khalifa University, United Arab Emirates)' },
          { title: 'A Decoupling Property in Low-Resolution MIMO-OFDM Systems and its Applications', authors: 'Narayan Prasad (Futurewei Technologies Inc., USA); Xiao-Feng Qi (Futurewei Technologies, Inc., USA)' },
        ],
      },
      {
        id: 't2-7',
        title: 'T2-7: Network Resource Management',
        chair: <strong>Chetna Singhal; IIT Kharagpur</strong>,
        room: 'Room: GBR 2',
        papers: [
          { title: 'Relay Selection in Millimeter Wave D2D Communications Through Obstacle Learning', authors: 'Subhojit Sarkar and Sasthi C. Ghosh (Indian Statistical Institute, India)' },
          { title: 'Joint Control and Shared Channel Scheduling for Downlink in 3GPP Narrowband-IoT', authors: 'Pavan Reddy M. and Abhinav Kumar (Indian Institute of Technology Hyderabad, India); Kiran Kuchi (IIT Hyderabad, India)' },
          { title: 'Optimal Downlink Scheduling and Power Allocation with Reconfiguration Delay', authors: 'Gowri Muraleedharan (IIITDM Kancheepuram, India); Vineeth Bala Sukumaran (Indian Institute of Space Science and Technology, Trivandrum, India); Premkumar K. (Indian Institute of Information Technology, Design and Manufacturing Kancheepuram, India)' },
          { title: 'CONETSI: On Demand Distributed Network State Information Collection using Opportunistic Exploration for Resource Constrained Networks', authors: 'Srijith S Nair (Ohio State University, USA); Aadreesh Sahu (Indian Institute of Engineering Science and Technology, Shibpur, USA); Srikanth Mantravadi, Anand Svr and Malati Hegde (Indian Institute of Science, India)' },
        ],
      },
    ],
  },
];

export default function TechnicalProgramOrigPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Technical Program (Original)</h1>
              {/* NOTE: Archived 2020 program preserved for reference. Replace with 2027 program when ready. */}

              <table className="showSummary" id="top">
                <tbody>
                  <tr>
                    <td className="heading">Time</td>
                    <td className="heading">GBR</td>
                    <td className="heading">GBR</td>
                  </tr>
                  <tr><td colSpan={3}><h2>Wednesday, January 8</h2></td></tr>
                  <tr><td>11:45 am-01:15 pm</td><td>T1-1: <em>Network Applications</em></td><td>T2-1: <em>Machine Learning for Networks</em></td></tr>
                  <tr><td>04:00 pm-05:30 pm</td><td>&nbsp;</td><td>T2-2: <em>Pervasive Sensing and Socio-Technical Networks</em></td></tr>
                  <tr><td colSpan={3}><h2>Thursday, January 9</h2></td></tr>
                  <tr><td>11:00 am-01:00 pm</td><td>T1-3: <em>5G Communication</em></td><td>T2-3: <em>Cyber Physical Systems</em></td></tr>
                  <tr><td>4:00 pm-05:00 pm</td><td>T1-4: <em>Network and System Security</em></td><td>T2-4: <em>Networked Systems</em></td></tr>
                  <tr><td colSpan={3}><h2>Friday, January 10</h2></td></tr>
                  <tr><td>11:30 am-01:00 pm</td><td>T1-5: <em>Network Core</em></td><td>T2-5: <em>Internet of Anythings</em></td></tr>
                  <tr><td>02:00 pm-03:30 pm</td><td>T1-6: <em>Algorithms for Networking Systems</em></td><td>T2-6: <em>Emerging Network Applications</em></td></tr>
                  <tr><td>04:00 pm-05:00 pm</td><td>T1-7: <em>Physical Layer Communication</em></td><td>T2-7: <em>Network Resource Management</em></td></tr>
                </tbody>
              </table>

              <hr/>
              <h5>Presentation Duration</h5>
              <ul>
                <li><h6>Invited talk: 25mins</h6></li>
                <li><h6>Regular papers: 18mins</h6></li>
              </ul>
              <hr/>

              {slots.map((slot, sIdx) => (
                <div key={sIdx}>
                  {slot.date && slot.time && <h3 style={{ marginTop: '24px' }}>{slot.date}, {slot.time}</h3>}
                  {slot.sessions.map((sess) => (
                    <div key={sess.id}>
                      <h4 id={sess.id}>{sess.title}</h4>
                      <h6>Session Chair: {sess.chair}<br/><br/></h6>
                      <div><span>{sess.room}</span></div>
                      <dl>
                        {sess.papers.map((p, i) => (
                          <div key={i}>
                            <dt><span style={{ fontWeight: 600 }}>{p.invited && '(Invited Talk) '}{p.title}</span></dt>
                            <dd><div style={{ marginBottom: '12px', color: '#555' }}>{p.authors}</div></dd>
                          </div>
                        ))}
                      </dl>
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

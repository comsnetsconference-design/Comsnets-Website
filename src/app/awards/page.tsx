export const metadata = { title: 'COMSNETS 2026 Awards | COMSNETS 2027' };

const awards: Record<string, [string, string][]> = {
  'Best Paper Awards': [
    ['Adaptive Beam Steering in WPCNs under Slotted ALOHA via Deep Q-Learning', 'Samannaya Adhikari (IIT Mandi, India), Siddhartha Sarma (IIT Mandi, India)'],
    ['Nonlinear Energy Harvesting Based Relaying for Efficient Multi-Rate SWIPT in Energy-Constrained Networks', 'Sneha Choudhury (IIT Jammu, India), Atul Banotra (IIT Jammu, India), Sudhakar Modem (IIT Jammu, India)'],
  ],
  'Best Poster Award': [
    ['Tag-to-tag Range Estimation for Passive Backscattering Tags', 'Manavjeet Singh (State University of New York at Stony Brook, USA), Yang Xie and Abeer Ahmad (Stony Brook University, USA), Milutin Stanacevic (SUNY Stony Brook, USA), Samir R. Das (Stony Brook University, USA), Petar M. Djurić (Stony Brook University, USA)'],
  ],
  'Best Poster - First Runners Up': [
    ['Real-Time Topology-Aware Log-Metric Correlation for LLM-based Root Cause Analysis in Distributed Systems', 'Preetham M and Rahul Singh (Juniper Networks, India), Jit Gupta and Tarun Banka (Juniper Networks, USA)'],
  ],
  'Best Poster - Second Runners Up': [
    ['AHEAD-N2: Accelerating N2 Handovers in 5G and Beyond using Early Adaptive Decisions for Improved Availability and Resilience', 'Siddhesh Pratim Sovitkar (IIT Hyderabad, India), Shwetha Vittal (Birla Institute of Technology and Science, India), Antony Franklin A (IIT Hyderabad, India)'],
  ],
  'Best Demos-Exhibits Awards': [
    ['High Resolution Range Estimation Using Millimeter Wave Integrated Sensing and Communication on RFSoC', 'Jai Mangal (IIIT Delhi, India), Antriksh Choudhary (IIIT Delhi, India), Sumit Jagdish Darak (IIIT Delhi, India), Shobha S Ram (IIIT Delhi, India)'],
    ['Mirror-Assisted Non-Line-of-Sight Voice Communication Over Solar Panels as Receivers for Long-Range Low-Power Links', 'Ankit Kumar Pal (IIIT Delhi, India), Rahul (IIIT Delhi, India), Abhijit Mitra (IIIT Delhi, India), Vivek A Bohara (IIIT Delhi, India)'],
  ],
  'Graduate Forum Best Paper Award': [
    ['Anomaly Detection using Directed Motif and Node Attributes', 'Sarjita Soo (NIT Durgapur), Amrita Namthirtha (JIS College of Engineering, Kalyani), Animesh Dutta (NIT Durgapur)'],
  ],
  'Graduate Forum Best Paper - Runners Up': [
    ['MCP-Diag: A Deterministic, Protocol-Driven Architecture for AI-Native Network Diagnostics', 'Devansh Lodha, Mohit Panchal, Sameer G Kulkarni (IIT Gandhinagar, India)'],
  ],
  'Undergraduate Forum Best Paper Awards': [
    ['Zero-Trust Stealth Authentication for Networked Systems via Port Knocking and TLS Fingerprinting', 'Goutami Sooda, Chandana S, and Deepamala N (RV College of Engineering)'],
    ['Curiosity-Driven Deep-RL for Adaptive Handover Optimization in O-RAN on the NH-47 Corridor', 'Devashree K. Parikh, Dhaval K. Patel, Kashish D. Shah, and Harsh Patel (Ahmedabad University)'],
  ],
  'Machine Intelligence in Networked Data and Systems': [
    ['How Far is too Far? Fixing Vision of Autonomous Vehicles using Selective Super-Resolution', 'Najiya Naj (IIIT Delhi), Ritik Vaishnav (MBM University), Arani Bhattacharya (IIIT Delhi)'],
  ],
  'Cyber Security and Privacy - Best Paper Awards': [
    ['eQUIC: A Resource-friendly Encryption-based Framework to Secure QUIC Handshake Process from MITM Attacks', 'Debasmita Dey (IIEST Shibpur, India), Sayan Pal (IIEST Shibpur, India), Niray Ghosh (IIEST Shibpur, India)'],
    ['Post-Quantum DLT Framework for Secure Financial Transactions in Banking Applications', 'Abhishek Pandey (IIIT Hyderabad, India), Debnath Ghosh (IIIT Hyderabad, India), Prithwi Bagchi (IIIT Hyderabad, India), Ashok Kumar Das (IIIT Hyderabad, India), Ravi Kumar Kappagantu, Srinivas V Katakam and Jitendra Chougala (Lloyds Technology Centre, Hyderabad, India)'],
  ],
  'Cyber Security and Privacy - Best Paper Honorable Mention': [
    ['A Service Provider Recommendation System for Verifiable Credential Ecosystem', 'Vigneswaran R, Nallagonda Harshita, Batsayan Das, Siddhasagar Pani and Srujana Kanchanapalli (Tata Consultancy Services, India), Praveen Gauravaram (Tata Consultancy Services, Australia & New Zealand)'],
  ],
  'Advances in Autonomous Driving and Vehicular Networks (Oral)': [
    ['A Deep Reinforcement Learning Approach for Dynamic Microservice Placement in Vehicular Edge Computing', 'Surayya A (SRM University, Andra Pradesh, India), Md Muzakkir Hussain (SRM University, Andra Pradesh, India)'],
  ],
  'Advances in Autonomous Driving and Vehicular Networks (Poster)': [
    ['Interpretable Traffic Flow Prediction with LSTM and Graph Convolutional Networks', 'Om Chiddarwar (IIITDM Kurnool, India), Priyanka Mandal (SVNIT Surat), Praveen Kumar Chandaliya (SVNIT Surat), Shriniwas Arkatkar (SVNIT Surat)'],
  ],
  'Internet Intelligence and Governance Workshop': [
    ['Revisiting Queue Delay Estimation Techniques in PIE and FQ-PIE: An Empirical Evaluation', 'Arun Kumar R (NITK Surathkal), Mohit P Tahiliani (NITK Surathkal)'],
  ],
  'Systems for the Future of AI/ML': [
    ['Post-Quantum Secure IoT-Enabled Crop Recommender System Using Machine Learning', 'Snehal Jain (IIIT Hyderabad, India), Abhishek Pandey (IIIT Hyderabad, India), Ashok Kumar Das (IIIT Hyderabad, India), Shantanu Pal (Deakin University, Australia)'],
    ['ML-Based Refrigerator Scheduling for Energy Efficiency in Renewable-Integrated Smart Homes', 'Sanjiban Roy (IIIT Guwahati, India), Yamini Sisodia (IIIT Guwahati, India), Nilotpal Chakraborty (IIIT Guwahati, India), Preveen Kumar Devarajan (NCMRWF, India)'],
  ],
  'Artificial Intelligence of Things': [
    ['Low-Cost IoT-Based Downtime Detection For UPS and Behaviour Analysis', 'Sannidhya Gupta (IIIT Hyderabad, India), Prakash Nayak (IIIT Hyderabad, India), Sachin Chaudhari (IIIT Hyderabad, India)'],
  ],
};

export default function AwardsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-12 page-content">
            <div className="well well-white">
              <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '24px', marginBottom: '1rem', border: '1px solid rgba(255,255,255,0.5)' }}>
                <h1 style={{ fontWeight: 700, fontSize: '2.5rem', background: 'linear-gradient(135deg, #76baea 0%, #557AAB 50%, #1E4165 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textAlign: 'left', margin: 0 }}>
                  COMSNETS 2026 Awards Announced!
                </h1>
              </div>

              {Object.entries(awards).map(([title, papers]) => (
                <section key={title} style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.4)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.5)' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#1f2937', background: 'rgba(255,255,255,0.3)', borderRadius: '12px', padding: '0.75rem 1rem', border: '1px solid rgba(255,255,255,0.4)', margin: 0 }}>
                    {title}
                  </h2>
                  {papers.map((p, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.4)', borderRadius: '20px', padding: '1rem', border: '1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 6px rgba(0,0,0,0.04)', marginTop: '1rem' }}>
                      <div style={{ fontWeight: 600, fontSize: '1.08rem', lineHeight: 1.55, marginBottom: '0.75rem', background: 'linear-gradient(135deg, #557AAB 0%, #1E4165 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                        {p[0]}
                      </div>
                      <div style={{ fontSize: '0.98rem', color: '#4b5563', fontWeight: 400, margin: 0 }}>
                        {p[1]}
                      </div>
                    </div>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

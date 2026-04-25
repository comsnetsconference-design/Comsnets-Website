export const metadata = { title: 'Workshops | COMSNETS 2027' };

export default function WorkshopsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Workshops</h1>
              {/* TODO: refresh dates and workshop list for 2027 */}
              <p>
                Focused workshops will be held on emerging topics to allow for a lively exchange of ideas. International business
                and government leaders will be invited to share their perspectives, and will complement the technical program.
              </p>
              <br/>
              <h4>Important Dates and Deadlines</h4>
              <br/>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Paper Submission</strong></td>
                    <td><span style={{ color: 'black' }}>20th November, 2022, AoE</span></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance</strong></td>
                    <td><span style={{ color: 'black' }}>10th December 2022</span></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission</strong></td>
                    <td><span style={{ color: 'black' }}>15th December 2022</span></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Dates</strong></td>
                    <td><strong>4th &amp; 8th January 2023</strong></td>
                  </tr>
                </tbody>
              </table>

              <h4><a href="/minds_workshop">Workshop on Machine Intelligence in Networked Data and Systems (MINDS)</a></h4>
              <p>
                The inter-working of machine learning and networking is set to transform and disrupt many areas of business and
                everyday human life. MINDS (Machine Intelligence in Networked Data and Systems) aims to bring together
                researchers and practitioners to understand and explain this inter-working. MINDS will discuss and present
                latest achievements and innovations at the cross-section of machine learning, systems, and networking.
              </p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/N29766" target="_blank" rel="noopener noreferrer">Click Here</a></p>

              <hr/>

              <h4><a href="/cybersecurity_and_privacy_workshop">Cyber Security and Privacy Workshop</a></h4>
              <p>This workshop is intended to be a forum where researchers can meet and discuss the latest in cyber security and privacy topics as they apply to communications systems.</p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/N29762" target="_blank" rel="noopener noreferrer">Click Here</a></p>

              <hr/>

              <h4><a href="/netHealth_workshop">Workshop on Networking Humanitarian Technology for Healthcare (NetHealth)</a></h4>
              <p>
                NetHealth (Network Health) is a yearly workshop that offers all stakeholders in the healthcare system a platform to learn, share and connect.
                Every year, the NetHealth Workshop brings together a multi-disciplinary audience from across the healthcare spectrum
                to share their ideas and break the conventional silos that exist in this field.
                This year&rsquo;s NetHealth will cover healthcare-specific topics like Novel Medical Devices, Implants &amp; Instruments, Artificial Intelligence,
                Bio-entrepreneurship, Tele-medicine, 3D printing, and Investment &amp; Incubation opportunities as well as groundbreaking academic research.
              </p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/newPaper.php?c=29767" target="_blank" rel="noopener noreferrer">Click Here</a>.</p>

              <hr/>

              <h4><a href="/standards-driven_research">Workshop on Standards-driven Research</a></h4>
              <p>
                The goal of this workshop is to foster a better understanding of the advantages that standards can bring about in different areas such as
                AI, Communications, Cloud interoperability etc.
                It also lays emphasis on the role of evaluation methodologies and models used in the standardization process,
                that becomes the framework to compare performance across different proposals and how it can be leveraged by researchers while investigating new techniques
                and algorithms.
              </p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/newPaper.php?c=29768" target="_blank" rel="noopener noreferrer">Click Here</a>.</p>

              <hr/>

              <h4><a href="/TASIR_workshop">TASIR Workshop: Testbeds for Advanced Systems Implementation and Research</a></h4>
              <p className="text-justify">
                We are seeking original, previously unpublished papers empirically addressing key issues and challenges in experimental wireless networking. We are particularly interested in papers describing developments, lesson-learned and new results obtained through platforms for at-scale wireless research mentioned above.
              </p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/N29765" target="_blank" rel="noopener noreferrer">Click Here</a>.</p>

              <hr/>

              <h4><a href="/cvad_workshop">Workshop on Connected Vehicles &amp; Autonomous Driving</a></h4>
              <p className="text-justify">
                Connected and autonomous vehicles are transforming many sectors of economy and everyday activities especially in the context of smart autonomous mobility, smart cities etc. There exist many unprecedented challenges that arise from Connected autonomous Vehicles Technologies. These include challenges related but not limited to connected vehicles security and connectivity, vehicular networks, sensor information fusion and communication, ADAS technology, vehicle-vehicle and vehicle-pedestrian interaction etc. There is also a need for customized communication technology for the integrated solutions of connected vehicles and smart mobility sub-systems.
              </p>
              <p className="text-justify">
                The aim of the First International Workshop on connected autonomous vehicles and autonomous mobility is to bring together engineers, researchers, and practitioners interested in the advances and applications of this field.
              </p>
              <br/>
              <p>Papers can be submitted through EDAS directly: <a href="https://edas.info/N29764" target="_blank" rel="noopener noreferrer">Click Here</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

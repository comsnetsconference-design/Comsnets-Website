export const metadata = { title: 'Systems for the Future of AI/ML (SysAI) | COMSNETS 2027' };

export default function SysAIPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .event-hero {
          background: linear-gradient(135deg, #557AAB 0%, #1E4165 100%);
          color: white;
          border-radius: 16px;
          padding: 2rem 2rem;
          box-shadow: 0 8px 32px rgba(124, 58, 237, 0.35);
          margin-bottom: 2rem;
          text-align: center;
          font-family: 'Poppins', sans-serif;
        }
        .event-hero h1 {
          font-size: 3rem;
          font-weight: 900;
          background: linear-gradient(90deg, #fff 30%, #d1c4e9 70%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 0.5rem;
          margin-bottom: 0.3rem;
        }
        .event-hero .event-details {
          font-size: 1.1rem;
          font-weight: 500;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.75rem 1.5rem;
          margin-top: 0.5rem;
          display: inline-block;
          border-radius: 9999px;
        }
        .section-title {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: #2A4D75;
          letter-spacing: 1.2px;
          margin-bottom: 1.5rem;
          border-bottom: 3px solid #678DC2;
          display: inline-block;
          padding-bottom: 6px;
        }
      `}} />
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              
              <div className="event-hero">
                <h1>Systems for the Future of AI/ML (SysAI)</h1>
                <div className="event-details">
                  COMSNETS 2027
                </div>
              </div>
              
              <hr />

              <h3 className="section-title">Workshop Overview</h3>
              <p className="text-justify">
                Recent advances in Artificial Intelligence and Machine Learning (AI/ML) research have resulted in a plethora of applications in diverse domains; ranging from healthcare, agriculture, and manufacturing to transportation and communication systems. The landscape of AI has seen a paradigm shift with the emergence and rapid evolution of large language models (LLMs) and foundation models, such as the GPT series, LLaMA, Gemini and similar architectures. These models have not only achieved remarkable progress in natural language processing but also demonstrated transformative potential across a wide spectrum of applications. However, the development and deployment of these sophisticated models present unprecedented systems challenges, including but not limited to the need for massive computational infrastructure, scalability of training, and new challenges in serving inference cost-effectively.
              </p>
              <p className="text-justify">
                It is well understood that, while more advancements in AI/ML are needed, the deployability of the already available techniques presents a significant challenge for system architects, designers, and operators. Currently, there is also a significant amount of systems innovation required to be able to deploy AI/ML in an effective, scalable and responsible manner. SysAI aims to bring together researchers and practitioners interested in AI/ML systems from both academia and industry.
              </p>
              
              <hr />

              <h3 className="section-title">Important Dates</h3>
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <td><strong>Paper Submission deadline:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Notification of Acceptance:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Camera-ready Submission:</strong> <span style={{ color: 'black' }}>To be announced</span></td>
                  </tr>
                  <tr>
                    <td><strong>Workshop Date:</strong> <span style={{ color: 'black' }}>January 2027</span></td>
                  </tr>
                </tbody>
              </table>
              
              <hr />

              <h3 className="section-title">Topics of Interest</h3>
              <p className="text-justify">Topics of interest include, but are not limited to:</p>
              
              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>AI/ML Systems & Architecture</h4>
              <ul>
                <li>System design and architecture for training and inference of AI/ML workloads</li>
                <li>Specialized hardware design for AI/ML workloads (GPUs, TPUs, FPGAs, and other accelerators)</li>
                <li>Scalable distributed training techniques for AI/ML models</li>
                <li>Efficient strategies for model parallelism and data parallelism at scale</li>
                <li>Model serving, deployment, and inference optimization</li>
                <li>AI/ML compilers, frameworks, and runtime systems</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Edge & Resource-Constrained AI/ML</h4>
              <ul>
                <li>AI/ML on edge devices, embedded systems, and IoT platforms</li>
                <li>Federated learning systems and privacy-preserving ML frameworks</li>
                <li>Efficient AI/ML for mobile and resource-constrained platforms</li>
                <li>TinyML, model compression, and knowledge distillation for deployment</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>AI/ML for Systems Optimization</h4>
              <ul>
                <li>AI/ML-driven approaches for cloud resource management and networking</li>
                <li>Applying AI/ML for improving system performance, reliability, and security</li>
                <li>AI/ML for anomaly detection, fault prediction, and system monitoring</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>LLMs & Foundation Models</h4>
              <ul>
                <li>Training infrastructure and scalability challenges for LLMs and foundation models</li>
                <li>Efficient fine-tuning and adaptation techniques (e.g., LoRA, prompt engineering, RLHF)</li>
                <li>Multi-modal learning systems integrating language, vision, and other modalities</li>
                <li>Retrieval-Augmented Generation (RAG) systems and knowledge grounding</li>
                <li>LLM-based agentic systems, tool use, and autonomous planning</li>
              </ul>

              <h4 style={{ fontWeight: 600, color: '#1E4165', marginTop: '20px' }}>Responsible, Reliable & Trustworthy AI/ML</h4>
              <ul>
                <li>Energy-efficient AI/ML and sustainable computing</li>
                <li>Responsible AI: fairness, interpretability, and bias detection in AI/ML systems</li>
                <li>AI safety, alignment, and robustness</li>
                <li>Benchmarking and evaluation methodologies for AI/ML systems</li>
              </ul>
              
              <hr />

              <h3 className="section-title">Submission Guidelines</h3>
              <ul>
                <li>SysAI invites submission of original work not previously published, or under review at another conference or journal.</li>
                <li>Submissions (including title, abstract, all figures, tables, and references) must be no greater than <b>6 pages</b> in length. A minimum number of 4 pages are required.</li>
                <li>Reviews will be <b>double-blind:</b> information about the authors will not be shared with the reviewers during the review process. The submitted paper should be anonymous and not have any reference to the authors' names or institutions.</li>
                <li>Submissions must follow the formatting guidelines as given on the <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">IEEE Website</a>; and those that do not meet the size and formatting requirements will not be reviewed.</li>
                <li>All papers must be in Adobe Portable Document Format (PDF) and submitted through the SysAI Workshop submission site on EDAS.</li>
                <li>All workshop papers will appear in the conference proceedings and be submitted to IEEE Xplore as well as other Abstracting and Indexing (A&I) databases.</li>
              </ul>
              <p className="text-justify">For any queries, please contact the workshop chairs at <a href="mailto:comsnets.workshop@gmail.com">comsnets.workshop@gmail.com</a></p>
              
              <hr />

              <div className="organizing-committee-page center-block">
                <h3 className="text-center section-title" style={{ display: 'block', borderBottom: 'none', margin: '0 auto 20px' }}>Workshop Co-Chairs</h3>
                <div className="row text-center">
                  <div className="col-sm-6 text-center" style={{ display: 'inline-block', float: 'none', verticalAlign: 'top', margin: '0 15px 20px' }}>
                    <img 
                      src="/assets/images/IMG_1084 - Rohit Verma.png" 
                      className="thumbnail" 
                      alt="Rohit Verma" 
                      style={{ 
                        WebkitBoxShadow: '10px 10px 5px #BDBDBD', 
                        boxShadow: '10px 10px 5px #BDBDBD',
                        height: '200px', 
                        width: '170px', 
                        margin: '0 auto 10px',
                        objectFit: 'cover'
                      }} 
                    />
                    <div className="caption">
                      <h4><a href="https://www.cl.cam.ac.uk/~rv355/" target="_blank" rel="noopener noreferrer">Rohit Verma</a></h4>
                      <p>Intel Labs<br />India</p>
                    </div>
                  </div>
                  <div className="col-sm-6 text-center" style={{ display: 'inline-block', float: 'none', verticalAlign: 'top', margin: '0 15px 20px' }}>
                    <img 
                      src="/assets/images/committee_2023/alok_ranjan.jpg" 
                      className="thumbnail" 
                      alt="Alok Ranjan" 
                      style={{ 
                        WebkitBoxShadow: '10px 10px 5px #BDBDBD', 
                        boxShadow: '10px 10px 5px #BDBDBD',
                        height: '200px', 
                        width: '170px', 
                        margin: '0 auto 10px',
                        objectFit: 'cover'
                      }} 
                    />
                    <div className="caption">
                      <h4><a href="http://linkedin.com/in/alok-ranjan" target="_blank" rel="noopener noreferrer">Alok Ranjan</a></h4>
                      <p>Bosch<br />India</p>
                    </div>
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

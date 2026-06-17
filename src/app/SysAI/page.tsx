export const metadata = { title: 'Systems for the Future of AI/ML (SysAI) | COMSNETS 2027' };

export default function SysAIPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="event-page">

          <div className="event-hero">
            <h1>Systems for the Future of AI/ML (SysAI)</h1>
            <div className="event-details">COMSNETS 2027</div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Workshop Overview</h3>
            <p className="text-justify">
              Recent advances in Artificial Intelligence and Machine Learning (AI/ML) research have resulted in a plethora of applications in diverse domains; ranging from healthcare, agriculture, and manufacturing to transportation and communication systems. The landscape of AI has seen a paradigm shift with the emergence and rapid evolution of large language models (LLMs) and foundation models, such as the GPT series, LLaMA, Gemini and similar architectures. These models have not only achieved remarkable progress in natural language processing but also demonstrated transformative potential across a wide spectrum of applications. However, the development and deployment of these sophisticated models present unprecedented systems challenges, including but not limited to the need for massive computational infrastructure, scalability of training, and new challenges in serving inference cost-effectively.
            </p>
            <p className="text-justify">
              It is well understood that, while more advancements in AI/ML are needed, the deployability of the already available techniques presents a significant challenge for system architects, designers, and operators. Currently, there is also a significant amount of systems innovation required to be able to deploy AI/ML in an effective, scalable and responsible manner. SysAI aims to bring together researchers and practitioners interested in AI/ML systems from both academia and industry.
            </p>
          </div>

          <div className="event-section">
            <h3 className="section-title">Important Dates</h3>
            <div className="dates-timeline">
              <div className="date-step"><div className="dot">1</div><div className="lab">Paper Submission deadline</div><div className="val">To be announced</div></div>
              <div className="date-step"><div className="dot">2</div><div className="lab">Notification of Acceptance</div><div className="val">To be announced</div></div>
              <div className="date-step"><div className="dot">3</div><div className="lab">Camera-ready Submission</div><div className="val">To be announced</div></div>
              <div className="date-step is-event"><div className="dot"><i className="fa fa-star" aria-hidden="true"></i></div><div className="lab">Workshop Date</div><div className="val">January 2027</div></div>
            </div>
          </div>

          <div className="event-section">
            <h3 className="section-title">Topics of Interest</h3>
            <p className="text-justify">Topics of interest include, but are not limited to:</p>

            <div className="topic-grid">

              <div className="topic-cat">
                <h4><i className="fa fa-server" aria-hidden="true"></i>AI/ML Systems & Architecture</h4>
                <ul>
                  <li>System design and architecture for training and inference of AI/ML workloads</li>
                  <li>Specialized hardware design for AI/ML workloads (GPUs, TPUs, FPGAs, and other accelerators)</li>
                  <li>Scalable distributed training techniques for AI/ML models</li>
                  <li>Efficient strategies for model parallelism and data parallelism at scale</li>
                  <li>Model serving, deployment, and inference optimization</li>
                  <li>AI/ML compilers, frameworks, and runtime systems</li>
                </ul>
              </div>

              <div className="topic-cat">
                <h4><i className="fa fa-mobile" aria-hidden="true"></i>Edge & Resource-Constrained AI/ML</h4>
                <ul>
                  <li>AI/ML on edge devices, embedded systems, and IoT platforms</li>
                  <li>Federated learning systems and privacy-preserving ML frameworks</li>
                  <li>Efficient AI/ML for mobile and resource-constrained platforms</li>
                  <li>TinyML, model compression, and knowledge distillation for deployment</li>
                </ul>
              </div>

              <div className="topic-cat">
                <h4><i className="fa fa-tachometer" aria-hidden="true"></i>AI/ML for Systems Optimization</h4>
                <ul>
                  <li>AI/ML-driven approaches for cloud resource management and networking</li>
                  <li>Applying AI/ML for improving system performance, reliability, and security</li>
                  <li>AI/ML for anomaly detection, fault prediction, and system monitoring</li>
                </ul>
              </div>

              <div className="topic-cat">
                <h4><i className="fa fa-comments" aria-hidden="true"></i>LLMs & Foundation Models</h4>
                <ul>
                  <li>Training infrastructure and scalability challenges for LLMs and foundation models</li>
                  <li>Efficient fine-tuning and adaptation techniques (e.g., LoRA, prompt engineering, RLHF)</li>
                  <li>Multi-modal learning systems integrating language, vision, and other modalities</li>
                  <li>Retrieval-Augmented Generation (RAG) systems and knowledge grounding</li>
                  <li>LLM-based agentic systems, tool use, and autonomous planning</li>
                </ul>
              </div>

              <div className="topic-cat">
                <h4><i className="fa fa-shield" aria-hidden="true"></i>Responsible, Reliable & Trustworthy AI/ML</h4>
                <ul>
                  <li>Energy-efficient AI/ML and sustainable computing</li>
                  <li>Responsible AI: fairness, interpretability, and bias detection in AI/ML systems</li>
                  <li>AI safety, alignment, and robustness</li>
                  <li>Benchmarking and evaluation methodologies for AI/ML systems</li>
                </ul>
              </div>

            </div>
          </div>

          <div className="event-section">
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
          </div>

          <div className="event-section">
            <h3 className="section-title">Workshop Co-Chairs</h3>
            <div className="member-grid">
              <div className="member-card">
                <img src="/assets/images/IMG_1084 - Rohit Verma.png" alt="Rohit Verma" className="member-photo" />
                <div className="member-name"><a href="https://www.cl.cam.ac.uk/~rv355/" target="_blank" rel="noopener noreferrer">Rohit Verma</a></div>
                <p className="member-affil">Intel Labs<br />India</p>
              </div>
              <div className="member-card">
                <img src="/assets/images/committee_2023/alok_ranjan.jpg" alt="Alok Ranjan" className="member-photo" />
                <div className="member-name"><a href="http://linkedin.com/in/alok-ranjan" target="_blank" rel="noopener noreferrer">Alok Ranjan</a></div>
                <p className="member-affil">Bosch<br />India</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

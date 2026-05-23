export const metadata = { title: 'Submission Guidelines | COMSNETS 2027' };

export default function SubmissionGuidelinesPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Manuscript Registration/Submission Guidelines</h1>

              <h3>Quick Links:</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <ul className="side-nav">
                    <li><a href="https://edas.info/newPaper.php?c=30888" target="_blank" rel="noopener noreferrer"><strong>EDAS Abstract/Paper Submission Portal</strong></a></li>
                    <li><a href="/call_for_papers">Call for Papers</a></li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6">
                  <ul className="side-nav">
                    <li><a href="/auth_embed_fonts">Font Embedding</a></li>
                  </ul>
                </div>
              </div>

              <hr className="divider" />

              <div className="alert alert-info alert-compact">
                The paper review process will be double blind.
              </div>

              <h3>Registration/Submission Process</h3>
              <ol>
                <li>Log in to EDAS</li>
                <li>Go to <a href="https://www.edas.info/listConferencesSubmit.php" target="_blank" rel="noopener noreferrer">list of conferences accepting submissions.</a></li>
                <li>Find &quot;COMSNETS 2027&quot; and click on &quot;Submit Paper&quot; link at the right of the column.</li>
                <li>You can also come to this page directly by going to <a href="https://www.edas.info/newPaper.php?c=29761" target="_blank" rel="noopener noreferrer">COMSNETS 2027 EDAS Submission Portal</a>.</li>
                <li>You will be taken to a page that asks you for the title of the paper, topics etc.</li>
                <li>In the box called &quot;Paper abstract&quot;, put in the abstract.</li>
                <li>After you press the submit button, you should add all other authors.</li>
                <li>That completes the abstract submission/registration.</li>
                <li>You can upload the paper after that, which can be done until the paper submission deadline.</li>
              </ol>

              <div className="well">
                <p></p>
                <strong>Note:
                  <ol>
                    <li>The abstract can be a paragraph or a couple of paragraphs that briefly describe the work, and should contain only plain text.</li>
                  </ol>
                </strong>
              </div>

              <h3>Formatting and Paper Size Guidelines</h3>
              <p>Full papers submitted for review should have a <strong>minimum number of 3 pages</strong> and a <strong>maximum number of 8 pages (excluding reference)</strong>. They should adhere to the formatting guidelines described below. At the discretion of the TPC chairs, a small set of borderline papers may be invited for inclusion as &quot;Poster Papers&quot;, with a reduced 4-page limit.</p>

              <p>Papers must be submitted in <strong>PDF (Portable Document Format)</strong> and should be compatible with Acrobat (English version). They should not include any special characters or nonstandard fonts. Please ensure that your submissions can be displayed and printed without further processsing using only standard tools and postscript printers.</p>

              <p>Make sure that the paper prints well on black-and-white printers.</p>

              <p>A document that provides simplified requirements for creating PDF Files is <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">available.</a> It describes the essential steps in distilling PDFs. Please pay particular attention to figures and graphs in the paper to ensure that they are legible when printed using standard black-and-white printers.</p>

              <p>The formatting guidelines for the submission and that for the final camera-ready version of the accepted papers are identical.</p>

              <h3>Overall appearance:</h3>
              <p>Accepted papers will appear in conference proceedings and submitted to IEEE Xplore as well as other Abstracting and Indexing (A&amp;I) databases. Therefore, the submitted papers should adhere to the appearance of the standard IEEE two-column format that is used for IEEE Conference Proceedings. The papers should be typeset using 10pt font on <strong>US Letter paper</strong> with margins no smaller than 0.75in for the top margin, 1.0in for the bottom margin, and 0.625in for side margins.</p>

              <p>Authors are strongly encouraged to use the latest templates for typesetting as provided on the IEEE Website: <a href="http://www.ieee.org/conferences_events/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer">Visit Website</a></p>

              <p>For those typesetting using Latex, examine the IEEEtran LaTeX Class (template) V1.8 packages and IEEEtran V1.12 BibTeX (bibliography) packages. Be sure to use the template&rsquo;s conference mode. See <a href="http://www.ieee.org/web/publications/pubservices/confpub/AuthorTools/conferenceTemplates.html" target="_blank" rel="noopener noreferrer">template documentation</a> for details.</p>

              <p>For complete formatting specifications, you can download the IEEE Format Definition Table and Glossary <a href="http://www.ieee.org/ucm/groups/public/@ieee/@web/@org/@pubs/documents/file/30008286.pdf" target="_blank" rel="noopener noreferrer">here</a>.</p>

              <p>Please use <a href="/auth_embed_fonts">link, for details regarding font embedding</a> in your final manuscript.</p>

              <p>For reasons of reviewing fairness, papers that exceed the page limit and/or are incorrectly formatted will not be accepted for review.</p>

              <h3>Ethics</h3>
              <ul>
                <li>Submission of papers to COMSNETS 2027 carries with it the implied agreement that the paper represents original work. We will follow the plagiarism policy of IEEE Communications Society. See <a href="http://www.comsoc.org/conferences/plagiarism-policy" target="_blank" rel="noopener noreferrer">http://www.comsoc.org/conferences/plagiarism-policy</a> and the links therein. All submitted papers will be subjected to a &quot;similarity test&quot;. Papers achieving a high similarity score will be examined and those that are deemed unacceptable will be rejected without a formal review. We also expect to report such unacceptable submissions to the superiors of each of the authors.</li>
                <br />
                <li>Submission of papers to COMSNETS 2027 also carries with it the implied agreement that one or more of the listed authors will register for and attend the conference and present the paper. Papers not presented at the conference will not be included in the final program or in the digital proceedings. Therefore, authors are strongly encouraged to plan accordingly before deciding to submit a paper.</li>
              </ul>

              <h3>Questions</h3>
              <p className="text-left">For questions, contact: <br /><a href="mailto:comsnets.conference@gmail.com">comsnets.conference@gmail.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = { title: 'Virtual Attendee Instructions | COMSNETS 2027' };

export default function VirtualAttendeeInstructionsPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Virtual Conference Instructions</h1>

              <p className="text-justify">The International Conference on COMmunication Systems &amp; NETworkS (COMSNETS 2027) will be held as a hybrid conference. If you have registered for the physical meeting, join us at The Chancery Pavilion. If you are attending it virtually, you can join us at the virtual platform using the links provided closer to the conference dates. You can attend the virtual conference using a laptop/desktop or mobile.</p>

              <p>Entry to the virtual site is restricted to registered delegates only. You will receive an invitation email with a unique link to attend the conference shortly before the event. Check your spam box if you don&rsquo;t receive the email in your inbox. If you are unable to find the email, you can still log in to the virtual site using the email registered for the conference.</p>

              <hr />

              <h3>Instructions for registered participants</h3>
              <ul>
                <li className="text-justify">COMSNETS 2027 is a private event and can only be accessed by registered delegates.</li>
                <li className="text-justify">If you have registered already, you are pre-authorized for the event. You will receive an invite email from &lsquo;COMSNETS Association&rsquo; with the title &lsquo;Confirm your registration for [Event Name], on [Date]&rsquo;. If you&rsquo;re not able to locate the email, please check the spam folder.</li>
                <li className="text-justify">If you&rsquo;re still unable to find the registration email, do not worry. Go to the event link and sign up yourself using the same email shared during registration. Your email is the event database and it will automatically allow you to register and attend.</li>
                <li className="text-justify">In case you still face difficulty, drop an email to us at <a href="mailto:comsnets.conference@gmail.com">comsnets.conference@gmail.com</a> with your registration details and someone will revert back to you at the earliest.</li>
              </ul>

              <hr />

              <h3>Tips for Attendees</h3>
              <p>To have the best experience of the virtual platform, please follow the guidelines below:</p>
              <ul>
                <li>Virtual event can be accessed using Laptop/Desktop or Android app available in the playstore.</li>
                <li>For a full Conference experience, join from a Laptop/Desktop. The participants joining through a mobile app shall have limited experience.</li>
                <li>The virtual platform works best on the Google Chrome browser. We advise you to use the latest version of the browser.</li>
                <li>Use stable (broadband) internet connection. Using a Mobile Connection hotspot is not recommended.</li>
                <li>Disable VPN/Firewall settings (in case of office laptops).</li>
                <li>Allow Mic and Camera permissions in Chrome to enable audio/video interactions. <a target="_blank" rel="noopener noreferrer" href="https://support.google.com/chrome/answer/2693767?co=GENIE.Platform%3DDesktop&hl=en">This guide from Google Support will help if not already sorted out.</a></li>
                <li>Troubleshooting tip: Refresh page/restart browser, and ensure no other video conferencing tools are active in other tabs.</li>
                <li>Access Live support: For any live support before/during the event Click the &quot;?&quot; icon on the bottom right of your screen.</li>
              </ul>

              <br />
              <hr />

              <h3>Navigating the Conference</h3>
              <p>Once you log in, you land at the reception. You will see several tabs and controls on the top to interact with the event.</p>
              <div className="row" style={{ marginLeft: '17px' }}>
                <img src="/assets/images/faq/airmeet1.png" alt="Airmeet -- Reception" width="95%" />
              </div>
              <p><strong>View Schedule</strong>: Access the conference program from this tab and navigate to the session you would like to attend.</p>
              <p><strong>Reception</strong>: This is the landing page of the event.</p>
              <p><strong>Lounge</strong>: This is a space for social networking. Lounge has tables that can be used by the attendees to have informal discussion during the event.</p>
              <p><strong>Feed</strong>: Find event related feeds and announcements in this section.</p>
              <p><strong>People</strong>: Discover and connect with participants.</p>
              <p><strong>Message</strong>: Reply to your direct messages here.</p>
              <p><strong>Alerts</strong>: Check event-wide announcements and notifications sent by organizers here.</p>

              <h3>View Schedule</h3>
              <p>Access the conference program and attend the sessions using the &lsquo;View Schedule&rsquo; tab.</p>
              <div className="row" style={{ marginLeft: '17px' }}>
                <img src="/assets/images/faq/airmeet2.png" alt="Airmeet -- View Schedule" width="95%" />
              </div>
              <p>You can bookmark sessions to add them to your schedule and get reminders. A calendar invite will also be sent to your registered email address. You can view the day-wise schedule by clicking on a date. If you missed attending a live session, it will be available as a recorded session here.</p>

              <h3>Attending a live session</h3>
              <p>Inside a live session, use the Session-Feed to chat and Q&amp;A panel to ask questions to the speaker. You can also upvote the questions asked by other attendees. At the end of the talk, the session chair will pick the question from the Q &amp; A panel for the speaker.</p>
              <div className="row" style={{ marginLeft: '17px' }}>
                <img src="/assets/images/faq/airmeet3.png" alt="Airmeet -- Live Session" width="95%" />
              </div>

              <h3>Social Lounge</h3>
              <div className="row" style={{ marginLeft: '17px' }}>
                <img src="/assets/images/faq/airmeet4.png" alt="Airmeet -- Lounge" width="95%" />
              </div>
              <p>Use the lounge section to meet and interact with other participants at the conference.</p>

              <h3>Navigating Tutorials and Workshops</h3>
              <p>Tutorials and Workshops are run as independent events and links for each of these events will be shared closer to the conference. If you have registered for a workshop, you will have access to other workshops organised in parallel on the same day.</p>
              <div className="row" style={{ marginLeft: '17px' }}>
                <img src="/assets/images/faq/airmeet5.png" alt="Airmeet -- Workshops" width="95%" />
              </div>

              <h3>Attendee Guide to Airmeet</h3>
              <table className="table table-bordered" style={{ background: '#fff' }}>
                <tbody>
                  <tr><td><strong>Attendee Overview</strong></td></tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Step by step guide for attendees - <a href="https://help.airmeet.com/support/solutions/articles/82000480786-step-by-step-guide-for-attendees-conference-format" target="_blank" rel="noopener noreferrer">Click Here</a> / <a href="https://www.loom.com/share/a8b5ad3b7a164211ab151fd774be0c05" target="_blank" rel="noopener noreferrer">Watch Here</a></li>
                      </ul>
                      <span>COMSNETS 2027 is a private event and can only be accessed by registered delegates. If you have registered already, you are pre-authorized for the event.</span>
                    </td>
                  </tr>
                  <tr><td><strong>Live Event Controls</strong></td></tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Schedule Meetings with participants - <a href="https://help.airmeet.com/support/solutions/articles/82000519099-schedule-meetings-with-participants-on-airmeet-event-" target="_blank" rel="noopener noreferrer">Click here</a></li>
                        <li>Bookmark sessions and mark them on your official calendar - <a href="https://help.airmeet.com/support/solutions/articles/82000517976-book" target="_blank" rel="noopener noreferrer">Click here</a></li>
                        <li>How to join Speakers and Host on the Live Stage during Session - <a href="https://help.airmeet.com/support/solutions/articles/82000480923-how-to-join-speakers-and-host-on-the-live-stage-during-session-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr><td><strong>Video Tutorials for Attendee</strong></td></tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Reception Tutorial Videos - <a href="https://help.airmeet.com/support/solutions/articles/82000665420-reception-tutorial-videos" target="_blank" rel="noopener noreferrer">Watch Here</a></li>
                        <li>Session Tutorial Videos - <a href="https://help.airmeet.com/support/solutions/articles/82000665421-session-tutorial-videos" target="_blank" rel="noopener noreferrer">Watch Here</a></li>
                        <li>Social Lounge Tutorial Videos - <a href="https://help.airmeet.com/support/solutions/articles/82000665436-social-lounge-tutorial-videos" target="_blank" rel="noopener noreferrer">Watch Here</a></li>
                        <li>Booths Tutorial Videos - <a href="https://help.airmeet.com/support/solutions/articles/82000665437-booths-tutorial-videos" target="_blank" rel="noopener noreferrer">Watch Here</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr><td><strong>Attendee&rsquo;s Troubleshooting Guide</strong></td></tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Technical Instructions manual for attendees - <a href="https://help.airmeet.com/support/solutions/articles/82000443161-what-are-the-technical-instruction-for-an-attendee-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                        <li>Attendee Troubleshooting - <a href="https://help.airmeet.com/support/solutions/folders/82000324187" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                      </ul>
                    </td>
                  </tr>
                  <tr><td><strong>Technical Instruction General</strong></td></tr>
                  <tr>
                    <td>
                      <ul>
                        <li>How much network bandwidth (internet speed) do I need - <a href="https://help.airmeet.com/support/solutions/articles/82000443338-how-much-network-bandwidth-internet-speed-do-i-need-to-join-an-airmeet-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                        <li>Safari browser compatibility and known technical issue - <a href="https://help.airmeet.com/support/solutions/articles/82000515558-safari-browser-compatibility-and-known-technical-issue-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                        <li>What browsers are supported by Airmeet - <a href="https://help.airmeet.com/support/solutions/articles/82000443316-what-browsers-are-supported-by-airmeet-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                        <li>How do I prepare my network in case of firewall or VPN to access Airmeet - <a href="https://help.airmeet.com/support/solutions/articles/82000443373-how-do-i-prepare-my-network-in-case-of-firewall-or-vpn-to-access-airmeet-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                        <li>How to check your internet connection and current bandwidth - <a href="https://help.airmeet.com/support/solutions/articles/82000630116-how-to-check-your-internet-connection-current-bandwidth-" target="_blank" rel="noopener noreferrer">Click Here</a></li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="text-justify">For any further assistance feel free to reach out to Airmeet at the 24/7 support lounge. <a href="https://www.airmeet.com/event/b6645470-f81d-11ea-bdd0-e9fe5fe214a9" target="_blank" rel="noopener noreferrer">Click Here</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

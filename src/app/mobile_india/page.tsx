export const metadata = { title: 'Mobile India | COMSNETS 2027' };

interface ScheduleItem {
  time: string;
  session: string;
  details?: string[];
  moderator?: string;
  variant?: 'keynote' | 'session' | 'break' | 'lunch' | 'class' | 'closing' | 'reg';
}

const schedule: ScheduleItem[] = [
  { time: '9:00-9:30', session: 'Registration', variant: 'reg' },
  {
    time: '9:30-10:30',
    session: 'COMSNETS / MOBILE INDIA KEYNOTE TALK (Venue: Grand Ball Room)',
    details: [
      'Privacy, Fairness, Transparency and Control of Targeted Advertising on Social Media',
      'Dr. Krishna Gummadi, Professor, Max Planck Institute for Software Systems, Germany',
    ],
    variant: 'keynote',
  },
  { time: '10:30-11:00', session: 'Tea Break-1 and Networking', variant: 'break' },
  {
    time: '11:00-12:15',
    session: 'Session 1: Telecom / Mobile Data Analytics',
    details: [
      'Kartik Raja, Co-Founder, Phimetrics',
      'Amitava Das, Head-Telecom Business Unit, TCS',
      'Srikanth Narasimhan, Distinguished IT Engineer, Cisco',
      'Bhaskar Rao G, Head of Software Architects, Nokia Networks',
    ],
    moderator: 'Dr. T.K. Srikanth, Professor, IIIT-Bangalore',
    variant: 'session',
  },
  {
    time: '12:15-13:15',
    session: 'Session 2: Mobile Authentication and Security',
    details: [
      'Dr. Giridhar Mandyam, Chief Security Architect - IoT and Automotive, Qualcomm',
      'Dr. Pravin Bhagwat, Co-Founder and CTO, Mojo Networks',
      'Biswajit Dash, Sr. Product Manager, Samsung Pay',
    ],
    moderator: 'Dr. V. Sridhar, Professor, IIIT-Bangalore',
    variant: 'session',
  },
  { time: '13:15-14:15', session: 'Lunch and Networking', variant: 'lunch' },
  {
    time: '14:15-14:35',
    session: 'Keynote-2: on Data Privacy & Protection',
    details: ['Samiran Gupta, Head-India, ICANN'],
    variant: 'keynote',
  },
  {
    time: '14:35-16:00',
    session: 'Session 3: Data Protection and User Privacy',
    details: [
      'Joginder Yadav, Director - Legal & General Counsel, Cisco',
      'V. Rajesh Kumar, Sr. Manager, Privacy and Data Protection Office, Infosys',
      'Anand Bhushan, Partner, Shardul Amarchand Mangaldas & Co',
      'S.K. Murthy, Patent Professional, Intel',
    ],
    moderator: 'Dr. Janaki Srinivasan, Professor, IIIT Bangalore',
    variant: 'session',
  },
  {
    time: '16:00-16:30',
    session: 'Master Class: Enterprise Digitization Patterns',
    details: [
      'Srikanth Narasimhan, Distinguished IT Engineer, Cisco',
      'Jagadish Chundury, Technical Architect, Cisco Systems',
    ],
    variant: 'class',
  },
  { time: '16:30-16:40', session: 'Closing Remarks by Co-Chairs', variant: 'closing' },
];

const variantColors: Record<string, string> = {
  reg: '#FFC000',
  keynote: '#fff3b0',
  session: '#DBE5F1',
  break: '#EEECE1',
  lunch: '#E9EBF5',
  class: '#fff3b0',
  closing: '#fff3b0',
};

export default function MobileIndiaPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>Mobile India 2018</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <div className="well well-sm">
                <h4><strong>Date:</strong> January 5, 2018 (Friday)</h4>
              </div>

              <p>
                Please click <a href="http://in.eregnow.com/ticketing/register/MobileIndia2018" target="_blank" rel="noopener noreferrer">here</a> for Mobile India 2018 registration
              </p>

              <p>
                <strong>Venue:</strong> Sigma Hall, Chancery Pavilion, 135, Residency Road, Bangalore, 560025, India
              </p>

              <div id="mi">
                <div className="thumbnail text-center">
                  <img src="/assets/images/partners/MI2018_Logo.png" style={{ width: '40%' }} className="img-responsive" alt="Mobile India 2018 Logo" />
                </div>

                <h3 className="text-center">Session Sponsors:</h3>
                <div className="row">
                  <div className="col-sm-6 col-md-6">
                    <a href="http://phimetrics.com/" target="_blank" rel="noopener noreferrer" className="thumbnail">
                      <br />
                      <img src="/assets/images/partners/phimetrics.jpg" className="img-responsive" alt="Phimetrics" style={{ width: '50%' }} />
                    </a>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <a href="http://icann.org/" target="_blank" rel="noopener noreferrer" className="thumbnail">
                      <br />
                      <img src="/assets/images/sponsors/icann.png" className="img-responsive" style={{ width: '30%' }} alt="ICANN" />
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="center">
                    <center><strong>Online Media Partner:</strong></center>
                    <a href="http://www.yourstory.com/" target="_blank" rel="noopener noreferrer" className="thumbnail">
                      <br />
                      <img src="/assets/images/partners/your_story.png" className="img-responsive" alt="Yourstory" style={{ width: '30%' }} />
                    </a>
                    <a href="https://yourstory.com/2018/01/top-5-areas-watch-2018/" target="_blank" rel="noopener noreferrer">
                      <center><strong><i>Pre-event article on Top 5 areas to watch out for in 2018</i></strong></center>
                    </a>
                  </div>
                </div>

                <br />
                <p>
                  <strong>Mobile India 2018 is one of the first premier events and will be the curtain raiser for this year&rsquo;s <span style={{ color: 'red' }}>mobile disruptions</span> in the country. It is associated with the Tenth International Conference on COMmunication Systems and NETworkS (COMSNETS), the world&rsquo;s premier international conference on networking and communications technology innovation.</strong>
                </p>
                <hr />

                <h3>
                  <strong style={{ color: '#3e2723' }}>Theme: Data Analytics and Protection in the Mobile World</strong>
                </h3>

                <p>
                  The rapid evolution of telecommunications, especially mobile services in India has aided the overall economic and social development of the country. It has enabled better connectivity among users, increasing use of information and communication technology (ICT) services and emergence of a variety of new business models. In parallel, we have also witnessed a quantum leap in the quantity and value of data that is being generated through the use of modern communication services. Each step of a user&apos;s interaction with ICT services, results in the generation of large amounts of data. According to Nokia India Mobile Broadband Index 2017, total data payload in Indian telecom network grew 60 percent over last year to reach 165 peta bytes, thanks to deployment of 4G by most of the operators. Mobile Broad Band usage is only expected to increase many fold from the current level of about 1 GB per subscriber per month. Such data in various forms is collected by businesses and agencies as a by-product of the user&rsquo;s interactions with them. This data is then leveraged by the businesses, to provide various personalized services, resulting increased economic activity and market efficiencies. While recognizing the vast business and efficiency potential of data analytics it is also vital to assess whether the data protection rights of individuals are being adequately protected in this changing environment. Mobile India 2018 will address these issues in 3 sessions with insights from industry experts, researchers from academia and industry, business analysts, privacy professionals, and government officials.
                </p>

                <hr />

                <p><strong style={{ color: '#3e2723' }}>Session 1: Telecom / Mobile Data Analytics</strong></p>
                <p>
                  Pervasiveness of mobiles have resulted in the generation of data relating to proximity, user context, tastes and preferences, and finally the complete user profile. Analysis of the user profiles to target goods and services, advertisements, discount coupons, promotion programmes, have been on the rise. Apart from mobile app providers, telcos are sitting on a huge pile of location based data that needs exploration and monetization. A distinguished panel representing participants from firms in the areas of Over The Top (OTT), e-commerce, mobile services will come together and analyze the opportunities offered by analyzing huge amount of user data thus collected and benefits therein for businesses.
                </p>

                <p><strong style={{ color: '#3e2723' }}>Session 2: Mobile Authentication and Security</strong></p>
                <p>
                  Traditional online authentication using username/password pairs have not been found to be adequate in countering cyber-attacks. Moreover they are cumbersome and not user friendly. As a result, there have been increased efforts to find alternatives to username/passwords that can ensure security for online transactions while not compromising the privacy on individuals. A distinguished panel representing many participants in the identity and authentication ecosystem will come together for this session to discuss the key challenges in reliable authentication and ensuring security of user data.
                </p>

                <p><strong style={{ color: '#3e2723' }}>Session 3: Data Protection and User Privacy</strong></p>
                <p>
                  While businesses collect user data to enhance their service offerings, protection of such data and ensuring privacy of users are not infringed upon are very important. While the gamut of privacy rights cut across many areas, it is important to identify which aspects of privacy are being compromised and take suitable precautions. With Supreme Court of India pronouncing privacy as the fundamental right of citizens of the country, it is important for businesses, government officials, entrepreneurs and research scholars to discuss the salient aspects of data protection and privacy. Realizing this the Telecom Regulatory Authority of India (TRAI) has also started the consultation process on this issue. In this session, the following aspects will be challenged:
                </p>
                <ul>
                  <li>In light of recent advances in technology, what changes, if any, are recommended to the definition of personal data?</li>
                  <li>What should be the Rights and Responsibilities of the Data Controllers? Can the Rights of Data Controller supersede the Rights of an Individual over his/her Personal Data?</li>
                  <li>What, if any, are the measures that must be taken to encourage the creation of new data based businesses consistent with the overall framework of data protection?</li>
                </ul>

                <h3><strong style={{ color: 'red' }}>Schedule for the Day</strong></h3>
                <hr />

                <table className="table table-bordered" style={{ marginTop: '10px' }}>
                  <thead>
                    <tr style={{ background: '#4E67C8', color: 'white' }}>
                      <th style={{ width: '20%', color: 'white' }}>Time</th>
                      <th style={{ color: 'white' }}>Sessions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((item, i) => (
                      <tr key={i} style={{ background: variantColors[item.variant || 'session'] }}>
                        <td><strong style={{ color: '#7030A0' }}>{item.time}</strong></td>
                        <td>
                          <strong style={{ color: '#C00000' }}>{item.session}</strong>
                          {item.details && item.details.length > 0 && (
                            <ul style={{ marginTop: '8px', marginBottom: 0 }}>
                              {item.details.map((d, j) => (
                                <li key={j} style={{ color: '#7030A0' }}>{d}</li>
                              ))}
                            </ul>
                          )}
                          {item.moderator && (
                            <div style={{ marginTop: '8px' }}>
                              <strong style={{ color: '#C00000' }}>Moderator:</strong> <span style={{ color: '#7030A0' }}>{item.moderator}</span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Historical: Mobile India 2016 content (App Economy theme, Dr. Henning Schulzrinne keynote, Mr. Samiran Gupta keynote, four sessions on start-up ecosystem, telcos, ICT for innovation, and law/regulation) was preserved in the legacy PHP as a commented-out block. View archives for previous editions. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

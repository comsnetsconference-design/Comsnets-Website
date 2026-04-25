export const metadata = { title: 'Privacy Policy | COMSNETS 2027' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Privacy Policy for COMSNETS App 2026</h1>

              <p><strong>Effective Date:</strong> December 30, 2025</p>
              <p>This Privacy Policy describes how COMSNETS (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information in connection with your use of the COMSNETS 2026 mobile application (the &quot;App&quot;).</p>

              <h2 style={{ color: '#34495e', marginTop: '30px', fontSize: '1.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>1. Information We Collect</h2>
              <p style={{ textAlign: 'justify', marginBottom: '15px' }}>The App is designed efficiently to provide conference information with minimal data collection.</p>
              <ul>
                <li><strong>Device Information:</strong> We may collect standard device information (e.g., model, OS version) for analytics and troubleshooting.</li>
                <li><strong>Push Notifications:</strong> We use Firebase Cloud Messaging (FCM) to deliver important conference updates. This may involve the processing of a unique device token.</li>
              </ul>

              <h2 style={{ color: '#34495e', marginTop: '30px', fontSize: '1.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>2. Third-Party Services</h2>
              <p style={{ textAlign: 'justify', marginBottom: '15px' }}>The App utilizes the following third-party services:</p>
              <ul>
                <li><strong>Google Firebase:</strong> Used for app infrastructure, notifications, and analytics. Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>.</li>
              </ul>

              <h2 style={{ color: '#34495e', marginTop: '30px', fontSize: '1.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>3. How We Use Your Information</h2>
              <p style={{ textAlign: 'justify', marginBottom: '15px' }}>We use the collected information solely to:</p>
              <ul>
                <li>Provide and maintain the App&rsquo;s functionality.</li>
                <li>Send you technical notices, updates, and alerts (via push notifications).</li>
                <li>Improve the conference experience.</li>
              </ul>

              <h2 style={{ color: '#34495e', marginTop: '30px', fontSize: '1.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>4. Data Security</h2>
              <p style={{ textAlign: 'justify', marginBottom: '15px' }}>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.</p>

              <h2 style={{ color: '#34495e', marginTop: '30px', fontSize: '1.5em', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>5. Contact Us</h2>
              <p style={{ textAlign: 'justify', marginBottom: '15px' }}>If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:comsnets.app@gmail.com">comsnets.app@gmail.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

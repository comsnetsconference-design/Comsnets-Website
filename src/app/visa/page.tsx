import React from 'react';

export default function VisaPage() {
  return (
    <div className="subpage-spacer">
      <div className="container">
        <div className="col-md-9 well-white">
          <h1 className="page-title">Visa Information</h1>

          <div className="well">
            <a href="docs/COMSNETS Logo Support 2025.pdf" download="MeitY.pdf">
              <i className="glyphicon glyphicon-download-alt" style={{ marginRight: '10px' }}></i>
              {'  '}MeitY, Govt. of India
            </a>
          </div>

          <a href="docs/MHAclearance2025.pdf" target="_new">
            <div className="alert alert-success well-sm">
              <p>
                <img src="assets/images/pdf_download.png" style={{ width: '25px', marginRight: '15px' }} />
                Click here to download MHA (Ministry of Home Affairs) clearance when applying for a Visa to India.{' '}
              </p>
            </div>
          </a>

          <a href="docs/MHA_Guidelines.pdf" target="_new">
            <div className="alert alert-success well-sm">
              <p>
                <img src="assets/images/pdf_download.png" style={{ width: '25px', marginRight: '15px' }} />
                Click here to download MHA (Ministry of Home Affairs) Guidelines
              </p>
            </div>
          </a>

          <p className="text-left">
            All non-Indian-citizens are required to have an Indian visa to enter the country. Allow yourself sufficient time (say 2-3 weeks) to procure an appropriate visa from your nearest Indian consulate. There are several Indian consulates worldwide. Indian consulates in the continental US (
            <a href="http://www.indianembassy.org/">&nbsp;http://www.indianembassy.org/</a>
            ) are located in Washington D.C., New York, Chicago, Houston, and San Francisco. Please visit this site for more information including an online copy of the application form for Indian visa.
          </p>

          <h3>Visa Request Process for COMSNETS</h3>

          <p>
            Over the past several years the obtaining of a visa has become more complex requiring more attention, energy and time. Additionally, embassies have different requirements. Some may request:
          </p>
          <ol>
            <li>A letter from COMSNETS verifying intentions of conference participant</li>
            <li>Confirmation that the paper was accepted</li>
            <li>A receipt that conference fees have been paid in full</li>
            <li>Appearance or interview by conference participant</li>
          </ol>
          <p>
            As a result of these requirements by some embassies, COMSNETS encourages attendees to apply no later than 3 (three) months prior the conference. Letters of &quot;Invitation&quot; will be issued to:
          </p>
          <ol>
            <li>Keynote speakers, presenters, panelists</li>
            <li>Any organizing committee member</li>
            <li>People professionally or personally known by a committee member</li>
            <li>Conference participant who has paid their registration fee</li>
          </ol>
          <p>To request a visa letter please provide the following information:</p>
          <ol>
            <li>Conference/workshop title, date and location</li>
            <li>The amount of fees paid by the requestor</li>
            <li>Your intention as either a participant, presenter, committee member, speaker, panelist, etc.</li>
          </ol>
          <p>
            <strong>
              Forward your requests to Mrs. Chandrika Sridhar, Registration Chair, COMSNETS 2027 at&nbsp;
              <a href="mailto:chandrika.sridhar@gmail.com">chandrika.sridhar@gmail.com</a>
            </strong>
            <br />
            <br />
            Please provide following information while contacting Mrs. Chandrika:
          </p>
          <ol>
            <li>Full name, as in your passport</li>
            <li>Father/spouse&apos;s name</li>
            <li>Date of birth in YYYY-MM-DD format</li>
            <li>Place of birth</li>
            <li>Nationality</li>
            <li>Passport number</li>
            <li>Date of issue of passport, in YYYY-MM-DD format</li>
            <li>Place of issue of passport</li>
            <li>Date of expiry of passport, in YYYY-MM-DD format</li>
            <li>Full address, as in passport</li>
            <li>Phone number, including country code</li>
          </ol>

          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}

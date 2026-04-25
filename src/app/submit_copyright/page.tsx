"use client";

export default function SubmitCopyrightPage() {
  function generateUUID() {
    let d = new Date().getTime();
    if (typeof window !== 'undefined' && window.performance && typeof window.performance.now === 'function') {
      d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  function populateFieldsAndSendECF(e: React.FormEvent<HTMLFormElement>) {
    const form = e.currentTarget as HTMLFormElement & {
      AuthName: HTMLInputElement;
      AuthEmail: HTMLInputElement;
      ArtTitle: HTMLInputElement;
      ArtId: HTMLInputElement;
    };
    let returnMsg = '';
    const authNameValue = form.AuthName.value.trim();
    if (!authNameValue) returnMsg += 'Author name is a required field.\n';
    const emailAddress = form.AuthEmail.value.trim();
    if (!emailAddress) returnMsg += 'Email address is a required field.\n';
    const artTitle = form.ArtTitle.value.trim();
    if (!artTitle) returnMsg += 'Article title is a required field.\n';
    if (returnMsg) {
      alert(returnMsg);
      e.preventDefault();
      return false;
    }
    form.AuthName.value = authNameValue;
    form.AuthEmail.value = emailAddress;
    form.ArtTitle.value = artTitle;
    form.ArtId.value = 'COMSNETS25-' + generateUUID();
    return true;
  }

  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Copyright Submission</h1>
              {/* TODO: update PubTitle / ArtSource / ArtId prefix for COMSNETS 2027 when IEEE assigns them */}
              <h2>Copyright Submission Form for COMSNETS 2025</h2>
              <form
                name="ECFSubmitForm"
                onSubmit={populateFieldsAndSendECF}
                action="https://ecopyright.ieee.org/ECTT/IntroPage.jsp"
                method="post"
              >
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td className="required">Author Names (separate with &apos;and&apos;)*</td>
                      <td style={{ border: '2px solid black' }}>
                        <input type="text" name="AuthName" style={{ width: '100%' }} required/>
                      </td>
                    </tr>
                    <tr>
                      <td className="required">Author Emails (Put only one email id registered in HotCRP)*</td>
                      <td style={{ border: '2px solid black' }}>
                        <input type="email" name="AuthEmail" style={{ width: '100%' }} required/>
                      </td>
                    </tr>
                    <tr>
                      <td className="required">Paper Title*</td>
                      <td style={{ border: '2px solid black' }}>
                        <input type="text" name="ArtTitle" style={{ width: '100%' }} required/>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="PubTitle" defaultValue="2025 17th International Conference on COMmunication Systems and NETworks (COMSNETS)"/>
                <input type="hidden" name="ArtSource" defaultValue="63942"/>
                <input type="hidden" name="ArtId" defaultValue="COMSNETS25-generatedUUID"/>
                <input type="hidden" name="rtrnurl" defaultValue="https://www.comsnets.org/"/>
                <br/>
                <br/>
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td>(<em className="required">*</em>&nbsp;&nbsp;Required fields)</td>
                      <td><input type="submit" name="Submit" value="Submit Copyright Form"/></td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

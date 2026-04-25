export default function ConferenceVenue() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 itemProp="name" className="page-title" id="head" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Conference Venue</h1>

              <div className="content" id="panel2-1">
                <h3><strong><a href="https://www.chanceryhotels.com/thepavilion/index.html" target="_blank" rel="nofollow">The Chancery Pavillion, Residency Road</a></strong></h3><br />
                <p className="justified"><img id="venue-chancery" src="assets/images/hotels/chancery-pav.jpg" alt="Chancery Pavilion" className="img-thumbnail pull-left" style={{ marginRight: '20px' }} />The Chancery Pavilion is a 5-star luxury business hotel, situated right in the hub of the city's business district on Residency Road, great for those travelling to Bengaluru (formerly known as Bangalore). It's also great for leisure travellers, being close to all the major shopping and entertainment areas in town. The Chancery Pavilion gives you a chance to experience Bengaluru delights as the City of Gardens, with Lalbaugh and Cubbon Park just a few minutes away. The hotel itself has all the modern amenities of a luxury hotel on offer, including a swimming pool and full-services health spa to wind down after a full day of meetings or shopping. Their state-of-the-art banquet hall serves perfectly for everything from a convention to wedding reception or party.</p>

                <p></p>
                <hr /><br /><br />
                <h4><strong>Location</strong></h4>
                <p>
                  135, Residency Road<br />
                  Bangalore City Center<br />
                  Pin - 560025
                </p>
                <iframe width="100%" height="171" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.co.in/maps?oe=utf-8&amp;client=firefox-a&amp;ie=UTF8&amp;gl=in&amp;daddr=The+Chancery+Pavilion,+FM+Cariappa+Rd,+Bangalore,+Karnataka+560025&amp;saddr=Bengaluru+International+Airport+Limited,+Bial+Road,+Bengaluru,+Karnataka+560300&amp;panel=1&amp;f=d&amp;fb=1&amp;dirflg=d&amp;geocode=FXRtyQAdwMChBCGOQSmh6XBsKSllYkR1_hyuOzGOQSmh6XBsKQ%3BFX3YxQAddg-gBCEbLKHuWJp7jynr8jy21xWuOzEbLKHuWJp7jw&amp;t=m&amp;ll=13.082822,77.647934&amp;spn=0.114369,0.175095&amp;z=11&amp;output=embed"></iframe><br /><small><a href="https://maps.google.co.in/maps?oe=utf-8&amp;client=firefox-a&amp;ie=UTF8&amp;gl=in&amp;daddr=The+Chancery+Pavilion,+FM+Cariappa+Rd,+Bangalore,+Karnataka+560025&amp;saddr=Bengaluru+International+Airport+Limited,+Bial+Road,+Bengaluru,+Karnataka+560300&amp;panel=1&amp;f=d&amp;fb=1&amp;dirflg=d&amp;geocode=FXRtyQAdwMChBCGOQSmh6XBsKSllYkR1_hyuOzGOQSmh6XBsKQ%3BFX3YxQAddg-gBCEbLKHuWJp7jynr8jy21xWuOzEbLKHuWJp7jw&amp;t=m&amp;ll=13.082822,77.647934&amp;spn=0.114369,0.175095&amp;z=11&amp;source=embed" style={{ color: '#0000FF', textAlign: 'left' }}>View Larger Map</a></small>
                <p></p>
                <p className="justified">
                  The Chancery Pavilion is located on Residency Road, 39 kms. from the Bengaluru International Airport. It is 5 kms. from the Cantonment Railway Station, 3 kms. from Vasanth Nagar Bus Station and just 2.6 kms. from City Centre. The hotel provides private transportation for the guests for sightseeing and airport pick-up and drop facility.
                </p>

                <embed src="docs/chancery_covid_measures_compressed.pdf" width="100%" height={500} type="application/pdf" />
                <p></p>
                <blockquote>Sigma - The Seating Capacity up to 250 people. The Grand Ball Room - The Seating Capacity up to 1500 people. Pool Side Banqueting - The Seating Capacity up to 150 people. Esquire - The Seating Capacity up to 150 people. Executive Centre.</blockquote>
                <h4><strong>Restaurants</strong></h4>
                <ul>
                  <li>Ithaca - The Mediterranean Restaurant</li>
                  <li>Indian Affair - A Multi Cuisine Restaurant</li>
                  <li>Amnesia - The Pool-Side Bar</li>
                  <li>The Lounge - Ideal for Quick Drinks</li>
                  <li>The Pastry Shop</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

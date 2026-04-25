const tgStyles = `
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-1wig{font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-c3ow{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-kwiq{border-color:inherit;color:#000000;text-align:left;vertical-align:top}
.tg .tg-21f3{border-color:inherit;color:#000000;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-ml2k{border-color:inherit;color:#000000;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
`;

export default function AccommodationPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tgStyles }} />

      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>

      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Accommodation</h1>

              <strong>
                <ol>
                  <li> Hotels:</li>
                  <ol>
                    <li><a href="#chancerypavilion">The Chancery Pavilion, Bangalore</a></li>
                    <li><a href="#melange">Melange Astris Hotel, Bangalore</a></li>
                    <li><a href="#chancerylavelle">The Chancery, Lavelle Road, Bangalore (1.5 Kms from conference venue)</a></li>
                    <li><a href="#ramanashreerichmond">Ramanashree Richmond - Richmond Circle</a></li>
                    <li><a href="#grand">Octave Hotel (Double Road), Bangalore</a></li>
                    <li><a href="#royalorchid">Hotel Royal Orchid, Bangalore (5 Star)</a></li>
                    <li><a href="#adarshhamilton">Adarsh Hamilton, Bangalore (4 Star)</a></li>
                    <li><a href="#royalorchidcentral">Royal Orchid Central - Manipal Centre (4 Star)</a></li>
                    <li><a href="#ramada">Ramada Bangalore - Shivaji Nagar (4 Star)</a></li>
                    <li><a href="#shilton">Hotel Shilton Suites, Bangalore</a></li>
                  </ol>
                </ol>
              </strong>

              <hr />
              <br />
              <center><h2 style={{ color: 'darkblue' }}><b><u> Hotels</u></b></h2></center>

              <a id="chancerypavilion"></a>
              <h3><strong>The Chancery Pavilion, Bangalore</strong></h3>
              <p className="justify">
                <br />
                Experience the best hospitality that the city of Bangalore has to offer with The Chancery Pavilion -Residency road! With exceptional services, latest state-of- the-art- facilities and impeccable hospitality, all 222 hotel rooms offer the ideal ambience for guests to unwind in.
              </p>
              <br />

              <h4><strong>Address:</strong></h4>
              <p>
                135, Residency Road, Bangalore - 560 025, India
              </p>
              <br />
              <ul><li><b>Website:</b> <a href="https://chanceryhotels.com/" target="_blank" rel="noreferrer">https://chanceryhotels.com/</a></li>
              </ul>
              <br />

              <h4><strong>To make a reservation:</strong></h4>
              <ul>
                <li><strong>via Email -</strong> Send an email to the following personnel with the subject line reading <strong>COMSNETS 2027</strong>, this will help us identify the booking and applicable rate.</li>
                <li><strong>via Phone -</strong> Guest must announce that he would be attending COMSNETS 2027 and is soliciting special rates.</li>
                <ul>
                  <li><a target="_blank" rel="noreferrer" href="mailto:banquets@chanceryhotels.com">Pravallika Reddy</a>  Phone No: +91 9108987600</li>
                  <li><a target="_blank" rel="noreferrer" href="mailto:reservations.tcp@chanceryhotels.com">Arun Reservation</a>  Phone No: +91 9108987600</li>
                </ul>

                <li>Our room package includes:
                  <ul>
                    <li>Breakfast at Ithaca</li>
                    <li>Coffee maker</li>
                    <li>Use of swimming pool &amp; gym</li>
                    <li>Free WiFi</li>
                  </ul>
                </li>
              </ul>

              <h4><strong>Tarriff:</strong></h4>
              <p>
                To make a reservation, for the year COMSNETS 2025, our special room rates are as follows:
              </p>

              <table className="tg">
                <thead>
                  <tr>
                    <th className="tg-21f3">Occupancy Type</th>
                    <th className="tg-21f3">Room Price (in INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-kwiq">Single Occupancy</td>
                    <td className="tg-kwiq">INR 6000 + 12% tax per room per night</td>
                  </tr>
                  <tr>
                    <td className="tg-kwiq">Double occupancy</td>
                    <td className="tg-kwiq">INR 6500 + 12% tax per room per night</td>
                  </tr>
                </tbody>
              </table>
              <hr />

              <a id="melange"></a>
              <h3><strong>Hotel Melange Astris</strong></h3>
              <p></p>

              <p className="justify">
                Melange Astris is designed to offer you the best of both worlds. The luxurious living space for optimum comfort is well balanced with reasonable tariff.
                <br />
                This well defined product is crafted to meet home comforts and needs with professional service and spacious apartments.
              </p>
              <br />
              <h4><strong>Tarriff:</strong></h4>

              <table className="tg">
                <thead>
                  <tr>
                    <th className="tg-21f3">Category</th>
                    <th className="tg-21f3">Room Size (sq ft)</th>
                    <th className="tg-21f3">Single Occupancy</th>
                    <th className="tg-21f3">Double Occupancy</th>
                    <th className="tg-21f3">Room Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-kwiq">Executive Room</td>
                    <td className="tg-kwiq">304 sq ft</td>
                    <td className="tg-kwiq">INR. 4500 + 12% tax</td>
                    <td className="tg-kwiq"> INR. 4800 + 12% tax</td>
                    <td className="tg-ml2k">With dining area</td>
                  </tr>
                  <tr>
                    <td className="tg-kwiq">Luxury Studio</td>
                    <td className="tg-kwiq">516-640 sq ft</td>
                    <td className="tg-kwiq">INR. 5500 + 12% tax</td>
                    <td className="tg-kwiq">INR. 6000 + 12% tax</td>
                    <td className="tg-ml2k">With kitchen &amp; dining area</td>
                  </tr>
                  <tr>
                    <td className="tg-0pky">Premium Studio</td>
                    <td className="tg-0pky">664 sq ft</td>
                    <td className="tg-0pky">INR.6000 + 12% tax</td>
                    <td className="tg-0pky">INR.6500 + 12% tax</td>
                    <td className="tg-c3ow">With kitchen &amp; living room</td>
                  </tr>
                  <tr>
                    <td className="tg-0pky">One-Bedroom Apartment</td>
                    <td className="tg-0pky">650 sq ft</td>
                    <td className="tg-0pky"> INR.6500 + 12% tax</td>
                    <td className="tg-0pky">INR.7000 + 12% tax</td>
                    <td className="tg-c3ow">With kitchen &amp; separate living area with balcony</td>
                  </tr>
                </tbody>
              </table>

              <br />
              <h4><strong>Contact/Booking details:</strong></h4>
              <ul>
                <li><b>Website:</b> •   <a href="https://www.melangebangalore.com/Astris/index.html" target="_blank" rel="noreferrer">https://www.melangebangalore.com/Astris/index.html</a></li>
                <li>A direct booking can be taken via mail or phone calls </li>
                <li><b>Email:</b>  <a href="mailto:astris.reservations@melangebangalore.com">astris.reservations@melangebangalore.com</a>
                  OR <a href="mailto:Sales@melangebangalore.com"> Sales@melangebangalore.com</a></li>
                <li><b>Phone:</b> +91 8970990722 / +91 95131 11641</li>
                <li> For the above tarriff, drop an email to Chandrika Sridhar (<a href="mailto:chand@alum.iisc.ac.in">chand@alum.iisc.ac.in</a>) or Sushma Srinivasan(<a href="mailto:sushmas@iisc.ac.in">sushmas@iisc.ac.in</a>) with the subject line reading COMSNETS 2025, this will help us identify the booking and applicable rate.</li>
              </ul>
              <br />

              <h4><strong>Address:</strong></h4>
              <p>
                1, Richmond Rd, Langford Gardens,
                <br />Bengaluru, Karnataka 560025, India.
              </p>

              <br /><hr />

              <br />

              <a id="chancerylavelle"></a>
              <h3><strong>The Chancery, Lavelle Road (1.5 Kms from conference venue)</strong></h3>
              <p></p>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/img/placeholder.jpg" data-src="assets/images/hotels/chancery_suite.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/img/placeholder.jpg" data-src="assets/images/hotels/chancery_living_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/img/placeholder.jpg" data-src="assets/images/hotels/chancery_ithaca.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <p className="justify">The ultimate destination for any occasion, The Chancery Hotel offers comfortable space for business/leisure travellers, strategically located in the heart of Bangalore. Equipped with superior amenities, a stay here is nothing short of a mini vacation. Explore the city or stay indoors, there are numerous options to choose from. When you&rsquo;re done attending meetings, wind up the day at any of the dining outlets serving global cuisines in a relaxing ambience.</p>
              <br />

              <h4><strong>Contact details:</strong></h4>
              <ul>
                <li><b>Website:</b> •   <a href="https://www.chanceryhotels.com/thepavilion/index.html" target="_blank" rel="noreferrer">https://www.chanceryhotels.com/thechancery/index.html</a></li>
                <li><b>Email:</b>  reservations.tch@chanceryhotels.com</li>
                <li><b>Phone:</b> +91 80 22 27 67 67, 41 18 88 88</li>
                <li><b>Fax:</b>  +91 80 22 27 67 00</li>
              </ul>
              <br />

              <h4><strong>To make a reservation:</strong></h4>
              <ul>
                <li><strong>via Email -</strong> Send an email to <a target="_blank" rel="noreferrer" href="mailto:reservations.tch@chanceryhotels.com">reservations.tch@chanceryhotels.com</a> and to either Chandrika Sridhar (<a href="mailto:chand@alum.iisc.ac.in">chand@alum.iisc.ac.in</a>) or Sushma Srinivasan(<a href="mailto:sushmas@iisc.ac.in">sushmas@iisc.ac.in</a>)  with the subject line reading <strong>COMSNETS 2027</strong>, this will help us identify the booking and applicable rate.</li>
                <li><strong>via Phone -</strong> Guest must announce that he would be attending COMSNETS 2027 and is soliciting special rates.</li>
              </ul>

              <h4><strong>For bookings, please email or fax the following details:</strong></h4>
              <ul>
                <li>Full Name</li>
                <li>Passport Number</li>
                <li>Date of Expiry of Passport</li>
                <li>Credit Card Number</li>
                <li>Date of Expiry of Credit Card</li>
                <li>Arrival Date</li>
                <li>Departure Date</li>
              </ul>

              <h4><strong>Note:</strong></h4>
              <ul>
                <li>Before making your booking, please check room rates on the hotel website.</li>
                <li>For booking by email or fax the subject line should read COMSNETS 2027, this will help us identify the booking and applicable rate.</li>
                <li>For voice call bookings, the caller must announce that he is attending the COMSNETS 2027 conference.</li>
              </ul>

              <hr />
              <a id="ramanashreerichmond"></a>
              <h3><strong>Ramanashree Richmond - Richmond Circle</strong></h3>
              <p></p>

              <p className="justify">
                Ramanashree Richmond Circle has been an iconic landmark since 1987. Loved by travelers, business visitors and diners to the two restaurants, the hotel is a testament to fine hospitality. With its distinctive, classic design harking back to the 80s, superb location and outstanding service, this first property of the Group is regarded fondly by her Guests.
                <br />
                Experience the charm and comfort of the refurbished rooms and suites, each embellished with the latest amenities. For those in search of the finest culinary experiences, restaurants at the Hotel look forward to welcoming you with signature cuisines.
              </p>
              <br />

              <br />
              <h4><strong>Contact/Booking details:</strong></h4>
              <ul>
                <li><b>Website:</b> •   <a href="http://www.ramanashree.com/hotels/richmond-home.php" target="_blank" rel="noreferrer">http://www.ramanashree.com/hotels/richmond-home.php</a></li>
                <li><b>Email:</b>  reserve@ramanashree.com</li>
                <li><b>Phone:</b> +91  80 - 41350000</li>
              </ul>
              <br />

              <h4><strong>Address:</strong></h4>
              <p>
                16, Raja Ram Mohan Roy Road
                <br />Opposite ITC Gardenia, Richmond Circle
                <br />Bangalore - 560 025, INDIA.
              </p>

              <br />

              <a id="grand"></a>
              <hr className="bold" />
              <h3><strong>Octave Hotel (Double Road)</strong></h3>
              <p></p>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/grand_pav_1.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/grand_pav_2.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/grand_pav_3.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <div className="justify">
                <p>Octave Hotel &amp; Spa, Bangalore is a boutique hotel with a distinct sense of class and design. The hotel is uniquely designed for modern business traveler, providing a warm and comfortable ambience including lavish rooms, delectable dining, spa and fitness centre, and world-class banquets. The hotel is at a mere 1.5km distance from the conference venue.</p>
              </div>
              <br />

              <p><strong>Contact Details for making reservations or further information:</strong></p>

              <img src="assets/images/hotels/octave.png" alt="cid:image006.jpg@01CE6C09.7C58E870" width={199} height={123} className="pull-right" />
              <ul>
                <li><strong>Website:</strong> <a href="http://www.octavehotels.com/" rel="nofollow" target="_blank">http://www.octavehotels.com</a></li>
                <li><strong>Contact Person:</strong> Rajesh Mishra</li>
                <li><strong>Email:</strong> Send an email to <a target="_blank" rel="noreferrer" href="mailto:sales_blr1@octavehotels.com">sales_blr1@octavehotels.com</a> with the subject line reading COMSNETS 2018, this will help us identify the booking and applicable rate.</li>
                <li><strong>Phone:</strong> +91 80 413 16752</li>
              </ul>

              <a id="royalorchid"></a>
              <hr className="bold" />
              <h3><strong>Hotel Royal Orchid - HAL Airport Road (5 Star)</strong></h3>
              <p></p>

              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royalorchid_building.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royalorchid_sofa.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royalorchid_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <p className="justify">Royal Orchid Hotel with its large open spaces, colonial facade and lush green lawns is an oasis in the middle of the bustling metropolis of Bangalore. Indira Nagar, the city&rsquo;s hotspot for pubs, bars, clubs &amp; high-end shopping is just a 10 min walk from the hotel. Defence Establishments, Hindustan Aeronautics Limited &amp; a number of Research and Development Centers are also in close proximity of the hotel.</p>

              <br />

              <h4><strong>Facilities</strong></h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Preferential access to the famous 18 hole championship KGA golf course</li>
                    <li>Well appointed, large and spacious rooms</li>
                    <li>Electronic safes, tea &amp; coffee makers</li>
                    <li>Ergonomically designed work stations</li>
                    <li>Complimentary high-speed wired/wireless internet</li>
                    <li>Well stocked in room private bar</li>
                    <li>Iron and ironing board</li>
                    <li>Safe, packaged drinking water</li>
                    <li>38&quot; LED TV with DVD Player</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Laundry, pressing and dry cleaning</li>
                    <li>Fully equipped business centre</li>
                    <li>Roof-top temperature control swimming pool</li>
                    <li>Fitness centre with modern equipments</li>
                    <li>Doctor on call</li>
                    <li>Wi-fi enabled modern transportation fleet</li>
                    <li>24-hour in-room dining</li>
                    <li>Inter connecting rooms</li>
                    <li>Concierge &amp;travel assistance</li>
                    <li>Rooms for the differently abled</li>
                    <li>Foreign exchange</li>
                    <li>Baby sitting</li>
                  </ul>
                </div>
              </div>

              <br />

              <p><strong>To make a reservation:</strong></p>
              <ul>
                <li><strong>via Email -</strong> Send an email to <a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a> with the subject line reading <strong>COMSNETS 2027</strong>, this will help us identify the booking and applicable rate.</li>
                <li><strong>via Phone -</strong> Guest must announce that he would be attending COMSNETS 2027 and is soliciting special rates.</li>
              </ul>

              <p><strong>For bookings, please email or fax the following details:</strong></p>
              <ul>
                <li>Full Name</li>
                <li>No of Rooms</li>
                <li>Single or Double Occupancy</li>
                <li>Passport Number &ndash; in case of foreign national</li>
                <li>Date of Expiry of Passport &ndash; same As above</li>
                <li>Credit Card Number</li>
                <li>Date of Expiry of Credit Card</li>
                <li>Arrival Date</li>
                <li>Departure Date</li>
              </ul>

              <hr />
              <p><strong>Contact Details for making reservations or further information:</strong></p>
              <img src="assets/images/hotels/royal_orchid.png" alt="Royal Orchid" className="pull-right" />
              <ul>
                <li><strong>Website:</strong><br /><a href="http://www.royalorchidhotels.com/royal-orchid-hotel-Bangalore/overview.asp" rel="nofollow" target="_blank">http://www.royalorchidhotels.com/</a></li>
                <li><strong>Email:</strong><br /><a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a></li>
                <li><strong>Phone:</strong>+91-80-41276667</li>
              </ul>

              <a id="adarshhamilton"></a>
              <hr className="bold" />
              <h3><strong>Adarsh Hamilton - Richmond Circle (4 Star)</strong></h3>
              <p></p>

              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/adarsh_exterior_shot.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/adarsh_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/adarsh_lobby.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <p className="justify">Situated in a quiet neighbourhood off Richmond Circle, a short distance from the conference venu, in the heart of Bangalore&rsquo;s Central Business District, Adarsh Hamilton is in close proximity to all shopping, cultural centers and nearer to the Commercial and Central Business District of Bengaluru. It is about 40 km from New International Airport and 4 km. from City Railway Station. It is considered to be a finest hotel in Bangalore to conduct business, entertain acquaintances, or just relax and rejuvenate.</p>
              <br />

              <h4><strong>Facilities</strong></h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Smoking or non-smoking rooms</li>
                    <li>Airport/railway station pick-up and drop on request</li>
                    <li>Business centre with latest audio-visual equipment</li>
                    <li>Photocopying Service </li>
                    <li>Facsimile </li>
                    <li>24 hours currency exchange</li>
                    <li>Doctor on call</li>
                    <li>IDD service</li>
                    <li>Meeting/banqueting rooms </li>
                    <li>Laundry/valet service</li>
                    <li>Mini bar</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>DVD player on request</li>
                    <li>Iron box with iron board</li>
                    <li>Hair dryer</li>
                    <li>Baby cots upon request, plus other special amenities</li>
                    <li>Round the clock &lsquo;in-room dining&rsquo;</li>
                    <li>Instant tea/coffee maker</li>
                    <li>Wi-fi internet access</li>
                    <li>LCD television</li>
                    <li>In room electronic safe deposit locker</li>
                    <li>Multi-cuisine restaurant with bar</li>
                    <li>Well equipped fitness centre</li>
                  </ul>
                </div>
              </div>

              <br />

              <p><strong>To make a reservation:</strong></p>
              <ul>
                <li>Send an email to <a target="_blank" rel="noreferrer" href="mailto:reservation@adarshhamilton.com">reservation@adarshhamilton.com</a> with <a href="mailto:bdm@adarshhamilton.com">bdm@adarshhamilton.com</a> in CC. The subject line should be reading <strong>&quot;BOOKING FOR  COMSNETS 2027 CONFERENCE&quot;</strong>, this will help us identify the booking and applicable rate.</li>
                <li>In the email, please mention:
                  <ul>
                    <li>Full Name</li>
                    <li><strong>COMSNETS Reference ID</strong> given when you register for the conference/workshops.</li>
                    <li>Arrival &amp; Departure Dates and tentative time</li>
                    <li>For guarantee purpose : Credit Card details with Expiry date</li>
                  </ul>
                </li>
              </ul>

              <p>For any enquiry, Guests can directly call the Reservation Department (+91-80-43595700 / +91-80-43595718) or  Sales Department (+91-80-43595703 / +919731302673) but please note that the hotel can&rsquo;t take any booking by phone.</p>

              <hr />
              <p><strong>Contact Details:</strong></p>
              <img src="assets/images/hotels/adarsh_hamilton.png" alt="Adarsh Hamilton" className="pull-right" style={{ width: '30%' }} />
              <ul>
                <li><strong>Website:</strong><br /><a href="http://www.adarshhamilton.com/" rel="nofollow" target="_blank">http://www.adarshhamilton.com/</a></li>
                <li><strong>Email:</strong><br /><a target="_blank" rel="noreferrer" href="mailto:reservation@adarshhamilton.com">reservation@adarshhamilton.com</a></li>
                <li><strong>Phone:</strong>+91-80-43595700 / +91-80-43595718</li>
              </ul>

              <a id="royalorchidcentral"></a>
              <hr className="bold" />
              <h3><strong>Royal Orchid Central - Manipal Centre (4 Star)</strong></h3>
              <p></p>

              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royal_orchid_central_standard_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royal_orchid_central_pinxx.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/royal_orchid_central_view.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <p className="justify">Located in the heart of the city and yet offers a calm and tranquil environment for a good night&rsquo;s sleep. It is a 4-star business and lifestyle hotel with elegant interiors and contemporary amenities. It offers 130 premiums rooms, fine dining destinations and classy venues for your corporate events. Hotel is in close proximity to Mg Road and Central Business District</p>

              <br />

              <h4><strong>Facilities</strong></h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>32&quot; LED TV with DVD Player</li>
                    <li>Shower / Tub combination</li>
                    <li>Memory foam bed</li>
                    <li>Coffee / Tea Maker</li>
                    <li>Complimentary high-speed wired/wireless internet</li>
                    <li>Well stocked in room private bar</li>
                    <li>Iron and ironing board</li>
                    <li>Safe, packaged drinking water</li>
                    <li>Hairdryer, bathroom amenities</li>
                    <li>Smoke detectors</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Laundry, pressing and dry cleaning</li>
                    <li>Fully equipped business centre</li>
                    <li>Convenient electrical outlets</li>
                    <li>Electronic Door Locks</li>
                    <li>Doctor on call</li>
                    <li>24-hour Housekeeping</li>
                    <li>24-hour in-room dining</li>
                    <li>Adjacent / Interconnecting rooms</li>
                    <li>Concierge &amp;travel assistance</li>
                    <li>Direct dial telephone</li>
                    <li>Audible Alarms</li>
                  </ul>
                </div>
              </div>

              <br />

              <p><strong>To make a reservation:</strong></p>
              <ul>
                <li><strong>via Email -</strong> Send an email to <a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a> with the subject line reading <strong>COMSNETS 2027</strong>, this will help us identify the booking and applicable rate.</li>
                <li><strong>via Phone -</strong> Guest must announce that he would be attending COMSNETS 2027 and is soliciting special rates.</li>
              </ul>

              <p><strong>For bookings, please email or fax the following details:</strong></p>
              <ul>
                <li>Full Name</li>
                <li>No of Rooms</li>
                <li>Single or Double Occupancy</li>
                <li>Passport Number &ndash; in case of foreign national</li>
                <li>Date of Expiry of Passport &ndash; same As above</li>
                <li>Credit Card Number</li>
                <li>Date of Expiry of Credit Card</li>
                <li>Arrival Date</li>
                <li>Departure Date</li>
              </ul>

              <hr />
              <p><strong>Contact Details for making reservations or further information:</strong></p>
              <img src="assets/images/hotels/royal_orchid.png" alt="Royal Orchid" className="pull-right" />
              <ul>
                <li><strong>Website:</strong><br /><a href="http://www.royalorchidhotels.com/royal-orchid-central-bangalore/overview" rel="nofollow" target="_blank">http://www.royalorchidhotels.com/</a></li>
                <li><strong>Email:</strong><br /><a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a></li>
                <li><strong>Phone:</strong>+91-80-41276667</li>
              </ul>

              <a id="ramada"></a>
              <hr className="bold" />
              <h3><strong>Ramada Bangalore - Shivaji Nagar (4 Star)</strong></h3>
              <p></p>

              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/ramada_bangalore_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/ramada_bangalore_superior.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/ramada_bangalore_dine.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <p className="justify">Hotel Ramada Bangalore is an ideal stopover for a meaningful, relaxing and affordable stay that will make your trip all the better. Its strategic location, fine dining outlets, banqueting facilities and high-end amenities promise only of luxury and comfort.</p>

              <br />

              <h4><strong>Facilities</strong></h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>32&quot; LED TV with DVD Player</li>
                    <li>Shower / Tub combination</li>
                    <li>Memory foam bed</li>
                    <li>Coffee / Tea Maker</li>
                    <li>Complimentary high-speed wired/wireless internet</li>
                    <li>Well stocked in room private bar</li>
                    <li>Iron and ironing board</li>
                    <li>Safe, packaged drinking water</li>
                    <li>Hairdryer, bathroom amenities</li>
                    <li>Smoke detectors</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Laundry, pressing and dry cleaning</li>
                    <li>Fully equipped business centre</li>
                    <li>Convenient electrical outlets</li>
                    <li>Electronic Door Locks</li>
                    <li>Doctor on call</li>
                    <li>24-hour Housekeeping</li>
                    <li>24-hour in-room dining</li>
                    <li>Adjacent / Interconnecting rooms</li>
                    <li>Concierge &amp;travel assistance</li>
                    <li>Direct dial telephone</li>
                    <li>Audible Alarms</li>
                  </ul>
                </div>
              </div>

              <br />

              <p><strong>To make a reservation:</strong></p>
              <ul>
                <li><strong>via Email -</strong> Send an email to <a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a> with the subject line reading <strong>COMSNETS 2027</strong>, this will help us identify the booking and applicable rate.</li>
                <li><strong>via Phone -</strong> Guest must announce that he would be attending COMSNETS 2027 and is soliciting special rates.</li>
              </ul>

              <p><strong>For bookings, please email or fax the following details:</strong></p>
              <ul>
                <li>Full Name</li>
                <li>No of Rooms</li>
                <li>Single or Double Occupancy</li>
                <li>Passport Number &ndash; in case of foreign national</li>
                <li>Date of Expiry of Passport &ndash; same As above</li>
                <li>Credit Card Number</li>
                <li>Date of Expiry of Credit Card</li>
                <li>Arrival Date</li>
                <li>Departure Date</li>
              </ul>

              <hr />
              <p><strong>Contact Details for making reservations or further information:</strong></p>
              <img src="assets/images/hotels/ramada-logo.gif" alt="Ramada Bangalore" className="pull-right" />
              <ul>
                <li><strong>Website:</strong><br /><a href="http://www.ramadabangalore.com/" rel="nofollow" target="_blank">http://www.ramadabangalore.com/</a></li>
                <li><strong>Email:</strong><br /><a target="_blank" rel="noreferrer" href="mailto:rooms@royalorchidhotels.com">rooms@royalorchidhotels.com</a></li>
                <li><strong>Phone:</strong>+91-80-41276667</li>
              </ul>

              <a id="shilton"></a>
              <hr className="bold" />
              <h3><strong>Hotel Shilton Suites</strong></h3>
              <p></p>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/shilton_common.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/shilton_room.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <a href="#" className="thumbnail-click" data-toggle="modal" data-target="#myModal">
                    <img src="assets/images/placeholder.jpg" data-src="assets/images/hotels/shilton_kitchen.jpg" className="thumbnail img-responsive" />
                  </a>
                </div>
              </div>

              <br />

              <p>Shilton Suites offers a convenient and tasteful residential option in Bangalore . Located on the  Ulsoor  Road and within walking distance of M G Road and the commercial and shopping districts, centrally located, very convenient to the central business/ shopping/ dining district of Bangalore.</p>

              <br />

              <br />

              <h4><strong>Facilities</strong></h4>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Kitchenette with Microwave in all rooms</li>
                    <li>Wi Fi / Internet connectivity in all rooms</li>
                    <li>Personal Safety Lockers in all rooms</li>
                    <li>Iron &amp; Ironing board</li>
                    <li>Hair Dryer</li>
                    <li>LCD TV &amp; DVD with digital set top boxes</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Mini bar</li>
                    <li>24 hr reception, butler service</li>
                    <li>Business centre</li>
                    <li>Fitness centre</li>
                    <li>Steam room and Jacuzzi</li>
                    <li>Doctor on call</li>
                  </ul>
                </div>
              </div>

              <h5><strong>Contact</strong></h5>
              <img src="assets/images/hotels/shilton-suites.jpg" className="pull-right" />
              <ul>
                <li><strong>Website:</strong> <a href="http://suites.shiltonhotels.com/" rel="nofollow" target="_blank">http://suites.shiltonhotels.com/</a></li>
                <li><strong>Email:</strong> <a target="_blank" rel="noreferrer" href="mailto:sales@shiltonhotels.com">sales@shiltonhotels.com</a>  / <a target="_blank" rel="noreferrer" href="mailto:shiltonsuites@gmail.com">shiltonsuites@gmail.com</a></li>
                <li><strong>Phone:</strong> +91 80 41138777</li>
                <li><strong>Mobile:</strong> +91 9686199670</li>
              </ul>

              <br />

              <h4><strong>For bookings/reservations, please email the following details and also mention COMSNETS for discounted rates:</strong></h4>

              <ul>
                <li>Full Name</li>
                <li>Single / Double occupancy</li>
                <li>Arrival Date</li>
                <li>Departure Date</li>
                <li>Credit Card Number</li>
                <li>Date of Expiry of Credit Card</li>
              </ul>

              <h4><strong>Kindly Note:</strong></h4>
              <ul>
                <li>Check in and Check out time is 12 noon</li>
                <li>The above Special Tariff is applicable for COMSNETS 2027 only</li>
                <li>Special discounts will be extended on Hotel car hire</li>
              </ul>

              <p></p>
              <hr />

              <div className="row">
                <div>
                </div>
              </div>

              <div id="myModal" className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="modal-body">
                      <img src="" className="img-responsive" />
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

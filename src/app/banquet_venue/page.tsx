export const metadata = { title: 'Banquet Venue | COMSNETS 2027' };

export default function BanquetVenuePage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Banquet Venue</h1>
              <div className="alert alert-info">
                <strong>Coming Soon</strong> &mdash; Banquet venue details for COMSNETS 2027 will be posted here. See the <a href="/banquet_speaker">Banquet Speaker</a> page for related info.
              </div>
              {/* TODO: fill content for 2027 -- legacy 2016 PHP redirected to banquet_speaker.html#venue with the following archived content */}
              {/*
                <h3><strong><a href="http://chanceryhotels.com/accommodation/chancerypavilion/the_grand_ball_room_meetings.htm" target="_blank" rel="noopener noreferrer nofollow">The Grand Ball Room - Chancery Pavilion</a></strong></h3>
                <p>Location: 135, Residency Road, Bengaluru, Karnataka, 560025, India</p>
                Carousel: assets/images/hotels/chancery_lobbypic.jpg, chancery_ballroom.jpg
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

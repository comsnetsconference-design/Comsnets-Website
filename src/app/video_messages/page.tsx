export const metadata = { title: 'Video Messages | COMSNETS 2027' };

interface VideoGroup {
  title: string;
  mainSrc: string;
  thumbs: { src: string; img: string }[];
  iframeName: string;
}

const groups: VideoGroup[] = [
  {
    title: 'General Co-Chairs',
    mainSrc: 'https://youtube.com/embed/UqRxOCns5qU',
    iframeName: 'slider1',
    thumbs: [
      { src: 'https://youtube.com/embed/UqRxOCns5qU', img: '/assets/videos2023/neelesh.png' },
      { src: 'https://youtube.com/embed/GOuYyvRRZH0', img: '/assets/videos2023/swarun.png' },
      { src: 'https://youtube.com/embed/NFV_NvjdnsQ', img: '/assets/videos2023/monisha.png' },
    ],
  },
  {
    title: 'Technical Program Co-Chairs',
    mainSrc: 'https://youtube.com/embed/Nzzm6o8j4wI',
    iframeName: 'slider2',
    thumbs: [
      { src: 'https://youtube.com/embed/Nzzm6o8j4wI', img: '/assets/videos2023/vinay.png' },
      { src: 'https://youtube.com/embed/34aCEzu9vfo', img: '/assets/videos2023/veena.png' },
      { src: 'https://youtube.com/embed/94nU2QB4skw', img: '/assets/videos2023/marina.png' },
    ],
  },
  {
    title: 'Steering Committee Co-Chairs',
    mainSrc: 'https://youtube.com/embed/fXIoD_sr80M',
    iframeName: 'slider3',
    thumbs: [
      { src: 'https://youtube.com/embed/fXIoD_sr80M', img: '/assets/videos2023/giridhar.png' },
      { src: 'https://youtube.com/embed/vdP5M9XVhAI', img: '/assets/videos2023/rajeev.png' },
    ],
  },
  {
    title: 'Workshop Co-Chairs',
    mainSrc: 'https://youtube.com/embed/XnNgVJOYm6k',
    iframeName: 'slider4',
    thumbs: [
      { src: 'https://youtube.com/embed/XnNgVJOYm6k', img: '/assets/videos2023/dheryta.png' },
    ],
  },
  {
    title: 'Registration Co-Chairs',
    mainSrc: 'https://youtube.com/embed/adgaS4kKqd4',
    iframeName: 'slider5',
    thumbs: [
      { src: 'https://youtube.com/embed/adgaS4kKqd4', img: '/assets/videos2023/chandrika.png' },
    ],
  },
  {
    title: 'Travel Grants Co-Chairs',
    mainSrc: 'https://youtube.com/embed/Eoa28GN1Oi0',
    iframeName: 'slider6',
    thumbs: [
      { src: 'https://youtube.com/embed/Eoa28GN1Oi0', img: '/assets/videos2023/abhishek.png' },
      { src: 'https://youtube.com/embed/a2mQ10el5nE', img: '/assets/videos2023/sourav.png' },
    ],
  },
  {
    title: 'Poster Co-Chairs',
    mainSrc: 'https://youtube.com/embed/NTKN7JWF8hg',
    iframeName: 'slider7',
    thumbs: [],
  },
];

export default function VideoMessagesPage() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-9 page-content">
            <div className="well well-white">
              <h1 className="page-title" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Video Messages</h1>
              {/* NOTE: archived 2023 video messages — replace with 2027 content when produced */}
              {groups.map((g) => (
                <div key={g.iframeName} className="col-lg-12">
                  <h3><center>{g.title}</center></h3>
                  <div className="carousel">
                    <div style={{ width: '60vw', height: 'auto', margin: 'auto', paddingBottom: '10px' }}>
                      <iframe
                        src={g.mainSrc}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        name={g.iframeName}
                      />
                    </div>
                    {g.thumbs.length > 0 && (
                      <span>
                        {g.thumbs.map((t, i) => (
                          <a key={i} href={t.src} target={g.iframeName}>
                            <img src={t.img} alt="" />
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                  <hr/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

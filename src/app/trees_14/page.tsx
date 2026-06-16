export const metadata = { title: '14 Trees Foundation | COMSNETS 2027' };

const carouselImages = [
  '/assets/images/sponsors/trees_14/1.png',
  '/assets/images/sponsors/trees_14/2.jpg',
  '/assets/images/sponsors/trees_14/3.jpg',
  '/assets/images/sponsors/trees_14/4.jpg',
  '/assets/images/sponsors/trees_14/5.jpg',
];

export default function Trees14Page() {
  return (
    <>
      <div className="subpage-spacer" style={{ height: '80px', background: 'linear-gradient(135deg, #0a1628, #123456)' }}></div>
      <div className="container" style={{ marginTop: '30px', marginBottom: '40px' }}>
        <div className="row">
          <div className="col-md-10 col-md-offset-1 page-content">
            <div className="well well-white">
              <div className="event-hero">
                <h1>14 Trees Foundation</h1>
                <div className="event-details">COMSNETS 2027</div>
              </div>

              <br />
              <div className="tree-gallery">
                {carouselImages.map((src) => (
                  <img key={src} src={src} alt="14 Trees Foundation" />
                ))}
              </div>
              <br />
              <hr />

              <p className="text-justify">We are living in a world where technology is making our life easier and more comfortable. However, technological development without a holistic look at its negative impacts on the bigger picture can, and actually has in some cases, negatively affect mother nature. COMSNETS, as a tech promoting organization, believes that developing and promoting next generation technology comes with a responsibility to rectify the harm caused by us on earth, protect it from future harm, and enhance its health, and now is a good time to make it happen.</p>

              <p className="text-justify">We are pleased to announce our collaboration with <a href="https://14trees.org/" target="_blank" rel="noopener noreferrer">14Trees Foundation</a>. 14 Trees Foundation is a charitable organization dedicated to building sustainable, carbon-footprint-neutral eco-systems through reforestation. It was founded by Dr. Pravin Bhagwat, an experienced entrepreneur and a distinguished wireless researcher. He was the Co-founder &amp; CTO of Mojo Networks -- a product venture which started in 2003 from Pune and grew to become a leading provider of Cloud Managed Secure Wi-Fi for the global market, before it was acquired by Arista Networks in 2018</p>

              <hr />
              <h3 className="section-title">What we are going to do:</h3>

              <p className="text-justify">We believe in celebrating the winners and each winner of COMSNETS is a driving force behind technology development. Our partnership with the 14 Trees Foundation provides the COMSNETS awards winners a way to be eco-friendly and to support and protect mother nature.</p>

              <p className="text-justify">We would like to announce that COMSNETS, in collaboration with 14Trees, will plant one tree at the 14Trees <a href="https://www.google.com/maps/place/14+Trees/@18.9490513,73.7904396,15z/data=!4m5!3m4!1s0x0:0xf7c1f2feecdca56a!8m2!3d18.9490513!4d73.7904396" target="_blank" rel="noopener noreferrer">site</a> in the name of each winner of the category. Winners will get a URL with all the details about the plantation along with a name plate next to the tree.</p>

              <p className="text-justify" style={{ marginTop: '18px' }}><strong>To learn more about 14Trees please visit: <a href="https://14trees.org/" target="_blank" rel="noopener noreferrer">14Trees.org</a></strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title--name">HEY, I'M RITIK SHARMA</p>
          {/* <h1 className="hero--section--title">
            <span className="hero--section--title--color">Frontend</span> <br />
            Developer.
          </h1> */}
          <p className="hero--section--description">
            A Result-Oriented frontend Developer experienced in designing and
            implementing dynamic and visually appealing user interfaces.
          </p>
        </div>
        {/* <button className="btn btn-primary">Get in Touch</button> */}
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="hero-section" />
      </div>
    </section>
  );
}

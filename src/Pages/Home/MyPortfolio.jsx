import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="portfolio--container--box">
            <span className="portfolio--heading">PROJECTS</span>
            <span className="portfolio--sub--heading">
              Here you will find some of the personal projects that I created!
            </span>
          </h2>
        </div>
      </div>
      <div className="projects__content">
        <div className="projects_row">
          <div className="projects__row-img-cont">
            <img
              src="./img/bingeflix.png"
              alt="project screenshot"
              className="projects__row-img"
            />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">BingeFlix</h3>
            <p className="projects__row-content-desc">
              Bingeflix is a dynamic React project designed to immerse users in
              the world of movies and TV shows. With its intuitive interface,
              users can effortlessly navigate through a vast database of
              entertainment content.
            </p>
            <a className="btn_to_projectDetails">Case Study</a>
          </div>
        </div>
      </div>
    </section>
  );
}

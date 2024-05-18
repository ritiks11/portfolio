export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--box">
        <h1 className="about--section--heading">
          <span className="heading--main">ABOUT ME</span>
          <span className="heading--sub">
            Here you will find more information about me, what I do, and my
            current skills!
          </span>
        </h1>
        <div className="about--section--content">
          <div className="content--me">
            <h3 className="me--title">Get to know me!</h3>
            <div className="me--details">
              <p className="me--details--para">
                Experienced <strong>Front-End Developer</strong> with 2.5 years
                of experience in designing and implementing dynamic and visually
                appealing user interfaces for Smart TV Platform.
              </p>
              <p className="me--details--para">
                Proficient in <strong>HTML, CSS, JavaScript, and React,</strong>{" "}
                with a focus on creating engaging and user-friendly interfaces.
              </p>
              <p className="me--details--para">
                Committed to staying abreast of <strong>industry trends</strong>{" "}
                and continuously enhancing skills to contribute effectively
                towards <strong>innovative</strong> and{" "}
                <strong>cutting-edge projects.</strong>
              </p>
            </div>
          </div>
          <div className="content--skills">
            <h3 className="skills--title">My Skills</h3>
            <div className="skills">
              <div class="skills__skill">HTML</div>
              <div class="skills__skill">CSS</div>
              <div class="skills__skill">JavaScript</div>
              <div class="skills__skill">React</div>
              <div class="skills__skill">Bootstrap</div>
              <div class="skills__skill">GIT</div>
              <div class="skills__skill">Github</div>
              <div class="skills__skill">Bitbucket</div>
              <div class="skills__skill">Responsive Design</div>
              <div class="skills__skill">JIRA</div>
              <div class="skills__skill">Confluence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

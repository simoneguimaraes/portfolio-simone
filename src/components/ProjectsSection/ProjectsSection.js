import "./ProjectsSection.css";

function ProjectsSection() {
  return (
    <div className="project-container">
      <h1 className="project-title">BLOOM</h1>
      <p>
        Bloom is a full-stack aplication that tracks the daily use of medicinal
        cannabidiol (CBD) by patients, gives this information for doctors to
        promote future research and creates a community using forums and new
        articles published.
      </p>
      <p>
        MERN Full-Stack (MongoDB, ExpressJs, ReactJs, Node.js) Single Page
        Application (SPA).
      </p>
      <h2 className="project-about">About this project</h2>
      <div className="border"></div>
      <ul className="project-list-itens">
        <li>
          The project was made from scratch, so I was responsible for end-to-end
          development and deploy of the SPA.
        </li>
        <li>
          Responsible for the modeling the database, creating routes, front-end,
          back-end, UI, UX of this project.
        </li>
      </ul>
      <h2 className="project-challenge">Technical Challenges</h2>
      <div className="border"></div>
      <ul className="project-list-itens">
        <li>
          The routes for Doctor Profile and Patient Profile have unique features
          since they have different use for the application.
          So the main challenge was to develop two different structures for the
          application, depending on who was login in.
        </li>
      </ul>
      <h2 className="project-tech">Technologies used</h2>

      <div className="border"></div>
      <ul className="project-list-itens">
        <li>JavaScript (ES6), ReactJs, NodeJs, HTML5 e CSS3;</li>
        <li>
          Responsive Web Design, Fundamentals of Object-oriented programming
          based on JavaScript;
        </li>
        <li>Git + Github and Version control;</li>
        <li>Relational databased (MongoDB) and ODMs;</li>
        <li>
          Clean, modular and efficient code and develop well-tested applications
          using TDD principles;
        </li>
        <li>Integration of the 3rd party services (APIs);</li>
        <li>Servers and Hosting;</li>
        <li>Agile tools and methodologies.</li>
      </ul>
      <div className="project-button-div">
        <button className="project-button">
          <a
            className="project-link"
            href="https://github.com/simoneguimaraes/app-bloom-client" target="_blank"
            rel="noreferrer"
          >
            Visit Github
          </a>
        </button>
      </div>
    </div>
  );
}

export default ProjectsSection;

// <section data-scroll-index='1'>
// </section>

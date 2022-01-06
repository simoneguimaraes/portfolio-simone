import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="project-container">
      <h1 className="project-title">CONTACT ME</h1>
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
      <div className="project-button-div">
        <button className="project-button">
          <a
            className="project-link"
            href="https://github.com/simoneguimaraes/" target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
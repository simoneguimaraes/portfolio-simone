import "./WorkSection.css";

function ProjectTwo() {
    return ( 
      <div className="project-container">
        <h1 className="project-title">CACILDIS VIAGENS</h1>
        <p>
          Cacildis Viagens compares airfare prices across different airlines and
          lets you create and edit your profile, login, reserve and pay for your
          tickets.
        </p>
        <p>
          ReactJS Front-end application that uses 3rd party services (APIs),
          such as Mongo Rest API, Google Flights API, Dollar conversion, Credit
          Card Payment and QR Code.
        </p>
        <h2 className="project-about">About this project</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            The project was made from scratch in one week, so me and another
            team member were responsible for end-to-end development and deploy
            of the SPA.
          </li>
          <li>
            Responsible for the modeling the database, front-end and UI/UX of
            this project.
          </li>
        </ul>
        <h2 className="project-challenge">Technical Challenges</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>Creating and scaling the project and features in the SPA;</li>
          <li>
            Creating nested routes by having to use two different API
            collections, one for the flights and one for the passangers;
          </li>
          <li>Feeding the database efficiently;</li>
          <li>
            Work with different branches and organize and communicate
            effectively to resolve merge conflicts flights;
          </li>
          <li>Working with Google Flights API;</li>
        </ul>
        <h2 className="project-tech">Technologies used</h2>

        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            JavaScript (ES6), ReactJs, NodeJs, Insomnia, Bootstrap 5, HTML5 e
            CSS3;
          </li>
          <li>Mobile-first application with login page;</li>
          <li>Integration of the 3rd party services (APIs);</li>
          <li>Responsive Web Design; </li>
        </ul>
        <div className="project-button-div">
          <button className="project-button">
            <a
              className="project-link"
              href="https://github.com/simoneguimaraes/Cacildis-Viagens"
              target="_blank"
              rel="noreferrer"
            >
              Visit Source Code
            </a>
          </button>
          <button className="project-button">
            <a
              className="project-link"
              href="https://cacildis-viagens.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        </div>);
}

export default ProjectTwo;

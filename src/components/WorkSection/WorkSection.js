import "./WorkSection.css";
import projectOneImg from "../assets/images/projectOne.png";
import projectTwoImg from "../assets/images/projectTwo.png";
import projectThreeImg from "../assets/images/projectThree.png";


function WorkSection() {
  return (
    <>
    <div className="project-container">
      <div className="project-images" id="4">
          <div className="radio-btns" role="radiogroup">
            <a href="#0" className="bottom-text"><img src={projectThreeImg} alt="Bloom project" /></a>
            <a href="#1" className="bottom-text"><img src={projectTwoImg} alt="Cacildis project" /></a>
            <a href="#2" className="bottom-text"><img src={projectOneImg} alt="Show do Tiozao project" /></a>
          </div>
        </div>
        {/* PROJECTS */}
        <section data-scroll-index='0' id="0">
        <h1 className="project-title">BLOOM</h1>
        <p>
          Bloom is a full-stack application that tracks the daily use of
          medicinal cannabidiol (CBD) by patients, gives this information for
          doctors to promote future research and creates a community using
          forums and new articles published.
        </p>
        <p className="description"><em>
          MERN Full-Stack (MongoDB, ExpressJs, ReactJs, Node.js) Single Page
          Application (SPA).</em>
        </p>
        <h2 className="project-about">About this project</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            The project was made from scratch in one week, so I was responsible
            for end-to-end development and deploy of the SPA.
          </li>
          <li>
            Responsible for the modeling the database, creating routes,
            front-end, back-end, UI, UX of this project.
          </li>
        </ul>
        <h2 className="project-challenge">Technical Challenges</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            The routes for Doctor Profile and Patient Profile have unique
            features since they have different use for the application. So the
            main challenge was to develop two different structures for the
            application, depending on who was login in.
          </li>
        </ul>
        <h2 className="project-tech">Technologies used</h2>

        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
            Netflify, Heroku, npm, Git;
          </li>
          <li>Relational databased (MongoDB) and ODMs;</li>
          <li>
            Clean, modular and efficient code and develop well-tested
            applications using TDD principles;
          </li>
          <li>Integration of the 3rd party services (APIs);</li>
          <li>Servers and Hosting;</li>
          <li>
            Fundamentals of Object-oriented programming based on JavaScript;
          </li>
          <li>Git + Github and Version control;</li>
          <li>Agile tools and methodologies, sprints.</li>
        </ul>
        <div className="project-button-div">
          <button className="project-button">
            <a
              className="project-link"
              href="https://github.com/simoneguimaraes/app-bloom-server"
              target="_blank"
              rel="noreferrer"
            >
              Visit Source Code
            </a>
          </button> 
          </div> 
        </section>
        <section data-scroll-index='1' id="1">
        <h1 className="project-title">CACILDIS VIAGENS</h1>
        <p>
          Cacildis Viagens compares airfare prices across different airlines and
          lets you create and edit your profile, login, reserve and pay for your
          tickets.
        </p>
        <p className="description"><em>
          ReactJS Front-end application that uses 3rd party services (APIs),
          such as Mongo Rest API, Google Flights API, Dollar conversion, Credit
          Card Payment and QR Code.</em>
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
        </section>
        <section data-scroll-index='2' id="2">
        <h1 className="project-title">GAME SHOW DO TIOZAO</h1>
        <p>
          This application is a game developed in one week during my Ironhack
          Web Development Bootcamp. I have always enjoyed trivia games so it was
          a great and fun challenge to develop it.
        </p>
        <p className="description"><em>Developed using JavaScript, pure CSS and HTML.</em></p>
        <h2 className="project-about">About this project</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            The project was made from scratch in one, so I was responsible for
            end-to-end development and deploy of the game.
          </li>
        </ul>
        <h2 className="project-challenge">Technical Challenges</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>
            Identify each element in the DOM is and how to select it to use in
            functions;
          </li>
          <li>How to insert new features without breaking the code;</li>
          <li>
            How to keep a clean clean with so many variables and DOM elements;
          </li>
          <li>What is the most important thing to do first.</li>
        </ul>
        <h2 className="project-tech">Technologies used</h2>
        <div className="border-project"></div>
        <ul className="project-list-itens">
          <li>JavaScript (ES6), HTML5 e CSS3;</li>
          <li>Mobile-first and Responsive Web Design;</li>
          <li>
            Fundamentals of Object-oriented programming based on JavaScript;
          </li>
          <li>Agile tools and methodologies, sprints.</li>
        </ul>
        <div className="project-button-div">
          <button className="project-button">
            <a
              className="project-link"
              href="https://github.com/simoneguimaraes/game-show-do-tiozao"
              target="_blank"
              rel="noreferrer"
            >
              Visit Source Code
            </a>
          </button>
          <button className="project-button">
            <a
              className="project-link"
              href="https://simoneguimaraes.github.io/game-show-do-tiozao/"
              target="_blank"
              rel="noreferrer"
            >
              Visit Website
            </a>
          </button>
        </div>
        </section>
        <a data-scroll-goto="0" href="#4" className="bottom-text">Back to top</a>
    </div>
    </>
  );
}

export default WorkSection;

//  <a href="#YourSectionID">Go Up</a>  
// <section data-scroll-index='1'>
// </section>

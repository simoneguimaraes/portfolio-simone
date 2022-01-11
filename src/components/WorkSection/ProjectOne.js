import "./WorkSection.css";

function ProjectOne() {
    return ( 
       
    <div className="project-container">
        <h1 className="project-title">GAME SHOW DO TIOZAO</h1>
        <p>
          This application is a game developed in one week during my Ironhack
          Web Development Bootcamp. I have always enjoyed trivia games so it was
          a great and fun challenge to develop it.
        </p>
        <p>Developed using JavaScript, pure CSS and HTML.</p>
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
        </div>);
}

export default ProjectOne;

import "./CVSection.css";

function CVSection() {
  return (
    <div className="cv-container">
      <h1 className="cv-title">FRONT END ENGINEER</h1>
      {/* <p className="cv-tech"> */}
      <ul className="cv-list-itens">
        <li>Designed and coded in an Agile environment utilizing a test-driven development approach.</li> 
        <li>Professional strengths include problem-solving, communication and leadership.</li>
        <li>Currently studying TypeScript, NextJS, Redux and TDD.</li> 
      </ul>
      {/* </p> */}
      <h2 className="cv-tech">Technical Skills</h2>
      <div className="border-cv"></div>
      <ul className="cv-list-itens">
        <li>
          ReactJs, JavaScript (ES6), NodeJs, ExpressJS, Insomnia, Bootstrap, Git;
        </li>
        <li>Relational databased (MongoDB) and ODMs;</li>
        <li>
          Clean, modular and efficient code and develop well-tested applications
          using TDD principles;
        </li>
        <li>Integration of the 3rd party services (APIs);</li>
        <li>Servers and Hosting;</li>
        <li>
          Fundamentals of Object-oriented programming based on JavaScript;
        </li>
        <li>Git + Github and Version control;</li>
        <li>Agile tools and methodologies, sprints.</li>
        <li>Responsive Web Design; </li>
      </ul>
      <h2 className="cv-tech">Education</h2>
      <div className="border-cv"></div>
    {/* University */}
    <div className="cv-company">
        <h3 className="cv-tech">Ironhack</h3>
        <h4 className="cv-tech"><em>out/21 - dec/21</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
            Web Development Bootcamp Graduate
            </li>
        </ul>
    {/* University */}
    <div className="cv-company">
        <h3 className="cv-tech">Swinburne University of Technology</h3>
        <h4 className="cv-tech"><em>jan/14 - jul/14</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
                Business and Innovation Specialization
            </li>
        </ul>
    {/* University */}
    <div className="cv-company">
        <h3 className="cv-tech">University of Sao Paulo (USP)</h3>
        <h4 className="cv-tech"><em>feb/10 - jul/15</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
                Bachelor of Business Administration
            </li>
        </ul>
        <div className="cv-button-div">
        <button className="cv-button">
          <a
            className="cv-link"
            href="https://www.linkedin.com/in/simone-guimaraes/" target="_blank"
            rel="noreferrer"
          >
            Visit Linkedin Profile
          </a>
        </button>
        </div>
    </div>
  );
}

export default CVSection;

// <h2 className="cv-tech">Experience</h2>
// <div className="border-cv"></div>
// {/* Experience */}
// <div className="cv-company">
//   <h3 className="cv-tech">Title - Company</h3>
//   <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
// </div>
//   <ul className="cv-list-itens">
//       <li>
//       JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
//       Netflify, Heroku, npm, Git;
//       </li>
//   </ul>
// {/* Experience */}
// <div className="cv-company">
//   <h3 className="cv-tech">Title - Company</h3>
//   <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
// </div>
//   <ul className="cv-list-itens">
//       <li>
//       JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
//       Netflify, Heroku, npm, Git;
//       </li>
//   </ul>
// {/* Experience */}
// <div className="cv-company">
//   <h3 className="cv-tech">Title - Company</h3>
//   <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
// </div>
//   <ul className="cv-list-itens">
//       <li>
//       JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
//       Netflify, Heroku, npm, Git;
//       </li>
//   </ul>
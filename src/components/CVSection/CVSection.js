import "./CVSection.css";

function CVSection() {
  return (
    <div className="cv-container">
      <h1 className="cv-title">SOFTWARE DEVELOPER</h1>
      <p className="cv-tech">Text here</p>
      <h2 className="cv-tech">Technical Skills</h2>
      <div className="border-cv"></div>
      <ul className="cv-list-itens">
        <li>
          JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
          Netflify, Heroku, npm, Git;
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
        <h3 className="cv-tech">University</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
                Course
            </li>
        </ul>
    {/* University */}
    <div className="cv-company">
        <h3 className="cv-tech">University</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
                Course
            </li>
        </ul>
    {/* University */}
    <div className="cv-company">
        <h3 className="cv-tech">University</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
                Course
            </li>
        </ul>
      <h2 className="cv-tech">Experience</h2>
      <div className="border-cv"></div>
      {/* Experience */}
      <div className="cv-company">
        <h3 className="cv-tech">Title - Company</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
            JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
            Netflify, Heroku, npm, Git;
            </li>
        </ul>
    {/* Experience */}
    <div className="cv-company">
        <h3 className="cv-tech">Title - Company</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
            JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
            Netflify, Heroku, npm, Git;
            </li>
        </ul>
    {/* Experience */}
    <div className="cv-company">
        <h3 className="cv-tech">Title - Company</h3>
        <h4 className="cv-tech"><em>apr/20 - aug/20</em></h4>
    </div>
        <ul className="cv-list-itens">
            <li>
            JavaScript (ES6), ReactJs, NodeJs, ExpressJS, Insomnia, Bootstrap 5,
            Netflify, Heroku, npm, Git;
            </li>
        </ul>
    </div>
  );
}

export default CVSection;

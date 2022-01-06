import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-navbar">
      <nav>
        <span className="logo">
          <Link to="/">sg</Link>
        </span>

        <ul className="items-navbar">
          <li>
            <Link to="/projects">PROJECTS.</Link>
          </li>
          <li>
            <Link to="/curriculum">CV.</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT.</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

//  {/* <a href="#sectionId">Go to section</a>
//     <section id="sectionId">
//     //your code
//     </section> */}
//     {/* http://bytemuse.com/scrollIt.js/ */}
//   {/* <a data-scroll-nav="1"></a> */}

//             {/* <a data-scroll-nav="0">
// </a> */}

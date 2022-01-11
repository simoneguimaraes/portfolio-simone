import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">CONTACT ME</h1>
      <p>Feel free to send me an e-mail and to connect with me:</p>
      <div className="contact-button-div">
      <button className="contact-button">
          <a
            className="contact-link"
            href="mailto:simoneguimaraes11@gmail.com" target="_blank"
            rel="noreferrer"
          >
            E-mail
          </a>
        </button>
        <button className="contact-button">
          <a
            className="contact-link"
            href="https://github.com/simoneguimaraes/" target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </button>
        <button className="contact-button">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/simone-guimaraes/" target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </button>
      </div>
    </div>
  );
}

export default ContactSection;
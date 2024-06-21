import React from "react";

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a
              href="https://www.linkedin.com/in/ololade-sanya-106990272/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="copy">
                &copy; Copyright {currentYear} - Developed by LollyTech
              </span>
            </a>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://x.com/king4arabs"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammedalsolami/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              {/* <a href="https://pinterest.com/" target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>
                            <a href="https://www.envato.com" target="_blank" rel="noreferrer"><i className="fa fa-rss"></i></a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;

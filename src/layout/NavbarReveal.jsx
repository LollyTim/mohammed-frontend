import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";

const Navbar = function () {
  const [showMenu, setMenu] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setMenu(false);
      if (window.pageYOffset > headerRef.current.offsetTop) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);
    return(
      <header ref={headerRef} className={isSticky ? "sticky" : ""} id="header-wrap">
        <nav className="navbar transition rev">
        <div className="container">
          <Link  className="navbar-brand" activeClass="active" spy to="hero-area">
            <img src="./img/logo.png" className="img-fluid d-block imginit" alt="logo"/>
            <img src="./img/logo-3.png" className="img-fluid imgsaly" alt="logo"/>
            <img src="./img/logo-6.png" className="img-fluid imggrey" alt="logo"/>
            <img src="./img/logo-7.png" className="img-fluid imgchef" alt="logo"/>
            <img src="./img/logo-5.png" className="img-fluid imgdesigner" alt="logo"/>
            <img src="./img/logo-4.png" className="img-fluid imglawyer" alt="logo"/>
            <img src="./img/logo-2.png" className="img-fluid imgdark" alt="logo"/>
          </Link>

          {/* Desktop menu Here */}
          <div className={showMenu ? "mainreveal show" : "mainreveal"}>
            {showMenu && 
             <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="hero-area" onClick={() => setMenu(!showMenu)}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="about" onClick={() => setMenu(!showMenu)}>
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="whatido" onClick={() => setMenu(!showMenu)}>
                  What I Do
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="gallery" onClick={() => setMenu(!showMenu)}>
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="resume" onClick={() => setMenu(!showMenu)}>
                  My resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="blog" onClick={() => setMenu(!showMenu)}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link transition" activeClass="active" spy to="contact" onClick={() => setMenu(!showMenu)}>
                  Contact Me
                </Link>
              </li>
            </ul>
            }
          </div>
          
          {/* Desktop menu Here */}
          <span id="de-menu-reveal" className={showMenu ? "menu-open" : ""} onClick={() => setMenu(!showMenu)}>
              <span className="lt"></span>
              <span className="lm"></span>
              <span className="lb"></span>
          </span>
        </div>
      </nav>
      </header>
    )
}

export default Navbar;
import React, { useEffect, useState, useRef } from "react";
import "./../i18m";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/language-selector";

const Navbar = function () {
  const { i18n } = useTranslation();

  const { t } = useTranslation();

  // useEffect(() => {
  //   const htmlElement = document.documentElement;
  //   htmlElement.dir = i18n.dir();
  // }, [i18n, i18n.language]);

  const { home, about, services, resume, blog, portfolio, contact } =
    t("navitem");

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
  return (
    <header
      ref={headerRef}
      className={isSticky ? "sticky" : ""}
      id="header-wrap"
    >
      <nav className="navbar transition">
        <div
          className={`"container" ${
            i18n.language === "sa" ? "container rtl" : "container"
          }`}
        >
          <Link
            className="navbar-brand"
            activeClass="active"
            spy
            to="hero-area"
          >
            <img
              src="./img/logo.png"
              className="img-fluid d-block imginit"
              alt="logo"
            />
            <img
              src="./img/logo-3.png"
              className="img-fluid imgsaly"
              alt="logo"
            />
            <img
              src="./img/logo-6.png"
              className="img-fluid imggrey"
              alt="logo"
            />
            <img
              src="./img/logo-7.png"
              className="img-fluid imgchef"
              alt="logo"
            />
            <img
              src="./img/logo-5.png"
              className="img-fluid imgdesigner"
              alt="logo"
            />
            <img
              src="./img/logo-4.png"
              className="img-fluid imglawyer"
              alt="logo"
            />
            <img
              src="./img/logo-2.png"
              className="img-fluid imgdark"
              alt="logo"
            />
          </Link>
          {/* Desktop menu Here */}
          <div className="dekstopmenu">
            <ul
              className={i18n.language === "sa" ? "navbar-navAr" : "navbar-nav"}
            >
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="hero-area"
                >
                  {home}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="about"
                >
                  {about}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="whatido"
                >
                  {services}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="gallery"
                >
                  {portfolio}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="resume"
                >
                  {resume}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="blog"
                >
                  {blog}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link transition"
                  activeClass="active"
                  spy
                  to="contact"
                >
                  {contact}
                </Link>
              </li>
            </ul>
          </div>
          {/* Desktop menu Here */}

          {/* mobile menu here */}
          {showMenu && (
            <div className="mobilemenu">
              <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    smooth
                    spy
                    to="hero-area"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    activeClass="active"
                    smooth
                    spy
                    to="about"
                  >
                    About me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link transition"
                    smooth
                    activeClass="active"
                    spy
                    to="whatido"
                  >
                    What I Do
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link transition"
                    smooth
                    activeClass="active"
                    spy
                    to="gallery"
                  >
                    Portofolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link transition"
                    smooth
                    activeClass="active"
                    spy
                    to="resume"
                  >
                    My resume
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link transition"
                    smooth
                    activeClass="active"
                    spy
                    to="blog"
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link transition"
                    smooth
                    activeClass="active"
                    spy
                    to="contact"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <LanguageSelector />
          <button
            className="burgermenu"
            type="button"
            onClick={() => setMenu(!showMenu)}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          {/* mobile menu here */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Parallax } from "react-parallax";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { RiDoubleQuotesL } from "react-icons/ri";

AOS.init();

const image1 = "./img/background/l11.jpg";

const Mblockquote = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { content, author } = t("quote");
  return (
    <div className="section bg-top bg-bottom py-0">
      <Parallax className="pb-5" bgImage={image1} strength={300}>
        <div
          className="py-5 position-relative"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div
            className={i18n.language === "sa" ? "container rtl " : "container"}
          >
            <div className="row align-items-center">
              <div className="col-md-10 offset-md-1">
                <div className="spacer-double"></div>
                <blockquote
                  className={i18n.language === "sa" ? "q-big rtl" : "q-big"}
                >
                  <RiDoubleQuotesL size={80} /> <br />
                  <h1 style={{ fontSize: 30, fontWeight: 400 }}> {content}</h1>
                  <span className="d-quote-by">{author}</span>
                </blockquote>
                <div className="spacer-double"></div>
                <div className="spacer-double"></div>
                <div className="spacer-single"></div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Mblockquote;

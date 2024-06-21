import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import { Parallax } from "react-parallax";
import AOS from "aos";
import { useTranslation } from "react-i18next";
AOS.init();

const image1 = "./img/background/l11.jpg";
const Contact = () => {
  const form = useRef();

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const {
    title,
    placeholder1,
    placeholder2,
    placeholder3,
    placeholder4,
    emailme,
    callMe,
    addressText,
    send,
    addressTitle,
  } = t("Contact");

  function sendEmail(e) {
    const success = document.getElementById("success");
    const button = document.getElementById("send_message");
    const failed = document.getElementById("failed");
    e.preventDefault();

    emailjs
      .sendForm("service_9luwvfa", "template_01z7r02", form.current, {
        publicKey: "TQImHC5DCslaKKe3v",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
          success.classList.add("show");
          button.classList.add("show");
          failed.classList.remove("show");
        },
        (error) => {
          console.log("FAILED...", error);
          failed.classList.add("show");
        }
      );
  }

  return (
    <div className="section bg-top bg-bottom py-0">
      <Parallax className="py-5" bgImage={image1} strength={300}>
        <div className="py-5 position-relative">
          <div className={i18n.language === "sa" ? " container " : "container"}>
            <div className="row">
              <div
                className="col-md-12 text-center"
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease"
              >
                <h2>{title}</h2>
                <div className="space-border"></div>
              </div>
            </div>
            <div
              className="col-lg-8 offset-lg-2"
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease"
            >
              <div className="contact_form_wrapper">
                <form
                  ref={form}
                  name="contactForm"
                  id="contact_form"
                  className="form-border"
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-4">
                      <div className="field-set">
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          className="form-control"
                          style={{
                            direction: i18n.language === "sa" ? "rtl" : "ltr",
                          }}
                          placeholder={placeholder1}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field-set">
                        <input
                          type="text"
                          name="Email"
                          id="Email"
                          className="form-control"
                          style={{
                            direction: i18n.language === "sa" ? "rtl" : "ltr",
                          }}
                          placeholder={placeholder2}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="field-set">
                        <input
                          type="text"
                          name="Phone"
                          style={{
                            direction: i18n.language === "sa" ? "rtl" : "ltr",
                          }}
                          id="Phone"
                          className="form-control"
                          placeholder={placeholder3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="field-set">
                      <textarea
                        name="Message"
                        id="Message"
                        className="form-control"
                        placeholder={placeholder4}
                        style={{
                          direction: i18n.language === "sa" ? "rtl" : "ltr",
                        }}
                        required
                      ></textarea>
                    </div>
                    <div
                      id="success"
                      className="hide"
                      style={{ color: "green" }}
                    >
                      Your message has been sent...
                    </div>
                    <div id="failed" className="hide">
                      Message failed...
                    </div>
                    <div id="submit" className="mt30">
                      <button
                        type="submit"
                        id="send_message"
                        className="btn-main"
                        style={{
                          direction: i18n.language === "sa" ? "rtl" : "ltr",
                        }}
                      >
                        {send}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="spacer-double"></div>
              <div className="row text-center">
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <div className="wm-1"></div>
                  <h6>{emailme}</h6>
                  <p>me@mohammedalsolami.com</p>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <div className="wm-1"></div>
                  <h6>{callMe}</h6>
                  <p>+966 55 558 4191</p>
                </div>
                <div
                  className="col-md-4"
                  data-aos="fade-up"
                  data-aos-once="true"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease"
                >
                  <div className="wm-1"></div>
                  <h6>{addressTitle}</h6>
                  <p>{addressText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Contact;

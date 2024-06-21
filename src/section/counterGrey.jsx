import React from "react";
import { Parallax } from "react-parallax";
import CountUp from "react-countup";
import AOS from "aos";
import { useTranslation } from "react-i18next";
AOS.init();

const image1 = "./img/background/l11.jpg";

const Mblockquote = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { counter1, counter2, counter3, counter4 } = t("Counters");
  return (
    <div className={" section bg-top bg-bottom py-0"}>
      <Parallax className="py-5" bgImage={image1} strength={300}>
        <div className="py-5 position-relative">
          <div
            className={i18n.language === "sa" ? "rtl container" : "container"}
          >
            <div className="row">
              <div className="col-md-3">
                <div className="de_count text-center">
                  <h3
                    className="timer"
                    data-aos="fade"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  >
                    <CountUp
                      start={0}
                      end={8240}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h3>
                  <span>{counter1}</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="de_count text-center">
                  <h3
                    className="timer"
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  >
                    <CountUp
                      start={0}
                      end={315}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h3>
                  <span>{counter2}</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="de_count text-center">
                  <h3
                    className="timer"
                    data-aos="fade"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  >
                    <CountUp
                      start={0}
                      end={250}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h3>
                  <span>{counter3}</span>
                </div>
              </div>

              <div className="col-md-3">
                <div className="de_count text-center">
                  <h3
                    className="timer"
                    data-aos="fade"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-once="true"
                  >
                    <CountUp
                      start={0}
                      end={32}
                      duration={10}
                      useEasing={true}
                      separator=","
                    />
                  </h3>
                  <span>{counter4}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Mblockquote;

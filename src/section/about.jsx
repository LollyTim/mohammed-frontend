import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useTranslation } from "react-i18next";

import AnimatedProgressProvider from "../layout/AnimatedProgressProvider";

import AOS from "aos";
AOS.init();

const About = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { title, description } = t("about");

  return (
    <div className="v-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              {title}
            </h2>
            <div
              className="space-border"
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-easing="ease"
              data-aos-once="true"
            ></div>
          </div>
          <div
            className="col-md-10 text-center m-auto"
            data-aos="fade-up"
            data-aos-delay="60"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <p>{description}</p>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={90}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Python </h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={90}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Javascript</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={85}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Java</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={80}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">C++</h4>
          </div>
          {/* <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={75}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">Javascript</h4>
          </div>
          <div
            className="col-lg-3 p-5 text-center"
            data-aos="fade"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <AnimatedProgressProvider valueStart={0} valueEnd={75}>
              {(value) => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    strokeWidth={3}
                    text={`${roundedValue}.0%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "white",
                      textSize: "8px",
                      pathColor: "#cf1f1f",
                      trailColor: "#2f3134",
                    })}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <h4 className="mt-2">SQL</h4>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;

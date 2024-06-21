import React from "react";
import AOS from "aos";
import { PiWaveformBold } from "react-icons/pi";
import { TbDatabaseEdit } from "react-icons/tb";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { FaRobot } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { useTranslation } from "react-i18next";
AOS.init();

const WhatIDo = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const {
    title,
    doings1,
    doings2,
    doings3,
    doings4,
    doings5,
    doings6,
    doings7,
    doings8,
    doings9,
  } = t("whatIdo");
  return (
    <div className={i18n.language === "sa" ? "container rtl" : "container"}>
      <div className="row">
        <div
          className="col-md-12 text-center"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <h2>{title}</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="spacer-single"></div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <PiWaveformBold size={40} />
              <div className="text">
                <h3>{doings1}</h3>
                TensorFlow, PyTorch, Keras, scikit-learn, OpenCV
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <TbDatabaseEdit size={40} />
              <div className="text">
                <h3>{doings2}</h3>
                Pandas, NumPy, Matplotlib, Seaborn, Tableau
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <FaCloudDownloadAlt size={40} />
              <div className="text">
                <h3>{doings3}</h3>
                AWS, Google Cloud Platform, Microsoft Azure
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <FaDatabase size={40} />
              <div className="text">
                <h3>{doings4}</h3>
                MySQL, PostgreSQL, MongoDB, Cassandra
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <SiAzuredevops size={40} />
              <div className="text">
                <h3>{doings5}</h3>
                Docker, Kubernetes, Jenkins, Git, GitHub
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <GrReactjs size={40} />
              <div className="text">
                <h3>{doings6}</h3>
                HTML, CSS, React, Node.js, Django, Flask
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <MdOutlineScreenSearchDesktop size={40} />
              <div className="text">
                <h3>{doings7}</h3>
                MySQL, PostgreSQL, MongoDB, Cassandra
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <FaRobot size={40} />
              <div className="text">
                <h3>{doings8}</h3>
                Docker, Kubernetes, Jenkins, Git, GitHub
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4"
          data-aos="fade"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-easing="ease"
          data-aos-once="true"
        >
          <div className="de_3d-box">
            <div className="d-inner">
              <GoProjectRoadmap size={40} />
              <div className="text">
                <h3>{doings9}</h3>
                HTML, CSS, React, Node.js, Django, Flask
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

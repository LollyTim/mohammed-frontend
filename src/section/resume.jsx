import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import axiosInstance from "../api/config"; // Make sure to update the path to your axios instance

AOS.init();

const Hero = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { title, Education, Experiences } = t("Resume");

  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axiosInstance.get("/experiences");
        setExperiences(response.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    const fetchEducation = async () => {
      try {
        const response = await axiosInstance.get("/educations");
        setEducation(response.data);
      } catch (error) {
        console.error("Error fetching education:", error);
      }
    };

    fetchExperiences();
    fetchEducation();
  }, []);

  const formatDateRange = (startDate, endDate) => {
    const options = { year: "numeric", month: "short" };
    const start = new Date(startDate).toLocaleDateString(undefined, options);
    const end = endDate
      ? new Date(endDate).toLocaleDateString(undefined, options)
      : "Present";
    return `${start} - ${end}`;
  };

  return (
    <div className={i18n.language === "sa" ? "container rtl" : "container"}>
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>{title}</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="row gh-5">
        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">{Experiences}</h3>
            <ul className="d_timeline">
              {experiences.map((experience, index) => (
                <li className="d_timeline-item" key={index}>
                  <h3 className="d_timeline-title">
                    {" "}
                    {formatDateRange(experience.startDate, experience.endDate)}
                  </h3>
                  <p className="d_timeline-text">
                    <span className="d_title">{experience.title}</span>
                    <span className="d_company">{experience.organization}</span>
                    <span style={{ width: 200 }}>
                      {" "}
                      {experience.description}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-lg-6" data-aos="fade-up" data-aos-once="true">
          <div className="p-4">
            <h3 className="s_border">{Education}</h3>
            <ul className="d_timeline">
              {education.map((edu, index) => (
                <li className="d_timeline-item" key={index}>
                  <h3 className="d_timeline-title">
                    {" "}
                    {formatDateRange(edu.startDate, edu.endDate)}
                  </h3>
                  <p className="d_timeline-text">
                    <span className="d_title">{edu.title}</span>
                    <span className="d_company">{edu.schoolOrAcademy}</span>
                    {edu.shortDescription}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="spacer-double"></div>
      </div>
    </div>
  );
};

export default Hero;

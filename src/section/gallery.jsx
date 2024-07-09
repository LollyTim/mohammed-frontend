import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-component";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";
import axios from "axios";
import { useTranslation } from "react-i18next";

AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide{
          overflow-y: hidden; /* Hide vertical scrollbar */
          overflow-x: hidden; /* Hide horizontal scrollbar */
        }
`;

const Gallery = function () {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { title } = t("Portfolio");

  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;
  const imagesPerPage = 6;

  useEffect(() => {
    axios
      .get("https://mohammedalsolami-backend.onrender.com/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the projects!", error);
      });
  }, []);

  const handleProjectClick = (_id) => {
    axios
      .get(`https://mohammedalsolami-backend.onrender.com/api/projects/${_id}`)
      .then((response) => {
        setSelectedProject(response.data);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
      })
      .catch((error) => {
        console.error("There was an error fetching the project!", error);
      });
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginate = (array, pageNumber, pageSize) => {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  };

  const paginatedProjects = paginate(projects, currentPage, projectsPerPage);
  const paginatedImages = selectedProject
    ? paginate(selectedProject.mediaUrls, currentPage, imagesPerPage)
    : [];

  return (
    <div className={i18n.language === "sa" ? "container rtl" : "container"}>
      <GlobalStyles />
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>{title}</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <Masonry className={"row my-gallery-class"} elementType={"div"}>
        {paginatedProjects.map((project) => (
          <div
            key={project._id}
            className="col-lg-4 image-element-class de_modal"
            onClick={() => handleProjectClick(project._id)}
            data-aos="fade-up"
            data-aos-once="true"
          >
            <div className="card-image-1">
              <div className="d-text">
                <h3>{project.title}</h3>
                <h5 className="d-tag">{project.type}</h5>
              </div>
              {project.coverImage ? (
                <img src={project.coverImage} alt={project.title} />
              ) : (
                <img src="/path/to/placeholder/image.jpg" alt="placeholder" />
              )}
            </div>
          </div>
        ))}
      </Masonry>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(projects.length / projectsPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </button>
          )
        )}
      </div>

      {lightboxOpen && selectedProject && (
        <div className="LightboxGal">
          <div className="closeGal">
            <button
              className="button-close"
              onClick={handleLightboxClose}
            ></button>
          </div>
          <div className="v-center w-100">
            <div className="mainLightbox container">
              <div className="row g-5">
                <div className="col-lg-8">
                  <div className="row g-4">
                    {paginatedImages.map((url, index) => (
                      <div
                        key={index}
                        className={`col-lg-${index % 3 === 0 ? 12 : 6} item`}
                      >
                        <img
                          src={url}
                          alt={`galleryimage-${index}`}
                          className="img-fluid"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="pagination">
                    {Array.from(
                      {
                        length: Math.ceil(
                          selectedProject.mediaUrls.length / imagesPerPage
                        ),
                      },
                      (_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          disabled={currentPage === index + 1}
                        >
                          {index + 1}
                        </button>
                      )
                    )}
                  </div>
                </div>
                <div className="col-lg-4 de_project-info">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.description}</p>
                  <div className="de_project-details">
                    <div className="d-field">
                      <i className="fa fa-user-o"></i>Client:{" "}
                      <span>{selectedProject.client}</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-file-text-o"></i>Type:{" "}
                      <span>{selectedProject.type}</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-calendar-o"></i>Year:{" "}
                      <span>{selectedProject.year}</span>
                    </div>
                    <div className="d-field">
                      <i className="fa fa-external-link"></i>Preview:{" "}
                      <span>
                        <a
                          href={selectedProject.preview}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {selectedProject.preview}
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="spacer-30"></div>
                  <blockquote>
                    "Very well done theme. Versatile, extremely well coded, and
                    gorgeous. That's a great combo. Highly recommended."
                    <span>John Archi</span>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

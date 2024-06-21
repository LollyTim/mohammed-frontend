import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "./settingsnew";
import { createGlobalStyle } from "styled-components";
import AOS from "aos";
import axios from "axios";
import { useTranslation } from "react-i18next";

AOS.init();

const GlobalStyles = createGlobalStyle`
    body.hide {
        overflow-y: hidden; /* Hide vertical scrollbar */
        overflow-x: hidden; /* Hide horizontal scrollbar */
    }
`;

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

const Blog = function () {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const { title } = t("blog");
  const [blogPosts, setBlogPosts] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    // Fetch blog posts data from API
    axios
      .get("http://localhost:5000/api/blogs/") // Replace with your API endpoint
      .then((response) => {
        console.log("Blog posts data fetched:", response.data); // Debugging log
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog posts!", error);
      });
  }, []);

  const handleBlogClick = (id) => {
    console.log("Blog ID clicked:", id); // Debugging log to check the id
    // Fetch specific blog post by ID from API
    axios
      .get(`http://localhost:5000/api/blogs/${id}`) // Replace with your API endpoint
      .then((response) => {
        console.log("Blog post data fetched:", response.data); // Debugging log
        setSelectedBlog(response.data);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
      })
      .catch((error) => {
        console.error("There was an error fetching the blog post!", error);
      });
  };

  const handleLightboxClose = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={i18n.language === "sa" ? "container rtl" : "container"}>
      <GlobalStyles />
      <div className="spacer-single"></div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h2>{title}</h2>
          <div className="space-border"></div>
        </div>
      </div>
      <div className="row" data-aos="fade-up" data-aos-once="true">
        <Slider {...settings}>
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <CustomSlide key={post._id} className="itm" index={post._id}>
                <div className="bloglist item">
                  <div className="post-content">
                    <div className="post-image">
                      <div
                        className="de_modal"
                        onClick={() => handleBlogClick(post._id)}
                      >
                        <img
                          alt="blogimg"
                          src={post.image}
                          className="grayscale"
                        />
                      </div>
                    </div>
                    <div className="post-text">
                      <h4
                        className="de_modal"
                        onClick={() => handleBlogClick(post._id)}
                      >
                        {post.title}
                      </h4>
                      <p>{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              </CustomSlide>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Slider>
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedBlog && (
        <div className="LightboxGal">
          <div className="closeGal">
            <button
              className="button-close"
              onClick={handleLightboxClose}
            ></button>
          </div>
          <div className="v-center w-100">
            <div className="mainLightbox container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <div className="blog-read">
                    <img
                      alt="blogimg"
                      src={selectedBlog.image}
                      className="img-fullwidth rounded"
                    />
                    <h2>{selectedBlog.title}</h2>
                    <div className="post-text">{selectedBlog.content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

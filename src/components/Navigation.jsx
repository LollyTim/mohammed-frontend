// src/components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div style={styles.sidebar}>
    <h2 style={{ color: "black" }}>Dashboard</h2>
    <ul style={styles.navList}>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/projects"
        >
          View All Projects
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/projects/add"
        >
          Add New Project
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/blogs"
        >
          View All Blogs
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/blogs/add"
        >
          Add New Blog
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/educations"
        >
          View All Educations
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/educations/add"
        >
          Add New Education
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/experiences"
        >
          View All Experiences
        </Link>
      </li>
      <li>
        <Link
          style={{ textDecoration: "none", color: "black", fontWeight: 400 }}
          to="/dashboard/experiences/add"
        >
          Add New Experience
        </Link>
      </li>
    </ul>
  </div>
);

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "2px 0px 5px rgba(0,0,0,0.1)",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
  },
};

export default Navigation;

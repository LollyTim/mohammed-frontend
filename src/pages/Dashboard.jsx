import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import ProjectForm from "../components/ProjectForm";
import BlogForm from "../components/BlogForm";
import EducationForm from "../components/EducationForm";
import ExperienceForm from "../components/ExperienceForm";
import ViewAllData from "../components/ViewAllData";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const token = localStorage.getItem("token");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const projectsData = await axios.get(
      "http://localhost:5000/api/projects",
      config
    );
    const blogsData = await axios.get(
      "http://localhost:5000/api/blogs",
      config
    );
    const educationsData = await axios.get(
      "http://localhost:5000/api/educations",
      config
    );
    const experiencesData = await axios.get(
      "http://localhost:5000/api/experiences",
      config
    );

    setProjects(projectsData.data);
    setBlogs(blogsData.data);
    setEducations(educationsData.data);
    setExperiences(experiencesData.data);
  };

  const handleEdit = (item) => {
    setEditData(item);
    switch (item.type) {
      case "project":
        navigate("/cased/addProject");
        break;
      case "blog":
        navigate("/cased/addBlog");
        break;
      case "education":
        navigate("/cased/addEducation");
        break;
      case "experience":
        navigate("/cased/addExperience");
        break;
      default:
        break;
    }
  };

  const handleDelete = async (id, type) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const token = localStorage.getItem("token");
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`http://localhost:5000/api/${type}s/${id}`, config);
        fetchAllData();
      } catch (error) {
        console.error("Error deleting item", error);
      }
    }
  };

  const handleSubmit = () => {
    fetchAllData();
    navigate("/cased/viewProjects");
    setEditData(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      style={{ display: "flex", minHeight: "100vh", backgroundColor: "gray" }}
    >
      <Navigation />
      <div style={{ width: "80%", padding: "20px" }}>
        <button
          onClick={handleLogout}
          style={{
            padding: "10px 20px",
            backgroundColor: "#333",
            color: "white",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          Logout
        </button>
        <Routes>
          <Route
            path="/cased/viewProjects"
            element={
              <ViewAllData
                data={projects}
                onEdit={handleEdit}
                onDelete={(id) => handleDelete(id, "project")}
              />
            }
          />
          <Route
            path="/cased/addProject"
            element={<ProjectForm data={editData} onSubmit={handleSubmit} />}
          />
          <Route
            path="/cased/addBlog"
            element={<BlogForm data={editData} onSubmit={handleSubmit} />}
          />
          <Route
            path="/cased/addEducation"
            element={<EducationForm data={editData} onSubmit={handleSubmit} />}
          />
          <Route
            path="/cased/addExperience"
            element={<ExperienceForm data={editData} onSubmit={handleSubmit} />}
          />
          <Route
            path="/cased/viewAllData"
            element={
              <div>
                <h2>Projects</h2>
                <ViewAllData
                  data={projects}
                  onEdit={handleEdit}
                  onDelete={(id) => handleDelete(id, "project")}
                />
                <h2>Blogs</h2>
                <ViewAllData
                  data={blogs}
                  onEdit={handleEdit}
                  onDelete={(id) => handleDelete(id, "blog")}
                />
                <h2>Educations</h2>
                <ViewAllData
                  data={educations}
                  onEdit={handleEdit}
                  onDelete={(id) => handleDelete(id, "education")}
                />
                <h2>Experiences</h2>
                <ViewAllData
                  data={experiences}
                  onEdit={handleEdit}
                  onDelete={(id) => handleDelete(id, "experience")}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

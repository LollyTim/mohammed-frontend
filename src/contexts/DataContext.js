// src/context/DataContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsRes = await axios.get("http://localhost:5000/api/projects");
      const blogsRes = await axios.get("http://localhost:5000/api/blogs");
      const educationsRes = await axios.get(
        "http://localhost:5000/api/educations"
      );
      const experiencesRes = await axios.get(
        "http://localhost:5000/api/experiences"
      );

      setProjects(projectsRes.data);
      setBlogs(blogsRes.data);
      setEducations(educationsRes.data);
      setExperiences(experiencesRes.data);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        projects,
        blogs,
        educations,
        experiences,
        setProjects,
        setBlogs,
        setEducations,
        setExperiences,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

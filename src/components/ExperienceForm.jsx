// src/components/AddExperience.js
import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../api/config";
import { DataContext } from "../contexts/DataContext";
import { useNavigate, useParams } from "react-router-dom";

const AddExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { experiences, setExperiences } = useContext(DataContext);

  const [experience, setExperience] = useState({
    title: "",
    organization: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (id) {
      const exp = experiences.find((e) => e._id === id);
      if (exp) {
        setExperience({
          title: exp.title,
          organization: exp.organization,
          description: exp.description,
          startDate: exp.startDate ? exp.startDate.split("T")[0] : "",
          endDate: exp.endDate ? exp.endDate.split("T")[0] : "",
        });
      }
    }
  }, [id, experiences]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        const res = await axiosInstance.put(`/experiences/${id}`, experience);
        setExperiences(experiences.map((e) => (e._id === id ? res.data : e)));
      } else {
        const res = await axiosInstance.post("/experiences", experience);
        setExperiences([...experiences, res.data]);
      }
      navigate("/dashboard/experiences");
    } catch (error) {
      console.error("Error submitting experience:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{id ? "Edit Experience" : "Add Experience"}</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          name="title"
          value={experience.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Organization</label>
        <input
          type="text"
          name="organization"
          value={experience.organization}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          value={experience.description}
          onChange={handleChange}
          style={{ ...inputStyle, height: "100px" }}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Start Date</label>
        <input
          type="date"
          name="startDate"
          value={experience.startDate}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>End Date</label>
        <input
          type="date"
          name="endDate"
          value={experience.endDate}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        {id ? "Update Experience" : "Add Experience"}
      </button>
    </form>
  );
};

const formStyle = {
  padding: "20px",
  backgroundColor: "white",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "auto",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const inputContainerStyle = {
  marginBottom: "16px",
};

const labelStyle = {
  display: "block",
  color: "#333",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#333",
  color: "white",
  borderRadius: "4px",
  fontSize: "16px",
  border: "none",
  cursor: "pointer",
};

export default AddExperience;

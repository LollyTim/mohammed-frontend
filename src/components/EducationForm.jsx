// src/components/AddEducation.js
import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../api/config";
import { DataContext } from "../contexts/DataContext";
import { useNavigate, useParams } from "react-router-dom";

const AddEducation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { educations, setEducations } = useContext(DataContext);

  const [education, setEducation] = useState({
    title: "",
    schoolOrAcademy: "",
    shortDescription: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (id) {
      const education = educations.find((e) => e._id === id);
      if (education) {
        setEducation({
          title: education.title,
          schoolOrAcademy: education.schoolOrAcademy,
          shortDescription: education.shortDescription,
          startDate: education.startDate
            ? education.startDate.split("T")[0]
            : "",
          endDate: education.endDate ? education.endDate.split("T")[0] : "",
        });
      }
    }
  }, [id, educations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        const res = await axiosInstance.put(`/educations/${id}`, education);
        setEducations(educations.map((e) => (e._id === id ? res.data : e)));
      } else {
        const res = await axiosInstance.post("/educations", education);
        setEducations([...educations, res.data]);
      }
      navigate("/dashboard/educations");
    } catch (error) {
      console.error("Error submitting education:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{id ? "Edit Education" : "Add Education"}</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          name="title"
          value={education.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>School/Academy</label>
        <input
          type="text"
          name="schoolOrAcademy"
          value={education.schoolOrAcademy}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Short Description</label>
        <textarea
          name="shortDescription"
          value={education.shortDescription}
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
          value={education.startDate}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>End Date</label>
        <input
          type="date"
          name="endDate"
          value={education.endDate}
          onChange={handleChange}
          style={inputStyle}
        />
      </div>
      <button type="submit" style={buttonStyle}>
        {id ? "Update Education" : "Add Education"}
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

export default AddEducation;

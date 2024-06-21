import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/config";
import { DataContext } from "../contexts/DataContext";

const EducationsList = () => {
  const { educations, setEducations } = useContext(DataContext);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/educations/${id}`);
      setEducations(educations.filter((education) => education._id !== id));
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        maxWidth: "800px",
        margin: "40px auto",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h2
        style={{
          color: "#2c3e50",
          fontSize: "28px",
          marginBottom: "30px",
          textAlign: "center",
          fontWeight: "600",
        }}
      >
        Educations List
      </h2>
      {educations.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#7f8c8d",
            fontSize: "18px",
          }}
        >
          No educations added yet.
        </p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
          }}
        >
          {educations.map((education) => (
            <li
              key={education._id}
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: "0 0 10px 0",
                    color: "#34495e",
                    fontSize: "20px",
                  }}
                >
                  {education.title}
                </h3>
                <p
                  style={{
                    margin: "0",
                    color: "#7f8c8d",
                    fontSize: "14px",
                  }}
                >
                  {education.institution}
                </p>
              </div>
              <div>
                <Link
                  to={`/dashboard/educations/edit/${education._id}`}
                  style={{
                    textDecoration: "none",
                    color: "#3498db",
                    marginRight: "15px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(education._id)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "8px 12px",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationsList;

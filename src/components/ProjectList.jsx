import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { DataContext } from "../contexts/DataContext";
import axiosInstance from "../api/config";

const ProjectsList = () => {
  const { projects, setProjects } = useContext(DataContext);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await axiosInstance.delete(
        `https://mohammedalsolami-backend.onrender.com/api/projects/${id}`
      );
      setProjects(projects.filter((project) => project._id !== id));
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          color: "#212529",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Projects
      </h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          <tr>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Title
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Description
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
              key={project._id}
              style={{
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <td
                style={{
                  padding: "10px",
                }}
              >
                {project.title}
              </td>
              <td
                style={{
                  padding: "10px",
                }}
              >
                {project.description}
              </td>
              <td
                style={{
                  padding: "10px",
                }}
              >
                <Link
                  to={`/dashboard/projects/edit/${project._id}`}
                  style={{
                    marginRight: "10px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "5px 10px",
                    textDecoration: "none",
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#0056b3")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#007bff")
                  }
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(project._id)}
                  style={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    padding: "5px 10px",
                    border: "none",
                    borderRadius: "5px",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsList;

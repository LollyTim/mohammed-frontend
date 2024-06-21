import React, { useContext } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../api/config";
import { DataContext } from "../contexts/DataContext";

const BlogsList = () => {
  const { blogs, setBlogs } = useContext(DataContext);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await axiosInstance.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
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
        Blogs List
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          margin: "0",
        }}
      >
        {blogs.map((blog) => (
          <li
            key={blog._id}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {blog.title}
            </span>
            <div>
              <Link
                to={`/dashboard/blogs/edit/${blog._id}`}
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
                onClick={() => handleDelete(blog._id)}
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogsList;

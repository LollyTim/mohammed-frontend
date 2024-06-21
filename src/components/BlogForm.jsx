// src/components/AddBlog.js
import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../api/config";
import { DataContext } from "../contexts/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { blogs, setBlogs } = useContext(DataContext);
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    image: "",
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (id) {
      const blog = blogs.find((b) => b._id === id);
      if (blog) setBlog(blog);
    }
  }, [id, blogs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleContentChange = (value) => {
    setBlog({ ...blog, content: value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(blog).forEach((key) => {
      if (key !== "image") {
        formData.append(key, blog[key]);
      }
    });

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      if (id) {
        const res = await axiosInstance.put(`/blogs/${id}`, formData);
        setBlogs(blogs.map((b) => (b._id === id ? res.data : b)));
      } else {
        const res = await axiosInstance.post("/blogs", formData);
        setBlogs([...blogs, res.data]);
      }
      navigate("/dashboard/blogs");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>{id ? "Edit Blog" : "Add Blog"}</h2>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Title</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Content</label>
        <input
          type="text"
          name="content"
          value={blog.content}
          onChange={handleChange}
          style={inputStyle}
          required
        />
      </div>
      <div style={inputContainerStyle}>
        <label style={labelStyle}>Image</label>
        {blog.image && (
          <img
            src={blog.image}
            alt="Cover"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              marginTop: "10px",
              borderRadius: "5px",
            }}
          />
        )}
        <input type="file" onChange={handleImageChange} style={inputStyle} />
      </div>
      <button type="submit" style={buttonStyle}>
        {id ? "Update Blog" : "Add Blog"}
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

export default AddBlog;

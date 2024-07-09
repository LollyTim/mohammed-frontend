import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProject = ({ project, onEdit }) => {
  const [formData, setFormData] = useState(
    project || {
      title: "",
      description: "",
      technologies: [],
      client: "",
      type: "",
      year: "",
      preview: "",
      mediaUrls: [],
      coverImage: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      await axios.put(
        `https://mohammedalsolami-backend.onrender.com/api/projects/${formData._id}`,
        formData
      );
    } else {
      await axios.post(
        "https://mohammedalsolami-backend.onrender.com/api/projects",
        formData
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h2>{onEdit ? "Edit Project" : "Add Project"}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="technologies"
        value={formData.technologies}
        onChange={handleChange}
        placeholder="Technologies"
        required
      />
      <input
        type="text"
        name="client"
        value={formData.client}
        onChange={handleChange}
        placeholder="Client"
      />
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Type"
      />
      <input
        type="number"
        name="year"
        value={formData.year}
        onChange={handleChange}
        placeholder="Year"
      />
      <input
        type="text"
        name="preview"
        value={formData.preview}
        onChange={handleChange}
        placeholder="Preview URL"
      />
      <input
        type="text"
        name="mediaUrls"
        value={formData.mediaUrls}
        onChange={handleChange}
        placeholder="Media URLs"
      />
      <input
        type="text"
        name="coverImage"
        value={formData.coverImage}
        onChange={handleChange}
        placeholder="Cover Image URL"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const AddBlog = ({ blog, onEdit }) => {
  const [formData, setFormData] = useState(
    blog || { title: "", content: "", image: "", author: "" }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      await axios.put(
        `https://mohammedalsolami-backend.onrender.com/api/blogs/${formData._id}`,
        formData
      );
    } else {
      await axios.post(
        "https://mohammedalsolami-backend.onrender.com/api/blogs",
        formData
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h2>{onEdit ? "Edit Blog" : "Add Blog"}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Content"
        required
      />
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author ID"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const AddEducation = ({ education, onEdit }) => {
  const [formData, setFormData] = useState(
    education || {
      title: "",
      schoolOrAcademy: "",
      shortDescription: "",
      startDate: "",
      endDate: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      await axios.put(
        `https://mohammedalsolami-backend.onrender.com/api/educations/${formData._id}`,
        formData
      );
    } else {
      await axios.post(
        "https://mohammedalsolami-backend.onrender.com/api/educations",
        formData
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h2>{onEdit ? "Edit Education" : "Add Education"}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="schoolOrAcademy"
        value={formData.schoolOrAcademy}
        onChange={handleChange}
        placeholder="School or Academy"
        required
      />
      <textarea
        name="shortDescription"
        value={formData.shortDescription}
        onChange={handleChange}
        placeholder="Short Description"
        required
      />
      <input
        type="number"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        type="number"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const AddExperience = ({ experience, onEdit }) => {
  const [formData, setFormData] = useState(
    experience || {
      title: "",
      company: "",
      description: "",
      startDate: "",
      endDate: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      await axios.put(
        `https://mohammedalsolami-backend.onrender.com/api/experiences/${formData._id}`,
        formData
      );
    } else {
      await axios.post(
        "https://mohammedalsolami-backend.onrender.com/api/experiences",
        formData
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h2>{onEdit ? "Edit Experience" : "Add Experience"}</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="number"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        placeholder="Start Date"
      />
      <input
        type="number"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        placeholder="End Date"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

const ViewAllData = ({ data, type }) => {
  const handleEdit = (item) => {
    // Navigate to the edit form with the selected item data
  };

  const handleDelete = async (id) => {
    // Show a confirmation modal before deleting
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      await axios.delete(
        `https://mohammedalsolami-backend.onrender.com/api/${type}/${id}`
      );
    }
  };

  return (
    <div
      style={{ padding: "20px", backgroundColor: "white", borderRadius: "8px" }}
    >
      <h2>{`All ${type.charAt(0).toUpperCase() + type.slice(1)}`}</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id} style={{ marginBottom: "10px" }}>
            {JSON.stringify(item)}
            <button
              onClick={() => handleEdit(item)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item._id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AddProject, AddBlog, AddEducation, AddExperience, ViewAllData };

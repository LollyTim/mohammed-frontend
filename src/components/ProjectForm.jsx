import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/DataContext";
import axiosInstance from "../api/config";

const ProjectForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, setProjects } = useContext(DataContext);
  const [project, setProject] = useState({
    title: "",
    description: "",
    technologies: "",
    client: "",
    type: "",
    year: "",
    preview: "",
    coverImage: "",
    mediaUrls: [],
  });
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [mediaUrlFiles, setMediaUrlFiles] = useState([]);
  const [removedMediaUrls, setRemovedMediaUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const project = projects.find((p) => p._id === id);
      if (project) setProject(project);
    }
  }, [id, projects]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleImageChange = (e) => {
    setCoverImageFile(e.target.files[0]);
  };

  const handleMediaUrlsChange = (e) => {
    setMediaUrlFiles([...mediaUrlFiles, ...Array.from(e.target.files)]);
  };

  const handleRemoveImage = (url) => {
    setProject({
      ...project,
      mediaUrls: project.mediaUrls.filter((mediaUrl) => mediaUrl !== url),
    });
    setRemovedMediaUrls([...removedMediaUrls, url]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(project).forEach((key) => {
      if (key !== "mediaUrls") {
        formData.append(key, project[key]);
      }
    });
    if (coverImageFile) formData.append("coverImage", coverImageFile);
    mediaUrlFiles.forEach((file) => {
      formData.append("mediaUrls", file);
    });
    formData.append("removedMediaUrls", JSON.stringify(removedMediaUrls));

    try {
      let res;
      if (id) {
        res = await axiosInstance.put(
          `http://localhost:5000/api/projects/${id}`,
          formData
        );
        setProjects(projects.map((p) => (p._id === id ? res.data : p)));
      } else {
        res = await axiosInstance.post(
          "http://localhost:5000/api/projects",
          formData
        );
        setProjects([...projects, res.data]);
      }
      navigate("/dashboard/projects");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{id ? "Edit Project" : "Add New Project"}</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Description:
        </label>
        <textarea
          name="description"
          value={project.description}
          onChange={handleChange}
          required
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
            height: "100px",
          }}
        ></textarea>
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Technologies:
        </label>
        <input
          type="text"
          name="technologies"
          value={project.technologies}
          onChange={handleChange}
          required
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Client:
        </label>
        <input
          type="text"
          name="client"
          value={project.client}
          onChange={handleChange}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Type:
          <input
            type="text"
            name="type"
            value={project.type}
            onChange={handleChange}
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          />
        </label>
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Year:
          <input
            type="number"
            name="year"
            value={project.year}
            onChange={handleChange}
            style={{
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          />
        </label>
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Preview:
        </label>
        <input
          type="text"
          name="preview"
          value={project.preview}
          onChange={handleChange}
          style={{
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Cover Image:
        </label>
        {project.coverImage && (
          <img
            src={project.coverImage}
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
        <input
          type="file"
          onChange={handleImageChange}
          style={{ marginBottom: "10px" }}
        />
        <label style={{ fontWeight: "bold", marginBottom: "5px" }}>
          Images:
        </label>
        {project.mediaUrls &&
          project.mediaUrls.map((each, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "10px",
              }}
            >
              <img
                src={each}
                alt="Media"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <button
                type="button"
                onClick={() => handleRemoveImage(each)}
                style={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          ))}
        <input
          type="file"
          multiple
          onChange={handleMediaUrlsChange}
          style={{ marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          disabled={loading}
        >
          {loading ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;

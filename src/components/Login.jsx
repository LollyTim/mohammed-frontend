import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mohammedalsolami-backend.onrender.com/api/auth/login",
        { email, password }
      );
      const { token } = response.data;
      localStorage.setItem("token", token);
      setIsAuthenticated(true)
      navigate("/dashboard");
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || "Invalid email or password");
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      style={{
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", color: "#333" }}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", color: "#333" }}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "#333",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Login
      </button>
    </form>
  );
};

export default Login;

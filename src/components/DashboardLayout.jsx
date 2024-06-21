// src/layouts/DashboardLayout.js
import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => (
  <div style={styles.layout}>
    <Navigation />
    <div style={styles.content}>
      <Outlet />
    </div>
  </div>
);

const styles = {
  layout: {
    display: "flex",
    minHeight: "100vh",
  },
  content: {
    flex: 1,
    padding: "20px",
  },
};

export default DashboardLayout;

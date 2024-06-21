// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import DashboardLayout from "./components/DashboardLayout";
// import Homegrey from "../src/pages/homeGrey";
// import ProtectedRoute from "./components/ProtectedRoute";
// import {
//   AddProject,
//   AddBlog,
//   AddEducation,
//   AddExperience,
//   ViewAllData,
// } from "./components/Forms";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Homegrey />} />
//         <Route
//           path="/dashboard"
//           element={<ProtectedRoute component={DashboardLayout} />}
//         >
//           <Route path="projects" element={<ViewAllData type="projects" />} />
//           <Route path="add-project" element={<AddProject />} />
//           <Route path="add-blog" element={<AddBlog />} />
//           <Route path="add-education" element={<AddEducation />} />
//           <Route path="add-experience" element={<AddExperience />} />
//           <Route path="view-all" element={<ViewAllData type="all" />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homegrey from "../src/pages/homeGrey"; // Assuming you have a Home component
import Navigation from "./components/Navigation";
import ProjectsList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import Login from "./components/Login";
import { DataProvider } from "./contexts/DataContext";
import DashboardLayout from "./components/DashboardLayout";
import BlogsList from "./components/BlogList";
import AddBlog from "./components/BlogForm";
import ExperiencesList from "./components/ExperienceList";
import AddExperience from "./components/ExperienceForm";
import EducationsList from "./components/EducationList";
import AddEducation from "./components/EducationForm";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Homegrey />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />
            }
          >
            <Route path="projects" element={<ProjectsList />} />
            <Route path="projects/add" element={<ProjectForm />} />
            <Route path="projects/edit/:id" element={<ProjectForm />} />
            <Route path="blogs" element={<BlogsList />} />
            <Route path="blogs/add" element={<AddBlog />} />
            <Route path="blogs/edit/:id" element={<AddBlog />} />
            <Route path="experiences" element={<ExperiencesList />} />
            <Route path="experiences/add" element={<AddExperience />} />
            <Route path="experiences/edit/:id" element={<AddExperience />} />
            <Route path="educations" element={<EducationsList />} />
            <Route path="educations/add" element={<AddEducation />} />
            <Route path="educations/edit/:id" element={<AddEducation />} />
            {/* Add similar routes for blogs, educations, and experiences */}
          </Route>
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;

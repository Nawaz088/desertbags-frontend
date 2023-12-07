import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import SpreadsheetPage from "./pages/SpreadsheetPage";

const ProjectRoutes = () => {
    return (
      <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
            <Route exact path="/" element={<FormPage />} />
            <Route exact path="/sheet" element={<SpreadsheetPage />} />
          </Routes>
        </Router>
      </React.Suspense>
    );
  };
  export default ProjectRoutes;
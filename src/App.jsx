import React, { useEffect } from "react";
import { Routes, Route, useLocation, Form } from "react-router-dom";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/Form";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/form" element={<SignUpForm />} />
      </Routes>
    </>
  );
}

export default App;

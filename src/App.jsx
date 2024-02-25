// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Credits from "./pages/Credits"; // Correct import path
import Landing from "./pages/Landing";
import Template_Page from "./pages/template_page";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/choose-template" element={<Template_Page />} />

          <Route exact path="/user-details" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

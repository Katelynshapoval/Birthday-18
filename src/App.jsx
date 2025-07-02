import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Pics from "./components/Pics";
import Scenarios from "./components/Scenarios";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/pics" element={<Pics />} />
        <Route path="/scenarios" element={<Scenarios />} />
      </Routes>
    </Router>
  );
}

export default App;

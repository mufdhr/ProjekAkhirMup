import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Create from "./pages/Create";
import Edit from "./pages/Edit";

function App() {
  return (
    <Router>
      <navbar /> 
      <div className="container mx-auto p-4"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </Router>
  );
}


export default App;

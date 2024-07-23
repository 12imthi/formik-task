// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
// import Authors from "./Pages/Authors";
import CreateBook from "./Pages/CreateBook";
import EditBook from "./Pages/EditBook";
// import CreateAuthor from "./Pages/CreateAuthor";
// import EditAuthor from "./Pages/EditAuthor";
import { useState } from "react";

function App() {
const[id,setId] = useState(0)
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mt-4 bg-body-secondary rounded-3">
          <div style={{margin: '100px 0'}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books setId={setId}  />} />
              <Route path="/create-book" element={<CreateBook />} />
              <Route path="/edit-book/:id" element={<EditBook id={id}/>} />
              {/* <Route path="/authors" element={<Authors />} />
              <Route path="/create-author" element={<CreateAuthor />} />
              <Route path="/edit-author/:id" element={<EditAuthor id={id} />} /> */}
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

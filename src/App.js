import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from "./pages/Contact"
import { BrowserRouter, Router, Route } from "react-router-dom"
// TODO: Import About
// TODO: Import Contact
// TODO: Import React Router

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Router>
        <Route link="/" element={<Home />}/>
        <Route link="/about" element={<About />}/>
        <Route link="/Contact" element={<Contact />}/>
      </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;

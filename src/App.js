import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Projects />} />
            <Route path="/" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Routes>
        </Router>
      </Container>
    );
  }
}

export default App;

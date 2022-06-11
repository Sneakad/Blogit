import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Forms from './components/Forms';
import Blogs from './components/Blogs';
import Details from './components/Details';
import Update from './components/Update';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Forms />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;

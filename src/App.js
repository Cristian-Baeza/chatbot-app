import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Chatwindow from './components/Chatwindow';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Chatwindow />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

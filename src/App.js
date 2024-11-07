import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatwindow from './components/Chatwindow';
import About from './components/About';
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Chatwindow />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

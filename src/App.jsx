import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Success from './components/Success';
import Error from './components/Error';

const Home = () => (
  <>
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Projects />
    <Blog />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

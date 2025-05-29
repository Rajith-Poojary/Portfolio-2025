import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HashRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-slate-700 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          <div id="Header"><Header /></div>
          <div id="Home"><Hero /></div>
          <div id="About"><About/></div>
          <div id="Education"><Education/></div>
          <div id="Skills"><Skills/></div>
          <div id="Projects"><Projects/></div>
          <div id="Resume"><Resume/></div>
          <div id="Contact"><Contact/></div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

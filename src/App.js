// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Characters from './pages/characters';
import Weapons from './pages/weapons';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/weapons" element={<Weapons />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

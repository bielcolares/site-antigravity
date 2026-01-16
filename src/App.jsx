import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import MeasurementTables from './pages/MeasurementTables';
import Contact from './pages/Contact';

import Header from './components/layout/Header';
import IndustrialBackground from './components/3d/IndustrialBackground';

function App() {
  return (
    <Router>
      <div className="App">
        <IndustrialBackground />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<About />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/tabelas" element={<MeasurementTables />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        {/* Footer will go here */}
      </div>
    </Router>
  );
}

export default App;

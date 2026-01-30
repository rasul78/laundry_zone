import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LaundryZone from './laundryzone';
import Equipment from './Equipment';
import Location from './Location';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaundryZone />} />
        <Route path="/equipment" element={<Equipment />} />
         <Route path="/locations" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;

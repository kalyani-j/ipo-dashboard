import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import IPODetails from './pages/ipodetails/ipoDetails';
import Navbar from './components/nav-bar/navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<IPODetails/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

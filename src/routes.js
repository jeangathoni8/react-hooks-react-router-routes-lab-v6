import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Directors from './pages/Directors';
import Actors from './pages/Actors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';

const AppRoutes = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/directors" element={<Directors />} />
              <Route path="/actors" element={<Actors />} />
              <Route path="/movie/:id" element={<Movie />} />
              <Route path="*" element={<ErrorPage />} /> {/* Catch-all route for unmatched paths */}
          </Routes>
      </Router>
  );
};

export default AppRoutes;
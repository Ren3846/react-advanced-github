import React from 'react';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/favourites" element={<FavouritesPage/>} />
      </Routes> 
    </>
  );
}

export default App;

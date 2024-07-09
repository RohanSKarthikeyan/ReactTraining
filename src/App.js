import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage'; 
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
    <Route path='' element={<LoginPage/>}/>
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
  );
    
 
}

export default App;

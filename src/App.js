import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage'; 
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from './apicalls/Api';

function App() {
  useQuery({
    queryKey: ['posts'],
    queryFn: fetchData
  })
  return (
    <Routes>
    <Route path='' element={<LoginPage/>}/>
    <Route path='/home' element={<HomePage/>}/>
    </Routes>
  );
    
 
}

export default App;

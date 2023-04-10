import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Projects } from './pages';


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/projects" element={ <Projects /> } />
      </Routes>
    </BrowserRouter>
  );
}
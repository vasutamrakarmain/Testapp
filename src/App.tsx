import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TestPage from './pages/TestPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route index element={<HomePage />}/>
        <Route path={`/about`} element={<AboutPage />}/>
        <Route path={`/test`} element={<TestPage />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

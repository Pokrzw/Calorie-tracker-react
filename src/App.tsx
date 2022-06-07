import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import MainPage from './components/mainPage/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/calorie-tracker-react' element={<LoginForm />} />
        <Route path='/home' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

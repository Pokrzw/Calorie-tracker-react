import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<LoginForm/>} />
</Routes>
</BrowserRouter>
  // <div className="a">
  //   <LoginForm/>
  // </div>
  );
}

export default App;

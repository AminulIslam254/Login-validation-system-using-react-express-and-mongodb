// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slideimg from './components/Slideimg';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Slideimg />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register /> } />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

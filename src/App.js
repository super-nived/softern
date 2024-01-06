import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './componants/navbar/Nav';
import Header  from './componants/header/Header';
import Category from './componants/category/Category';
import Course from './componants/courses/Course';
import Qa from './componants/qa/QA';
import Testimonial from './componants/testimonial/Testimonial';
import Footer from './componants/footer/Footer';
import Abt from './pages/Abt';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Coursemain from './componants/Coursepage/Coursemain';
import Crs from './pages/Crs';
import Mains from './pages/Mains';
import Contact from './componants/Contact.js/Contact';
import Cnt from './pages/Cnt';
import Game from './pages/Game';


function App() {
  return (

    <div className="App">
       <BrowserRouter>      
        <Routes>
          <Route exact='/' path='/' element={<Mains/>} />
          <Route path='/about' element={<Abt/>}></Route> 
          <Route path='/course' element={<Crs/>}></Route> 
          <Route path='/contact' element={<Cnt/>}></Route> 
          <Route path='/game' element={<Game/>}></Route> 
        </Routes>
    
      </BrowserRouter>
    </div>

  );
}

export default App;

import React from 'react'
import Nav from '../componants/navbar/Nav';
import Footer from '../componants/footer/Footer';
import Header from '../componants/header/Header';
import Category from '../componants/category/Category'
import Qa from '../componants/qa/QA';
import Testimonial from '../componants/testimonial/Testimonial';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Course from '../componants/courses/Course';
import Games from '../componants/Coursepage/Games/Games';
function Mains () {
  return (

    <div> 
     <Nav></Nav>
     <Header></Header>
     <Category></Category>
     <Course></Course>
     <Qa></Qa>
     <Testimonial></Testimonial>
     <Footer></Footer> 
    </div>

  )
}

export default Mains
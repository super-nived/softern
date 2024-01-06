import React from 'react'
import Nav from '../componants/navbar/Nav';
import Footer from '../componants/footer/Footer';
import Course from '../componants/courses/Course';
import Coursemain from '../componants/Coursepage/Coursemain';

function Crs() {
  return (
    <div>
        <Nav></Nav>
        <Coursemain></Coursemain>
        <Footer></Footer>
    </div>
  )
}

export default Crs
import React from 'react'
import './Coursemain.css'
import P1 from '../../asset/python.png'
import P2 from '../../asset/ai.jpg'
import P3 from '../../asset/mern.png'
import P4 from '../../asset/java.png'
import P5 from '../../asset/php.png'
import P6 from '../../asset/net.png'


function Coursemain() {

 return (
    <section className='coursemain'>
    <h2>Courses</h2>
    <div className="container courses-container">


    <article className="course">
            <div className="course-image">
              <img src={P1} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>python fullstack web-develeplment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
   
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>



        <article className="course">
            <div className="course-image">
              <img src={P2} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>Artificial Intelligence and Machinelearning</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
            
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>


        <article className="course">
            <div className="course-image">
              <img src={P3} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>mern stack development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
            
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>

        <article className="course">
            <div className="course-image">
              <img src={P5} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>php fullstack develeplment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
     
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>

        <article className="course">
            <div className="course-image">
              <img src={P4} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>java fullstack development</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
        
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>

   
        <article className="course">
            <div className="course-image">
              <img src={P6} alt="image" />
            </div>
            <div className="course-ifo">
            <h4>.net fullstack web-develeplment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Porro perferendis velit ipsam a sequi animi odit repudiandae fugit itaque
         
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn btn-primary'>Learn More</a>
            </div>
        </article>

        


    </div>

</section>
  )
}


export default Coursemain
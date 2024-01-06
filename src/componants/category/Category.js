import React from 'react'
import {FaPython} from 'react-icons/fa'
import {DiJava} from 'react-icons/di'
import {SiFlutter} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiDotnet} from 'react-icons/si'
import {TbBrandPhp} from 'react-icons/tb'
import './Category.css'


function Coursemain() {
  return (
     <section className='categories'>
        <div className="container category-container">
           <div className="category-left">
            <h1>category</h1>
            <p>These are our main domain you can check it out each one 
            </p>
            <a href='https://wa.me/8129701739/?text=Your%20Message%20Here' className='btn'> Learn More</a>
            </div> 
            <div className="category-right">


             <article className="category">
                <span className='category-icon'><FaPython></FaPython></span>
                <h5>python</h5>
                <p>Lorem ipsum dolor sistiae asperiores.</p>
             </article>


             <article className="category">
                <span className='category-icon'><DiJava/></span>
                <h5>java</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt delenit.</p>
             </article>

             <article className="category">
                <span className='category-icon'><SiFlutter/></span>
                <h5>flutter</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt dele</p>
             </article>



             <article className="category">
                <span className='category-icon'><SiJavascript/></span>
                <h5>javascript</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt</p>
             </article>


             <article className="category">
                <span className='category-icon'><SiDotnet/></span>
                <h5>.net</h5>
                <p>Lorem ipsum dolor sistiae asperiores incidunt </p>
             </article>


             <article className="category">
                <span className='category-icon'><TbBrandPhp/></span>
                <h5>php</h5>
                <p>Lorem ipsum dolorfsdf sistiae asperiores incidunt</p>
             </article>

            </div>
        </div>
     </section>
  )
}

export default Coursemain
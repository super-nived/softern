import React from 'react'
import './About.css'
import {GrAchievement} from 'react-icons/gr'
import {ImManWoman} from 'react-icons/im'
import { AiOutlineTrophy} from 'react-icons/ai'
import { RiBuildingFill} from 'react-icons/ri'
import PIC from '../../asset/python.png'
import Team from './Team'
function About() {
  return (
    <div>
    <section className='about-achievements'>
      <div className='container about-achievements-container'>
        <div className="about-left">
         <img src={PIC} alt="" />
        </div>
        <div className="about-right">
         <h1>Achievements</h1>
         <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime 
            ratione accusamus labore tempore. Dolorem facere, hic quos, quae sint
             quod totam perferendis
             quisquam, sequi odit dolor et quis error!
         </p>
         <div className="achievements-cards">
            <article className='achievement-card'>
              <span className='archievement-icon'><AiOutlineTrophy></AiOutlineTrophy></span>
              <h3>450+</h3>
              <p>achievement</p>
            </article>

            <article className='achievement-card'>
              <span className='archievement-icon'><ImManWoman/></span>
              <h3>5000+</h3>
              <p>students</p>
            </article>

            <article className='achievement-card'>
              <span className='archievement-icon'><AiOutlineTrophy/></span>
              <h3>34+</h3>
              <p>Awards</p>
            </article>
            <article className='achievement-card'>
              <span className='archievement-icon'><RiBuildingFill/></span>
              <h3>14+</h3>
              <p>Building</p>
            </article>
         </div>
        </div>
        </div>
    </section>
    <Team></Team>
    </div>
  )
}

export default About
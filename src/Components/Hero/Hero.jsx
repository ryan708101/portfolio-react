import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id="home" className='hero'>
    <img src={profile_img}alt=''/>
    <h1><span>Ryan Sinha,</span> 4th Year Engineering Student | SJCE Mysore | DSA, C++, Frontend & Backend Developer</h1>
    <p> I have strong knowledge in Data Structures and Algorithms (DSA) using C++, and I am skilled in both frontend and backend development.</p>
    <div className='hero-action'>
        <div className='hero-content'><AnchorLink className='anchor-link' offset="50" href='#contact'>Connect With Me </AnchorLink></div>
        <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero

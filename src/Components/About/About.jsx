import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'
const About = () => {
  return (
    <div>
      <div id="about"className='about'>
        <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt=''/>
      </div>
      <div className='about-sections'>
        <div className='about-left'>
            <img src={profile_img} alt=''/>
        </div>
        <div className='about-right'>
            <div className='about-para'>
                <p>I am Ryan Sinha, a passionate fourth-year Bachelor of Engineering (B.E.) student from SJCE Mysore, India. I have strong skills in Data Structures and Algorithms (DSA) using C++ and a deep understanding of problem-solving techniques. Over the years, I have built a solid foundation in software development.</p>
                <p>In addition to my DSA knowledge, I have experience working on both frontend and backend technologies. I enjoy building responsive web applications and dynamic platforms. With a strong drive for learning and growth, I am always excited to explore new technologies and sharpen my skills further.</p>
            </div>
        <div className='about-skills'>
            <div className='about-skill'><p>HTML& CSS</p><hr style={{width:"50%"}}/></div>
            <div className='about-skill'><p>Java script</p><hr style={{width:"70%"}}/></div>
            <div className='about-skill'><p>React</p><hr style={{width:"60%"}}/></div>
            <div className='about-skill'><p>Backend</p><hr style={{width:"50%"}}/></div>
        </div>
        </div>
      </div>
      <div className="about-achivments">
        <div className="about-achivment">
            <h1>2+</h1>
            <p>YEARS OF EXPERENCE</p>
        </div>
        <hr />
        <div className="about-achivment">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivment">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About

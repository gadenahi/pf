import React from 'react';
import '../../static/Contact.css'
import ScrollAnimation from 'react-animate-on-scroll'

function Contact() {
  const aboutImage = `${process.env.PUBLIC_URL}/imgs/about.png`
  const githubImage = `${process.env.PUBLIC_URL}/imgs/GitHub-Mark-64px.png`
  const LIImage = `${process.env.PUBLIC_URL}/imgs/LI-In-Bug.png`

  return (
    <div id="about">
      <h2 className='sub-title'>ABOUT</h2>
      <div id='profile'>
        <ScrollAnimation key="about" animateIn="fadeIn" animateOnce={true}>
          <div id="profile-explanation" className=''>
            <p>I am a Data Scientist and Software Engineer having a customer first mind with the background
            of the multiple customer facing roles of Product Management, Product Marketing,
                    New Business Development and System Engineer. </p>
            <p>Let's enjoying and challenging Data Scientist and Software Development with me</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation key="about-photo" animateIn="fadeIn" animateOnce={true}>
          <div id='profile-photo' className=''>
            <a href="/#"><img src={aboutImage} alt="about" /></a>
          </div>
        </ScrollAnimation>
      </div>
      <ScrollAnimation key="contact" animateIn="fadeIn" animateOnce={true}>
        <div className="">
          <h4>Please contact</h4>
          <a href="https://github.com/gadenahi" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/hideaki-nagaya/" target="_blank" rel="noopener noreferrer">
            <img src={LIImage} alt="Linkedin" width="64" height="64" />
          </a>
        </div>
      </ScrollAnimation>
    </div>
  )
}

export default Contact
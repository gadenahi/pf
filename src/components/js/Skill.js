import React from 'react';
import '../../static/Skill.css'
import data from '../data/data'
import ScrollAnimation from 'react-animate-on-scroll'


function Skill() {
  const skillsData = data['skills']
  
  const skills = skillsData.map((data) => (
    <ScrollAnimation key={data} animateIn="fadeIn" animateOnce={true}>
      <div className="skill">{data}</div>
    </ScrollAnimation>
  ));

  return (
    <div id="skills">
      <h2 className='sub-title'>SKILLS</h2>
      <div className="skills-section">
        {skills}
      </div>  
    </div>
  );
}

export default Skill;
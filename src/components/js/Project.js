import React, { useState, useEffect } from 'react';
import '../../static/Project.css'
import data from '../data/data'
import ScrollAnimation from 'react-animate-on-scroll'
import { MultiLineText, getActiveData } from './Utils'


function Project() {

  const [category, setCategory] = useState("all")
  const projectFiltersData = data['project_filters']
  const projectsData = data['projects']
  const activeProjects = getActiveData(projectsData, category);

  useEffect(() => { }, [category]);

  function handleClick(event) {
    const value = event.currentTarget.dataset.filter
    setCategory(value)
  }

  const projectFilters = projectFiltersData.map((data) => (
    <ScrollAnimation key={data} animateIn="fadeIn" animateOnce={true}>
      <button
        className="project-filter btns-filter"
        data-filter={data}
        onClick={(event) => handleClick(event)}
      >
        {data}
      </button>
    </ScrollAnimation>
  ));

  const projects = activeProjects.map((data) => (
    <ScrollAnimation key={data['id']} animateIn="fadeIn" animateOnce={true}>
    <div id={`project${data['id']}`} className="project" data-category={`[${data['category']}]`}>
      <a href={data['url']}>
        <img className="project-pic" src={data['image']} alt="project"/>
        <div className="mask">
          <div className="caption"><MultiLineText>{data['caption']}</MultiLineText></div>
        </div>
      </a>
    </div>
    </ScrollAnimation>
  ))

  return (
    <div id="projects">
      <h2 className='sub-title'>PROJECTS</h2>
      <div className="project-btns btns-section">
        {projectFilters}
      </div>
      <div className="project-section">
        {projects}
      </div>
    </div>
  );
}

export default Project;
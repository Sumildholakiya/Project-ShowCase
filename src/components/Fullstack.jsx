import React from 'react'
import projectData from '../data/projectList.json'
import Card from './Card/Card'


const Fullstack = () => {
    const filteredProjects = projectData.filter(project =>
    project.category ==='fullstack'  ? true : ''
  );

  return (
    <div className="max-w-[1200px] mx-auto gap-5 my-[50px] flex flex-wrap grow-0 items-center">
      {filteredProjects.map(project => (
        <Card project={project} />

      ))}
    </div>
  )
}

export default Fullstack

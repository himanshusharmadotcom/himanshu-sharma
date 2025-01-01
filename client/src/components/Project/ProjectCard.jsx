import React from 'react'
import Button from '../Button/Button'

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover object-top" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      </div>
    </div>
  )
}

export default ProjectCard
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectPopup from './ProjectPopup'
import projectData from './Data.json'
import './Project.css'
import myGleeoProject from '../../assets/images/myGleeoProject.png'
import Button from '../Button/Button'

const Project = ({ projectSectionRef }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  const handleMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(3);
  };

  const categories = ['All', ...new Set(projectData.map((project) => project.category))];

  const sortedProjects = [...projectData].sort(
    (a, b) => new Date(b.completionDate) - new Date(a.completionDate)
  );

  const filteredProjects =
    selectedCategory === 'All'
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === selectedCategory);

  const projectsWithImages = filteredProjects.map((project) => ({
    ...project,
    image: myGleeoProject,
  }));

  return (
    <div ref={projectSectionRef} className="container">
      <h2 className="text-4xl text-center mb-16 sm:mb-24 relative work-before roboto-slab-font">My Work</h2>
      <div className="flex justify-end mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-24 gap-8">
        {projectsWithImages.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => handleCardClick(project)} />
        ))}
      </div>
      {visibleProjects < projectsWithImages.length && (
        <div className="flex justify-center mb-16 sm:mb-24">
          <Button onClick={handleMoreProjects}>More Projects</Button>
        </div>
      )}
      {selectedProject && <ProjectPopup project={selectedProject} onClose={handleClosePopup} />}
    </div>
  );
};

export default Project;

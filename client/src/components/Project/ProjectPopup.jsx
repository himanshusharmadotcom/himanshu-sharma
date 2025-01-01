import React, { useEffect } from 'react'
import Button from '../Button/Button'
import './Project.css'

const ProjectPopup = ({ project, onClose }) => {
    if (!project) return null

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.classList.contains('popup-overlay')) {
                onClose()
            }
        }

        document.body.style.overflow = 'hidden'
        document.addEventListener('click', handleClickOutside)

        return () => {
            document.body.style.overflow = 'auto'
            document.removeEventListener('click', handleClickOutside)
        }
    }, [onClose])

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 popup-overlay">
            <div className="bg-white p-4 sm:p-8 rounded-lg h-[95%] w-[95%] overflow-auto popup-content" style={{ scrollbarWidth: "none" }}>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center mb-4 pb-4 border-b-[1px] border-solid border-secondary">
                    <h2 className="text-xl sm:text-3xl font-semibold">{project.name}</h2>
                    <Button onClick={onClose}>Close</Button>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 ">
                    <div className="w-full sm:w-1/4 p-4 bg-gradient-to-b from-white to-primary sm:border-r-[1px] border-solid border-secondary sm:sticky sm:top-0 sm:h-fit sm:min-h-screen">
                        <p className="text-primary mb-4"><strong>Role:</strong> {project.role}</p>
                        <p className="text-primary mb-4"><strong>Overview:</strong> {project.overview}</p>
                        <p className="text-primary mb-4"><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
                        <p className="text-primary mb-4"><strong>Completion Date:</strong> {project.completionDate}</p>
                    </div>
                    <div className="w-full sm:w-3/4 sm:ps-4 pt-4 text-center">
                        <img src={project.image} alt={project.name} className="w-full" />
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline mt-4 block">
                            View Live Project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPopup

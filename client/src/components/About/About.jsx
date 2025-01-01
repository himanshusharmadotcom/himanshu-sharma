import React, { useEffect } from 'react'
import Button from '../Button/Button'
import aboutBg from '../../assets/images/desk-image.png'

const About = ({ onClose }) => {

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
          <h2 className="text-xl sm:text-3xl font-semibold">About Me</h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <div className="w-full sm:w-1/4 p-4 bg-gradient-to-b from-white to-primary sm:border-r-[1px] border-solid border-secondary sm:sticky sm:top-0 sm:h-fit sm:min-h-screen">
            <p className="text-primary mb-4"><strong>Name:</strong> Himanshu Sharma</p>
            <p className="text-primary mb-4"><strong>Profession:</strong> Web Developer</p>
            <p className="text-primary mb-4"><strong>Experience:</strong> 5 years</p>
            <p className="text-primary mb-4"><strong>Skills:</strong> React JS, Node JS, Mongo DB, MySQL, Express, HTML, Tailwind CSS, Material UI, Javascript, Redux Toolkit, Wordpress, Elementor, Version Control, PHP, CSS, SCSS, Strapi, Vercel, Render</p>
          </div>
          <div className="w-full sm:w-3/4 relative">
            <img src={aboutBg} alt="missing image" className='grayscale opacity-10 sm:opacity-30 h-screen w-screen object-cover'/>
            <p className="text-primary mt-4 ps-4 absolute top-0 left-0">I am a passionate web developer with 5 years of experience in building dynamic and responsive websites. I specialize in front-end development using React and have a strong background in back-end development with Node.js.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
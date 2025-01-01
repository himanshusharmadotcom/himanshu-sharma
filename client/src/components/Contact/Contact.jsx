import React, { useEffect } from 'react'
import Button from '../Button/Button'
import conactImg from '../../assets/images/contact.png'
import './Contact.css'

const Contact = ({ onClose }) => {
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
          <h2 className="text-xl sm:text-3xl font-semibold">Contact Me</h2>
          <Button onClick={onClose}>Close</Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between">
          <div className='basis-1/2 flex justify-center items-center'>
            <img src={conactImg} alt="contact" className='contact-image text-center'/>
          </div>
          <div className="sm:ps-4 basis-1/2 flex justify-center items-center">
            <form className="space-y-4 w-full h-full">
              <div>
                <label className="block text-primary">Name*</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-md outline-none" />
              </div>
              <div>
                <label className="block text-primary">Email*</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md outline-none" />
              </div>
              <div>
                <label className="block text-primary">Phone*</label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-md outline-none" />
              </div>
              <div>
                <label className="block text-primary">Message*</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-md outline-none" rows="4"></textarea>
              </div>
              <div>
                <Button type="submit" className="block w-full sm:w-[50px]">Send</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
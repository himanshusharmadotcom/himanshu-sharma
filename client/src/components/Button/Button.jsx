import React from 'react'
import { NavLink } from 'react-router-dom'
import './Button.css'

const Button = ({ children, to, onClick, className }) => {
  return (
    <NavLink to={to} onClick={onClick} className={`custom-button border-[2px] border-solid border-white rounded-[7px] min-w-36 sm:min-w-48 py-2.5 sm:px-0 px-4 text-center ${className}`}>
      {children}
    </NavLink>
  )
}

export default Button
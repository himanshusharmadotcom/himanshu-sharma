import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { MdContactMail, MdMenu, MdClose } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { MdOutlineDocumentScanner } from "react-icons/md";
import './Menu.css';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Menu = ({ projectSectionRef }) => {
    const [showAboutPopup, setShowAboutPopup] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Update isMobile on window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAboutClick = () => {
        setShowAboutPopup(true);
        setIsMenuOpen(false);
    };

    const handleContactClick = () => {
        setShowContactPopup(true);
        setIsMenuOpen(false);
    };

    const handleProjectClick = () => {
        if (projectSectionRef.current) {
            window.scrollTo({
                top: projectSectionRef.current.offsetTop - 25,
                behavior: 'smooth',
            });
        }
        setIsMenuOpen(false);
    };

    const handleClosePopup = () => {
        setShowAboutPopup(false);
        setShowContactPopup(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            {isMobile && (
                <div className="fixed top-4 left-4 z-50">
                    <button
                        onClick={toggleMenu}
                        className="text-3xl p-2 bg-primary text-white rounded-md"
                    >
                        {isMenuOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>
            )}

            {(isMenuOpen || !isMobile) && (
                <div className="fixed top-1/2 left-[20px] -translate-y-1/2 z-50">
                    <ul className="flex flex-col bg-white border-[4px] border-solid border-primary p-2 rounded-[5px]">
                        <li className="relative group">
                            <NavLink
                                to="#"
                                onClick={handleAboutClick}
                                className="h-12 w-12 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-primary hover:rounded-[5px]"
                            >
                                <FaUser />
                            </NavLink>
                            <div className="tooltip group-hover:scale-100">
                                About
                                <div className="tooltip-caret"></div>
                            </div>
                        </li>
                        <li className="relative group">
                            <NavLink
                                to="#"
                                onClick={handleContactClick}
                                className="h-12 w-12 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-primary hover:rounded-[5px]"
                            >
                                <MdContactMail />
                            </NavLink>
                            <div className="tooltip group-hover:scale-100">
                                Contact
                                <div className="tooltip-caret"></div>
                            </div>
                        </li>
                        <li className="relative group">
                            <NavLink
                                to="#"
                                onClick={handleProjectClick}
                                className="h-12 w-12 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-primary hover:rounded-[5px]"
                            >
                                <GrProjects />
                            </NavLink>
                            <div className="tooltip group-hover:scale-100">
                                Projects
                                <div className="tooltip-caret"></div>
                            </div>
                        </li>
                        <li className="relative group">
                            <a
                                href="https://salmon-shel-68.tiiny.site/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                                className="h-12 w-12 flex justify-center items-center transition-all duration-500 ease-in-out hover:bg-primary hover:rounded-[5px]"
                            >
                                <MdOutlineDocumentScanner />
                            </a>
                            <div className="tooltip group-hover:scale-100">
                                CV
                                <div className="tooltip-caret"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            )}

            {showAboutPopup && <About onClose={handleClosePopup} />}
            {showContactPopup && <Contact onClose={handleClosePopup} />}
        </>
    );
};

export default Menu;

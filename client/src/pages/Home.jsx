import React, { useRef, useState } from 'react';
import Banner from '../components/Banner/Banner';
import Project from '../components/Project/Project';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import Mobile from '../components/Mobile/Mobile';
import Testimonials from '../components/Testimonials/Testimonials';
import Contact from '../components/Contact/Contact';

const Home = () => {
    const projectSectionRef = useRef(null);
    const [showContactPopup, setShowContactPopup] = useState(false);

    const handleHireMeClick = () => {
        setShowContactPopup(true);
    };

    const handleSeeWorkClick = () => {
        if (projectSectionRef.current) {
            window.scrollTo({
                top: projectSectionRef.current.offsetTop - 25,
                behavior: 'smooth',
            });
        }
    };

    const handleClosePopup = () => {
        setShowContactPopup(false);
    };

    return (
        <>
            <Menu projectSectionRef={projectSectionRef} />
            <Banner onHireMeClick={handleHireMeClick} onSeeWorkClick={handleSeeWorkClick} />
            <Project projectSectionRef={projectSectionRef} />
            <Testimonials />
            <Mobile />
            <Footer />
            {showContactPopup && <Contact onClose={handleClosePopup} />}
        </>
    );
};

export default Home;

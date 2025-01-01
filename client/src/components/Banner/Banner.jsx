import React from 'react';
import Button from '../Button/Button';

const Banner = ({ onHireMeClick, onSeeWorkClick }) => {
    return (
        <div className="bg-gradient-to-b from-white to-primary h-screen flex justify-center items-center flex-col mb-24">
            <h1 className='uppercase text-3xl sm:text-6xl text-primary text-center tracking-widest mb-4 roboto-slab-font'>Himanshu Sharma</h1>
            <h4 className='capitalize text-xl sm:text-3xl text-primary mb-5 roboto-slab-font'>Web Developer</h4>
            <div className="flex gap-4">
                <Button onClick={onHireMeClick}>Hire Me</Button>
                <Button onClick={onSeeWorkClick}>See My Work</Button>
            </div>
        </div>
    );
};

export default Banner;

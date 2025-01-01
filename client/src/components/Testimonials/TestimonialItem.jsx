import React from 'react';

const TestimonialItem = ({ text, clientName }) => {
    return (
        <div className='min-h-[300px] bg-gradient-to-b from-white to-primary p-12 py-20 rounded-[10px]'>
            <div className='text-center'>
                <p>{text}</p>
                <strong><em>{clientName}</em></strong>
            </div>
        </div>
    );
};

export default TestimonialItem;

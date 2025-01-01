import React, { useState, useEffect } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './Testimonials.css'
import TestimonialItem from './TestimonialItem'
import testimonialsData from './Testimonials.json'

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        // Simulate fetching data from a JSON file
        setTestimonials(testimonialsData)
    }, [])

    const responsive = {
        allDevices: {
            breakpoint: { max: 4000, min: 0 },
            items: 1
        }
    }

    return (
        <div className="container mb-16 sm:mb-24">
            <h2 className="text-4xl text-center mb-16 sm:mb-24 relative testimonial-before roboto-slab-font">What's our client say?</h2>
            <div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    draggable={true}
                    showDots={true}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialItem
                            key={index}
                            text={testimonial.text}
                            clientName={testimonial.clientName}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials
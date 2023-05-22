import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonials() {
    // This would be fetched from an API in a real app
    const testimonials = [
        {
            id: 1,
            name: 'Ada Lovelace',
            comment: 'Pi Genius transformed me from a tech newbie to a confident digital maker. The resources are amazing!'
        },
        {
            id: 2,
            name: 'Alan Turing',
            comment: 'Every day brings a new challenge with Pi Genius. It\'s the perfect platform to explore the capabilities of my Raspberry Pi.'
        },
        {
            id: 3,
            name: 'Grace Hopper',
            comment: 'From home automation to robotics, Pi Genius provides incredible projects for all levels. I can\'t recommend it enough!'
        },
    ];

    return (
        <section id="testimonials" className="testimonials-section">
            <h2>What Our Users Say</h2>
            <div className="testimonials-list">
                {testimonials.map(testimonial => (
                    <TestimonialCard key={testimonial.id} name={testimonial.name} comment={testimonial.comment} />
                ))}
            </div>
        </section>
    );
}

export default Testimonials;

import React from 'react';

function TestimonialCard({ name, comment }) {
    return (
        <div className="testimonial-card">
            <blockquote>
                <p>{comment}</p>
                <footer>— {name}</footer>
            </blockquote>
        </div>
    );
}

export default TestimonialCard;

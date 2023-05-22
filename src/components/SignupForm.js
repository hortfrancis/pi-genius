import React, { useState } from 'react';

function SignupForm() {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // For now we'll just log the email
        console.log(email);
        setEmail('');
    };

    return (
        <form id="signup" className="signup-form" onSubmit={handleSubmit}>
            <h2>Stay Updated!</h2>
            <p>Sign up for our newsletter to get the latest on new projects and learning resources.</p>
            <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange}
                required
            />
            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignupForm;

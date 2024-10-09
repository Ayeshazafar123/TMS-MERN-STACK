

import React, { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import "../css_files/UserLogin.css";
import loginImage from '../assets/Devices-pana.png';

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/home-recent'; // Default route

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setError(''); // Clear previous errors

    //     try {
    //         const response = await fetch('http://localhost:5000/user/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ email, password }), // Send email and password
    //         });

    //         if (!response.ok) {
    //             throw new Error('Invalid credentials'); // Handle error if response is not okay
    //         }

    //         const data = await response.json();

    //         // Save token to localStorage (if applicable)
    //         localStorage.setItem('userId', data.userId);
    //         localStorage.setItem('token', data.token);

    //         // If login is successful, navigate to the previous page or default
    //         navigate(from, { replace: true });
    //     } catch (err) {
    //         setError(err.message); // Set the error message
    //     }
    // };



    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors
    
        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Send email and password
            });
    
            if (!response.ok) {
                throw new Error('Invalid credentials'); // Handle error if response is not okay
            }
    
            const data = await response.json();
            console.log('Login response data:', data); // Check if user_id is in the expected format
    
            // Save token to localStorage (if applicable)
            localStorage.setItem('userId', data.userId); // Ensure the userId matches backend format
            localStorage.setItem('token', data.token);
    
            // If login is successful, navigate to the previous page or default
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message); // Set the error message
        }
    };
    
    return (
        <div className="login-container">
            <div className="login-left">
                <img src={loginImage} alt="Devices" className="login-image" />
            </div>
            <div className="login-right">
                <h2>User Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        className="login-input" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                        className="login-input" 
                    />
                    <button type="submit" className="login-button">Login</button>
                    {error && <p className="error-message">{error}</p>} {/* Display error message */}
                </form>
                <p className="signup-text">
                    Don't have an account? <Link to="/user/register" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default UserLogin;


// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './AdminLogin.css';
// import adminImage from '../assets/register1.png';

// const AdminLogin = () => {
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // Perform login logic here...

//         // On successful login:
//         navigate('/admin/dashboard');
//     };

//     return (
//         <div className="login-container">
//             <div className="login-left">
//                 <img src={adminImage} alt="Admin Register" className="login-image" />
//             </div>
//             <div className="login-right">
//                 <h2>Admin Login</h2>
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <input type="text" placeholder="Name" required className="login-input" />
//                     <input type="password" placeholder="Password" required className="login-input" />
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//                 <p className="signup-text">
//                     Don't have an account? <Link to="/admin/register" className="signup-link">Sign up</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "../css_files/AdminLogin.css"
// import './AdminLogin.css';
import adminImage from '../assets/register1.png';

const AdminLogin = () => {
    const [username, setUsername] = useState(''); // Changed from 'name' to 'username'
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(''); // Clear previous errors

        try {
            const response = await fetch('http://localhost:5000/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }), // Updated key to 'username'
            });

            if (!response.ok) {
                throw new Error('Invalid credentials'); // Handle error if response is not okay
            }

            const data = await response.json();

            // Save token to localStorage (if applicable)
            localStorage.setItem('token', data.token);

            // If login is successful, navigate to the dashboard
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.message); // Set the error message
        }
    };

    return (
        <div className="login-container">
            <div className="login-left">
                <img src={adminImage} alt="Admin Register" className="login-image" />
            </div>
            <div className="login-right">
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <input 
                        type="text" 
                        placeholder="Username" // Updated placeholder to 'Username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
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
                    Don't have an account? <Link to="/admin/register" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

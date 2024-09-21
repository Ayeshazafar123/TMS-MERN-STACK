

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../css_files/UserRegister.css"
import RegisterImage from '../assets/register.png'; // Adjusted path to your image

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
        setError('');
        
        // Redirect to login after a few seconds
        setTimeout(() => {
          navigate('/user/login');
        }, 2000); // 2 seconds delay

      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Registration failed');
        setMessage('');
      }
    } catch (err) {
      setError('Something went wrong');
      setMessage('');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={RegisterImage} alt="Registration Illustration" className="register-image" />
      </div>
      <div className="register-right">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <p className="login-link">
          Have an account? <a href="/user/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;

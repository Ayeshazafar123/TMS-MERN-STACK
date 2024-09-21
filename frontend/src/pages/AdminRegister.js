
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css_files/AdminRegister.css"
import adminRegisterImage from '../assets/Data extraction-amico.png';

const AdminRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    try {
      await axios.post('http://localhost:5000/admin/register', {
        username,
        password,
      });
      setSuccessMessage('Admin registered successfully!');
      // Navigate to admin login or dashboard
      setTimeout(() => {
        navigate('/admin/login');
      }, 2000);
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <img src={adminRegisterImage} alt="Admin Register" className="register-image" />
      </div>
      <div className="register-right">
        <h2>Admin Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="register-input"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="register-input"
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p className="login-link">
          Already have an account? <a href="/admin/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;

// src/components/RegisterPage.js
import axios from 'axios';
import { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/auth/register`, {
        username,
        password,
      });
      console.log('Registration Successful:', response.data);
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      setError('Registration failed: ' + error.response?.data.message || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterPage;

// // src/components/LoginPage.js
// import axios from 'axios';
// import { useState } from 'react';

// const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [token, setToken] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post(`${apiUrl}/auth/login`, {
//         username,
//         password,
//       });
//       console.log('Login Successful:', response.data);
//       setToken(response.data.token);
//       // Handle successful login (e.g., redirect to a dashboard or store the token)
//     } catch (error) {
//       setError('Login failed: ' + error.response?.data.message || error.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//       {error && <p>{error}</p>}
//       {token && <p>Token: {token}</p>} {/* Optional: Display the token */}
//     </form>
//   );
// };

// export default LoginPage;
import axios from 'axios';
import { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      const response = await axios.post(`${apiUrl}/auth/login`, { username, password });
      console.log('Login Successful:', response.data);
      setSuccess('Login successful!');
      setError('');
      // Store token or handle successful login (e.g., redirect)
    } catch (error) {
      console.error('Login error:', error.response?.data);
      setError('Login failed: ' + (error.response?.data.error || error.message));
      setSuccess('');
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
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default LoginPage;

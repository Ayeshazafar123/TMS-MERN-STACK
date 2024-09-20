// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AdminLogin from './pages/AdminLogin';
// import UserLogin from './pages/UserLogin';
// import AdminRegister from './pages/AdminRegister';
// import UserRegister from './pages/UserRegister';
// import AdminDashboard from './pages/AdminDashboard';
// import UserDashboard from './pages/UserDashboard';

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/admin/login" element={<AdminLogin />} />
//                 <Route path="/user/login" element={<UserLogin />} />
//                 <Route path="/admin/register" element={<AdminRegister />} />
//                 <Route path="/user/register" element={<UserRegister />} />
//                 <Route path="/admin/dashboard" element={<AdminDashboard />} />
//                 <Route path="/user/dashboard" element={<UserDashboard />} />
//             </Routes>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Check this path
import AdminLogin from './pages/AdminLogin'; // Check this path
import UserLogin from './pages/UserLogin'; // Check this path
import AdminRegister from './pages/AdminRegister'; // Check this path
import UserRegister from './pages/UserRegister'; // Check this path
import AdminDashboard from './pages/AdminDashboard'; // Check this path
import UserDashboard from './pages/UserDashboard'; // Check this path
import FAQ from './pages/FAQ'; // Check this path
import ContactUs from './pages/ContactUs'; // Check this path

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/user/login" element={<UserLogin />} />
                <Route path="/admin/register" element={<AdminRegister />} />
                <Route path="/user/register" element={<UserRegister />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/user/dashboard" element={<UserDashboard />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;

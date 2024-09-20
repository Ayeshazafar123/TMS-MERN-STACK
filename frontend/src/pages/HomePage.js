

// // export default HomePage;
// import React from 'react';
// import './HomePage.css'; // Assuming you'll have a CSS file for styling
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo">Your Logo</div>
//         <nav className="nav-bar">
//           <Link to="/">Home</Link>
//           <Link to="/faq">FAQ</Link>
//           <Link to="/contact">Contact Us</Link>
//           <Link to="/admin/login">Admin Login</Link>
//           <Link to="/user/login">User Login</Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <h1>Manage Your Tickets Effortlessly</h1>
//         <p>Welcome to the Ticket Management System. Log in to create and track your tickets.</p>
//         <div className="cta-buttons">
//           <Link to="/user/login" className="btn">Login as User</Link>
//           <Link to="/admin/login" className="btn">Login as Admin</Link>
//         </div>
//       </section>

//       {/* Features Overview Section */}
//       <section className="features-section">
//         <div className="feature-card">
//           <div className="feature-image"></div> {/* Placeholder for Image */}
//           <h3>Ticket Creation</h3>
//           <p>Easily create new tickets for any issues or requests.</p>
//         </div>
//         <div className="feature-card">
//           <div className="feature-image"></div> {/* Placeholder for Image */}
//           <h3>Ticket Tracking</h3>
//           <p>Monitor the status of your submitted tickets in real-time.</p>
//         </div>
//         <div className="feature-card">
//           <div className="feature-image"></div> {/* Placeholder for Image */}
//           <h3>Admin Dashboard</h3>
//           <p>Admins can view, manage, and respond to all user tickets efficiently.</p>
//         </div>
//         <div className="feature-card">
//           <div className="feature-image"></div> {/* Placeholder for Image */}
//           <h3>Online Booking</h3>
//           <p>Receive timely updates and alerts about your ticket status and responses.</p>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="how-it-works-section">
//         <h2>How It Works</h2>
//         <div className="step">
//           <div className="step-image"></div> {/* Placeholder for Image */}
//           <p>Create a Ticket</p>
//         </div>
//         <div className="step">
//           <div className="step-image"></div> {/* Placeholder for Image */}
//           <p>Get Updates</p>
//         </div>
//         <div className="step">
//           <div className="step-image"></div> {/* Placeholder for Image */}
//           <p>Admin Review</p>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials-section">
//         <h2>What Our Users Say</h2>
//         <p>"This system has made managing tickets so much easier!" - User A</p>
//         <p>"The admin dashboard is very intuitive and easy to use." - Admin B</p>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <p>Contact Us: support@yourcompany.com | Phone: 123-456-7890</p>
//         <div className="social-links">
//           <a href="https://facebook.com">Facebook</a>
//           <a href="https://twitter.com">Twitter</a>
//           <a href="https://linkedin.com">LinkedIn</a>
//         </div>
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;


import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

// Image imports
import ticketHero from '../assets/ticket_hero.jpg';
import ticketCreation from '../assets/ticket_creation.avif';
import ticketTracking from '../assets/ticket_tracking.png';
import adminDashboard from '../assets/admindashboard.png';
import onlineBooking from '../assets/online_ticket.jpg';
import createTicket from '../assets/ticket_creation1.jpg';
import getUpdates from '../assets/get_updates.jpg';
import adminReview from '../assets/admin_review.jpg';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import linkedInIcon from '../assets/linkedln.png';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">TICKET MANAGEMENT SYSTEM</div>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/admin/login">Admin Login</Link>
          <Link to="/user/login">User Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="cta-left">
          <h1>Manage Your Tickets Effortlessly</h1>
          <p>Welcome to the Ticket Management System. Log in to create and track your tickets.</p>
          <div className="cta-buttons">
            <Link to="/user/login" className="btn">Login as User</Link>
            <Link to="/admin/login" className="btn">Login as Admin</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={ticketHero} alt="Ticket Hero" />
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="features-section">
        <div className="feature-card">
          <img src={ticketCreation} alt="Ticket Creation" className="feature-image" />
          <h3>Ticket Creation</h3>
          <p>Easily create new tickets for any issues or requests.</p>
        </div>
        <div className="feature-card">
          <img src={ticketTracking} alt="Ticket Tracking" className="feature-image" />
          <h3>Ticket Tracking</h3>
          <p>Monitor the status of your submitted tickets in real-time.</p>
        </div>
        <div className="feature-card">
          <img src={adminDashboard} alt="Admin Dashboard" className="feature-image" />
          <h3>Admin Dashboard</h3>
          <p>Admins can view, manage, and respond to all user tickets efficiently.</p>
        </div>
        <div className="feature-card">
          <img src={onlineBooking} alt="Online Booking" className="feature-image" />
          <h3>Online Booking</h3>
          <p>Book your tickets online from the comfort of your home.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="step">
          <img src={createTicket} alt="Create a Ticket" className="step-image" />
          <p>Create a Ticket</p>
        </div>
        <div className="step">
          <img src={getUpdates} alt="Get Updates" className="step-image" />
          <p>Get Updates</p>
        </div>
        <div className="step">
          <img src={adminReview} alt="Admin Review" className="step-image" />
          <p>Admin Review</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <p>"This system has made managing tickets so much easier!" - User A</p>
        <p>"The admin dashboard is very intuitive and easy to use." - Admin B</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Contact Us: support@yourcompany.com | Phone: 123-456-7890</p>
        <div className="social-links">
          <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
          <a href="https://twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
          <a href="https://linkedin.com"><img src={linkedInIcon} alt="LinkedIn" /></a>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
